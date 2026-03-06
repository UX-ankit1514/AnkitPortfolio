import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({ children, className = "", as = "a", strength = 0.3, ...props }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const Tag = as === "button" ? motion.button : motion.a;

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  return (
    <Tag
      ref={ref}
      className={className}
      data-magnetic
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      {...props}
    >
      {children}
    </Tag>
  );
}
