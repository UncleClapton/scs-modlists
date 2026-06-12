import { useMemo } from "react";
import { siiG, type SiinDocument } from "~/lib";
import type { UserProfile } from "../model";

export function useUserProfileData(
  document: SiinDocument | null,
): UserProfile | { error: string } | null {
  return useMemo(() => {
    if (!document) {
      return null;
    }
    try {
      const profileUnitNames = document.findUnitNamesByClass("user_profile");
      const mainProfileName = profileUnitNames[0];
      if (!mainProfileName) {
        throw new Error(`Unable to find "user_profile" in file.`);
      }
      if (profileUnitNames.length !== 1) {
        throw new Error(
          `Expected exactly one "user_profile" unit in file, but found ${profileUnitNames.length}.`,
        );
      }
      const profileUnit = document.getUnit(mainProfileName);
      if (!profileUnit) {
        throw new Error(
          `Unexpectedly failed to get unit "${mainProfileName}" from document.`,
        );
      }

      const model: UserProfile = {
        companyName: "",
        createdAt: "",
        profileName: "",
        profileVersion: -1,
        savedAt: "",
      } as UserProfile;

      model.profileName =
        profileUnit
          .getLiteralAttribute("profile_name", siiG.isStringLiteral)
          ?.value.trim() || "";

      model.companyName =
        profileUnit
          .getLiteralAttribute("company_name", siiG.isStringLiteral)
          ?.value.trim() || "";

      const createdTime = profileUnit.getLiteralAttribute(
        "creation_time",
        siiG.isNumberLiteral,
      )?.value;
      const createdDate = new Date((createdTime ?? 0) * 1000);
      model.createdAt = createdDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      });

      const savedTime = profileUnit.getLiteralAttribute(
        "save_time",
        siiG.isNumberLiteral,
      )?.value;
      const savedDate = new Date((savedTime ?? 0) * 1000);
      model.savedAt = savedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      });

      model.profileVersion =
        profileUnit.getLiteralAttribute("version", siiG.isNumberLiteral)
          ?.value ?? -1;

      return model;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred.";
      console.error("Error parsing user profile document:", error);
      return { error: errorMessage };
    }
  }, [document]);
}
