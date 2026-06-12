import { useCallback, useState } from "react";
import { SiinDocument } from "../models";
import { SIIDecoder } from "./decoder";

export function useSIIReader(opts: {
  onBeforeRead?: () => void;
  onError?: (message: string) => void;
}) {
  const { onBeforeRead, onError } = opts;
  const [modList, setDocument] = useState<SiinDocument | null>(null);
  const handleModList = useCallback(
    async (selectedFile: File | null | undefined) => {
      if (!selectedFile) {
        setDocument(null);
        return;
      }
      try {
        onBeforeRead?.();
        const { result } = await SIIDecoder.decode(selectedFile);
        const document = SiinDocument.fromString(result);
        setDocument(document);
      } catch (error) {
        console.error("[useSIIReader] Error decoding:", error);
        if (onError) {
          onError(
            `Failed to read File: ${error instanceof Error ? error.message : String(error)}`,
          );
        } else {
          throw error;
        }
      }
    },
    [onBeforeRead, onError],
  );

  return [modList, handleModList] as const;
}
