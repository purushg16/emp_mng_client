import LeaveTypeActionModal from "../../components/admin/leaveType/AddLeaveTypeModal";
import LeaveTypeTable from "../../components/admin/leaveType/LeaveTypeTable";
import PageWrapper from "../../layouts/PageWrapper";

const LeaveTypePage = () => {
  return (
    <PageWrapper
      title="Manage Leave Types"
      actions={<LeaveTypeActionModal action="add" />}
    >
      <LeaveTypeTable />
    </PageWrapper>
  );
};

export default LeaveTypePage;
