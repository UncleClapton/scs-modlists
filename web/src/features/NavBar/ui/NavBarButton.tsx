import { memo } from "react";
import { useNavBarContext } from "../lib";
import classes from "./NavBar.module.css";

export interface NavBarButtonProps {
  tab: string;
  title: string;
}

export const NavBarButton = memo(function NavBarButton({
  tab,
  title,
}: NavBarButtonProps) {
  const { activeItem, setActiveItem } = useNavBarContext();

  const active = activeItem === tab;

  const handleClick = () => {
    setActiveItem(tab);
  };

  return (
    <button
      type="button"
      disabled={active}
      className={`${classes.button} ${active ? classes.buttonActive : ""}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
});
