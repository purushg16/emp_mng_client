import { useQuery } from "@tanstack/react-query";
import { CACHE_LEAVE_TYPE } from "../../data/admin/cache_key";
import { LeaveType } from "../../entities/leaveType";
import { getAllLeaveType } from "../../service/employee-client";
import { FetchResponse } from "../../service/api-client";

const useGetAllLeaveType = () => {
  return useQuery<FetchResponse<LeaveType>, Error>({
    queryKey: CACHE_LEAVE_TYPE,
    queryFn: getAllLeaveType,
  });
};

export { useGetAllLeaveType };
