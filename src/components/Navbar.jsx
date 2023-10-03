import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

export default function Navbar() {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const newLenis = new Lenis();
    setLenis(newLenis);

    newLenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const scrollToAnchor = (anchor) => {
    if (lenis) {
      lenis.scrollTo(anchor);
    }
  };

  return (
    <header className="flex justify-between fixed top-0 w-full py-7 px-20 bg-bg text-content dark:bg-content dark:text-bg transition-all duration-500">
      <span className="font-serif text-lg font-black tracking-tighter">
        LIOE
      </span>
      <nav className="flex gap-x-10">
        <a href="#about" onClick={() => scrollToAnchor("#about")}>
          About
        </a>
        <a href="#insights" onClick={() => scrollToAnchor("#insights")}>Insights</a>
      </nav>
    </header>
  );
}
