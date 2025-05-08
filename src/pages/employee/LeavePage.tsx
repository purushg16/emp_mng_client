import LeaveApplyModal from "../../components/employee/LeaveApplyModal";
import PageWrapper from "../../layouts/PageWrapper";

const LeavePage = () => (
  <PageWrapper title="Leaves" actions={<LeaveApplyModal />}></PageWrapper>
);
export default LeavePage;
