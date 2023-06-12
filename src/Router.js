import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about-me";
import Projects from "./pages/projects";
import Contact from './pages/contact'
import Resume from "./pages/resume";

export default function Router() {
    return (
      <>
        <Routes>
          <Route path="/Gerardos-Portfolio-React" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    );
  }