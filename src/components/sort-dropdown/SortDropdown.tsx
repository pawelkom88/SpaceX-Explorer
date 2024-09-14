import { Container, InputLabel, MenuItem, Select } from "@mui/material";
import { sortOptions } from "../../utils/constants";
import { transformString } from "../../utils/helpers";

export type SortOptions = (typeof sortOptions)[keyof typeof sortOptions];

interface SortDropdownProps {
  sortCriteria: SortOptions;
  onSortCriteriaChange: (value: SortOptions) => void;
}
export function SortDropdown({ sortCriteria, onSortCriteriaChange }: SortDropdownProps) {
  return (
    <Container sx={{ textAlign: "center" }}>
      <InputLabel sx={{ marginBottom: 1 }} id="sort">
        Sort launches by 
      </InputLabel>
      <Select
        sx={{ minWidth: 100 }}
        onChange={(e) => onSortCriteriaChange(e.target.value as SortOptions)}
        labelId="sort"
        id="select"
        value={sortCriteria}
      >
        <MenuItem value={sortOptions.rocket_type}>
          {transformString(sortOptions.rocket_type)}
        </MenuItem>
        <MenuItem value={sortOptions.mission_name}>
          {transformString(sortOptions.mission_name)}
        </MenuItem>
        <MenuItem value={sortOptions.launch_date_local}>
          {transformString(sortOptions.launch_date_local)}
        </MenuItem>
      </Select>
    </Container>
  );
}
