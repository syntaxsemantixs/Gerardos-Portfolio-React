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
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </>
    );
  }