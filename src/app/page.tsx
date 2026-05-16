import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProgramsPreview from "@/components/sections/ProgramsPreview";
import WhySection from "@/components/sections/WhySection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import TuitionSection from "@/components/sections/TuitionSection";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "세이잉글리쉬어학원 | 울산 영어교육의 새로운 기준",
  description:
    "울산 남구 세이잉글리쉬어학원. 원어민 수업, 초·중·고 내신, 성인 영어, AI 시대 영어교육. 무료 레벨 테스트 후 상담 가능.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsPreview />
      <WhySection />
      <CurriculumSection />
      <TuitionSection />
      <ContactCTA />
    </>
  );
}
