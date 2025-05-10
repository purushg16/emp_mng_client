import { CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { useGetDashboardStats } from "../../hooks/admin/useDashboard";
import DataCard from "../../components/admin/dashboard/DataCard";
import { useNavigate } from "react-router";
import DashboardCalendar from "../../components/admin/dashboard/DashboardCalendar";

const DashboardPage = () => {
  const { data, status, fetchStatus } = useGetDashboardStats();
  const navigate = useNavigate();

  if (status === "pending" || fetchStatus === "fetching")
    return <CircularProgress />;

  return (
    <Stack gap={6}>
      <Stack gap={1}>
        <Typography variant="h4" fontWeight={500}>
          Dashboard
        </Typography>
        <Typography variant="body1" color="gray">
          Manage all your things at one place. Have a look at the recent
          activities
        </Typography>
      </Stack>
      {data && (
        <Grid container>
          <Grid size={6}>
            <Stack
              direction="row"
              width="100%"
              gap={2}
              maxWidth="100%"
              flexWrap="wrap"
            >
              <DataCard
                title="Employee On Leave Today"
                data={data.data[0].employeesOnLeaveToday}
                color="error"
              />
              <DataCard
                title="Pending Leaves"
                data={data.data[0].pendingLeaves}
                color="warning"
                actionText="View All"
                onClick={() => navigate("/admin/leave")}
              />
              <DataCard
                title="New Employees"
                data={data.data[0].newEmployees}
                color="success"
                actionText="View All"
                onClick={() => navigate("/admin/employee")}
              />
              <DataCard
                title="Total Departments"
                data={data.data[0].totalDepartments}
                color="info"
                actionText="View All"
                onClick={() => navigate("/admin/department")}
              />
            </Stack>
          </Grid>

          <Grid size={6}>
            <Typography
              sx={{ width: "100%", textAlign: "center", display: "block" }}
              variant="button"
              gutterBottom
            >
              View Monthly Leave Activity
            </Typography>
            <DashboardCalendar dates={data?.data[0].approvedLeaveDates} />
          </Grid>
        </Grid>
      )}
    </Stack>
  );
};
export default DashboardPage;
