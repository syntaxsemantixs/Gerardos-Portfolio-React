import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about-me";
import Work from "./pages/works";
import Contact from './pages/contact'
import Resume from "./pages/resume";

export default function Router() {
    return (
      <>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </>
    );
  }