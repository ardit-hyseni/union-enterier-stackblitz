"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { OptimizedImage } from "@/components/optimized-image";
import { heroImages } from "@/lib/images";
import Image from 'next/image';

export function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("sherbimet");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        
      <Image
        src={`https://res.cloudinary.com/dfi2vdemb/image/upload/v1749675504/union-enterier-hero-compressed_ecvg46.png`}
        alt={`Union Enterier`}
        fill
        className="object-cover"
      />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2341]/90 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-[#D4AF37] text-5xl md:text-6xl font-bold mb-4">
            Union Enterier
          </h1>
          <h4 className="text-white text-xl md:text-xl font-medium mb-2">
            Dekada Eksperiencë – Ekselencë në Çdo Detaj
          </h4>
          <Button
            onClick={scrollToServices}
            className="mt-8 bg-[#D4AF37] text-[#0B2341] hover:bg-[#D4AF37]/90 font-semibold px-6 rounded-lg"
          >
            Zbuloni Shërbimet
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}