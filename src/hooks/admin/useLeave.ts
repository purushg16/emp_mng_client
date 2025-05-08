import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { CACHE_LEAVE } from "../../data/admin/cache_key";
import Leave, { LeaveApproveFields } from "../../entities/leave";
import {
  getAllLeave,
  getSingleLeave,
  updateLeave,
} from "../../service/admin-client";
import ms from "ms";
import { FetchResponse } from "../../service/api-client";
import { useSnackbar } from "notistack";

const useGetAllLeave = (itemsPerPage = 5) =>
  useInfiniteQuery({
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
  successCb: () => void,
  errorCb: () => void
) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation<FetchResponse<Leave>, Error, Partial<LeaveApproveFields>>({
    mutationFn: (data) => updateLeave(id, data),
    onSuccess: (data) => {
      successCb();
      enqueueSnackbar(data.message, { variant: "success" });
      queryClient.invalidateQueries({ queryKey: CACHE_LEAVE });
      queryClient.invalidateQueries({
        queryKey: [...CACHE_LEAVE, data.data[0].id],
      });
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: "error" });
      errorCb();
    },
  });
};

export { useGetAllLeave, useGetSingleLeave, useUpdateLeave };
