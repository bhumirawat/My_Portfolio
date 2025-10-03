import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroScene from "./components/HeroScene";
import ProjectsSection from "./components/ProjectsSection"; 
import ContactForm from "./components/ContactForm";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
  const [isAdmin] = useState(true); // You can make this dynamic based on authentication

  const handleProjectAdded = (newProject) => {
    // The ProjectsSection component now handles its own state updates
    console.log('Project added:', newProject);
    // No need for window.location.reload() as state is managed internally
  };

  return (
    <div className="min-h-screen w-full text-white bg-[#141622] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <HeroScene onSelectProject={setSelectedProject} />
              {/* Use ProjectsSection instead of ShowProjects */}
              <ProjectsSection 
                onSelectProject={setSelectedProject}
                isAdmin={isAdmin}
              />
              <ContactForm/>
            </>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      
      <Footer />
    </div>
  );
}