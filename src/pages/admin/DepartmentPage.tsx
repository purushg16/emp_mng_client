import DepartmentTable from "../../components/admin/department/DepartmentTable";
import DeptActionModal from "../../components/admin/department/DeptActionModal";
import { useGetAllDepartment } from "../../hooks/admin/useDepartment";
import { useState } from "react";
import PageWrapper from "../../layouts/PageWrapper";
import { Stack } from "@mui/material";
import SearchFilter from "../../components/admin/SearchFilter";

const DepartmentPage = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { data, isLoading } = useGetAllDepartment(page, pageSize);

  return (
    <PageWrapper
      title="Manage Department"
      actions={
        <Stack direction="row" gap={2}>
          <DeptActionModal action="add" />
          <SearchFilter for="department" />
        </Stack>
      }
    >
      <DepartmentTable
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

export default DepartmentPage;
