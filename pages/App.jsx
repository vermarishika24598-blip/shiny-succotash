import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Project } from "./project";
import { Contact } from "./Contact";

export default function App() {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen">
        <Header />
        <main className="pt-16">
          <Hero />
          <About />
          <Project />
          <Contact />
        </main>
      </div>
    </Router>
  );
}