import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import ms from "ms";
import { useSnackbar } from "notistack";
import { CACHE_DEPARTMENTS } from "../../data/admin/cache_key";
import { Department, DepartmentFields } from "../../entities/department";
import {
  createDepartment,
  deleteDepartment,
  getAllDepartments,
  getSingleDepartment,
  updateDepartment,
} from "../../service/admin-client";
import { FetchResponse } from "../../service/api-client";

const useGetAllDepartment = (itemsPerPage = 5) => {
  return useInfiniteQuery({
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
  return useQuery({
    queryKey: [...CACHE_DEPARTMENTS, id],
    queryFn: () => getSingleDepartment(id),
    staleTime: ms("24h"),
  });
};

const useCreateDepartment = (successCb?: () => void, errorCb?: () => void) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: createDepartment,
    onSuccess: (data) => {
      if (successCb) successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_DEPARTMENTS });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_DEPARTMENTS, data.data[0].id],
      });
      enqueueSnackbar(data.message, { variant: "success" });
    },
    onError: (error) => {
      if (errorCb) errorCb();
      enqueueSnackbar(error.message, { variant: "error" });
    },
  });
};

const useEditDepartment = (
  id: string,
  successCb?: () => void,
  errorCb?: () => void
) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation<
    FetchResponse<Department>,
    Error,
    Partial<DepartmentFields>
  >({
    mutationFn: (data) => updateDepartment(id, data),
    onSuccess: (data) => {
      if (successCb) successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_DEPARTMENTS });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_DEPARTMENTS, data.data[0].id],
      });
      enqueueSnackbar(data.message, { variant: "success" });
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
      if (errorCb) errorCb();
    },
  });
};

const useDeleteDepartment = (successCb?: () => void, errorCb?: () => void) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: deleteDepartment,
    onSuccess: (data) => {
      if (successCb) successCb();
      enqueueSnackbar(data.message, { variant: "success" });
      queryClient.invalidateQueries({ queryKey: CACHE_DEPARTMENTS });
    },
    onError: (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
      if (errorCb) errorCb();
    },
  });
};

export {
  useCreateDepartment,
  useDeleteDepartment,
  useEditDepartment,
  useGetAllDepartment,
  useGetSingleDepartment,
};
