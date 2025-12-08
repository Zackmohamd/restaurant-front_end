import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#Hero" },
    { name: "About", href: "#About" },
    { name: "Menu", href: "#Dishes" },
    { name: "Services", href: "#Services" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-23 h-23 object-contain" />
            <span className="font-bold text-xl text-gray-900">Restaurant</span>
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-orange-500 font-medium transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP BUTTON */}
          <div className="hidden lg:block">
            <button className="px-5 py-2 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
              Book a Table
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-3xl text-gray-800"
          >
            <HiMenu />
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        ></div>
      )}

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-40 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-xl lg:hidden`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setOpen(false)} className="text-3xl">
            <HiX />
          </button>
        </div>

        <nav className="flex flex-col gap-5 p-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 text-lg font-medium hover:text-orange-500 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="px-6 mt-5">
          <button className="w-full px-5 py-3 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
            Book a Table
          </button>
        </div>
      </div>
    </header>
  );
}

