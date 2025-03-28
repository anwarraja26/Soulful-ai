import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import BuildResume from "./pages/BuildResume";
import ResumeScore from "./pages/ResumeScore";
import ResumeCarousel from "./components/ResumeCarousel";
import Navbar from "./components/Header/Navbar";
import Editor from "./components/Editor";  

function App() {
  return (  
    <Router>  
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/build-resume" element={<BuildResume />} />
          <Route path="/resume-score" element={<ResumeScore />} />
          
          {/* Render ResumeCarousel inside /templates */}
          <Route path="/templates" element={<ResumeCarousel />} />

          {/* Editor Route */}
          <Route path="/editor/:templateId" element={<Editor />} />

          {/* Other Pages */}
          <Route path="/pricing" element={<h1>Pricing</h1>} />
          <Route path="/organizations" element={<h1>For Organizations</h1>} />
          <Route path="/signin" element={<h1>Sign In</h1>} />
          <Route path="/get-started" element={<h1>Get Started</h1>} />

          {/* Fallback 404 route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
