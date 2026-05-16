"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Program } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  program: Program;
  index?: number;
  detailed?: boolean;
}

const CARD_COLORS = [
  "from-blue-500 to-cyan-500",
  "from-violet-500 to-purple-500",
  "from-green-500 to-teal-500",
  "from-rose-500 to-pink-500",
  "from-orange-500 to-amber-500",
  "from-indigo-500 to-blue-600",
];

export default function ProgramCard({
  program,
  index = 0,
  detailed = false,
}: ProgramCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const gradientClass = CARD_COLORS[index % CARD_COLORS.length];

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
    >
      {/* Color accent top bar */}
      <div className={cn("h-2 w-full bg-gradient-to-r", gradientClass)} aria-hidden="true" />

      <div className="p-6 flex flex-col flex-1">
        {/* Badge + Days */}
        <div className="flex items-center justify-between mb-3">
          {program.badge && (
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#E0F2FE] text-[#2563EB]">
              {program.badge}
            </span>
          )}
          <span className="flex items-center gap-1 text-xs text-[#6B7280] ml-auto">
            <Clock size={12} />
            {program.daysPerWeek}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#102A43] mb-1">{program.title}</h3>
        <p className="text-xs text-[#6B7280] mb-4">{program.ageGroup}</p>

        {/* Description */}
        <p className={cn("text-sm text-[#374151] leading-relaxed mb-4", detailed ? "" : "line-clamp-3")}>
          {program.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 mb-5 flex-1" aria-label="수업 특징">
          {program.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-[#374151]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>

        {/* Tuition + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-[#F3F4F6] mt-auto">
          {program.tuition && (
            <p className="text-base font-bold text-[#102A43]">{program.tuition}</p>
          )}
          <Link
            href="/contact"
            className="flex items-center gap-1 text-sm font-semibold text-[#2563EB] hover:text-[#1d4ed8] transition-colors ml-auto"
          >
            상담 신청
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
