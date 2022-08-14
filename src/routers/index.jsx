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

import AddPage1 from "../pages/AddPage1";
import AddPage2 from "../pages/AddPage2";
import Formpage from "../pages/Formpage";

import Footer from "../components/base/Footer";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} exact={true} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/course/:cid" element={<CourseDetail />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/project/:pid" element={<ProjectDetail />} />
      <Route path="/project/:pid/join" element={<ProjectJoining />} />
      <Route path="/companies" element={<CourseList />} />
      <Route path="/company/:cid" element={<CourseDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/job/:jid" element={<JobDetail />} />
      <Route path="/job/:jid/join" element={<JobJoining />} />
      <Route path="/profile/:pid" element={<Profile />} />
      <Route path="/addPage1" element={<AddPage1 />} />
      <Route path="/addPage2" element={<AddPage2 />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="Formpage" element={<Formpage/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;
