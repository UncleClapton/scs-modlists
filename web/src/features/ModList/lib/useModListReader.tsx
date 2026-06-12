import { useMemo } from "react";
import { useSIIReader } from "~/lib/sii/decoder/useSIIReader";
import { ModListUtil } from "../model";

export function useModListReader(opts: {
  onBeforeRead?: () => void;
  onError?: (message: string) => void;
}) {
  const [document, handleDocument] = useSIIReader(opts);
  const modList = useMemo(
    () =>
      document ? ModListUtil.fromModListOrProfileDocument(document) : null,
    [document],
  );

  return [modList, handleDocument] as const;
}
