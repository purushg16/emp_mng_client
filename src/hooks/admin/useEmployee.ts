import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_EMPLOYEES } from "../../data/admin/cache_key";
import Employee, { EmployeeFields } from "../../entities/employee";
import {
  createEmployee,
  deleteEmployee,
  getAllEmployee,
  getSingleEmployee,
  updateEmployee,
} from "../../service/admin-client";
import { FetchResponse } from "../../service/api-client";

const useGetAllEmployee = (page = 1, pageSize = 5) =>
  useQuery({
    queryKey: [...CACHE_EMPLOYEES, page, pageSize],
    queryFn: () =>
      getAllEmployee({
        params: {
          page,
          page_size: pageSize,
        },
      }),
    placeholderData: (previousData) => previousData,
  });

const useGetSingleEmployee = (id: string) => {
  return useQuery({
    queryKey: [...CACHE_EMPLOYEES, id],
    queryFn: () => getSingleEmployee(id),
    staleTime: ms("24h"),
  });
};

const useCreateEmployee = (successCb?: () => void, errorCb?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEmployee,
    onSuccess: () => {
      if (successCb) successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_EMPLOYEES });
    },
    onError: () => {
      if (errorCb) errorCb();
    },
  });
};

const useEditEmployee = (
  empId?: string,
  successCb?: () => void,
  errorCb?: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation<FetchResponse<Employee>, Error, Partial<EmployeeFields>>({
    mutationFn: (data) => updateEmployee(empId, data),
    onSuccess: () => {
      if (successCb) successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_EMPLOYEES });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_EMPLOYEES, empId],
      });
    },
    onError: () => {
      if (errorCb) errorCb();
    },
  });
};

const useDeleteEmployee = (successCb?: () => void, errorCb?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      if (successCb) successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_EMPLOYEES });
    },
    onError: () => {
      if (errorCb) errorCb();
    },
  });
};

export {
  useCreateEmployee,
  useDeleteEmployee,
  useEditEmployee,
  useGetAllEmployee,
  useGetSingleEmployee,
};
