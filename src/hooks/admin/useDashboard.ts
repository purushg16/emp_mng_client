import { useQuery } from "@tanstack/react-query";
import { CACHE_DASHBOARD } from "../../data/admin/cache_key";
import { getDashboardStats } from "../../service/admin-client";

const useGetDashboardStats = () =>
  useQuery({
    queryKey: CACHE_DASHBOARD,
    queryFn: getDashboardStats,
  });

export { useGetDashboardStats };
