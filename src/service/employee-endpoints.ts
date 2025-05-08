export const leaveTypeEmployeeEndpoints = {
  getAll: `/leaveType/getAll`,
};

export const ProfileEmployeeEndpoints = {
  get: `/profile/get`,
  update: `/profile/update`,
};

export const LeaveEmployeeEndpoints = {
  get: (id?: string) => `/leave/view${id ? `/${id}` : ""}`,
  getAll: `/leave/view`,
  post: `/leave/apply`,
};

export const EmployeeAuthEndpoints = {
  login: `/employee/auth/login`,
  changePassword: `/employee/update-password`,
};
