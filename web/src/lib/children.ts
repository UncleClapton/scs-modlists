import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

export type ReactElementChildren<P = unknown> =
  | ReactElement<P>
  | ReactElement<P>[];

export interface ElementAssertionFunction<P = unknown> {
  (child: ReactElement): asserts child is ReactElement<P>;
}

function assertValidElement(
  element: ReactNode,
): asserts element is ReactElement {
  if (!isValidElement(element)) {
    throw new Error(
      "Node must be a valid React element. Received: " +
        JSON.stringify(element),
    );
  }
}

export function pickChild<P = unknown>(
  children: ReactElementChildren | false | null | undefined,
  predicate: (child: ReactElement<P>, index: number) => boolean,
  assertElement: ElementAssertionFunction<P>,
): ReactElement<P> | null;
export function pickChild(
  children: ReactElementChildren | false | null | undefined,
  predicate: (child: ReactElement, index: number) => boolean,
): ReactElement | null;
export function pickChild(
  children: ReactElementChildren | false | null | undefined,
  predicate: (child: ReactElement, index: number) => boolean,
  assertProps?: ElementAssertionFunction<object>,
): ReactElement | null {
  if (!children) {
    return null;
  }

  let foundChild: ReactElement | null = null;

  Children.forEach(children, (child, index) => {
    assertValidElement(child);
    assertProps?.(child);
    if (foundChild) {
      return;
    }

    if (predicate(child, index)) {
      foundChild = child;
    }
  });

  return foundChild;
}
