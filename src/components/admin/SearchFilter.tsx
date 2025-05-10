import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "../../store/slices/searchFilterSlice";
import { RootState } from "../../store";
import { SearchFilterState } from "../../store/slices/searchFilterSlice";

interface Props {
  for: keyof SearchFilterState;
}

const SearchFilter = ({ for: key }: Props) => {
  const dispatch = useDispatch();

  const value = useSelector((state: RootState) => state.searchFilter[key]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setStatus({ key, value: event.target.value }));
  };

  return (
    <TextField
      label={`Search ${key}`}
      value={value}
      onChange={handleChange}
      variant="filled"
      size="small"
      sx={{ width: 300 }}
    />
  );
};

export default SearchFilter;
