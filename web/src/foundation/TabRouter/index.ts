import { createTabController } from "./lib/tab-controller";
import { TabRouter } from "./ui/TabRouter";
import { TabView } from "./ui/TabView";

export const createTabRouter = <const T extends string>(
  tabs: [...T[]] | Record<string, T>,
  defaultTab: NoInfer<T>,
) => {
  const controller = createTabController<T>(
    Array.isArray(tabs) ? tabs : Object.values(tabs),
    defaultTab,
  );

  const Tab = Object.freeze({
    Router: TabRouter<T>,
    View: TabView<T>,
  });

  return [Tab, controller.useActiveTab, controller] as const;
};
