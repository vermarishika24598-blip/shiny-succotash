import React from "react";
import Header, { Header } from "./Header";
import About , { About }from "./About";
import Project ,{ Project } from "./project";
import Contact ,{ Contact } from "./Contact";
import  Hero, {Hero}from "./Hero";
import { BrowserRouter ,Routes,Route} from "react-router-dom";

function HomePage() {
  return (
    <>
      <Hero />
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
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;