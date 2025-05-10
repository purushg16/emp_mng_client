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
  Alert,
} from "@mui/material";
import { format } from "date-fns";
import LeaveActionModal from "./LeaveActionModal";
import Leave, { AdminLeave } from "../../../entities/leave";
import isAdminLeave from "../../../helpers/adminLeaveTypeFinder";

interface Props {
  isEmployee?: boolean;
  data: AdminLeave[] | Leave[];
  isLoading: boolean;
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (newSize: number) => void;
}

const LeaveTable = ({
  isEmployee = false,
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
              {!isEmployee && <TableCell>Name</TableCell>}
              <TableCell>Leave Type</TableCell>
              {isEmployee && (
                <>
                  <TableCell>Duration</TableCell>
                  <TableCell>Description</TableCell>
                </>
              )}
              <TableCell>Applied At</TableCell>
              {isEmployee && <TableCell> Remarks </TableCell>}
              <TableCell align="center">
                {isEmployee ? "Status" : "Actions"}
              </TableCell>
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
              data.some((obj) => Object.keys(obj).length > 0) &&
              data.map((leave, index) => (
                <>
                  {leave && (
                    <TableRow key={leave.id}>
                      <TableCell>{(page - 1) * pageSize + index + 1}</TableCell>
                      {!isEmployee && isAdminLeave(leave) && (
                        <TableCell>
                          {leave.firstName} {leave.lastName}
                        </TableCell>
                      )}
                      <TableCell>{leave.leaveTypeName}</TableCell>
                      {isEmployee && (
                        <>
                          <TableCell>
                            {format(leave.from, "dd/MM/yyyy")}
                            <br />
                            {format(leave.to, "dd/MM/yyyy")}
                          </TableCell>
                          <TableCell
                            sx={{
                              fontSize: "12px",
                              fontStyle: "italic",
                              width: 200,
                            }}
                          >
                            {leave.desc}
                          </TableCell>
                        </>
                      )}
                      <TableCell>
                        {format(leave.postedAt, "dd/MM/yyyy")}
                        <br />
                        {format(leave.postedAt, "hh:mm:ss")}
                      </TableCell>
                      {isEmployee && (
                        <TableCell>{leave.remark || "-"}</TableCell>
                      )}
                      <TableCell>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          {!isEmployee && isAdminLeave(leave) && (
                            <LeaveActionModal leave={leave} />
                          )}
                          {isEmployee && (
                            <Alert
                              sx={{
                                py: 0,
                                px: 0.8,
                                textTransform: "capitalize",
                              }}
                              severity={
                                leave.status === "approved"
                                  ? "success"
                                  : leave.status === "declined"
                                  ? "error"
                                  : "warning"
                              }
                            >
                              {leave.status}
                            </Alert>
                          )}
                        </Stack>
                      </TableCell>
                    </TableRow>
                  )}
                </>
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
