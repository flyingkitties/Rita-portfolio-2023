import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll
    z-0  "
    >
      <Head>
        <title>Rita&apos;s Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center ">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
