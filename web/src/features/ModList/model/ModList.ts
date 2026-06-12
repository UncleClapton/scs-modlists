import { siiG, SiinDocument, siiT, type SII } from "~/lib";

// profile.sii identifiers.
const PROFILE_UNIT_CLASS = "user_profile";
const PROFILE_VERSION_ATTR = "version";
const PROFILE_NAME_ATTR = "profile_name";
const PROFILE_BRAND_ATTR = "brand";

// modlist.sii identifiers.
const MODLIST_UNIT_CLASS = "mltu_modlist";
const MODLIST_UNIT_NAME = "_mltu.modlist";
const MODLIST_TITLE_ATTR = "title";
const MODLIST_DESC_ATTR = "description";
const MODLIST_GAME_ATTR = "game";
const MODLIST_VERSION_ATTR = "modlist_version";
const MODLIST_PROFILE_VERSION_ATTR = "profile_version";
const MODLIST_GAME_VERSION_ATTR = "game_version";

// shared identifiers.
const ACTIVE_MODS_ATTR = "active_mods";

export type ModListGame = "ets2" | "ats";
export type ModDescriptor = {
  id: string;
  title: string;
};

// TODO: Validate that this list works with all ATS trucks.
const ATS_TRUCK_BRANDS = [
  "peterbilt",
  "kenworth",
  "freightliner",
  "international",
  // not sure if this is with or without an underscore, so include both just in case.
  "westernstar",
  "western_star",
  // Luckily the "Brand" attribute is actually a truck model, not just the make.
  // Volvo is in both games, so we need to specifically look for an ATS model to identify it.
  "volvo_vnl",
  // is this an option for the brand attribute? vnr is new. haven't checked.
  "volvo_vnr",
];

const MODLIST_FILE_VERSION = 1;

export interface ModList {
  title: string;
  description: string;
  game: ModListGame;
  activeMods: ModDescriptor[];
  modlistVersion: number;
  gameVersion: string;
  profileVersion: number;

  source: "profile" | "modlist";
}

function createEmptyModList(source: ModList["source"]): ModList {
  return {
    // metadata for display purposes.
    title: "",
    description: "",
    gameVersion: "",
    game: "ets2",

    // mods.
    activeMods: [],

    // check values.
    profileVersion: 0,
    modlistVersion: MODLIST_FILE_VERSION,

    source,
  };
}

export const ModListUtil = {
  applyModlistToProfile: (
    profile: SiinDocument,
    modList: ModList,
  ): SiinDocument => {
    const profileUnitNames = profile.findUnitNamesByClass(PROFILE_UNIT_CLASS);
    const mainProfileName = profileUnitNames[0];
    if (!mainProfileName) {
      throw new Error(
        `Unable to find "${PROFILE_UNIT_CLASS}" in file. ModList cannot be applied.`,
      );
    }
    if (profileUnitNames.length !== 1) {
      throw new Error(
        `This file contains more than one "${PROFILE_UNIT_CLASS}". Expected exactly one profile unit.`,
      );
    }
    const profileUnit = profile.getUnit(mainProfileName);
    if (!profileUnit) {
      throw new Error(
        `User profile could not be read, even after it was found. ModList cannot be applied.`,
      );
    }

    // Check profile version. Error if there's a mismatch as there may be incompatibilities that could cause data loss.
    const profileVersion = profileUnit.getLiteralAttribute(
      PROFILE_VERSION_ATTR,
      siiG.isNumberLiteral,
    )?.value;
    if (typeof profileVersion !== "number") {
      throw new Error(
        `This profile is missing a "${PROFILE_VERSION_ATTR}" value. Unable to ensure compatibility with this ModList.`,
      );
    }
    if (profileVersion !== modList.profileVersion) {
      throw new Error(
        `This ModList was created for profile version "${modList.profileVersion}", but this profile is version "${profileVersion}". This may indicate incompatibilities that could lead to data loss. ModList cannot be applied.`,
      );
    }

    // set active mods attribute, replacing any existing one.
    profileUnit.setAttribute(modArray.toAST(modList.activeMods));

    profile.setUnit(profileUnit);

    return profile;
  },

  toModListDocument: (modList: ModList): SiinDocument => {
    const modlistUnit = siiT.unit(MODLIST_UNIT_NAME, MODLIST_UNIT_CLASS, [
      siiT.literalAttribute(
        MODLIST_VERSION_ATTR,
        siiT.numberLiteral(modList.modlistVersion),
      ),
      siiT.literalAttribute(
        MODLIST_TITLE_ATTR,
        siiT.stringLiteral(modList.title),
      ),
      siiT.literalAttribute(
        MODLIST_DESC_ATTR,
        siiT.stringLiteral(modList.description),
      ),
      siiT.literalAttribute(
        MODLIST_GAME_ATTR,
        siiT.stringLiteral(modList.game),
      ),
      siiT.literalAttribute(
        MODLIST_GAME_VERSION_ATTR,
        siiT.stringLiteral(modList.gameVersion),
      ),
      siiT.literalAttribute(
        MODLIST_PROFILE_VERSION_ATTR,
        siiT.numberLiteral(modList.profileVersion),
      ),
      modArray.toAST(modList.activeMods),
      // don't serialize 'source'. it's internal.
    ]);

    return SiinDocument.from(siiT.file([modlistUnit]));
  },

  fromProfileDocument: (document: SiinDocument): ModList => {
    const profileUnitNames = document.findUnitNamesByClass(PROFILE_UNIT_CLASS);
    if (!profileUnitNames.length) {
      throw new Error(
        `This profile file does not contain any "${PROFILE_UNIT_CLASS}" sections.`,
      );
    }

    // iterate over unit names until we find one with `active_mods` attribute.

    for (const unitName of profileUnitNames) {
      const unit = document.getUnit(unitName);
      if (!unit) {
        continue;
      }

      const activeModStrings = unit.getFixedArrayAttribute(
        ACTIVE_MODS_ATTR,
        siiG.isStringLiteral,
      )?.value;
      if (!activeModStrings) {
        continue;
      }

      const profileVersion = unit.getLiteralAttribute(
        PROFILE_VERSION_ATTR,
        siiG.isNumberLiteral,
      )?.value;
      if (typeof profileVersion !== "number") {
        continue;
      }

      const modList = createEmptyModList("profile");
      modList.profileVersion = profileVersion;
      modList.activeMods = modArray.fromStrings(activeModStrings);

      const title = unit
        .getLiteralAttribute(PROFILE_NAME_ATTR, siiG.isStringLiteral)
        ?.value.trim();

      if (title) {
        modList.title = `${title}'s Mods`;
      }

      // Profile does not contain an explicit game identifier, but we can make an educated guess
      // based on the truck brand attribute, as there are no shared truck models between the two games.
      const truckBrand = unit
        .getLiteralAttribute(PROFILE_BRAND_ATTR, siiG.isStringLiteral)
        ?.value.trim();
      if (
        truckBrand &&
        ATS_TRUCK_BRANDS.some((it) => truckBrand.toLowerCase().startsWith(it))
      ) {
        modList.game = "ats";
      }

      return modList;
    }

    throw new Error(
      `Could not find a profile section that includes both "${ACTIVE_MODS_ATTR}" and a numeric "${PROFILE_VERSION_ATTR}" value.`,
    );
  },

  fromModListDocument: (document: SiinDocument): ModList => {
    const modlistUnit = document.getUnit(MODLIST_UNIT_NAME);

    // Safety checks to reduce likelihood of conflicts.

    if (!modlistUnit || modlistUnit.className !== MODLIST_UNIT_CLASS) {
      throw new Error(
        `Unable to find "${MODLIST_UNIT_NAME}" within file. Ensure you are selecting the correct file and that it is a valid ModList.`,
      );
    }

    const modlistVersion = modlistUnit.getLiteralAttribute(
      MODLIST_VERSION_ATTR,
      siiG.isNumberLiteral,
    )?.value;
    if (modlistVersion !== MODLIST_FILE_VERSION) {
      throw new Error(
        `This ModList uses version "${modlistVersion}", but only version "${MODLIST_FILE_VERSION}" is supported.`,
      );
    }

    // get and build active mods

    const activeModStrings = modlistUnit.getFixedArrayAttribute(
      ACTIVE_MODS_ATTR,
      siiG.isStringLiteral,
    )?.value;
    if (!activeModStrings) {
      throw new Error(
        `This ModList is missing a valid "${ACTIVE_MODS_ATTR}" list.`,
      );
    }

    const modList = createEmptyModList("modlist");
    modList.activeMods = modArray.fromStrings(activeModStrings);

    // get required metadata.

    const game = modlistUnit.getLiteralAttribute(
      MODLIST_GAME_ATTR,
      siiG.isStringLiteral,
    )?.value;
    if (game !== "ets2" && game !== "ats") {
      throw new Error(
        `The game "${game}" is not supported. Expected "ets2" or "ats".`,
      );
    }
    modList.game = game;

    const profileVersion = modlistUnit.getLiteralAttribute(
      MODLIST_PROFILE_VERSION_ATTR,
      siiG.isNumberLiteral,
    )?.value;
    if (typeof profileVersion !== "number") {
      throw new Error(
        `This ModList is missing a "${MODLIST_PROFILE_VERSION_ATTR}" value. Unable to ensure profile compatibility with this ModList.`,
      );
    }
    modList.profileVersion = profileVersion;

    // get optional metadata.

    const title = modlistUnit.getLiteralAttribute(
      MODLIST_TITLE_ATTR,
      siiG.isStringLiteral,
    )?.value;
    if (title) {
      modList.title = title;
    }

    const description = modlistUnit.getLiteralAttribute(
      MODLIST_DESC_ATTR,
      siiG.isStringLiteral,
    )?.value;
    if (description) {
      modList.description = description;
    }

    const gameVersion = modlistUnit.getLiteralAttribute(
      MODLIST_GAME_VERSION_ATTR,
      siiG.isStringLiteral,
    )?.value;
    if (gameVersion) {
      modList.gameVersion = gameVersion;
    }

    return modList;
  },

  fromModListOrProfileDocument: (document: SiinDocument): ModList => {
    const hasUserProfile =
      document.findUnitNamesByClass(PROFILE_UNIT_CLASS).length > 0;
    const hasModListUnit = !!document.getUnit(MODLIST_UNIT_NAME);

    if (hasUserProfile && hasModListUnit) {
      throw new Error(
        `This file contains both a user profile and a ModList unit. Unable to determine which to read. Please ensure you are selecting the correct file.`,
      );
    } else if (hasUserProfile) {
      return ModListUtil.fromProfileDocument(document);
    } else if (hasModListUnit) {
      return ModListUtil.fromModListDocument(document);
    } else {
      throw new Error(
        `This file does not appear to be a valid Profile or ModList. Ensure you are selecting the correct file and that it is properly formatted.`,
      );
    }
  },
};

const modArray = {
  fromStrings: (modStrings: string[]): ModDescriptor[] => {
    return (
      modStrings
        .map<ModDescriptor>((modStr) => {
          const [modId, ...modTitleParts] = modStr.split("|");
          const modTitle = modTitleParts.join("|");
          if (!modId) {
            throw new Error(
              `A mod entry "${modStr}" is not in the expected format "mod_id|mod_title".`,
            );
          }
          return { id: modId, title: modTitle };
        })
        // ModList order is in reverse in file. Reverse here to maintain intuitive order in UI.
        .reverse()
    );
  },
  toAST: (
    mods: ModDescriptor[],
  ): SII.FixedArrayAttribute<SII.StringLiteral> => {
    return siiT.fixedArrayAttribute(
      ACTIVE_MODS_ATTR,
      mods.length,
      mods
        // re-reverse to write in reverse order in file, as that's the order the game loads mods in.
        .reverse()
        .map((mod, index) =>
          siiT.fixedArrayElement(
            ACTIVE_MODS_ATTR,
            index,
            siiT.stringLiteral(`${mod.id}|${mod.title}`),
          ),
        ),
    );
  },
};
