import type { ReactNode } from "react";
import { Panel } from "~/foundation/Panel";
import type { UserProfile } from "../model";
import classes from "./UserProfileDetails.module.css";

export interface UserProfileDetailsProps {
  children?: ReactNode;
  profile: UserProfile;
}

export function UserProfileDetails(props: UserProfileDetailsProps) {
  const { children, profile } = props;
  const { companyName, createdAt, profileName, savedAt } = profile;

  const displayName = profileName?.trim() || "Unnamed profile";
  const displayCompanyName = companyName?.trim() || "No company name set";
  const displayCreatedAt = createdAt?.trim() || "Unknown";
  const displaySavedAt = savedAt?.trim() || "Unknown";

  return (
    <Panel className={classes.card} aria-label="User profile details">
      <header className={classes.summary}>
        <div className={classes.nameSlot}>
          <h2 className={classes.name}>{displayName}</h2>
        </div>
        <p className={classes.company}>{displayCompanyName}</p>
        <p className={classes.timestamps}>
          <span>Created: {displayCreatedAt}</span>
          <span className={classes.separator} aria-hidden="true">
            •
          </span>
          <span>Saved: {displaySavedAt}</span>
        </p>
      </header>

      {children}
    </Panel>
  );
}
