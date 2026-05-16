import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactCTA from "@/components/ContactCTA";
import { WHY_SECTIONS, STRENGTHS } from "@/lib/data";

export const metadata: Metadata = {
  title: "왜 세이잉글리쉬인가요",
  description:
    "세이잉글리쉬어학원이 특별한 이유. 원어민 관리형 수업, 언어로서의 영어, 초등부터 고등까지 체계적 커리큘럼, AI 시대 영어 기본기.",
};

export default function WhySayEnglishPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#102A43] to-[#1e3a52] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block text-sm font-semibold text-[#93C5FD] uppercase tracking-wider mb-3">
              Why SAY English
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
              왜 세이잉글리쉬인가요?
            </h1>
            <p className="text-blue-200 text-base sm:text-lg max-w-2xl leading-relaxed">
              단순한 영어학원이 아닙니다. 초등 기초부터 중·고등 내신, 성인 영어,
              AI 시대 영어 활용까지 이어지는 장기 성장형 영어교육 브랜드입니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Strengths */}
      <section
        className="py-20 sm:py-28 bg-white"
        aria-labelledby="strengths-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2
              id="strengths-heading"
              className="text-2xl sm:text-3xl font-black text-[#102A43] mb-3"
            >
              세이잉글리쉬만의 4가지 강점
            </h2>
            <p className="text-[#6B7280] text-base max-w-xl mx-auto">
              다른 학원과 세이잉글리쉬가 다른 이유를 직접 확인하세요.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STRENGTHS.map((s, i) => (
              <AnimatedSection key={s.id} delay={i * 0.08}>
                <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-[#E5E7EB] hover:shadow-md transition-shadow">
                  <span className="text-5xl block mb-5" aria-hidden="true">
                    {s.icon}
                  </span>
                  <h3 className="text-xl font-bold text-[#102A43] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[#374151] text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sections - detailed */}
      <section className="bg-[#FFF7ED]" aria-labelledby="why-detail-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <AnimatedSection className="mb-12">
            <h2
              id="why-detail-heading"
              className="text-2xl sm:text-3xl font-black text-[#102A43] mb-3"
            >
              세이잉글리쉬의 교육 철학
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed">
              영어를 가르치는 방식이 왜 다른지, 어떤 믿음으로 수업하는지
              솔직하게 말씀드립니다.
            </p>
          </AnimatedSection>

          <div className="space-y-10">
            {WHY_SECTIONS.map((section, i) => (
              <AnimatedSection key={section.id} delay={i * 0.07}>
                <div className="flex gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm border border-[#E5E7EB] shrink-0"
                    aria-hidden="true"
                  >
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#102A43] mb-2">
                      {section.title}
                    </h3>
                    <p className="text-[#374151] text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#102A43] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "2014년", label: "개원" },
                { value: "100%", label: "원어민 수업" },
                { value: "5단계", label: "체계적 커리큘럼" },
                { value: "전 연령", label: "맞춤 과정" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-3xl sm:text-4xl font-black text-[#FBBF24] mb-1">
                    {item.value}
                  </p>
                  <p className="text-blue-300 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactCTA
        heading="세이잉글리쉬가 궁금하신가요?"
        subheading="방문 상담 또는 전화로 언제든지 문의해 주세요."
        variant="navy"
      />
    </>
  );
}
