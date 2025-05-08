import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { CACHE_LEAVE } from "../../data/admin/cache_key";
import Leave, { LeaveApproveFields } from "../../entities/leave";
import { FetchResponse } from "../../service/api-client";
import {
  getAllLeave,
  getSingleLeave,
  updateLeave,
} from "../../service/admin-client";
import ms from "ms";

const useGetAllLeave = (itemsPerPage = 5) =>
  useInfiniteQuery<FetchResponse<Leave>, Error>({
    queryKey: CACHE_LEAVE,
    queryFn: ({ pageParam = 1 }) =>
      getAllLeave({
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

const useGetSingleLeave = (id: string) =>
  useQuery<Leave, Error>({
    queryKey: [...CACHE_LEAVE, id],
    queryFn: () => getSingleLeave(id),
    staleTime: ms("24h"),
  });

const useUpdateLeave = (
  id: string,
  leave: LeaveApproveFields,
  successCb: () => void,
  errorCb: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation<Partial<LeaveApproveFields>, Error, Leave>({
    mutationFn: () => updateLeave(id, leave),
    onSuccess: (_data, variables) => {
      successCb();
      queryClient.invalidateQueries({ queryKey: CACHE_LEAVE });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_LEAVE, variables.id],
      });
    },
    onError: () => errorCb(),
  });
};

export { useGetAllLeave, useGetSingleLeave, useUpdateLeave };
