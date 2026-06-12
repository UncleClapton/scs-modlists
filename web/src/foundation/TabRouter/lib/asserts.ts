import { isPlainObject } from "~/lib";
import type { TabViewProps } from "../ui/TabView";

export function assertValidTabViewElement<T extends string>(
  element: React.ReactElement,
  validTabs: readonly T[],
): asserts element is React.ReactElement<TabViewProps<T>> {
  if (
    isPlainObject(element.props) &&
    typeof element.props.tab === "string" &&
    validTabs.includes(element.props.tab as T)
  ) {
    return;
  }

  throw new Error(
    "Invalid 'Tab.View' element. Each child of 'Tab.Router' must be a valid 'Tab.View' element with a 'tab' prop the matches one of the defined tabs.",
  );
}
