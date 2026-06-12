import { useCallback, type DragEvent } from "react";
import type { ModDescriptor } from "../model";
import classes from "./ModListItem.module.css";

export type ModListItemProps = {
  as?: React.ElementType;
  mod: ModDescriptor;
} & (
  | {
      draggable?: undefined;
      index?: undefined;
      isDragging?: undefined;
      isDropTarget?: undefined;
      onDragStart?: undefined;
      onDragEnter?: undefined;
      onDragOver?: undefined;
      onDrop?: undefined;
      onDragEnd?: undefined;
    }
  | {
      draggable: boolean;
      index: number;
      isDragging: boolean;
      isDropTarget: boolean;
      onDragStart: (index: number, event: DragEvent<HTMLLIElement>) => void;
      onDragEnter: (index: number) => void;
      onDragOver: (index: number, event: DragEvent<HTMLLIElement>) => void;
      onDrop: (index: number, event: DragEvent<HTMLLIElement>) => void;
      onDragEnd: () => void;
    }
);

export function ModListItem(props: ModListItemProps) {
  const {
    as: AsComponent = "li",
    mod,
    index,
    draggable,
    isDragging,
    isDropTarget,
    onDragStart,
    onDragEnter,
    onDragOver,
    onDrop,
    onDragEnd,
  } = props;

  const handleDragStart = useCallback(
    (event: DragEvent<HTMLLIElement>) => {
      onDragStart?.(index, event);
    },
    [index, onDragStart],
  );

  const handleDragEnter = useCallback(() => {
    onDragEnter?.(index);
  }, [index, onDragEnter]);

  const handleDragOver = useCallback(
    (event: DragEvent<HTMLLIElement>) => {
      onDragOver?.(index, event);
    },
    [index, onDragOver],
  );

  const handleDrop = useCallback(
    (event: DragEvent<HTMLLIElement>) => {
      onDrop?.(index, event);
    },
    [index, onDrop],
  );

  return (
    <AsComponent
      className={[
        classes.modItem,
        draggable ? classes.draggable : "",
        isDragging ? classes.modItemDragging : "",
        isDropTarget ? classes.modItemDropTarget : "",
      ].join(" ")}
      draggable={draggable}
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnd={onDragEnd}
    >
      <span className={classes.modTitle}>{mod.title || "Untitled mod"}</span>
      <span className={classes.modId}>{mod.id}</span>
    </AsComponent>
  );
}
