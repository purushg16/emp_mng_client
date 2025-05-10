import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Employee from "../../../entities/employee";
import { format } from "date-fns";
import Stack from "@mui/material/Stack";
import EmployeeActionModal from "./EmployeeActionModal";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Alert } from "@mui/material";
import EmployeeStatusEditor from "./EmployeeStatusEditor";

const employeeColumns = [
  "Sl.No.",
  "Emp. Code",
  "Emp. Name",
  "Department",
  "Status",
  "Reg. Date",
  "Action",
];

interface Props {
  data: Employee[];
  isLoading: boolean;
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (newSize: number) => void;
}

const EmployeeTable = ({
  data,
  isLoading,
  page,
  pageSize,
  total,
  onPageChange,
  onRowsPerPageChange,
}: Props) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {employeeColumns.map((column, ind) => (
                <TableCell
                  key={ind}
                  align={column === "Action" ? "center" : undefined}
                >
                  {column}
                </TableCell>
              ))}
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
              data.map((emp, index) => (
                <TableRow key={emp.code}>
                  <TableCell>{(page - 1) * pageSize + index + 1}</TableCell>
                  <TableCell>{emp.code}</TableCell>
                  <TableCell>
                    {emp.firstName} {emp.lastName}
                  </TableCell>
                  <TableCell>{emp.departmentId}</TableCell>
                  <TableCell>
                    <Alert
                      severity={emp.status === "active" ? "success" : "error"}
                      sx={{ py: 0, px: 1, width: "max-content" }}
                    >
                      {emp.status}
                    </Alert>
                  </TableCell>
                  <TableCell>{format(emp.createdAt, "dd/MM/yyyy")}</TableCell>
                  <TableCell>
                    <Stack justifyContent="center" alignItems="center">
                      <EmployeeActionModal action="edit" data={emp} />
                      <EmployeeStatusEditor id={emp.id} status={emp.status} />
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

export default EmployeeTable;
