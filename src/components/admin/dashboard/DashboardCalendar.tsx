import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";
import { styled } from "@mui/material/styles";
import { Box, Tooltip } from "@mui/material";
import React from "react";
import { format } from "date-fns";

interface Props {
  dates: string[];
}

const Dot = styled("div")(({ theme }) => ({
  width: 4,
  height: 4,
  borderRadius: "50%",
  backgroundColor: theme.palette.error.light,
  marginTop: 2,
}));

const buildDateCountMap = (dates: string[]) => {
  const map = new Map<string, number>();

  dates.forEach((dateStr) => {
    const key = format(new Date(dateStr), "yyyy-MM-dd");
    map.set(key, (map.get(key) || 0) + 1);
  });

  return map;
};

const createCustomDay =
  (dateCountMap: Map<string, number>) => (props: PickersDayProps) => {
    const { day, outsideCurrentMonth, ...other } = props;

    const dateKey = format(day, "yyyy-MM-dd");
    const count = dateCountMap.get(dateKey) || 0;
    const isMarked = count > 0;

    const tooltipText = isMarked
      ? `${count} Leave${count > 1 ? "s" : ""}`
      : "No Leaves";

    return (
      <Tooltip title={tooltipText}>
        <PickersDay
          {...other}
          day={day}
          outsideCurrentMonth={outsideCurrentMonth}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            {day.getDate()}
            {isMarked && <Dot />}
          </Box>
        </PickersDay>
      </Tooltip>
    );
  };

const DashboardCalendar = ({ dates }: Props) => {
  const dateCountMap = buildDateCountMap(dates);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateCalendar
        views={["day"]}
        slots={{ day: createCustomDay(dateCountMap) }}
      />
    </LocalizationProvider>
  );
};

export default React.memo(DashboardCalendar);
