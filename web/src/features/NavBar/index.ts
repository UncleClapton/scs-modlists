import { NavBarButton } from "./ui/NavBarButton";
import { NavBarContainer } from "./ui/NavBarContainer";

export const NavBar = Object.freeze(
  Object.assign(NavBarContainer, {
    Container: NavBarContainer,
    Button: NavBarButton,
  }),
);
