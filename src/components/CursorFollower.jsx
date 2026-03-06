import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 250, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 250, mass: 0.5 });
  const isTouchDevice = useRef(false);

  useEffect(() => {
    isTouchDevice.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onOverInteractive = (e) => {
      const el = e.target.closest("a, button, [data-magnetic]");
      if (el) setHovering(true);
    };
    const onOutInteractive = (e) => {
      const el = e.target.closest("a, button, [data-magnetic]");
      if (el) setHovering(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOverInteractive, { passive: true });
    document.addEventListener("mouseout", onOutInteractive, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOverInteractive);
      document.removeEventListener("mouseout", onOutInteractive);
    };
  }, [cursorX, cursorY, visible]);

  if (isTouchDevice.current) return null;

  return (
    <motion.div
      className="cursor-follower"
      style={{ x: springX, y: springY }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: clicking ? 0.75 : hovering ? 2.5 : 1,
      }}
      transition={{ scale: { duration: 0.2 }, opacity: { duration: 0.15 } }}
    >
      <div className={`cursor-dot${hovering ? " expanded" : ""}`} />
    </motion.div>
  );
}
