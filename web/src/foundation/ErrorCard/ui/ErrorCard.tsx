import { Panel } from "~/foundation/Panel";
import classes from "./ErrorCard.module.css";

export interface ErrorCardProps {
  actionLabel?: string;
  message: string;
  onAction?: () => void;
  title?: string;
}

export function ErrorCard(props: ErrorCardProps) {
  const {
    actionLabel = "Try Again",
    message,
    onAction,
    title = "Something went wrong",
  } = props;

  return (
    <Panel
      className={classes.card}
      role="alert"
      aria-live="polite"
      tone="danger"
    >
      <div className={classes.header}>
        <span className={classes.icon} aria-hidden="true">
          !
        </span>
        <div className={classes.body}>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.message}>{message}</p>
        </div>
      </div>
      {onAction ? (
        <div className={classes.actions}>
          <button type="button" className={classes.button} onClick={onAction}>
            {actionLabel}
          </button>
        </div>
      ) : null}
    </Panel>
  );
}
