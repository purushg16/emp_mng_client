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
import { useSnackbar } from "notistack";

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

const useCreateLeaveType = (successCb: () => void, errorCb: () => void) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation<FetchResponse<LeaveType>, Error, LeaveTypeFields>({
    mutationFn: createLeaveType,
    onSuccess: (data) => {
      successCb();
      enqueueSnackbar(data.message, { variant: "success" });
      queryClient.invalidateQueries({ queryKey: CACHE_LEAVE_TYPE });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_LEAVE_TYPE, data.data[0].id],
      });
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: "error" });
      errorCb();
    },
  });
};

const useEditLeaveType = (
  id: string,
  successCb: () => void,
  errorCb: () => void
) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation<FetchResponse<LeaveType>, Error, Partial<LeaveTypeFields>>(
    {
      mutationFn: () => updateLeaveType(id),
      onSuccess: (data) => {
        successCb();
        enqueueSnackbar(data.message, { variant: "success" });
        queryClient.invalidateQueries({ queryKey: CACHE_LEAVE_TYPE });
        queryClient.invalidateQueries({
          queryKey: [...CACHE_LEAVE_TYPE, data.data[0].id],
        });
      },
      onError: (err) => {
        enqueueSnackbar(err.message, { variant: "error" });
        errorCb();
      },
    }
  );
};

const useDeleteLeaveType = (
  id: string,
  successCb: () => void,
  errorCb: () => void
) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation<FetchResponse<string>, Error>({
    mutationFn: () => deleteLeaveType(id),
    onSuccess: (data) => {
      successCb();
      enqueueSnackbar(data.message, { variant: "success" });
      queryClient.invalidateQueries({ queryKey: CACHE_LEAVE_TYPE });
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: "error" });
      errorCb();
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
