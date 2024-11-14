import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center space-y-6 bg-blue-800 text-white font-bold py-4 mt-[30%]  md:flex-row md:justify-around">
      <div className="flex flex-col items-center md:items-start">
        <h2>0030-1234567</h2>
        <h2>abc@email.com</h2>
        <h2>abc road, Gulshane-e-Maymaar, Karachi</h2>
      </div>
      <div className="flex flex-col items-center md:items-start space-y-2">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/services" className="hover:underline">
          Services
        </Link>
      </div>
      <div className="flex justify-center space-x-4 text-xl md:justify-start">
        <Link href="https://www.facebook.com/profile.php?id=100009478189380">
          <FaFacebook />
        </Link>
        <Link href="https://www.instagram.com/sana_farasat/?next=%2F&hl=en">
          <FaInstagram />
        </Link>
        <Link href="www.linkedin.com/in/sana-farasat-b438a22b9">
          {" "}
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/Sana-Farasat">
          {" "}
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
}
