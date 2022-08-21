import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import EmployerReg from "../pages/EmployerReg";
import CourseList from "../pages/CourseList";
import CourseDetail from "../pages/CourseDetail";
import ProjectList from "../pages/ProjectList";
import ProjectDetail from "../pages/ProjectDetail";
import ProjectJoining from "../pages/ProjectJoiningPage";
import JobList from "../pages/JobList";
import JobDetail from "../pages/JobDetail";
import CompanyList from "../pages/CompanyList";
import CompanyDetail from "../pages/CompanyDetail";
import JobJoining from "../pages/JobJoining";
import PageNotFound from "../pages/404Page";
import Login2 from "../pages/Login2";
import NavBar from "../components/base/NavBar";
import Chat from "../components/chat/Chat";
import { JobCreation } from "../pages/JobCreation";
import Footer from "../components/base/Footer";
import Signup2 from "../pages/Signup2";
import Profile2 from "../pages/Profile2";
const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} exact={true} />
      <Route path="/courses" element={<CourseList />} />
      <Route path="/employerreg" element={<EmployerReg />} />
      <Route path="/jobcreation" element={<JobCreation />} />
      <Route path="/nav" element={<NavBar />} />
      <Route path="/login" element={<Login2 />} />
      <Route path="/signup" element={<Signup2 />} />
      <Route path="/profile/:uid" element={<Profile2 />} />

      <Route path="/course/:cid" element={<CourseDetail />} />
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/project/:pid" element={<ProjectDetail />} />
      <Route path="/project/:pid/join" element={<ProjectJoining />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/company/:cid" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/job/:jid" element={<JobDetail />} />
      <Route path="/job/:jid/join" element={<JobJoining />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default AppRouter;