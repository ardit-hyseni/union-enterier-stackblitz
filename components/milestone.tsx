"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export function Milestone({
  year,
  title,
  description,
  isLast = false,
}: MilestoneProps) {
  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-10 w-0.5 h-full bg-[#D4AF37]/30 dark:bg-[#D4AF37]/20" />
      )}

      <div className="flex items-start space-x-4">
        {/* Timeline Circle */}
        <div className="flex-shrink-0 relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-md"
          >
            <CalendarDays className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <h4 className="text-[#D4AF37] font-bold text-xl mb-1">{year}</h4>
            <h5 className="text-[#0B2341] dark:text-white font-semibold mb-2">
              {title}
            </h5>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}