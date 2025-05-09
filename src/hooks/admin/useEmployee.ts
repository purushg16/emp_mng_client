import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useSnackbar } from "notistack";
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

const useGetAllEmployee = (itemsPerPage = 5) => {
  return useInfiniteQuery({
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

const useCreateEmployee = (successCb?: () => void, errorCb?: () => void) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: createEmployee,
    onSuccess: (data) => {
      if (successCb) successCb();
      enqueueSnackbar(data.message, { variant: "success" });
      queryClient.invalidateQueries({ queryKey: CACHE_EMPLOYEES });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_EMPLOYEES, data.data[0].id],
      });
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: "error" });
      if (errorCb) errorCb();
    },
  });
};

const useEditEmployee = (
  empId: string,
  successCb?: () => void,
  errorCb?: () => void
) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation<FetchResponse<Employee>, Error, Partial<EmployeeFields>>({
    mutationFn: (data) => updateEmployee(empId, data),
    onSuccess: (data) => {
      if (successCb) successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_EMPLOYEES });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_EMPLOYEES, data.data[0].id],
      });
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: "error" });
      if (errorCb) errorCb();
    },
  });
};

const useDeleteEmployee = (successCb?: () => void, errorCb?: () => void) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      if (successCb) successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_EMPLOYEES });
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: "error" });
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
