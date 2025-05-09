import { useState } from "react";
import LeaveTable from "../../components/admin/leave/LeaveTable";
import { useGetAllLeave } from "../../hooks/admin/useLeave";
import PageWrapper from "../../layouts/PageWrapper";
import LeaveQuery from "../../components/admin/leave/LeaveQuery";

const LeavePage = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { data, isLoading } = useGetAllLeave(page, pageSize);

  return (
    <PageWrapper title="Manage Leave" actions={<LeaveQuery />}>
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
      />
    </PageWrapper>
  );
};

export default LeavePage;
