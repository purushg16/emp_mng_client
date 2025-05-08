import type { ReactNode } from "react";
import type { PathLabel } from "./pathLabel";

export interface NavigationMenu {
  label: string;
  icon: ReactNode;
  activeIcon: ReactNode;
  children?: PathLabel[];
}
