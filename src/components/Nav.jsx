import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 px-8 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#2f6f63] rounded-full animate-pulse" />
          <span className="text-xl font-bold text-slate-900">
            Amit <span className="text-[#2f6f63]">Singh Negi</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-[#2f6f63] hover:text-slate-900 transition duration-300 group text-sm font-medium"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#2f6f63] rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#contact"
            className="px-5 py-2 bg-[#2f6f63] hover:bg-[#234f46] text-white text-sm font-semibold rounded-xl transition-all duration-200 active:scale-95"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-slate-900">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(false)}
              className="text-2xl cursor-pointer hover:text-[#2f6f63] transition"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl cursor-pointer hover:text-[#2f6f63] transition"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-white border border-slate-100 rounded-2xl p-6 flex flex-col space-y-1 text-center shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setShowMenu(false)}
              className="text-[#2f6f63] hover:text-slate-900 hover:bg-slate-50 rounded-xl py-3 px-4 transition-all duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setShowMenu(false)}
              className="block w-full py-3 bg-[#2f6f63] hover:bg-[#234f46] text-white font-semibold rounded-xl transition-all duration-200"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
