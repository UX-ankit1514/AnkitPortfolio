import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        className={`navbar${scrolled ? " scrolled" : ""}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div className="scroll-progress" style={{ scaleX }} />

        <div className="container">
          <motion.a
            href="#"
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Ankit.
          </motion.a>

          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <MagneticButton
                href="mailto:ankitanand812@gmail.com"
                className="nav-cta"
                strength={0.2}
              >
                <Mail size={16} />
                Let's Talk
              </MagneticButton>
            </li>
          </ul>

          <button
            className={`mobile-menu-btn${mobileOpen ? " open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.nav>

      <motion.div
        className="mobile-nav"
        initial={false}
        animate={mobileOpen ? "open" : "closed"}
        variants={{
          open: { display: "flex", opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
          closed: { opacity: 0, transitionEnd: { display: "none" } },
        }}
      >
        {["#work", "#contact", "mailto:ankitanand812@gmail.com"].map((href, i) => (
          <motion.a
            key={href}
            href={href}
            onClick={handleNavClick}
            variants={{
              open: { opacity: 1, x: 0 },
              closed: { opacity: 0, x: -30 },
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {["Work", "Contact", "Let's Talk"][i]}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}
