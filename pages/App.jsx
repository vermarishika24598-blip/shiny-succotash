import { useEffect } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Project } from "./project";
import { Contact } from "./Contact";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Ye chota sa component scroll ko top par reset karega
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Isse page hamesha top par load hoga */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}