import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Milestones from '../components/Milestones/Milestones';
import Projects from '../components/Projects/Projects';
import UpcomingProjects from '../components/UpcomingProjects/UpcomingProjects';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Milestones />
      <Projects />
      <UpcomingProjects />
      <Contact />
    </>
  );
};

export default Home;
