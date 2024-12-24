import Link from "next/link";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

export default function Header() {
  return (
    <header className="max-w-[1500px] mx-auto flex justify-between m-3">
      {/* Logo */}
      <div className="rounded-full overflow-hidden w-20 h-20 border-4 border-blue-800 shadow-lg">
        <Image src="/logo.jpg" alt="Logo" height={80} width={80} />
      </div>
      {/* Nav Buttons */}
      <div className="hidden md:block mt-5">
        <ul className="flex space-x-5">
          <li>
            {" "}
            <Link href="/">
              <button className="bg-blue-800 text-white font-bold text-xl px-6  py-3 rounded-2xl hover:bg-blue-600 transition-colors">
                Home
              </button>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/about">
              <button className="bg-blue-800 text-white font-bold text-xl px-6 py-3 rounded-2xl hover:bg-blue-600 transition-colors">
                About
              </button>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/blog">
              <button className="bg-blue-800 text-white font-bold text-xl px-6 py-3 rounded-2xl hover:bg-blue-600 transition-colors">
                Blog
              </button>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/contact">
              <button className="bg-blue-800 text-white font-bold text-xl px-6 py-3 rounded-2xl hover:bg-blue-600 transition-colors">
                Contact
              </button>
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/services">
              <button className="bg-blue-800 text-white font-bold text-xl px-6 py-3 rounded-2xl hover:bg-blue-600 transition-colors">
                Services
              </button>
            </Link>
          </li>
        </ul>
      </div>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <AlignJustify />
        </SheetTrigger>
        <SheetContent className="bg-slate-100">
          <br />
          <br />
          <ul className="space-y-3">
            <li>
              {" "}
              <Link href="/">
                <button className="bg-blue-800 text-white font-bold text-xl px-4  py-1 rounded-2xl hover:bg-blue-600 transition-colors">
                  Home
                </button>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/about">
                <button className="bg-blue-800 text-white font-bold text-xl px-4 py-1 rounded-2xl hover:bg-blue-600 transition-colors">
                  About
                </button>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/blog">
                <button className="bg-blue-800 text-white font-bold text-xl px-4 py-1 rounded-2xl hover:bg-blue-600 transition-colors">
                  Blog
                </button>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/contact">
                <button className="bg-blue-800 text-white font-bold text-xl px-4 py-1 rounded-2xl hover:bg-blue-600 transition-colors">
                  Contact
                </button>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/services">
                <button className="bg-blue-800 text-white font-bold text-xl px-4 py-1 rounded-2xl hover:bg-blue-600 transition-colors">
                  Services
                </button>
              </Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
