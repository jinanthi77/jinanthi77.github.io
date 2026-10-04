import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
