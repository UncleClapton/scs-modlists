import { useMemo } from "react";
import { Panel } from "~/foundation/Panel";
import { useDownloadable, type FileData, type SiinDocument } from "~/lib";
import { ModListUtil, type ModList } from "../model";
import classes from "./ModListProfileExporter.module.css";

export interface ModListDownloaderProps {
  modList: ModList;
  profile: SiinDocument;
}

type DownloadState =
  | {
      fileData: FileData;
      ok: true;
    }
  | {
      message: string;
      ok: false;
    };

export function ModListProfileExporter(props: ModListDownloaderProps) {
  const { modList, profile } = props;

  const downloadState = useMemo<DownloadState>(() => {
    try {
      const updatedProfile = ModListUtil.applyModlistToProfile(
        profile.clone(),
        modList,
      );
      const content = updatedProfile.toString();

      return {
        ok: true,
        fileData: {
          data: content,
          type: "text/plain",
          filename: "profile.sii",
        },
      };
    } catch (error) {
      return {
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to apply this ModList to your profile.",
      };
    }
  }, [modList, profile]);
  const downloadable = useDownloadable(
    downloadState.ok ? downloadState.fileData : null,
  );

  const handleDownload = () => {
    if (!downloadState.ok) {
      return;
    }

    const anchor = document.createElement("a");
    anchor.href = downloadable.href;
    anchor.download = downloadable.download ?? "profile.sii";
    anchor.click();
  };

  return (
    <Panel
      as="button"
      type="button"
      className={classes.card}
      tone={downloadState.ok ? "success" : "danger"}
      interactive
      onClick={handleDownload}
      disabled={!downloadState.ok}
      aria-live="polite"
    >
      <span className={classes.title}>
        {downloadState.ok ? "Patch Success!" : "Cannot Apply ModList"}
      </span>
      <span className={classes.message}>
        {downloadState.ok ? (
          <>
            {"Click to download "}
            <code>{downloadState.fileData.filename}</code>
          </>
        ) : (
          downloadState.message
        )}
      </span>
    </Panel>
  );
}
