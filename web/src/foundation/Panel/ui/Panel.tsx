import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import classes from "./Panel.module.css";

export type PanelTone = "neutral" | "success" | "danger";

type PanelOwnProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  tone?: PanelTone;
};

export type PanelProps<T extends ElementType = "section"> = PanelOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof PanelOwnProps<T>>;

export function Panel<T extends ElementType = "section">(props: PanelProps<T>) {
  const {
    as,
    children,
    className,
    interactive = false,
    tone = "neutral",
    ...restProps
  } = props;

  const Component = as ?? "section";

  return (
    <Component
      className={[
        classes.panel,
        classes[`tone${capitalize(tone)}`],
        interactive ? classes.interactive : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      {...restProps}
    >
      {children}
    </Component>
  );
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
