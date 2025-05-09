import Paper from "@mui/material/Paper";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
} from "@mui/material";
import { format } from "date-fns";
import DeleteLeaveTypeBtn from "./DeleteLeaveTypeBtn";
import LeaveTypeActionModal from "./AddLeaveTypeModal";
import { useGetAllLeaveType } from "../../../hooks/admin/useLeaveType";

const LeaveTypeTable = () => {
  const { data, isSuccess, isFetched } = useGetAllLeaveType();

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, width: "100%" }}
        aria-label="leave-type table"
      >
        <TableHead>
          <TableRow>
            <TableCell> Sl. No. </TableCell>
            <TableCell> Leave Type </TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Creation Date</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isSuccess &&
            isFetched &&
            data.data.map((row, ind) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {ind + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  {format(row.createdAt, "dd-mm-yyyy hh:mm:ss")}
                </TableCell>
                <TableCell align="center">
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <LeaveTypeActionModal action="edit" data={row} />
                    <DeleteLeaveTypeBtn id={row.id.toString()} />
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaveTypeTable;
