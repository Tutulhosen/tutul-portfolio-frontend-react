import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievement from "./components/Achievement";
import Contact  from "./components/Contact";
import Footer  from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievement />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
