import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ms from "ms";
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
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const useGetAllDepartment = (page = 1, pageSize = 5) => {
  const searchDept = useSelector(
    (state: RootState) => state.searchFilter.department
  );

  return useQuery({
    queryKey: [...CACHE_DEPARTMENTS, page, pageSize, searchDept],
    queryFn: () =>
      getAllDepartments({
        params: {
          page,
          page_size: pageSize,
          search: searchDept,
        },
      }),
    placeholderData: (previousData) => previousData,
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

  return useMutation({
    mutationFn: createDepartment,
    onSuccess: () => {
      if (successCb) successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_DEPARTMENTS });
    },
    onError: () => {
      if (errorCb) errorCb();
    },
  });
};

const useEditDepartment = (
  id?: string,
  successCb?: () => void,
  errorCb?: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation<
    FetchResponse<Department>,
    Error,
    Partial<DepartmentFields>
  >({
    mutationFn: (data) => updateDepartment(id, data),
    onSuccess: () => {
      if (successCb) successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_DEPARTMENTS });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_DEPARTMENTS, id],
      });
    },
    onError: () => {
      if (errorCb) errorCb();
    },
  });
};

const useDeleteDepartment = (successCb?: () => void, errorCb?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteDepartment,
    onSuccess: () => {
      if (successCb) successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_DEPARTMENTS });
    },
    onError: () => {
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
