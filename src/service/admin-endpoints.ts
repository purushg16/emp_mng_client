const adminBase = "/admin";

export const departmentAdminEndpoints = {
  base: `${adminBase}/departments`,
  getAll: `${adminBase}/departments/getAll`,
  create: `${adminBase}/departments/create`,
  get: `${adminBase}/departments/get`,
  update: `${adminBase}/departments/update`,
  delete: `${adminBase}/departments/delete`,
};

export const leaveTypeAdminEndpoints = {
  base: `${adminBase}/leaveType`,
  getAll: `${adminBase}/leaveType/getAll`,
  create: `${adminBase}/leaveType/create`,
  get: `${adminBase}/leaveType/get`,
  update: `${adminBase}/leaveType/update`,
  delete: `${adminBase}/leaveType/delete`,
};

export const EmployeeAdminEndpoints = {
  base: `${adminBase}/employee`,
  getAll: `${adminBase}/employee/getAll`,
  create: `${adminBase}/employee/create`,
  get: `${adminBase}/employee/get`,
  update: `${adminBase}/employee/update`,
  delete: `${adminBase}/employee/delete`,
};

export const AuthAdminEndpoints = {
  login: `${adminBase}/auth/login`,
  changePassword: `${adminBase}/auth/change-password`,
};

export const LeaveAdminEndpoints = {
  base: `${adminBase}/leave`,
  getAll: `${adminBase}/leave/getAll`,
  get: `${adminBase}/leave/get`,
  update: `${adminBase}/leave/update`,
};

export const AdminAuthEndpoints = {
  login: `${adminBase}/admin/auth/login`,
  changePassword: `${adminBase}/admin/change-password`,
};
