import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const headerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Projects() {
  return (
    <section className="projects" id="work">
      <div className="container">
        <motion.div
          className="section-header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span className="section-label" variants={itemVariants}>
            Selected Work
          </motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Case Studies
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            End-to-end UX work focused on clarity, usability, and measurable impact.
          </motion.p>
        </motion.div>

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
