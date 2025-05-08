export interface DepartmentFields {
  code: string;
  name: string;
  shortName: string;
}
export interface DeleteDepartment {
  id: string;
}

export interface Department extends DepartmentFields {
  id: number;
  createdAt: Date;
}
