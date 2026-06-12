import { useSyncExternalStore, type SetStateAction } from "react";

export class LockedStateError extends Error {
  constructor() {
    super("Cannot update state while another update is in progress.");
    this.name = "LockedStateError";
  }
}

export class Atom<T> {
  private locked: boolean = false;
  private state: T;
  private listeners = new Set<() => void>();

  constructor(initialState: T) {
    this.state = initialState;
  }

  getState = (): T => {
    return this.state;
  };

  setState = (newState: SetStateAction<T>): void => {
    if (this.locked) {
      throw new Error(
        "Cannot update state while another update is in progress.",
      );
    }
    this.locked = true;

    let resolvedState = this.state;
    try {
      resolvedState =
        typeof newState === "function"
          ? (newState as (prevState: T) => T)(this.state)
          : newState;
    } catch (error) {
      this.locked = false;
      throw error;
    }

    if (!Object.is(this.state, resolvedState)) {
      this.state = resolvedState;
      this.dispatch();
    } else {
      this.locked = false;
    }
  };

  subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  private dispatch = () => {
    this.locked = true;
    return Promise.all(
      Array.from(this.listeners).map(async (listener) => {
        try {
          await listener();
        } catch (error) {
          console.error("Unhandled exception during state update:", error);
        }
      }),
    ).finally(() => {
      this.locked = false;
    });
  };
}

export type AtomStateTuple<T> = [T, (newState: SetStateAction<T>) => void];
function useAtom<T>(atom: Atom<T>): AtomStateTuple<T> {
  const state = useSyncExternalStore(atom.subscribe, atom.getState);
  return [state, atom.setState];
}

export function createAtom<T>(
  initialState: T,
): [useAtom: () => AtomStateTuple<T>, atom: Atom<T>] {
  const atom = new Atom(initialState);
  return [() => useAtom(atom), atom];
}
