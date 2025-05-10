export const leaveTypeEmployeeEndpoints = {
  getAll: `/employee/leaveType/getAll`,
};

export const ProfileEmployeeEndpoints = {
  get: `/employee/profile/get`,
  update: `/employee/profile/update`,
};

export const LeaveEmployeeEndpoints = {
  get: `/employee/leave/view`,
  getAll: `/employee/leave/view`,
  post: `/employee/leave/apply`,
};

export const EmployeeAuthEndpoints = {
  login: `/employee/auth/login`,
  changePassword: `/employee/profile/update-password`,
};
