import { useDeleteLeaveType } from "../../../hooks/admin/useLeaveType";
import DeleteButton from "../DeleteButton";

const DeleteLeaveTypeBtn = ({ id }: { id: string }) => {
  const { mutate, isPending } = useDeleteLeaveType();

  const handleDelete = () => {
    mutate(id);
  };

  return (
    <DeleteButton
      tooltip="Delete"
      onDelete={handleDelete}
      loading={isPending}
    />
  );
};

export default DeleteLeaveTypeBtn;
