import React, { useEffect } from "react";
import "./App.css";
import About from "./partials/About";
import Card from "./partials/Card";
import Projects from "./partials/Projects";
import Certificate from "./partials/Certificate";
import Skills from "./partials/Skills";
import data from "./assets/data";
import DownloadCVButton from "./partials/cv";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-200">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card name={data.name} title={data.title} social={data.social} />
        <DownloadCVButton/>
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <About title={data.about.title} description={data.about.description} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Certificate />
      </div>
    </div>
  );
}
export default App;
