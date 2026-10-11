import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import useTheme from './hooks/useTheme.js';
import {
  profile,
  socials,
  email,
  navItems,
  skills,
  projects,
  experience,
  education,
  certifications,
} from './data/content.js';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <a className="skip-link" href="#skills">
        Skip to content
      </a>
      <Navbar items={navItems} theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero profile={profile} socials={socials} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Education education={education} />
        <Certifications certifications={certifications} />
        <Contact email={email} socials={socials} />
      </main>
      <Footer name={profile.name} socials={socials} email={email} />
    </>
  );
}
