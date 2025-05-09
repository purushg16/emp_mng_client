import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CACHE_LEAVE } from "../../data/admin/cache_key";
import Leave, { LeaveApproveFields } from "../../entities/leave";
import {
  getAllLeave,
  getSingleLeave,
  updateLeave,
} from "../../service/admin-client";
import ms from "ms";
import { FetchResponse } from "../../service/api-client";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const useGetAllLeave = (page = 1, pageSize = 5) => {
  const status = useSelector((state: RootState) => state.leaveFilter.status);

  return useQuery({
    queryKey: [...CACHE_LEAVE, page, pageSize, status],
    queryFn: () =>
      getAllLeave({
        params: {
          status: status === "all" ? undefined : status,
          page,
          page_size: pageSize,
        },
      }),
    placeholderData: (previousData) => previousData,
  });
};

const useGetSingleLeave = (id: string) =>
  useQuery<Leave, Error>({
    queryKey: [...CACHE_LEAVE, id],
    queryFn: () => getSingleLeave(id),
    staleTime: ms("24h"),
  });

const useUpdateLeave = (
  id?: string,
  successCb?: () => void,
  errorCb?: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation<FetchResponse<Leave>, Error, Partial<LeaveApproveFields>>({
    mutationFn: (data) => updateLeave(id, data),
    onSuccess: () => {
      if (successCb) successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_LEAVE });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_LEAVE, id],
      });
    },
    onError: () => {
      if (errorCb) errorCb();
    },
  });
};

export { useGetAllLeave, useGetSingleLeave, useUpdateLeave };
