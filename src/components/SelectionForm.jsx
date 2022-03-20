import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectionForm = (props) => {
  const { label } = props;
  const [value, setValue] = useState("");

  const handleChange = () => {};

  return (
    <Box mt={3} width="100%">
      <FormControl size = "small" fullWidth="true">
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          <MenuItem>option1</MenuItem>
          <MenuItem>option2</MenuItem>
          <MenuItem>option3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectionForm;
