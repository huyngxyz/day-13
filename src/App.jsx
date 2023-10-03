import { useState } from "react";
import Section from "./components/Section";
import Navbar from "./components/Navbar";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme}`}>
     
      <Navbar />
      <Section theme="light" setTheme={setTheme}>
        <div id="about" className="h-screen flex justify-center px-20 gap-x-10 items-center ">
          <h1 className="text-5xl font-serif font-semibold  tracking-tight">
            Crafting Dreams into Reality. For Real.
          </h1>
          <p className="text-xl max-w-xl">
            At LIOE, we are the architects of your imagination. We believe in
            the power of simplicity, where the beauty of design lies in its
            purity. Our journey in the world of 3D rendering is driven by a
            passion for creating visual experiences that transcend the ordinary.
          </p>
        </div>
      </Section>

      <Section theme="dark" setTheme={setTheme}>
        <div id="products" className="h-full flex flex-col justify-center items-start  w-full py-20 ">
          <div className="w-[50%] mx-auto">
            <img
              className="mb-10 rounded-md "
              src="https://images.unsplash.com/photo-1696193846016-f0a30c035e70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
              alt=""
            />
            <h1 className="text-5xl font-serif font-semibold tracking-tight mb-4">
              Revolutionizing Design with 3D Rendering: Unleashing the Power of
              Imagination.
            </h1>
            <p className="mb-6">
              In the realm of contemporary design, 3D rendering has emerged as a
              transformative force, redefining how we visualize and bring ideas
              to life. In this age of innovation and creativity, 3D rendering
              companies are at the forefront of this revolution, pushing the
              boundaries of what&apos;s possible in the world of design.
            </p>
            <button className="rounded-lg px-6 py-3 bg-content dark:text-content dark:bg-bg text-bg">
              Read Article
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
