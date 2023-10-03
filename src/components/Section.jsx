/* eslint-disable react/prop-types */
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Section({ children, theme, setTheme }) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value);
    if (value > 0 && value < 1) {
      setTheme(theme);
    }
  });

  return (
    <section ref={container} className="bg-bg text-content dark:text-bg dark:bg-content transition-all duration-500 ">
      {children}
    </section>
  );
}
