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
import { Department } from "../../../entities/department";
import DeleteDeptBtn from "./DeleteDeptBtn";
import DeptActionModal from "./DeptActionModal";
import { format } from "date-fns";

interface Props {
  data: Department[];
  isLoading: boolean;
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (newSize: number) => void;
}

const DepartmentTable = ({
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
              <TableCell>Code</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Short Name</TableCell>
              <TableCell>Creation Date</TableCell>
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
              data.some((obj) => Object.keys(obj).length > 0) &&
              data.map((dept, index) => (
                <TableRow key={dept.id}>
                  <TableCell>{(page - 1) * pageSize + index + 1}</TableCell>
                  <TableCell>{dept.code}</TableCell>
                  <TableCell>{dept.name}</TableCell>
                  <TableCell>{dept.shortName}</TableCell>
                  <TableCell>
                    {format(dept.createdAt, "dd/mm/yyyy hh:mm:ss")}
                  </TableCell>
                  <TableCell>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <DeptActionModal action="edit" data={dept} />
                      <DeleteDeptBtn departmentId={dept.id} />
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

export default DepartmentTable;
