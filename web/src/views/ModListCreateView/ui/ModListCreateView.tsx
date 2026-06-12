import { useMemo } from "react";
import { ModListForm, ModListUtil, type ModList } from "~/features/ModList";
import { useUserProfileReader } from "~/features/UserProfile";
import { FileDropzone } from "~/foundation/FileDropzone";
import { downloadFile } from "~/lib/downloader";

export function ModListExtractView() {
  const [profile, handleProfile] = useUserProfileReader();

  const modList = useMemo(() => {
    if (!profile) {
      return null;
    }
    return ModListUtil.fromProfileDocument(profile);
  }, [profile]);

  const handleSubmit = (nextModList: ModList) => {
    const updatedProfile =
      ModListUtil.toModListDocument(nextModList).toString();

    // Make sure name is safe to use as a file name on all platforms.
    const sanitizedModListName = nextModList.title
      .replace(/[^a-zA-Z0-9_-]/gi, "_")
      .toLowerCase();

    downloadFile({
      data: updatedProfile,
      fileName: `modlist-${nextModList.game}-${sanitizedModListName}.sii`,
    });
  };

  return (
    <div>
      {modList ? (
        <ModListForm initialModList={modList} onSubmit={handleSubmit} />
      ) : (
        <FileDropzone
          onFile={handleProfile}
          dropText={
            <>
              Drop your <code>{"profile.sii"}</code> file here, or click to
              select a file
            </>
          }
        />
      )}
    </div>
  );
}
