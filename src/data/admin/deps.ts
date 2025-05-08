import type { Department } from "../../entities/department";

export const departments = [
  {
    id: 0,
    code: "HR",
    name: "Human Resources",
    shortName: "MAK",
    createdAt: new Date(),
  },
  {
    id: 1,
    code: "IT",
    name: "Information Technology",
    shortName: "MAK",
    createdAt: new Date(),
  },
  {
    id: 2,
    code: "FN",
    name: "Finance",
    shortName: "MAK",
    createdAt: new Date(),
  },
  {
    id: 3,
    code: "MK",
    name: "Marketing",
    shortName: "MAK",
    createdAt: new Date(),
  },
] as Department[];
