"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { SITE_CONFIG, SITE_LINKS, STATS } from "@/lib/data";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" } as Transition,
        };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#102A43] via-[#0f3460] to-[#102A43] text-white"
      aria-label="히어로 섹션"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#2563EB]/10 blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#FBBF24]/10 blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div {...fadeUp(0)} className="mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2563EB]/20 text-[#93C5FD] text-sm font-medium border border-[#2563EB]/30">
              🎓 {SITE_CONFIG.foundedYear}년 개원 · 울산 남구 영어전문 어학원
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6"
          >
            대한민국 영어교육의
            <br />
            <span className="text-[#FBBF24]">새로운 기준</span>을 만듭니다
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-lg sm:text-xl text-blue-200 leading-relaxed mb-10 max-w-2xl"
          >
            영어를 시험을 위한 암기과목이 아니라,
            <br className="hidden sm:block" />
            실제로 소통하는 언어로 배우는 곳
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href={SITE_LINKS.consultationBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#2563EB] text-white font-bold text-base hover:bg-[#1d4ed8] transition-all hover:scale-105 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43] shadow-lg shadow-blue-900/40"
            >
              <CalendarCheck size={18} />
              상담일정 온라인으로 예약하기
            </a>
            <a
              href={SITE_LINKS.kakaoOpenChat}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#FBBF24] text-[#111827] font-bold text-base hover:bg-[#f59e0b] transition-all hover:scale-105 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43] shadow-lg shadow-yellow-900/20"
            >
              <MessageCircle size={18} />
              카카오톡 오픈채팅 문의하기
            </a>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          role="list"
          aria-label="학원 핵심 정보"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              role="listitem"
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <p className="text-2xl font-black text-[#FBBF24] leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-blue-200 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
