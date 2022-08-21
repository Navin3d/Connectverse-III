import React from "react";
import "../styles/pages/Signup2.css";
import Signupimg from "../assets/images/Signup.jpg";
import {
  Grid,
  Container,
  Stack,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormGroup,
  FormLabel,
} from "@mui/material";

const Signup2 = () => {
  const [value1, setValue1] = React.useState("No");

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  const [value2, setValue2] = React.useState("No");

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const [value3, setValue3] = React.useState("No");

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };
  const [value4, setValue4] = React.useState("No");

  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
        <Grid container>
          <Grid md={7} sm={0} xs={0}>
            <img src={Signupimg} alt="signup-img" className="signup-img" />
          </Grid>
          <Grid md={5} sm={12} xs={12}>
            <div className="form-center">
              <h1 className="logo">ConnectVerse</h1>
              <p className="desc">Welcome to Connectverse </p>
              <div className="form-scrollable">
                <Stack spacing={4}>
                  <div className="input-firstname">
                    <TextField
                      id="standard-basic"
                      label="FirstName"
                      variant="standard"
                    />
                  </div>
                  <div className="input-firstname">
                    <TextField
                      id="standard-basic"
                      label="LastName"
                      variant="standard"
                    />
                  </div>
                  <div className="input-firstname">
                    <TextField
                      id="standard-basic"
                      label="Age"
                      variant="standard"
                    />
                  </div>
                  <div className="input-firstname">
                    <FormGroup>
                      <FormLabel>Gender</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value4}
                        onChange={handleChange4}
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    </FormGroup>
                  </div>
                  <div className="input-firstname">
                    <TextField
                      id="standard-basic"
                      label="Work-Type"
                      variant="standard"
                    />
                  </div>
                  <div className="input-firstname">
                    <TextField
                      id="standard-basic"
                      label="CV-url"
                      variant="standard"
                    />
                  </div>
                  <div className="input-firstname">
                    <TextField
                      id="standard-basic"
                      label="Aadhaar-id"
                      variant="standard"
                    />
                  </div>
                  <div className="input-firstname">
                    <TextField
                      id="standard-basic"
                      label="Email"
                      variant="standard"
                    />
                  </div>
                  <div className="input-firstname">
                    <TextField
                      id="standard-basic"
                      label="MobileNumber"
                      variant="standard"
                    />
                  </div>
                  <div className="input-firstname">
                    <TextField
                      id="standard-basic"
                      label="Address"
                      variant="standard"
                    />
                  </div>
                  <div className="input-firstname">
                    <TextField
                      id="standard-basic"
                      label="Location"
                      variant="standard"
                    />
                  </div>
                  <div className="input-firstname">
                    <TextField
                      id="standard-basic"
                      label="State"
                      variant="standard"
                    />
                  </div>
                  <div className="input-firstname">
                    <FormGroup>
                      <FormLabel>Ready to Relocate </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value1}
                        onChange={handleChange1}
                      >
                        <FormControlLabel
                          value="Yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="No"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormGroup>
                  </div>
                  <div className="input-firstname">
                    <FormGroup>
                      <FormLabel>Do yo have Driving Licence </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value2}
                        onChange={handleChange2}
                      >
                        <FormControlLabel
                          value="Yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="No"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormGroup>
                  </div>
                  <div className="input-firstname">
                    <FormGroup>
                      <FormLabel>Do you have Vechile </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value3}
                        onChange={handleChange3}
                      >
                        <FormControlLabel
                          value="Yes"
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="No"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormGroup>
                  </div>
                  <div className="input-firstname">
                    <TextField
                      id="standard-basic"
                      label="Physical Health Points"
                      variant="standard"
                    />
                  </div>
                </Stack>
                <button className="signup-btn">Register</button>
                <div className="signin">
                  <a href="/" className="signin-navigator">
                    Already have an account?
                  </a>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Signup2;
