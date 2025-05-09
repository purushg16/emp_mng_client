export default {
  admin: import.meta.env.VITE_ADMIN_TOKEN as string,
  employee: import.meta.env.VITE_EMPLOYEE_TOKEN as string,
};

export type CurrentClient = "admin" | "employee";
