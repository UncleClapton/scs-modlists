import { useCallback, useRef, useState } from "react";
import { FileDropzone } from "~/foundation/FileDropzone";
import {
  SIIDecoder,
  SiinDocument,
  useDownloadable,
  type FileData,
} from "~/lib";

export function DecodeView() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [downloadInfo, setDownloadInfo] = useState<FileData | null>(null);
  const downloadable = useDownloadable(downloadInfo);

  const handleFile = useCallback(async (selectedFile: File) => {
    // First clear state while we wait for the worker with our new file.
    if (textAreaRef.current) {
      textAreaRef.current.value = "Decoding...";
    }
    setDownloadInfo(null);

    // Now decode the file in our worker and update state with the result.
    try {
      const { result } = await SIIDecoder.decode(selectedFile);

      const document = SiinDocument.fromString(result);

      console.log("Decoded document:", document);

      if (textAreaRef.current) {
        textAreaRef.current.value = result;
      }
      setDownloadInfo({
        data: result,
        filename: `${selectedFile.name.replace(/\.sii$/i, "")} - decoded.sii`,
        type: "text/plain",
      });
    } catch (error) {
      if (textAreaRef.current) {
        textAreaRef.current.value = `Error: ${error instanceof Error ? error.message : String(error)}

Please check the console for more details.
`;
      }
      console.error(error);
    }
  }, []);

  return (
    <>
      <FileDropzone onFile={handleFile} />
      <textarea
        id="output"
        rows={20}
        ref={textAreaRef}
        data-testid="file-display"
        spellCheck="false"
        readOnly
      />
      <div>
        <a {...downloadable} data-testid="file-download">
          Download decoded file
        </a>
      </div>
    </>
  );
}
