import type { ReactNode } from "react";
import classes from "./Accordion.module.css";

export interface AccordionProps {
  className?: string;
  title: ReactNode;
  children: ReactNode;
}

export function Accordion(props: AccordionProps) {
  const { title, children } = props;

  return (
    <details className={`${classes.accordion} ${props.className || ""}`}>
      <summary className={classes.summary}>{title}</summary>
      <div className={classes.content}>{children}</div>
    </details>
  );
}
