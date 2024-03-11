import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import ExperienceCard from '../components/ExperienceCard';
import { CardProps } from '../components/CardProps';

const Home: NextPage = ({ data, projectData }: any) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
    z-0  "
    >
      <Head>
        <title>Rita&apos;s Portfolio</title>
        <meta
          name="description"
          content="Rita Guilherme - Web engineer, Front-End Engineer, Full Stack Engineer - Brighton"
          key="desc"
        />
      </Head>
      <Header />
      {/* Hero */}
      <section
        id="hero"
        className="snap-center "
      >
        <Hero />
      </section>
      {/* About */}
      <section
        id="about"
        className="snap-center"
      >
        <About />
      </section>
      {/* projects */}
      <section
        id="projects"
        className="snap-center"
      >
        <Projects
          key={projectData.key}
          projectData={projectData}
        />
      </section>
      {/* Experience */}
      <section
        id="experience"
        className="snap-center"
      >
        <Experience
          key={data.key}
          data={data}
        />
      </section>
      {/* Skills */}
      {/* <section id="skills" className="snap-center">
        <Skills />
      </section> */}
      {/* Contact Me */}
      <section
        id="contact"
        className="snap-center"
      >
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const data = require('../workExp.json');
  const projectData = require('../projects.json');

  return {
    props: {
      data,
      projectData,
    },
  };
}
