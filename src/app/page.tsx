import Header from "@/components/layout/header";
import Image from "next/image";
import About from "./about/page";
import Blog from "./blog/page";
import Contact from "./contact/page";
import Services from "./services/page";
import SimpleSlider from "@/components/layout/slider";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto">
      <br />
      <br />
      <br />
      <SimpleSlider />
      <About />
      <Blog />
      <Services />
      <Contact />
      <br />
      <br />
      <br />
    </main>
  );
}
