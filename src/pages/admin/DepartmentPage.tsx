import { Stack, Typography } from "@mui/material";
import DepartmentTable from "../../components/admin/department/DepartmentTable";
import DeptActionModal from "../../components/admin/department/DeptActionModal";
import { useGetAllDepartment } from "../../hooks/admin/useDepartment";
import { useState } from "react";

const DepartmentPage = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { data, isLoading } = useGetAllDepartment(page, pageSize);

  return (
    <Stack gap={4}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography> Manage Department </Typography>
        <DeptActionModal action="add" />
      </Stack>
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
    </Stack>
  );
};

export default DepartmentPage;
