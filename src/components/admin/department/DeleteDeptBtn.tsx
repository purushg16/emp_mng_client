import { useDeleteDepartment } from "../../../hooks/admin/useDepartment";
import DeleteButton from "../DeleteButton";

const DeleteDeptBtn = ({ departmentId }: { departmentId: string }) => {
  const { mutate, isPending } = useDeleteDepartment();

  const handleDel = () => {
    mutate(departmentId);
  };

  return <DeleteButton onDelete={handleDel} loading={isPending} />;
};

export default DeleteDeptBtn;
