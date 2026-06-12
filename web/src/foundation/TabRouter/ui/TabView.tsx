import classes from "./TabView.module.css";

export interface TabViewProps<T extends string> {
  Component: React.ComponentType;
  tab: T;
  title: string;
}

export function TabView<T extends string>({
  Component,
  tab,
  title,
}: TabViewProps<T>) {
  const titleId = `${tab}-title`;
  return (
    <section className={classes.container} id={tab} aria-labelledby={titleId}>
      <h2 id={titleId} className={classes.title}>
        {title}
      </h2>
      <Component />
    </section>
  );
}
