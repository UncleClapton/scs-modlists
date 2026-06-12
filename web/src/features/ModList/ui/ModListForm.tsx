import { useReducer, useState } from "react";
import { Accordion } from "~/foundation/Accordion";
import { Panel } from "~/foundation/Panel";
import type { ModDescriptor, ModList } from "../model";
import { ModListItem } from "./ModListItem";
import classes from "./ModListForm.module.css";

export interface ModListFormProps {
  initialModList: ModList;
  onSubmit: (nextModList: ModList) => void;
  className?: string;
}

const modListReducer = (state: ModList, action: Partial<ModList>): ModList => {
  return {
    ...state,
    ...action,
  };
};

export function ModListForm(props: ModListFormProps) {
  const { initialModList, onSubmit, className } = props;

  const [modListState, setModListState] = useReducer(
    modListReducer,
    initialModList,
  );

  const { title, description, gameVersion, game, activeMods } = modListState;

  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [dropTargetIndex, setDropTargetIndex] = useState<number | null>(null);

  const updateField = <K extends keyof ModList>(
    field: K,
    value: ModList[K],
  ) => {
    setModListState({
      [field]: value,
    });
  };

  const handleDrop = (sourceIndex: number | null, targetIndex: number) => {
    if (sourceIndex === null || sourceIndex === targetIndex) {
      setDraggingIndex(null);
      setDropTargetIndex(null);
      return;
    }

    setModListState({
      activeMods: moveItem(activeMods, sourceIndex, targetIndex),
    });

    setDraggingIndex(null);
    setDropTargetIndex(null);
  };

  return (
    <Panel
      className={[classes.container, className ?? ""].filter(Boolean).join(" ")}
      aria-label="ModList details editor"
    >
      <header className={classes.header}>
        <h2 className={classes.title}>ModList Details</h2>
        <p className={classes.subtitle}>
          Edit metadata and reorder active mods.
        </p>
      </header>

      <form
        className={classes.form}
        onSubmit={(event) => event.preventDefault()}
      >
        <label className={classes.field}>
          <span className={classes.label}>Title</span>
          <input
            className={classes.input}
            type="text"
            value={title ?? ""}
            onChange={(event) => updateField("title", event.target.value)}
            placeholder="My convoy setup"
          />
        </label>

        <label className={classes.field}>
          <span className={classes.label}>Description</span>
          <textarea
            className={classes.textarea}
            value={description ?? ""}
            onChange={(event) => updateField("description", event.target.value)}
            placeholder="What this modlist is for, key dependencies, and notes"
            rows={4}
          />
        </label>

        <div className={classes.twoCol}>
          <label className={classes.field}>
            <span className={classes.label}>Game Version</span>
            <input
              className={classes.input}
              type="text"
              value={gameVersion ?? ""}
              onChange={(event) =>
                updateField("gameVersion", event.target.value)
              }
              placeholder="1.59"
            />
          </label>

          <fieldset className={classes.fieldset}>
            <legend className={classes.label}>Game</legend>
            <div className={classes.radioRow}>
              <label className={classes.radioLabel}>
                <input
                  type="radio"
                  name="game"
                  checked={game === "ets2"}
                  onChange={() => updateField("game", "ets2")}
                />
                <span>Euro Truck Simulator 2</span>
              </label>

              <label className={classes.radioLabel}>
                <input
                  type="radio"
                  name="game"
                  checked={game === "ats"}
                  onChange={() => updateField("game", "ats")}
                />
                <span>American Truck Simulator</span>
              </label>
            </div>
          </fieldset>
        </div>
      </form>

      <Accordion
        title={
          <div className={classes.modsHeadingRow}>
            <span className={classes.modsHeading}>Active Mods</span>
            <span className={classes.chip}>{activeMods.length}</span>
          </div>
        }
      >
        {activeMods.length ? (
          <ul className={classes.modsList}>
            {activeMods.map((mod, index) => {
              const isDragging = draggingIndex === index;
              const isDropTarget = dropTargetIndex === index;

              return (
                <ModListItem
                  key={mod.id}
                  mod={mod}
                  draggable
                  index={index}
                  isDragging={isDragging}
                  isDropTarget={isDropTarget}
                  onDragStart={(sourceIndex, event) => {
                    setDraggingIndex(sourceIndex);
                    event.dataTransfer.effectAllowed = "move";
                    event.dataTransfer.setData(
                      "text/plain",
                      String(sourceIndex),
                    );
                  }}
                  onDragEnter={(targetIndex) => setDropTargetIndex(targetIndex)}
                  onDragOver={(targetIndex, event) => {
                    event.preventDefault();
                    event.dataTransfer.dropEffect = "move";
                    if (dropTargetIndex !== targetIndex) {
                      setDropTargetIndex(targetIndex);
                    }
                  }}
                  onDrop={(targetIndex, event) => {
                    event.preventDefault();

                    const transferIndex = Number.parseInt(
                      event.dataTransfer.getData("text/plain"),
                      10,
                    );
                    const sourceIndex =
                      draggingIndex ??
                      (Number.isNaN(transferIndex) ? null : transferIndex);

                    handleDrop(sourceIndex, targetIndex);
                  }}
                  onDragEnd={() => {
                    setDraggingIndex(null);
                    setDropTargetIndex(null);
                  }}
                />
              );
            })}
          </ul>
        ) : (
          <p className={classes.emptyState}>No active mods are available.</p>
        )}
      </Accordion>

      <div className={classes.actionRow}>
        <button
          className={classes.submitButton}
          type="button"
          onClick={() => onSubmit(modListState)}
        >
          Create ModList
        </button>
      </div>
    </Panel>
  );
}

function moveItem(items: ModDescriptor[], fromIndex: number, toIndex: number) {
  const next = [...items];
  const [item] = next.splice(fromIndex, 1);
  if (!item) {
    return next;
  }
  next.splice(toIndex, 0, item);
  return next;
}
