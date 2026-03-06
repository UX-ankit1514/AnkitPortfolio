import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CtaSection() {
  return (
    <section className="cta-section" id="contact">
      <motion.div
        className="cta-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.h2 className="cta-title" variants={itemVariants}>
          Have a product that needs
          <br />
          better UX? Let's talk.
        </motion.h2>
        <motion.p className="cta-subtitle" variants={itemVariants}>
          <span className="availability-dot" />
          Currently available for freelance &amp; full-time roles
        </motion.p>
        <motion.div className="cta-buttons" variants={itemVariants}>
          <MagneticButton
            href="mailto:ankitanand812@gmail.com"
            className="btn-light"
            strength={0.2}
          >
            <Mail size={18} />
            Get in Touch
          </MagneticButton>
          <MagneticButton
            href="#work"
            className="btn-outline-light"
            strength={0.2}
          >
            View Case Studies
            <ArrowRight size={18} />
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
