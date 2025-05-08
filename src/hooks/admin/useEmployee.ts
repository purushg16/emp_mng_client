import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import Employee, {
  DeleteEmployee,
  EmployeeFields,
} from "../../entities/employee";
import { CACHE_EMPLOYEES } from "../../data/admin/cache_key";
import {
  createEmployee,
  deleteEmployee,
  getAllEmployee,
  getSingleEmployee,
  updateEmployee,
} from "../../service/admin-client";
import ms from "ms";
import { FetchResponse } from "../../service/api-client";

const useGetAllEmployee = (itemsPerPage = 5) => {
  return useInfiniteQuery<FetchResponse<Employee>, Error>({
    queryKey: CACHE_EMPLOYEES,
    queryFn: ({ pageParam = 1 }) =>
      getAllEmployee({
        params: {
          page: pageParam,
          itemsPerPage: itemsPerPage,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    staleTime: ms("24h"),
  });
};

const useGetSingleEmployee = (id: string) => {
  return useQuery<Employee, Error>({
    queryKey: [...CACHE_EMPLOYEES, id],
    queryFn: () => getSingleEmployee(id),
    staleTime: ms("24h"),
  });
};

const useCreateEmployee = (
  employee: EmployeeFields,
  successCb: () => void,
  errorCb: () => void
) => {
  const queryClient = useQueryClient();
  return useMutation<EmployeeFields, Error, Employee>({
    mutationFn: () => createEmployee(employee),
    onSuccess: (_data, variables) => {
      successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_EMPLOYEES });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_EMPLOYEES, variables.id],
      });
    },
    onError: () => errorCb(),
  });
};

const useEditEmployee = (
  empId: string,
  employee: Partial<EmployeeFields>,
  successCb: () => void,
  errorCb: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation<Partial<EmployeeFields>, Error, Employee>({
    mutationFn: () =>
      updateEmployee(empId, {
        ...employee,
      }),
    onSuccess: (_data, variables) => {
      successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_EMPLOYEES });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_EMPLOYEES, variables.id],
      });
    },
    onError: () => errorCb(),
  });
};

const useDeleteEmployee = (
  employee: DeleteEmployee,
  successCb: () => void,
  errorCb: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation<DeleteEmployee, Error, Employee>({
    mutationFn: () => deleteEmployee(employee.id),
    onSuccess: () => {
      successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_EMPLOYEES });
    },
    onError: () => errorCb(),
  });
};

export {
  useGetAllEmployee,
  useGetSingleEmployee,
  useCreateEmployee,
  useEditEmployee,
  useDeleteEmployee,
};
