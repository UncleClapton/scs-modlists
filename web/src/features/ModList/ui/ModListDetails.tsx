import { Accordion } from "~/foundation/Accordion";
import { Panel } from "~/foundation/Panel";
import type { ModList } from "../model";
import classes from "./ModListDetails.module.css";
import { ModListItem } from "./ModListItem";

export interface ModListDetailsProps {
  modList: ModList;
}

export function ModListDetails(props: ModListDetailsProps) {
  const { modList } = props;
  const { title, description, game, gameVersion, activeMods } = modList;

  const displayTitle = title?.trim();
  const displayDescription = description?.trim();
  const displayGameVersion = gameVersion?.trim();
  const gameLabel =
    game === "ets2" ? "Euro Truck Simulator 2" : "American Truck Simulator";

  return (
    <Panel className={classes.container} aria-label="Modlist details">
      <header className={classes.header}>
        <div className={classes.titleBlock}>
          <h2 className={classes.title}>{displayTitle}</h2>
        </div>
        <div className={classes.subtitleBlock}>
          <p className={classes.subtitle}>
            {[gameLabel, displayGameVersion].filter(Boolean).join(" · ")}
          </p>
        </div>
        <p className={classes.description}>{displayDescription}</p>
      </header>

      <Accordion
        title={
          <div className={classes.modsHeadingRow}>
            <h3 className={classes.modsHeading}>Installed Mods</h3>
            <span className={classes.chip}>{activeMods.length}</span>
          </div>
        }
      >
        {activeMods.length ? (
          <ul className={classes.modsList}>
            {activeMods.map((mod) => (
              <ModListItem key={mod.id} mod={mod} />
            ))}
          </ul>
        ) : (
          <p className={classes.emptyState}>
            No active mods found in this modlist.
          </p>
        )}
      </Accordion>
    </Panel>
  );
}
