import React from "react";

export class StrictContextError extends Error {
  constructor(contextName: string) {
    super(
      `use${contextName}Context must be used within a ${contextName}Provider`,
    );
    this.name = "StrictContextError";
  }
}

export function createStrictContext<T>(name: string) {
  const Context = React.createContext<T | undefined>(undefined);
  Context.displayName = name;

  function useContext() {
    const context = React.useContext(Context);
    if (context === undefined) {
      throw new StrictContextError(name);
    }
    return context;
  }
  useContext.displayName = `use${name}Context`;

  return [useContext, Context.Provider] as const;
}
