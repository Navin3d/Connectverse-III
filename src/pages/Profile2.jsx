import React from "react";
import "./Profile2.css";
import { Container, Grid, Stack, Fab } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
const Profile = () => {
  return (
    <div className="profile-container">
      <Container>
        <div className="profile-desc">
          <h3 className="details">Personal Details</h3>
          <PersonIcon sx={{ color: "#050850", fontSize: "40px" }} />
        </div>

        <div className="edit-icon">
          <Fab size="small" aria-label="edit">
            <EditIcon color="#050850" />
          </Fab>
        </div>

        <div className="personal-details">
          <Grid container maxWidth="md" padding={3}>
            <Grid md={6} sm={12} xs={12}>
              <div className="details-left">
                <Stack spacing={2}>
                  <p>Firstname: Kaushik</p>
                  <p>Lastname: Sathyanath</p>
                  <p>Age: 20</p>
                  <p>Email: kaushikmass2002@gmail.com</p>
                  <p>MobileNumber: 6369543256</p>
                  <p>Gender: Male</p>
                  <p>Location: Avadi</p>
                  <p>State: TamilNadu</p>
                </Stack>
              </div>
            </Grid>
            <Grid md={6} sm={12}>
              <div className="details-right">
                <Stack spacing={2}>
                  <p>Wage per Day: 300</p>
                  <p>WorkType: Construction</p>
                  <p>Ready to Relocate: Yes</p>
                  <p>Driving License: Yes</p>
                  <p>Vehicle: Yes</p>
                  <p>Technical Worker: Yes</p>
                  <p>Occupied: No</p>
                  <p>
                    Address: No.12 Vgn Avenue Extention Senneerkuppam Chennai-56
                  </p>
                </Stack>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="other-details">
          <h3 className="other-desc">Other Details</h3>
          <Stack spacing={2}>
            <p>Admin Project: ConnectVerse,Innovatree,VoldeMart</p>
            <p>Jobs Applied: L&T Construction</p>
            <button className="cv-btn"> Download Cv</button>
          </Stack>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
