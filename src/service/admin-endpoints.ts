export const departmentAdminEndpoints = {
  base: `/departments`,
  getAll: `/departments/getAll`,
  create: `/departments/create`,
  get: (id?: string) => `/departments/get${id ? `/:${id}` : ""}`,
  update: (id?: string) => `/departments/update${id ? `/:${id}` : ""}`,
  delete: (id?: string) => `/departments/delete${id ? `/:${id}` : ""}`,
};

export const leaveTypeAdminEndpoints = {
  base: `/leaveType`,
  getAll: `/leaveType/getAll`,
  create: `/leaveType/create`,
  get: (id?: string) => `/leaveType/get${id ? `/:${id}` : ""}`,
  update: (id?: string) => `/leaveType/update${id ? `/:${id}` : ""}`,
  delete: (id?: string) => `/leaveType/delete${id ? `/:${id}` : ""}`,
};

export const EmployeeAdminEndpoints = {
  base: `/employee`,
  getAll: `/employee/getAll`,
  create: `/employee/create`,
  get: (id?: string) => `/employee/get${id ? `/:${id}` : ""}`,
  update: (id?: string) => `/employee/update${id ? `/:${id}` : ""}`,
  delete: (id?: string) => `/employee/delete${id ? `/:${id}` : ""}`,
};

export const AuthAdminEndpoints = {
  login: `/auth/login`,
  changePassword: `/auth/change-password`,
};

export const LeaveAdminEndpoints = {
  base: `/leave`,
  getAll: `/leave/getAll`,
  get: (id?: string) => `/leave/get${id ? `/:${id}` : ""}`,
  update: (id?: string) => `/leave/update${id ? `/:${id}` : ""}`,
};

export const AdminAuthEndpoints = {
  login: `/admin/auth/login`,
  changePassword: `/admin/change-password`,
};
