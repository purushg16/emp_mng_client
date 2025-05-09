import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { CACHE_LEAVE } from "../../data/employee/cache_key";
import Leave from "../../entities/leave";
import { FetchResponse } from "../../service/api-client";
import {
  getAllLeave,
  getSingleLeave,
  requestLeave,
} from "../../service/employee-client";
import ms from "ms";
import { useSnackbar } from "notistack";

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

const usePostLeave = (successCb?: () => void, errorCb?: () => void) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: requestLeave,
    onSuccess: (data) => {
      enqueueSnackbar(data.message, { variant: "success" });
      queryClient.invalidateQueries({
        queryKey: [CACHE_LEAVE],
      });
      if (successCb) successCb();
    },
    onError: (err) => {
      enqueueSnackbar(err.message, { variant: "error" });
      if (errorCb) errorCb();
    },
  });
};

export { useGetAllLeave, useGetSingleLeave, usePostLeave };
