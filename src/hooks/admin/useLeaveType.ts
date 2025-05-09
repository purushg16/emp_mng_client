import {
  createLeaveType,
  deleteLeaveType,
  getAllLeaveType,
  getSingleLeaveType,
  updateLeaveType,
} from "../../service/admin-client";
import { CACHE_LEAVE_TYPE } from "../../data/admin/cache_key";
import { FetchResponse } from "../../service/api-client";
import { LeaveType, LeaveTypeFields } from "../../entities/leaveType";
import ms from "ms";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useGetAllLeaveType = () => {
  return useQuery<FetchResponse<LeaveType>, Error>({
    queryKey: CACHE_LEAVE_TYPE,
    queryFn: getAllLeaveType,
  });
};

const useGetSingleLeaveType = (id: string) => {
  return useQuery<LeaveType, Error>({
    queryKey: [...CACHE_LEAVE_TYPE, id],
    queryFn: () => getSingleLeaveType(id),
    staleTime: ms("24h"),
  });
};

const useCreateLeaveType = (successCb?: () => void, errorCb?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<FetchResponse<LeaveType>, Error, LeaveTypeFields>({
    mutationFn: createLeaveType,
    onSuccess: () => {
      if (successCb) successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_LEAVE_TYPE });
    },
    onError: () => {
      if (errorCb) errorCb();
    },
  });
};

const useEditLeaveType = (
  id?: string,
  successCb?: () => void,
  errorCb?: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation<FetchResponse<LeaveType>, Error, Partial<LeaveTypeFields>>(
    {
      mutationFn: (data) => updateLeaveType(id, data),
      onSuccess: () => {
        if (successCb) successCb();
        queryClient.invalidateQueries({ queryKey: CACHE_LEAVE_TYPE });
        queryClient.invalidateQueries({
          queryKey: [...CACHE_LEAVE_TYPE, id],
        });
      },
      onError: () => {
        if (errorCb) errorCb();
      },
    }
  );
};

const useDeleteLeaveType = (successCb?: () => void, errorCb?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<FetchResponse<string>, Error, string>({
    mutationFn: (id) => deleteLeaveType(id),
    onSuccess: () => {
      if (successCb) successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_LEAVE_TYPE });
    },
    onError: () => {
      if (errorCb) errorCb();
    },
  });
};

export {
  useGetAllLeaveType,
  useCreateLeaveType,
  useGetSingleLeaveType,
  useEditLeaveType,
  useDeleteLeaveType,
};
