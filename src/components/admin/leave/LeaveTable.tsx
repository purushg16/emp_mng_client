import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  CircularProgress,
  Box,
  Stack,
} from "@mui/material";
import { format } from "date-fns";
import LeaveActionModal from "./LeaveActionModal";
import { AdminLeave } from "../../../entities/leave";

interface Props {
  data: AdminLeave[];
  isLoading: boolean;
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (newSize: number) => void;
}

const LeaveTable = ({
  data,
  isLoading,
  page,
  pageSize,
  total,
  onPageChange,
  onRowsPerPageChange,
}: Props) => {
  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sl.No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Leave Type</TableCell>
              <TableCell>Applied At</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5}>
                  <Box textAlign="center">
                    <CircularProgress size={24} />
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              data.map((leave, index) => (
                <TableRow key={leave.id}>
                  <TableCell>{(page - 1) * pageSize + index + 1}</TableCell>
                  <TableCell>
                    {leave.firstName} {leave.lastName}
                  </TableCell>
                  <TableCell>{leave.leaveTypeName}</TableCell>
                  <TableCell>
                    {format(leave.postedAt, "dd/mm/yyyy hh:mm:ss")}
                  </TableCell>
                  <TableCell>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <LeaveActionModal leave={leave} />
                    </Stack>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={total}
        page={page - 1}
        rowsPerPage={pageSize}
        onPageChange={(_, newPage) => onPageChange(newPage + 1)}
        onRowsPerPageChange={(e) =>
          onRowsPerPageChange(parseInt(e.target.value))
        }
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Paper>
  );
};

export default LeaveTable;
