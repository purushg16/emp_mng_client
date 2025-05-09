import EmployeeTable from "../../components/admin/employee/EmployeeTable";
import EmployeeActionModal from "../../components/admin/employee/EmployeeActionModal";
import { useGetAllEmployee } from "../../hooks/admin/useEmployee";
import PageWrapper from "../../layouts/PageWrapper";
import { useState } from "react";

const EmployeePage = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { data, isLoading } = useGetAllEmployee(page, pageSize);

  return (
    <PageWrapper
      title="Manage Employee"
      actions={<EmployeeActionModal action="add" />}
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
