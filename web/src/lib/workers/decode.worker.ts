/* eslint-env worker */
/// <reference lib="webworker" />

import { decode } from "sii-decode-rs";

export type DecodeRequest = {
  id: string;
  type: "decode";
  buffer: ArrayBuffer;
};

export type DecodeResponse =
  | {
      id: string;
      type: "decode-success";
      buffer: ArrayBuffer;
    }
  | {
      id: string;
      type: "decode-error";
      message: string;
    };

self.onmessage = (event: MessageEvent<DecodeRequest>) => {
  if (event.data.type === "decode") {
    try {
      const bytes = new Uint8Array(event.data.buffer);
      const decoded = decode(bytes);
      const buffer = new Uint8Array(decoded).buffer;
      // re-encode

      self.postMessage(
        {
          id: event.data.id,
          type: "decode-success",
          buffer,
        } satisfies DecodeResponse,
        [buffer],
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      self.postMessage({
        id: event.data.id,
        type: "decode-error",
        message,
      } satisfies DecodeResponse);
    }
  }
};
