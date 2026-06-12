import type {
  DecodeRequest,
  DecodeResponse,
} from "../../workers/decode.worker";
import DecodeWorker from "../../workers/decode.worker?worker";

type DecodeResult = {
  result: string;
};

const promises = new Map<
  string,
  {
    resolve: (value: DecodeResult) => void;
    reject: (reason: Error) => void;
  }
>();
const RequestPromise = {
  create(): { id: string; promise: Promise<DecodeResult> } {
    const id = crypto.randomUUID();
    let resolve!: (value: DecodeResult) => void;
    let reject!: (reason: Error) => void;
    const promise = new Promise<DecodeResult>((res, rej) => {
      resolve = res;
      reject = rej;
    });
    promises.set(id, { resolve, reject });
    return { id, promise };
  },
  resolve(id: string, value: DecodeResult) {
    const requestPromise = promises.get(id);
    if (requestPromise) {
      requestPromise.resolve(value);
      promises.delete(id);
    } else {
      console.warn(
        `[SIIDecoder]: Attempted to resolve unknown request id: ${id}`,
      );
    }
  },
  reject(id: string, reason: Error) {
    const requestPromise = promises.get(id);
    if (requestPromise) {
      requestPromise.reject(reason);
      promises.delete(id);
    } else {
      console.warn(
        `[SIIDecoder]: Attempted to reject unknown request id: ${id}`,
      );
    }
  },
};

const worker = new DecodeWorker();
worker.addEventListener("message", (event: MessageEvent<DecodeResponse>) => {
  if (event.data.type === "decode-success") {
    const { id, buffer } = event.data;
    const result = new TextDecoder().decode(buffer);

    RequestPromise.resolve(id, { result });
  } else {
    RequestPromise.reject(
      event.data.id,
      new Error("message" in event.data ? event.data.message : "Unknown error"),
    );
  }
});

export const SIIDecoder = {
  decode(file: File): Promise<DecodeResult> {
    const { id, promise } = RequestPromise.create();
    const reader = new FileReader();
    reader.onload = (e) => {
      const arrayBuffer = e.target?.result;
      if (!(arrayBuffer instanceof ArrayBuffer)) {
        RequestPromise.reject(
          id,
          new Error("Failed to read file as ArrayBuffer"),
        );
        return;
      }
      worker.postMessage(
        {
          id,
          type: "decode",
          buffer: arrayBuffer,
        } satisfies DecodeRequest,
        [arrayBuffer],
      );
    };
    reader.readAsArrayBuffer(file);
    return promise;
  },
};
