import { createAtom, type AtomStateTuple } from "~/lib";

export type TabController<T extends string> = {
  tabs: readonly T[];
  getTab: () => T;
  setTab: (tab: T) => void;
  useActiveTab: () => AtomStateTuple<T>;
};

// define TabController on Global to prevent potential for duplicates.
declare global {
  interface Window {
    TabController?: TabController<string>;
  }
}

export const createTabController = <T extends string>(
  tabs: T[],
  defaultTab: T,
): TabController<T> => {
  if (window.TabController) {
    console.warn(
      "Attempted to create a TabController when one already exists. Returning existing controller, but this may lead to unexpected behavior!",
    );
    return window.TabController as unknown as TabController<T>;
  }

  const isTab = (value: string): value is T => {
    return tabs.includes(value as T);
  };

  const getActiveTab = (): T => {
    const hash = window.location.hash.slice(1);
    if (isTab(hash)) {
      return hash as T;
    }
    return defaultTab;
  };

  const [useActiveTab, activeTabAtom] = createAtom(getActiveTab());

  activeTabAtom.subscribe(() => {
    window.location.hash = activeTabAtom.getState();
  });

  window.addEventListener("hashchange", () => {
    activeTabAtom.setState(getActiveTab());
  });

  window.TabController = {
    tabs,
    getTab: getActiveTab,
    setTab: (tab: string) => {
      if (isTab(tab)) {
        activeTabAtom.setState(tab);
      } else {
        console.warn(`Attempted to set invalid tab: ${tab}`);
      }
    },
    useActiveTab: useActiveTab as unknown as () => AtomStateTuple<string>,
  };

  return window.TabController as unknown as TabController<T>;
};
