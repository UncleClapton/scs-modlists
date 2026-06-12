import { useCallback, useState } from "react";
import { ErrorCard } from "~/foundation/ErrorCard";
import {
  ModListDetails,
  ModListProfileExporter,
  useModListReader,
} from "~/features/ModList";
import {
  UserProfileDetails,
  useUserProfileData,
  useUserProfileReader,
} from "~/features/UserProfile";
import { FileDropzone } from "~/foundation/FileDropzone";

export function ModListApplyView() {
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => setError(null), []);

  const [userProfile, handleProfile] = useUserProfileReader({
    onBeforeRead: clearError,
    onError: setError,
  });
  const profileData = useUserProfileData(userProfile);
  const profileError =
    profileData && "error" in profileData ? profileData.error : null;

  const [modList, handleModList] = useModListReader({
    onBeforeRead: clearError,
    onError: setError,
  });

  const clearState = () => {
    setError(null);
    handleModList(null);
    handleProfile(null);
  };

  return (
    <>
      {error || profileError ? (
        <ErrorCard
          title="Unable to read modlist"
          message={error || profileError || "An unknown error occurred."}
          onAction={clearState}
        />
      ) : null}
      {modList ? (
        <>
          <ModListDetails modList={modList} />
          {userProfile ? null : (
            <FileDropzone
              onFile={handleProfile}
              dropText={
                <>
                  To apply this list to a profile, Drop your{" "}
                  <code>{"profile.sii"}</code> file here, or click to select a
                  file
                </>
              }
            />
          )}
        </>
      ) : (
        <FileDropzone
          onFile={handleModList}
          dropText={
            <>
              Drop your <code>{"modlist-{ats|ets2}-{list_name}.sii"}</code> file
              here, or click to select a file
            </>
          }
        />
      )}
      {modList && userProfile && profileData && !("error" in profileData) ? (
        <UserProfileDetails profile={profileData}>
          <ModListProfileExporter modList={modList} profile={userProfile} />
        </UserProfileDetails>
      ) : null}
      <div>
        {modList ? (
          <button type="button" onClick={clearState}>
            Start Over
          </button>
        ) : null}
      </div>
    </>
  );
}
