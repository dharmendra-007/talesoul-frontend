import Link from "next/link";
import React from "react";
import Drawer from "../drawer/Drawer";

const navLinks = [
  { linkText: "About", link: "/about", type: "link" },
  { linkText: "How It Works", link: "/howitworks", type: "link" },
  { linkText: "Services", link: "/services", type: "link" },
  { linkText: "Blog", link: "/blog", type: "link" },
  { linkText: "Join Our Soul", link: "/", type: "button" },
];

export default function NavBar() {
  return (
    <div className="h-[80px] w-screen  bg-white flex justify-between items-center lg:px-40 px-8">
      <Link href="/">
        <div className="logo">TaleSoul</div>
      </Link>
      <div className="hidden lg:flex items-center gap-4">
        {navLinks.map((link, index) => (
          <Link
            className={
              link.type === "link"
                ? ""
                : "bg-primary px-4 py-2 rounded-xl text-white font-semibold"
            }
            href={link.link}
            key={index}
          >
            {link.linkText}
          </Link>
        ))}
      </div>
      <div className="lg:hidden">
        <Drawer navLinks={navLinks} />
      </div>
    </div>
  );
}
