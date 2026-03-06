import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { personalInfo } from "../data/projects";
import MagneticButton from "./MagneticButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
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

function SplitText({ text, className }) {
  const words = text.split(" ");
  return (
    <motion.h1 className={className} variants={itemVariants}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.3em" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.4 + i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={containerVariants}>
          <motion.p className="hero-greeting" variants={itemVariants}>
            {personalInfo.greeting}
          </motion.p>

          <SplitText text={personalInfo.tagline} className="hero-tagline" />

          <motion.p className="hero-email" variants={itemVariants}>
            <Mail size={16} />
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </motion.p>

          <motion.div className="hero-ctas" variants={itemVariants}>
            <MagneticButton href="#work" className="btn-primary" strength={0.15}>
              View My Case Studies
              <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton href="#contact" className="btn-secondary" strength={0.15}>
              Let's Connect
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={itemVariants}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
        >
          <img
            src={import.meta.env.BASE_URL + personalInfo.profileImage}
            alt={personalInfo.name}
            loading="eager"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
