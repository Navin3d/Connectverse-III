import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import CourseList from "../pages/CourseList";
import CourseDetail from "../pages/CourseDetail";
import ProjectList from "../pages/ProjectList";
import ProjectDetail from "../pages/ProjectDetail";
import ProjectJoining from "../pages/ProjectJoiningPage";
import JobList from "../pages/JobList";
import JobDetail from "../pages/JobDetail";
import JobJoining from "../pages/JobJoining";
import Profile from "../pages/ProfilePage";
import PageNotFound from "../pages/404Page";

import Footer from "../components/base/Footer";
import NavBar from "../components/base/NavBar";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} exact={true} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/course/:cid" element={<CourseDetail />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/project/:pid" element={<ProjectDetail />} />
      <Route path="/project/join" element={<ProjectJoining />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/job/:jid" element={<JobDetail />} />
      <Route path="/job/join" element={<JobJoining />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/nav" element={<NavBar />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
