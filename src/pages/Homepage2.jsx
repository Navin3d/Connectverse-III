import React from "react";
import { Container, Grid, Stack } from "@mui/material";

import Independence_day from "../assets/images/Independence_day.webp";
import SIH from "../assets/images/SIH.jpeg";
import Ministry from "../assets/images/Ministry.jpeg"

import mainimg from "../assets/images/home-mainimg.jpg";
import aboutimg from "../assets/images/About.jpg";
import Features from "../components/home/Features";
import Services from "../components/home/Services";
import Contact from "../components/home/Contact";
import Stats from "./Stats";

import "../styles/pages/Homepage2.css";
import "../styles/pages/home.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={Ministry} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={SIH} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Independence_day} alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="homepage-container1">
        <Container>
          <Grid container>
            <Grid md={6} sm={12}>
              <div className="img-wrap">
                <img src={mainimg} alt="mainimg" className="mainimg" />
              </div>
            </Grid>
            <Grid md={6} sm={12}>
              <div className="maindesc-wrap">
                <h3 className="main-desc">
                  Hunger is not the worst
                  <br /> feature of Unemployment;
                  <br /> idleness is
                </h3>
                <Stats />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className="homepage-container2">
        <Container>
          <Grid container spacing={3}>
            <Grid md={6} sm={12}>
              <div className="mission-container">
                <h2 className="mission-sub-heading">Our Mission</h2>
                <Stack spacing={3} marginLeft={2} sx={{ width: "350px" }}>
                  <p className="mission-desc">
                    We help the unemployed people to find job after 100 days of
                    work.
                  </p>
                  <p className="mission-desc">
                    Many people are not aware of the jobs around them
                  </p>
                  <p className="mission-desc">
                    We educate people about the job around them
                  </p>
                  <p className="mission-desc">
                    We help them to get their desired job near to their location
                  </p>
                </Stack>
              </div>
            </Grid>
            <Grid md={6} sm={12}>
              <div className="vision-container">
                <h2 className="vision-sub-heading">Our Vision</h2>
                <Stack spacing={3} marginLeft={2} sx={{ width: "350px" }}>
                  <p className="vision-desc">
                    Our vision is to decrease the Unemployment Rate in the
                    upcoming years
                  </p>
                  <p className="vision-desc">
                    Everyone will able to fulfill all their requirements on
                    their own
                  </p>
                  <p className="vision-desc">
                    Everyone will not be dependent on others for thier own needs
                  </p>
                  <p className="vision-desc">
                    Poverty in india due to unemployemnt will be completely
                    eradicated.
                  </p>
                </Stack>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="features-wrap">
        <Features />
      </div>
      <div className="homepage-container3">
        <Container>
          <Grid container>
            <Grid md={6} sm={12}>
              <div className="about-container">
                <h3 className="sub-heading2">About Us</h3>
                <Stack spacing={3} marginLeft={2} sx={{ width: "350px" }}>
                  <p className="aboutus-desc">
                    Connectverse is a platform where people are educated about
                    the jobs around them and the jobs are allocated to people
                    accordingly to their location.
                  </p>
                  <p className="aboutus-desc">
                    We also provide courses to the people which help them gain
                    the skills that are required for the industry.
                  </p>
                  <p className="aboutus-desc">
                    Many people get stuck while they start doing projects they
                    can collaborate with the industry level people.
                  </p>
                </Stack>
              </div>
            </Grid>
            <Grid md={6} sm={12}>
              <img src={aboutimg} alt="aboutimg" className="aboutimg" />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="services-wrap">
        <Services />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
