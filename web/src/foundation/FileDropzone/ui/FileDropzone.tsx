import { useDropzone, type FileRejection } from "react-dropzone";
import classes from "./FileDropzone.module.css";

export interface FileDropzoneProps {
  dropActiveText?: React.ReactNode;
  dropText?: React.ReactNode;
  multiple?: boolean;
  onFile: (file: File) => void;
  onRejectedFiles?: (error: FileRejection[]) => void;
}

export function FileDropzone({
  dropActiveText = "Drop to submit...",
  dropText = "Drag and drop a file here, or click to select a file",
  multiple,
  onFile,
  onRejectedFiles,
}: FileDropzoneProps) {
  const handleDrop = (files: File[], rejectedFiles: FileRejection[]) => {
    emitFileList(files, onFile, multiple);

    if (rejectedFiles.length === 0) {
      return;
    }

    if (onRejectedFiles) {
      onRejectedFiles(rejectedFiles);
    } else {
      rejectedFiles.forEach((rejection) => {
        console.error(
          `File ${rejection.file.name} was rejected. Reasons: ${rejection.errors
            .map((e) => e.message)
            .join(", ")}`,
        );
      });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    multiple,
    preventDropOnDocument: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`${classes.dropzone} ${isDragActive ? classes.active : ""}`}
      data-testid="file-dropzone"
    >
      <input {...getInputProps()} />
      <label>{isDragActive ? dropActiveText : dropText}</label>
    </div>
  );
}

function emitFileList(
  files: File[] | null,
  onFile: (file: File) => void,
  multiple = false,
) {
  if (!files || files.length === 0) {
    return;
  }

  if (!multiple) {
    const firstFile = files.find((it) => it);
    if (!firstFile) {
      return;
    }
    onFile(firstFile);
    return;
  }

  files.forEach((file) => onFile(file));
}
