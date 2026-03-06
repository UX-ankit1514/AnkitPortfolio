import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import CursorFollower from "./components/CursorFollower";

export default function App() {
  return (
    <>
      <CursorFollower />
      <Navbar />
      <Hero />
      <Projects />
      <CtaSection />
      <Footer />
    </>
  );
}
