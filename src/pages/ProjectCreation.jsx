import React from "react";
import {
  Typography,
  Container,
  Box,
  Stack,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
const FormRow = (props) => {
  return (
    <>
      <Grid item xs={12} md={6} spacing={2}>
        <TextField
          id="outlined-basic"
          label={props.label1}
          variant="outlined"
          fullWidth
        ></TextField>
      </Grid>
      <Grid item xs={12} md={6} spacing={2}>
        <TextField
          id="outlined-basic"
          label={props.label2}
          variant="outlined"
          fullWidth
        ></TextField>
      </Grid>
    </>
  );
};
const ProjectCreation = () => {
  const [Level, setLevel] = React.useState("");
  const handleChange = (event) => {
    setLevel(event.target.value);
  };
  return (
    <Stack>
      <Box sx={{ padding: 4 }}>
        <Container>
          <Typography variant="h6" align="left" padding={1}>
            Project Creation Form
          </Typography>
          <Grid container spacing={2}>
            <Grid container item spacing={2}>
              <FormRow label1="Title" label2="Sub-Title" />
            </Grid>

            <Grid container item spacing={2}>
              <FormRow label1="Duration(months)" label2="Total-members" />
            </Grid>
            <Grid container item spacing={2}>
              <Grid item xs={12} md={6} spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </Grid>
              <Grid item xs={12} md={6} spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Difficulty-Level
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Level}
                    label="Difficulty-Level"
                    onChange={handleChange}
                  >
                    <MenuItem value="BEGINNERS">BEGINNERS</MenuItem>
                    <MenuItem value="INTERMEDIATE">INTERMEDIATE</MenuItem>
                    <MenuItem value="EXPERT">EXPERT</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container item>
              <TextField
                id="outlined-basic"
                label="Skills"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid container item>
              <TextField
                id="outlined-basic"
                label="Detailed-description"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid container padding={2}>
              <Grid item spacing={3}>
                <Button variant="contained">Submit</Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Stack>
  );
};

export default ProjectCreation;
