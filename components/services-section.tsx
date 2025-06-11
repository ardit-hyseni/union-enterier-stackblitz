"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Layers, Paintbrush, Home, Construction, LayoutGrid, Droplets, Grid, Bath, Warehouse } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  detailedDescription: string;
}

export function ServicesSection() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: "Gips Karton",
      icon: <Layers className="h-10 w-10 text-[#D4AF37]" />,
      description: "Instalim profesional i mureve të gipsit, ndarje ambientesh dhe tavanë të varur.",
      detailedDescription: "Ofrojmë zgjidhje të plota me gips karton për ndarje të hapësirave, mure, tavanë të varur dhe dekorime. Përdorim materiale cilësore që plotësojnë standardet e industrisë dhe sigurojnë izolim akustik dhe termik optimal. Ekipi ynë i specializuar ka përvojë në projekte të ndryshme, nga zyrat deri tek shtëpitë dhe objektet komerciale."
    },
    {
      title: "Skele - Montim / Qeradhënje",
      icon: <Construction className="h-10 w-10 text-[#D4AF37]" />,
      description: "Montim dhe qeradhënie skelesh me standarde ndërkombëtare të sigurisë.",
      detailedDescription: "Ofrojmë shërbime profesionale të montimit dhe qeradhënies së skeleve për projekte të çdo madhësie. Skelat tona përputhen me standardet më të larta të sigurisë në industri dhe janë të përshtatshme për çdo lloj ndërtese. Ekipi ynë i specializuar siguron montim të shpejtë dhe të sigurt, si dhe mirëmbajtje të vazhdueshme gjatë gjithë kohëzgjatjes së projektit."
    },
    {
      title: "Suvatim",
      icon: <Paintbrush className="h-10 w-10 text-[#D4AF37]" />,
      description: "Suvatim i brendshëm dhe i jashtëm me cilësi të lartë dhe materiale premium.",
      detailedDescription: "Shërbimi ynë i suvatimit përfshin suvatim të brendshëm dhe të jashtëm, me materiale cilësore që sigurojnë qëndrueshmëri dhe pamje estetike. Përdorim teknika moderne dhe vegla profesionale për rezultate perfekte. Ekipi ynë ka përvojë në suvatim tradicional dhe dekorativ, duke garantuar finalizim të lëmuar dhe të qëndrueshëm."
    },
    {
      title: "Ngjyrosje",
      icon: <Droplets className="h-10 w-10 text-[#D4AF37]" />,
      description: "Lyerje profesionale e brendshme dhe e jashtme me bojëra cilësore dhe ekollogjike.",
      detailedDescription: "Shërbimi ynë i ngjyrosjes përfshin lyerje të brendshme dhe të jashtme me bojëra të cilësisë së lartë dhe miqësore ndaj mjedisit. Garantojmë mbulim të përsosur, qëndrueshmëri ndaj rrezeve UV dhe rezistencë ndaj faktorëve atmosferikë. Ekipi ynë i trajnuar siguron përgatitje të duhur të sipërfaqeve dhe aplikim profesional për rezultate të shkëlqyera."
    },
    {
      title: "Fasadë",
      icon: <Home className="h-10 w-10 text-[#D4AF37]" />,
      description: "Izolim termik profesional me materialet më cilësore (EPS, XPS, dhe Klinker dekorativ).",
      detailedDescription: "Ofrojmë izolim termik profesional me materialet EPS, XPS, dhe Klinker dekorativ për efikasitet energjetik dhe pamje estetike të ndërtesave. Çdo fasadë realizohet sipas standardeve CE, duke përfshirë montimin e skelerise dhe suvatimin e brendshëm e të jashtëm. Ekipi ynë i specializuar garanton instalim të saktë që siguron izolim të përsosur dhe jetëgjatësi maksimale të fasadës."
    },
  ];
  

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      setSelectedService(null);
    }
  };

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setOpen(true);
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
    <section id="sherbimet" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2341] dark:text-white mb-4">
            Shërbimet Tona
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Ofrojmë zgjidhje të plota ndërtimi me cilësi të lartë dhe vëmendje në çdo detaj, të përshtatura për nevojat tuaja.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 dark:border-gray-700">
                <CardHeader className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-[#0B2341]/10 dark:bg-[#D4AF37]/10 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#0B2341] dark:text-white text-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <Button
                    onClick={() => handleServiceClick(service)}
                    variant="outline"
                    className="border-[#D4AF37] text-[#0B2341] dark:text-white hover:bg-[#D4AF37] hover:text-white"
                  >
                    Më Shumë
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogContent className="sm:max-w-md">
            {selectedService && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl flex items-center gap-2">
                    <span className="text-[#D4AF37]">
                      {selectedService.icon}
                    </span>
                    {selectedService.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {selectedService.detailedDescription}
                  </p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}