import React from "react";
import {
  Typography,
  Container,
  Box,
  Stack,
  Grid,
  TextField,
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
export const JobCreation = () => {
  return (
    <Stack>
      <Box boxShadow={2} sx={{ padding: 4 }}>
        <Container>
          <Typography variant="h6" align="left" padding={1}>
            Job Creation Form
          </Typography>
          <Grid container spacing={2}>
            <Grid container item spacing={2}>
              <FormRow label1="Id" label2="Title" />
            </Grid>

            <Grid container item spacing={2}>
              <FormRow label1="No of Days" label2="Work-hours" />
            </Grid>
            <Grid container item spacing={2}>
              <FormRow label1="Location" label2="State" />
            </Grid>
            <Grid container item spacing={2}>
              <FormRow label1="Job-Type" label2="RequiredWorkers" />
            </Grid>
            <Grid container item spacing={2}>
              <FormRow
                label1="Driving Licence Wanted"
                label2="Vehicles-wanted"
              />
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
                label="Skills Required"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid container item>
              <TextField
                id="outlined-basic"
                label="Employee-id"
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
