import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ProgramCard from "@/components/ProgramCard";
import ContactCTA from "@/components/ContactCTA";
import { PROGRAMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "프로그램",
  description:
    "세이잉글리쉬어학원의 연령별 영어 프로그램. 유치부·초등 원어민 수업, 중·고등 내신 대비, 성인 영어회화, TOEIC·TOEFL·AI 프롬프트 엔지니어링.",
};

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#102A43] to-[#1e3a52] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block text-sm font-semibold text-[#93C5FD] uppercase tracking-wider mb-3">
              Programs
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
              연령별 맞춤 프로그램
            </h1>
            <p className="text-blue-200 text-base sm:text-lg max-w-2xl leading-relaxed">
              유치부부터 성인까지, 각 단계에 맞는 최적의 커리큘럼으로
              영어 실력을 체계적으로 성장시킵니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs Grid */}
      <section
        className="py-20 sm:py-28 bg-white"
        aria-labelledby="programs-list-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2
              id="programs-list-heading"
              className="text-2xl sm:text-3xl font-black text-[#102A43] mb-2"
            >
              전체 프로그램
            </h2>
            <p className="text-[#6B7280] text-sm">
              총 {PROGRAMS.length}개 과정 · 무료 레벨 테스트 후 배정
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((program, i) => (
              <AnimatedSection key={program.id} delay={i * 0.07}>
                <ProgramCard program={program} index={i} detailed />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-xl font-bold text-[#102A43] mb-6 text-center">
              수업 공통 안내
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  icon: "📋",
                  title: "무료 레벨 테스트",
                  desc: "입학 전 무료 레벨 테스트(30분~1시간)로 적합한 반을 배정합니다.",
                },
                {
                  icon: "🔄",
                  title: "유연한 반 이동",
                  desc: "실력 변화에 따라 언제든지 반 이동이 가능합니다.",
                },
                {
                  icon: "📞",
                  title: "상담 후 시작",
                  desc: "전화 또는 카카오톡으로 먼저 상담 후 등록하실 수 있습니다.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm"
                >
                  <span className="text-3xl mb-3 block" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="font-bold text-[#102A43] text-sm mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#6B7280] text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactCTA
        heading="궁금한 과정이 있으신가요?"
        subheading="전화 또는 카카오톡으로 편하게 문의해 주세요. 빠르게 답변드립니다."
      />
    </>
  );
}
