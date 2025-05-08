import {
  createLeaveType,
  deleteLeaveType,
  getAllLeaveType,
  getSingleLeaveType,
  updateLeaveType,
} from "../../service/admin-client";
import { CACHE_LEAVE_TYPE } from "../../data/admin/cache_key";
import { FetchResponse } from "../../service/api-client";
import {
  DeleteLeaveType,
  LeaveType,
  LeaveTypeFields,
} from "../../entities/leaveType";
import ms from "ms";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useGetAllLeaveType = () => {
  return useQuery<FetchResponse<LeaveType>, Error>({
    queryKey: CACHE_LEAVE_TYPE,
    queryFn: getAllLeaveType,
    staleTime: ms("24h"),
  });
};

const useGetSingleLeaveType = (id: string) => {
  return useQuery<LeaveType, Error>({
    queryKey: [...CACHE_LEAVE_TYPE, id],
    queryFn: () => getSingleLeaveType(id),
    staleTime: ms("24h"),
  });
};

const useCreateLeaveType = (
  leaveType: LeaveTypeFields,
  successCb: () => void,
  errorCb: () => void
) => {
  const queryClient = useQueryClient();
  return useMutation<LeaveTypeFields, Error, LeaveType>({
    mutationFn: () => createLeaveType({ ...leaveType }),
    onSuccess: (_data, variables) => {
      successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_LEAVE_TYPE });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_LEAVE_TYPE, variables.id],
      });
    },
    onError: () => errorCb(),
  });
};

const useEditLeaveType = (
  id: string,
  lt: Partial<LeaveTypeFields>,
  successCb: () => void,
  errorCb: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation<Partial<LeaveTypeFields>, Error, LeaveType>({
    mutationFn: () => updateLeaveType(id, { ...lt }),
    onSuccess: (_data, variables) => {
      successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_LEAVE_TYPE });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_LEAVE_TYPE, variables.id],
      });
    },
    onError: () => errorCb(),
  });
};

const useDeleteLeaveType = (
  id: string,
  successCb: () => void,
  errorCb: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation<DeleteLeaveType, Error>({
    mutationFn: () => deleteLeaveType(id),
    onSuccess: () => {
      successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_LEAVE_TYPE });
    },
    onError: () => errorCb(),
  });
};

export {
  useGetAllLeaveType,
  useCreateLeaveType,
  useGetSingleLeaveType,
  useEditLeaveType,
  useDeleteLeaveType,
};
