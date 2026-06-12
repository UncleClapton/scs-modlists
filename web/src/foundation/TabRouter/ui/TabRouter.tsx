import { pickChild, type ReactElementChildren } from "~/lib";
import { assertValidTabViewElement } from "../lib/asserts";
import type { TabController } from "../lib/tab-controller";
import { type TabViewProps } from "./TabView";

export interface TabRouterProps<T extends string> {
  children: ReactElementChildren<TabViewProps<T>>;
}

export function TabRouter<T extends string>({ children }: TabRouterProps<T>) {
  const tabController = window.TabController as TabController<T> | undefined;
  if (!tabController) {
    throw new Error(
      "TabController not found. Ensure that 'createTabRouter' is called before using 'Tab.Router'.",
    );
  }

  const [activeTab] = tabController.useActiveTab();
  return pickChild<TabViewProps<T>>(
    children,
    (child) => child.props.tab === activeTab,
    (child) => assertValidTabViewElement<T>(child, tabController.tabs),
  );
}
