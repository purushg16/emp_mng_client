import { useState } from "react";
import LeaveTable from "../../components/admin/leave/LeaveTable";
import LeaveApplyModal from "../../components/employee/LeaveApplyModal";
import { useGetAllLeave } from "../../hooks/employee/useLeave";
import PageWrapper from "../../layouts/PageWrapper";
import { Stack } from "@mui/material";
import LeaveQuery from "../../components/admin/leave/LeaveQuery";

const LeavePage = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { data, isLoading } = useGetAllLeave(page, pageSize);

  return (
    <PageWrapper
      title="Leaves"
      actions={
        <Stack direction="row" gap={3}>
          <LeaveApplyModal />
          <LeaveQuery />
        </Stack>
      }
    >
      <LeaveTable
        data={data?.data || []}
        isLoading={isLoading}
        page={data?.page || page}
        pageSize={data?.page_size || pageSize}
        total={data?.total || 0}
        onPageChange={setPage}
        onRowsPerPageChange={(newSize) => {
          setPageSize(newSize);
          setPage(1);
        }}
        isEmployee
      />
    </PageWrapper>
  );
};
export default LeavePage;
