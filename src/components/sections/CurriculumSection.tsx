import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CurriculumTimeline from "@/components/CurriculumTimeline";
import { CURRICULUM_STAGES } from "@/lib/data";

export default function CurriculumSection() {
  return (
    <section
      className="py-20 sm:py-28 bg-[#FFF7ED]"
      aria-labelledby="curriculum-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <AnimatedSection>
            <span className="inline-block text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">
              Curriculum
            </span>
            <h2
              id="curriculum-heading"
              className="text-3xl sm:text-4xl font-black text-[#102A43] mb-6"
            >
              단계별 커리큘럼으로
              <br />
              <span className="text-[#2563EB]">기초부터 심화까지</span>
            </h2>
            <p className="text-[#374151] text-base leading-relaxed mb-8">
              알파벳·파닉스에서 출발해 회화, 독해, 문법, 내신·수능 대비까지
              끊김 없이 이어지는 체계적인 커리큘럼으로 영어 실력을 단단하게
              쌓아갑니다.
            </p>
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#2563EB] text-[#2563EB] font-semibold text-sm hover:bg-[#2563EB] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
            >
              커리큘럼 전체 보기
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>

          <div>
            <CurriculumTimeline stages={CURRICULUM_STAGES} />
          </div>
        </div>
      </div>
    </section>
  );
}
