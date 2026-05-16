"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Strength } from "@/lib/data";

interface StrengthCardProps {
  strength: Strength;
}

export default function StrengthCard({ strength }: StrengthCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl p-7 border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow"
    >
      <span className="text-4xl mb-4 block" aria-hidden="true">
        {strength.icon}
      </span>
      <h3 className="text-base font-bold text-[#102A43] mb-3">{strength.title}</h3>
      <p className="text-sm text-[#6B7280] leading-relaxed">{strength.description}</p>
    </motion.div>
  );
}
