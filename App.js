import React from "react";
import Header, { Header } from "./components/Header";
import About , { About }from "./components/About";
import Project ,{ Project } from "./components/project";
import Contact ,{ Contact } from "./components/Contact";
import { BrowserRouter ,Routes,Route} from "react-router-dom";

function HomePage() {
  return (
    <>
      <About />
      <Project />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Home page shows ALL sections */}
        <Route path="/" element={<HomePage />} />

        {/* Individual pages */}
        <Route path="/about" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;