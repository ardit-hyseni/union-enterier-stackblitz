"use client";

import { motion } from "framer-motion";
import { Users, BuildingIcon, Calendar } from "lucide-react";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  title: string;
  icon: React.ReactNode;
}

export function StatsSection() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const stats: Stat[] = [
    {
      value: 130,
      suffix: "+",
      title: "Punëtorë",
      icon: <Users className="w-8 h-8" />,
    },
    {
      value: 25000,
      suffix: " m²",
      title: "Fasada të Realizuara",
      icon: <BuildingIcon className="w-8 h-8" />,
    },
    {
      value: 20,
      suffix: "+",
      title: "Vite Eksperiencë",
      icon: <Calendar className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-16 bg-[#0B2341] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#0B2341] to-[#0B2341]/70 rounded-xl p-6 border border-[#D4AF37]/20 shadow-lg flex flex-col items-center text-center"
            >
              <div className="bg-[#D4AF37] p-4 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2 text-[#D4AF37]">
                {hasMounted ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                ) : (
                  `${stat.value.toLocaleString()}${stat.suffix}`
                )}
              </div>
              <h3 className="text-xl font-semibold">{stat.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}