import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProgramCard from "@/components/ProgramCard";
import { PROGRAMS } from "@/lib/data";

export default function ProgramsPreview() {
  return (
    <section
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="programs-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">
            Programs
          </span>
          <h2
            id="programs-heading"
            className="text-3xl sm:text-4xl font-black text-[#102A43] mb-4"
          >
            연령별 맞춤 프로그램
          </h2>
          <p className="text-[#6B7280] text-base max-w-xl mx-auto leading-relaxed">
            유치부부터 성인까지, 각 단계에 최적화된 커리큘럼으로
            <br className="hidden sm:block" />
            영어 실력을 체계적으로 키워드립니다.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, i) => (
            <AnimatedSection key={program.id} delay={i * 0.06}>
              <ProgramCard program={program} index={i} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#2563EB] text-[#2563EB] font-semibold text-sm hover:bg-[#2563EB] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
          >
            전체 프로그램 자세히 보기
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
