import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import EduExp from "./pages/EduExp";
import Spec from "./pages/Spec";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ContactMe from "./pages/ContactMe";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/eduexp" element={<EduExp />} />
          <Route path="/spec" element={<Spec />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;