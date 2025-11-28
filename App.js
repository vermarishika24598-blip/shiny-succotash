import React from "react";
import Header, { Header } from "./components/Header";
import About , { About }from "./components/About";
import Project ,{ Project } from "./components/project";
import Contact ,{ Contact } from "./components/Contact";


function App() {
  return (  
   <>     
   <Header></Header>
   <About></About>
   <Project></Project>
   <Contact></Contact>
   </>
  );
}

export default App;
