type DownloadOptions = {
  data: string | Blob;
  fileName: string;
  mimeType?: string;
};

export function downloadFile(options: DownloadOptions) {
  const { data, fileName, mimeType = "text/plain" } = options;

  const blob =
    typeof data === "string" ? new Blob([data], { type: mimeType }) : data;
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  anchor.click();

  URL.revokeObjectURL(url);
}
