"use client";

import { motion } from "framer-motion";
import { Milestone } from "@/components/milestone";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export function AboutSection() {
  const timelineEvents: TimelineEvent[] = [
    {
      year: "2000",
      title: "Themelimi",
      description: "Union Enterier themelohet në Prishtinë, duke filluar si biznes familjar me fokus në punime të brendshme",
    },
    {
      year: "2005",
      title: "Zgjerimi i ekipit",
      description: "Arritëm 50 punëtorë dhe hapëm zyrat e reja për të akomoduar rritjen e kompanisë",
    },
    {
      year: "2010",
      title: "Projekti i parë i madh",
      description: "Realizimi i projektit të parë me sipërfaqe mbi 10,000 m² në qendër të Prishtinës",
    },
    {
      year: "2018",
      title: "Projekti ndërkombëtar",
      description: "Zgjerimi i operacioneve jashtë Kosovës me projektin e parë ndërkombëtar",
    },
    {
      year: "2025",
      title: "Rritje e qëndrueshme",
      description: "Vazhdim i zgjerimit me staf të specializuar dhe realizimi i projekteve të mëdha ndërtimore në përputhje me standardet më të larta të industrisë.",
    },
  ];

  return (
    <section id="rreth-nesh" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2341] dark:text-white mb-6">
              Rreth Nesh
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Union Enterier është një kompani ndërtimi me bazë në Prishtinë, Kosovë, me dekada përvojë në industrinë e ndërtimit. Që nga themelimi në vitin 2000, kemi rritur ekipin tonë nga një biznes i vogël familjar në një ekip të gjerë profesionistësh të specializuar në fusha të ndryshme të ndërtimit.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Vlerat tona themelore janë cilësia, integriteti dhe profesionalizmi. Çdo projekt që ne marrim përsipër realizohet me vëmendje të veçantë ndaj detajeve dhe cilësisë së materialeve të përdorura.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-[#0B2341] dark:text-white mb-6">
              Historiku Ynë
            </h3>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <Milestone
                  key={index}
                  year={event.year}
                  title={event.title}
                  description={event.description}
                  isLast={index === timelineEvents.length - 1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
