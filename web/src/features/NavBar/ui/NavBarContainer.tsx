import { useMemo, type PropsWithChildren } from "react";
import { NavBarProvider, type NavBarContextType } from "../lib";
import classes from "./NavBar.module.css";

export interface NavBarContainerProps<T extends string> {
  title?: string;
  activeItem?: T;
  onChange?: (item: T) => void;
}

export function NavBarContainer<T extends string>({
  title,
  children,
  activeItem,
  onChange,
}: PropsWithChildren<NavBarContainerProps<T>>): React.JSX.Element {
  const navContext = useMemo<NavBarContextType>(
    () => ({
      activeItem: activeItem ?? "",
      setActiveItem: (item: string) => {
        if (item !== activeItem) {
          onChange?.(item as T);
        }
      },
    }),
    [activeItem, onChange],
  );

  return (
    <header className={classes.container}>
      {title ? <h1 className={classes.title}>{title}</h1> : null}
      <nav className={classes.tabs} aria-label="Primary">
        <NavBarProvider value={navContext}>{children}</NavBarProvider>
      </nav>
    </header>
  );
}
