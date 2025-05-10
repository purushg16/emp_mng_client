import { Stack } from "@mui/material";
import { useState } from "react";
import EmployeeActionModal from "../../components/admin/employee/EmployeeActionModal";
import EmployeeTable from "../../components/admin/employee/EmployeeTable";
import SearchFilter from "../../components/admin/SearchFilter";
import { useGetAllEmployee } from "../../hooks/admin/useEmployee";
import PageWrapper from "../../layouts/PageWrapper";

const EmployeePage = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { data, isLoading } = useGetAllEmployee(page, pageSize);

  return (
    <PageWrapper
      title="Employee"
      actions={
        <Stack direction="row" gap={2}>
          <EmployeeActionModal action="add" />
          <SearchFilter for="employee" />
        </Stack>
      }
    >
      <EmployeeTable
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

export default EmployeePage;
