"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string[];
  services: string[];
  year: string;
  mainImage: string;
  additionalImages: string[];
}

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);

  // Placeholder images
  const placeholderMain = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669638/Untitled-1-02_gk04wf.webp";
  
  const placeholderAdditional1 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c";
  const placeholderAdditional2 = "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6";

  const hotelprishtinamain = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669638/Untitled-1-02_gk04wf.webp"

  const hotelprishtina1 = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669638/Untitled-1-01_h8mdfw.webp"

  const hotelprishtina2 = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669639/Untitled-1-03_wwqfpy.webp"

  const hotelprishtina3 = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669640/Untitled-1-04_w9buhi.webp"

  const royalmallmain = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669636/Untitled-1-06_gkgvsd.webp"

  const royalmall1 = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669636/Untitled-1-07_wmhzbk.webp"

  const royalmall2 = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669636/Untitled-1-08_kdl23j.webp"

  const exdcmain = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669636/exdc1.webp"

  const exdc1 = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669636/exdc2.webp"

  const dukagjinimain = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669637/Untitled-1-14_z6mwh1.webp"

  const komunamain = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669637/Untitled-1-12_qkglav.webp"

  const komuna1 = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669637/Untitled-1-13_b6q61i.webp"

  const gjakovamain = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669641/Untitled-1-15_wcp6at.webp"

  const gjakova1 = "https://res.cloudinary.com/dfi2vdemb/image/upload/v1749669641/Untitled-1-16_y8gdlp.webp"
  
  const projects: Project[] = [
    {
      id: 1,
      title: "HOTEL PRISHTINA",
      category: ["fasade", "skeleri", "suvatim", "gips", "ngjyrosje"],
      services: [
        "Fasadë Termike",
        "Montim Skelesh",
        "Suvatim i Brendshëm",
        "Punime Gipsi & Tavanë Dekorativë të Varur",
        "Ngjyrosje"
      ],
      year: "2022-2023",
      mainImage: hotelprishtinamain,
      additionalImages: [hotelprishtinamain, hotelprishtina1, hotelprishtina2, hotelprishtina3],
    },
    {
      id: 2,
      title: "ROYALMALL",
      category: ["fasade", "skeleri", "suvatim", "gips", "ngjyrosje"],
      services: [
        "Fasadë Dekorative",
        "Montim Skelesh",
        "Suvatim i Brendshëm dhe i Jashtëm",
        "Punime Gipsi & Tavanë Dekorativë",
        "Ngjyrosje"
      ],
      year: "2021-2022",
      mainImage: royalmallmain,
      additionalImages: [royalmall1, royalmall2],
    },
    {
      id: 3,
      title: "EXDC",
      category: ["fasade", "skeleri", "suvatim", "gips", "ngjyrosje"],
      services: [
        "Fasadë Termike (2,000 m²)",
        "Fasadë me Tulla Dekorative (12,000 m²)",
        "Montim Skelesh (12,000 m²)",
        "Suvatim i Brendshëm dhe i Jashtëm (25,000 m²)",
        "Punime Gipsi (2,000 m²)",
        "Punime Ngjyrosjeje (25,000 m²)"
      ],
      year: "2023",
      mainImage: exdcmain,
      additionalImages: [exdcmain, exdc1],
    },
    {
      id: 4,
      title: "KOMUNA E PRISHTINES",
      category: ["fasade", "skeleri"],
      services: [
        "Rikonstruksion i Fasadave në Ndërtesa Kolektive",
        "Montim Skelash (25,000 m²)"
      ],
      year: "2020-2021",
      mainImage: komunamain,
      additionalImages: [komunamain, komuna1],
    },
    {
      id: 5,
      title: "DUKAGJINI",
      category: ["skeleri"],
      services: [
        "Montimi i Skeleve (Mbulesë e një Sipërfaqeje prej 12.000 m² me një Lartësi prej 110 Metrash)"
      ],
      year: "2023",
      mainImage: dukagjinimain,
      additionalImages: [dukagjinimain],
    },
    {
      id: 6,
      title: "GJAKOVA SHPK",
      category: ["fasade", "skeleri", "suvatim", "ngjyrosje"],
      services: [
        "Fasadë Termike (8,000 m²)",
        "Montimi i skeleve (8,000 m²)",
        "Suvatim i Brendshëm dhe i Jashtëm (25,000 m²)",
        "Ngjyrosje (25,000 m²)"
      ],
      year: "2023",
      mainImage: gjakovamain,
      additionalImages: [gjakovamain, gjakova1],
    }
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category.includes(selectedCategory));

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setOpen(true);
  };

  const closeProjectModal = () => {
    setOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      setCurrentImageIndex(0);
    }, 300);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (currentImageIndex + 1) % (selectedProject.additionalImages.length + 1)
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (currentImageIndex - 1 + selectedProject.additionalImages.length + 1) %
          (selectedProject.additionalImages.length + 1)
      );
    }
  };

  const getCurrentImage = () => {
    if (!selectedProject) return "";
    if (currentImageIndex === 0) return selectedProject.mainImage;
    return selectedProject.additionalImages[currentImageIndex - 1];
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="portofoli" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2341] dark:text-white mb-4">
            Projektet e përfunduara
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Shikoni projektet tona të përfunduara ndër vite me cilësi të lartë dhe profesionalizëm.
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-full max-w-xs border-[#D4AF37]">
              <SelectValue placeholder="Filtro sipas kategorisë" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Të gjitha</SelectItem>
              <SelectItem value="fasade">Fasadë Termike</SelectItem>
              <SelectItem value="skeleri">Montim Skelesh</SelectItem>
              <SelectItem value="suvatim">Suvatim</SelectItem>
              <SelectItem value="ngjyrosje">Ngjyrosje</SelectItem>
              <SelectItem value="gips">Punime Gipsi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full border border-gray-200 dark:border-gray-700"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative h-60">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341]/80 to-transparent flex items-end p-4">
                    <div>
                      <h3 className="text-white font-semibold text-xl">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedProject && (
              <div className="relative">
                <DialogTitle className="sr-only">
                  {selectedProject.title}
                </DialogTitle>
                <button
                  onClick={closeProjectModal}
                  className="absolute right-4 top-4 z-50 bg-black/60 rounded-full p-1 text-white hover:bg-black/80 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="relative h-[60vh]">
                  <Image
                    src={getCurrentImage()}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />

                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 rounded-full p-2 text-white hover:bg-black/80 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 rounded-full p-2 text-white hover:bg-black/80 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h2 className="text-white text-2xl font-bold">
                      {selectedProject.title}
                    </h2>
                    <p className="text-[#D4AF37] text-lg">
                      {selectedProject.year}
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#0B2341] dark:text-white mb-4">
                      Shërbimet e Ofruara
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((service, index) => (
                        <span
                          key={index}
                          className="bg-[#D4AF37]/10 text-[#0B2341] dark:text-white px-3 py-1 rounded-full text-sm border border-[#D4AF37]/20"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}