import { useCallback, useState } from "react";
import { SIIDecoder, SiinDocument } from "~/lib";

export function useUserProfileReader(opts?: {
  onBeforeRead?: () => void;
  onError?: (error: string) => void;
}) {
  const { onBeforeRead, onError } = opts ?? {};
  const [userProfile, setUserProfile] = useState<SiinDocument | null>(null);
  const handleProfile = useCallback(
    async (selectedFile: File | null | undefined) => {
      if (!selectedFile) {
        setUserProfile(null);
        return;
      }

      try {
        onBeforeRead?.();
        const { result } = await SIIDecoder.decode(selectedFile);
        const profileDoc = SiinDocument.fromString(result);
        console.log("decoded profile", profileDoc);

        setUserProfile(profileDoc);
      } catch (error) {
        console.error("Error decoding profile:", error);
        if (onError) {
          onError(
            `Failed read Profile: ${error instanceof Error ? error.message : String(error)}`,
          );
        } else {
          throw error;
        }
      }
    },
    [onBeforeRead, onError],
  );

  return [userProfile, handleProfile] as const;
}
