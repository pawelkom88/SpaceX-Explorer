import { Container, InputLabel, MenuItem, Select } from "@mui/material";

interface NumOfEntriesDropdownProps {
  limit: number;
  onLimitChange: (limit: number) => void;
}

export function NumOfEntriesDropdown({
  limit,
  onLimitChange,
}: NumOfEntriesDropdownProps) {
  return (
    <Container sx={{ textAlign: "center" }}>
      <InputLabel sx={{ marginBottom: 1 }} id="limit">
        Number of launches displayed in a grid
      </InputLabel>
      <Select
        sx={{ minWidth: 100 }}
        onChange={(e) => onLimitChange(Number(e.target.value))}
        labelId="limit"
        id="select"
        value={limit}
      >
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={24}>24</MenuItem>
      </Select>
    </Container>
  );
}
