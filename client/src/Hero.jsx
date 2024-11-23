import React from "react";
import Profile from '../src/assets/arun.jpg'
import AutoText from './Autotext';
import Experience from "./Experience";
import Education from "./Education";
import Certification from "./Certification";
import Contact from "./Contact";
import Service from "./Service";
import Resume from '../src/Arun resume-1.pdf'
import Project from "./Projects";
import Skills from "./Skills";
const Hero = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-2xl font-normal tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
            I am Nishad Arun <br / >
            currently pursuing my B.E from RGIT, Mumbai.
            </h1>
            <h1 className="text-red-500 text-2xl font-normal tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-red-500">I am <AutoText/></h1>
            <br />
            <span className="bg-red-500 text-1xl text-center text-white p-4 rounded-full hide"><a href={Resume}  download> Download CV</a></span>
            </div>
          <div class="lg:col-span-5 lg:flex sm:m-4">
            <img className="rounded-full"
              src={Profile}
              alt="profile-image"
            />
          </div>
          <br />
          <span className="bg-red-500 text-1xl text-center text-white p-4 rounded-full small_device"><a href={Resume}  download> Download CV</a></span>
        </div>
      </section>
      <Experience />
      <Education />
      <Project />
      <Skills />
      <Service />
      <Certification />
      <Contact />
      
    </>
  );
};

export default Hero;
