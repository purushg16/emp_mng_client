export interface DepartmentFields {
  code: string;
  name: string;
  shortName: string;
}

export interface Department extends DepartmentFields {
  id: number;
  createdAt: Date;
}
