import React from "react";
import {
  Typography,
  Container,
  Box,
  Stack,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const JobCreation = () => {
  const [drivinglicence, setDrivinglicence] = React.useState("");
  const [vehicle, setVehicle] = React.useState("");
  const [work, setWork] = React.useState("");
  const [techjob, setTechjob] = React.useState("");
  const [jobtype, setJobtype] = React.useState("");
  const handleChange1 = (event) => {
    setDrivinglicence(event.target.value);
  };
  const handleChange2 = (event) => {
    setVehicle(event.target.value);
  };
  const handleChange3 = (event) => {
    setWork(event.target.value);
  };
  const handleChange4 = (event) => {
    setTechjob(event.target.value);
  };
  const handleChange5 = (event) => {
    setJobtype(event.target.value);
  };

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
  return (
    <Stack>
      <Box  sx={{ padding: 4 }}>
        <Container>
          <Typography variant="h6" align="left" padding={1}>
            Job Creation Form
          </Typography>
          <Grid container spacing={2}>
            <Grid container item spacing={2}>
              <FormRow label1="Title" label2="Pay-per-hour" />
            </Grid>

            <Grid container item spacing={2}>
              <FormRow label1="No of Days" label2="Work-hours" />
            </Grid>
            <Grid container item spacing={2}>
              <FormRow label1="Location" label2="State" />
            </Grid>
            <Grid container item spacing={2}>
              <Grid item xs={12} md={6} spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Job Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={jobtype}
                    label="Job Type"
                    onChange={handleChange5}
                  >
                    <MenuItem value="TECHNICAL">TECHNICAL</MenuItem>
                    <MenuItem value="HOUSEHOLD">HOUSEHOLD</MenuItem>
                    <MenuItem value="CONSTRUCTION">CONSTRUCTION</MenuItem>
                    <MenuItem value="FARMING">FARMING</MenuItem>
                    <MenuItem value=" ANY"> ANY</MenuItem>
                    <MenuItem value="MIXED"> MIXED</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Required-workers"
                  variant="outlined"
                  fullWidth
                ></TextField>
              </Grid>
            </Grid>

            <Grid container item spacing={2}>
              <Grid item xs={12} md={6} spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Driving License?
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={drivinglicence}
                    label="Driving-licence"
                    onChange={handleChange1}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Vehicle?
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={vehicle}
                    label="vehicle"
                    onChange={handleChange2}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              <Grid item xs={12} md={6} spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Work Started
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={work}
                    label="Work Started"
                    onChange={handleChange3}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Technical Job
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={techjob}
                    label="Technical Job"
                    onChange={handleChange4}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container item>
              <TextField
                id="outlined-basic"
                label="Job-Description"
                variant="outlined"
                fullWidth
              />
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
                label="Address"
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
export default JobCreation;
