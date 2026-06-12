export type UserProfileGame = "ets2" | "ats";

export interface UserProfile {
  profileName: string;
  companyName: string;
  createdAt: string;
  savedAt: string;
  profileVersion: number;
}
