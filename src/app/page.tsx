import Header from "@/components/layout/header";
import SimpleSlider from "@/components/layout/hero";

import Image from "next/image";
import About from "./about/page";
import Blog from "./blog/page";
import Contact from "./contact/page";
import Services from "./services/page";

export default function Home() {
  return (
    <main>
      <h1 className="text-red-600 text-5xl font-semibold text-center mt-12 md:text-7xl lg:text-8xl">
        Welcome to our Health and Fitness SF Website
      </h1>
      <SimpleSlider />
      <About />
      <Blog />
      <Services />
      <Contact />
    </main>
  );
}
