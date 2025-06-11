"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#", label: "Ballina" },
    { href: "#sherbimet", label: "Shërbimet" },
    { href: "#portofoli", label: "Portofoli" },
    { href: "#rreth-nesh", label: "Rreth Nesh" },
    { href: "#kontakt", label: "Na Kontaktoni" },
  ];

  const navbarVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0B2341] shadow-md py-2"
          : "bg-[#0B2341]/90 py-4"
      )}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 flex justify-between items-center"
      >
        <Link href="#" className="flex items-center">
          <Building2 className="h-8 w-8 text-[#D4AF37] mr-2" />
          <span className="text-white font-bold text-xl">Union Enterier</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-2">
            <span
              className={cn(
                "block h-0.5 w-8 bg-white transition-transform duration-300",
                isOpen && "rotate-45 translate-y-2.5"
              )}
            ></span>
            <span
              className={cn(
                "block h-0.5 w-8 bg-white transition-opacity duration-300",
                isOpen && "opacity-0"
              )}
            ></span>
            <span
              className={cn(
                "block h-0.5 w-8 bg-white transition-transform duration-300",
                isOpen && "-rotate-45 -translate-y-2.5"
              )}
            ></span>
          </div>
        </button>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0B2341] border-t border-[#D4AF37]/20"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-[#D4AF37] py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-[#D4AF37]/20 flex justify-end">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}