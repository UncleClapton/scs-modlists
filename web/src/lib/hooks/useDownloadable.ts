import { useEffect, useMemo } from "react";

export type Downloadable = {
  href: string;
  download: string;
};

export type FileData = {
  data: string | Blob;
  type?: string;
  filename: string;
};

export function useDownloadable(
  args: FileData | null | undefined,
): Downloadable {
  const { data, type, filename } = args ?? {};

  const href = useMemo(
    () =>
      data
        ? URL.createObjectURL(
            typeof data === "string"
              ? new Blob([data], { type: type ?? "text/plain" })
              : data,
          )
        : "#",
    [data, type],
  );

  useEffect(() => {
    const currentUrl = href;
    // this ensures that the blob is revoked when the component unmounts or when the href changes, preventing memory leaks.
    return () => {
      if (currentUrl !== "#") {
        URL.revokeObjectURL(currentUrl);
      }
    };
  }, [href]);

  return {
    href,
    download: filename ?? "",
  };
}
