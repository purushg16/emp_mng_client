import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  createDepartment,
  deleteDepartment,
  getAllDepartments,
  getSingleDepartment,
} from "../../service/admin-client";
import {
  DeleteDepartment,
  Department,
  DepartmentFields,
} from "../../entities/department";
import { CACHE_DEPARTMENTS } from "../../data/admin/cache_key";
import { FetchResponse } from "../../service/api-client";
import ms from "ms";

const useGetAllDepartment = (itemsPerPage = 5) => {
  return useInfiniteQuery<FetchResponse<Department>, Error>({
    queryKey: CACHE_DEPARTMENTS,
    queryFn: ({ pageParam = 1 }) =>
      getAllDepartments({
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

const useGetSingleDepartment = (id: string) => {
  return useQuery<Department, Error>({
    queryKey: [...CACHE_DEPARTMENTS, id],
    queryFn: () => getSingleDepartment(),
    staleTime: ms("24h"),
  });
};

const useCreateDepartment = (
  employee: DepartmentFields,
  successCb: () => void,
  errorCb: () => void
) => {
  const queryClient = useQueryClient();
  return useMutation<DepartmentFields, Error, Department>({
    mutationFn: () =>
      createDepartment({
        ...employee,
      }),
    onSuccess: (_data, variables) => {
      successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_DEPARTMENTS });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_DEPARTMENTS, variables.id],
      });
    },
    onError: () => errorCb(),
  });
};

const useEditDepartment = (
  department: Partial<DepartmentFields>,
  successCb: () => void,
  errorCb: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation<DepartmentFields, Error, Department>({
    mutationFn: () =>
      createDepartment({
        ...department,
      }),
    onSuccess: (_data, variables) => {
      successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_DEPARTMENTS });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_DEPARTMENTS, variables.id],
      });
    },
    onError: () => errorCb(),
  });
};

const useDeleteDepartment = (
  departmentId: string,
  successCb: () => void,
  errorCb: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation<DeleteDepartment, Error, Department>({
    mutationFn: () => deleteDepartment(departmentId),
    onSuccess: () => {
      successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_DEPARTMENTS });
    },
    onError: () => errorCb(),
  });
};

export {
  useGetAllDepartment,
  useGetSingleDepartment,
  useCreateDepartment,
  useEditDepartment,
  useDeleteDepartment,
};
