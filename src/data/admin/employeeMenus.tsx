import { RiAccountPinBoxLine, RiAccountPinBoxFill } from "react-icons/ri";
import { NavigationMenu } from "../../entities/NavigationMenu";
import { IoCalendar, IoCalendarOutline } from "react-icons/io5";

export const employeeMenus: NavigationMenu[] = [
  {
    label: "My Profile",
    activeIcon: <RiAccountPinBoxFill />,
    icon: <RiAccountPinBoxLine />,
  },
  {
    label: "My Leaves",
    activeIcon: <IoCalendar />,
    icon: <IoCalendarOutline />,
  },
];
