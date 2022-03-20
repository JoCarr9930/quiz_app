import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SelectionForm from "../components/SelectionForm";
import TextForm from "../components/TextForm";

const settings = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectionForm label="Category" />
      <SelectionForm label="Difficulty" />
      <SelectionForm label="Type" />
      <TextForm />
      <Box mt={3} width="100%">
        <Button color="secondary" fullWidth variant="contained" type="submit">
          Begin
        </Button>
      </Box>
    </form>
  );
};

export default settings;
