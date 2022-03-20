import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SelectionForm from "../components/SelectionForm";
import TextForm from "../components/TextForm";
import UseAxios from "../hooks/useAxios";

const settings = () => {
  const { response, error, loading } = UseAxios({ url: "/api_category.php" });

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h5" mt={20} color="red">
        Uh Oh! Something went wrong.
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice" },
    { id: "boolean", name: "True or False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectionForm options={response.trivia_categories} label="Category" />
      <SelectionForm options={difficultyOptions} label="Difficulty" />
      <SelectionForm options={typeOptions} label="Type" />
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
