import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.div className="project-image" variants={imageVariants}>
        <img
          src={import.meta.env.BASE_URL + project.image}
          alt={project.title}
          loading="lazy"
        />
      </motion.div>

      <div className="project-info">
        <motion.span className="project-category" variants={childVariants}>
          {project.category}
        </motion.span>
        <motion.h3 className="project-title" variants={childVariants}>
          {project.title}
        </motion.h3>
        <motion.p className="project-subtitle" variants={childVariants}>
          {project.subtitle}
        </motion.p>
        <motion.p className="project-description" variants={childVariants}>
          {project.description}
        </motion.p>
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-cta"
          variants={childVariants}
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {project.cta}
          <ArrowRight size={18} />
        </motion.a>
      </div>
    </motion.article>
  );
}
