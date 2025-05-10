import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CACHE_LEAVE } from "../../data/employee/cache_key";
import Leave from "../../entities/leave";
import { FetchResponse } from "../../service/api-client";
import {
  getAllLeave,
  getSingleLeave,
  requestLeave,
} from "../../service/employee-client";
import ms from "ms";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const useGetAllLeave = (page = 1, pageSize = 5) => {
  const status = useSelector((state: RootState) => state.leaveFilter.status);

  return useQuery<FetchResponse<Leave>, Error>({
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
  useQuery({
    queryKey: [...CACHE_LEAVE, id],
    queryFn: () => getSingleLeave(id),
    staleTime: ms("24h"),
  });

const usePostLeave = (successCb?: () => void, errorCb?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: requestLeave,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: CACHE_LEAVE,
      });
      if (successCb) successCb();
    },
    onError: () => {
      if (errorCb) errorCb();
    },
  });
};

export { useGetAllLeave, useGetSingleLeave, usePostLeave };
