import { createStrictContext } from "~/lib/context";

export interface NavBarContextType {
  activeItem: string;
  setActiveItem: (item: string) => void;
}
export const [useNavBarContext, NavBarProvider] =
  createStrictContext<NavBarContextType>("NavBar");
