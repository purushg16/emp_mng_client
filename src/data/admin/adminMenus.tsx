import { BiSolidCategory, BiCategory } from "react-icons/bi";
import { BsPeopleFill, BsPeople } from "react-icons/bs";
import {
  MdSpaceDashboard,
  MdOutlineSpaceDashboard,
  MdEventBusy,
  MdOutlineEventBusy,
} from "react-icons/md";
import { RiBuildingFill, RiBuildingLine } from "react-icons/ri";
import { NavigationMenu } from "../../entities/NavigationMenu";

export const adminMenus: NavigationMenu[] = [
  {
    label: "Dashboard",
    icon: <MdOutlineSpaceDashboard />,
    activeIcon: <MdSpaceDashboard />,
  },
  {
    label: "Department",
    icon: <RiBuildingLine />,
    activeIcon: <RiBuildingFill />,
    children: [
      { label: "Add Department", action: "add" },
      { label: "Manage Department", action: "manage" },
    ],
  },
  {
    label: "Leave Type",
    icon: <BiCategory size={20} />,
    activeIcon: <BiSolidCategory />,
    children: [
      { label: "Add Leave Type", action: "add" },
      { label: "Manage Leave Types", action: "manage" },
    ],
  },
  {
    label: "Leave",
    icon: <MdOutlineEventBusy size={20} />,
    activeIcon: <MdEventBusy size={20} />,
  },
  {
    label: "Employee",
    icon: <BsPeople size={20} />,
    activeIcon: <BsPeopleFill size={20} />,
    children: [
      { label: "Add Employee", action: "add" },
      { label: "Manage Employees", action: "manage" },
    ],
  },
];
