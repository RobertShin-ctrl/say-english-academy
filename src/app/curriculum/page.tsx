import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import CurriculumTimeline from "@/components/CurriculumTimeline";
import ContactCTA from "@/components/ContactCTA";
import { CURRICULUM_STAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "커리큘럼",
  description:
    "세이잉글리쉬어학원 단계별 커리큘럼. 파닉스·알파벳 → 듣기·말하기 → 읽기·쓰기 → 문법 → 심화·내신 대비까지 체계적으로 이어지는 영어 학습 로드맵.",
};

export default function CurriculumPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#102A43] to-[#1e3a52] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block text-sm font-semibold text-[#93C5FD] uppercase tracking-wider mb-3">
              Curriculum
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
              단계별 커리큘럼
            </h1>
            <p className="text-blue-200 text-base sm:text-lg max-w-2xl leading-relaxed">
              알파벳에서 수능까지, 끊김 없이 이어지는 세이잉글리쉬의
              체계적인 영어 학습 로드맵을 소개합니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview Banner */}
      <section className="bg-[#E0F2FE] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-wrap gap-4 justify-center">
            {CURRICULUM_STAGES.map((stage) => (
              <div
                key={stage.id}
                className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm border border-[#E5E7EB]"
              >
                <div
                  className={`w-6 h-6 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center text-white text-xs font-bold`}
                  aria-hidden="true"
                >
                  {stage.step}
                </div>
                <span className="text-sm font-medium text-[#102A43]">
                  {stage.title}
                </span>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-20 sm:py-28 bg-white"
        aria-labelledby="curriculum-detail-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <h2
              id="curriculum-detail-heading"
              className="text-2xl sm:text-3xl font-black text-[#102A43] mb-3"
            >
              학습 단계별 상세 안내
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed">
              각 단계의 주요 내용, 학습 목표, 추천 대상, 수업 후 변화를 확인하세요.
            </p>
          </AnimatedSection>

          <CurriculumTimeline stages={CURRICULUM_STAGES} detailed />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-[#FFF7ED]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-black text-[#102A43] mb-4">
              세이잉글리쉬 커리큘럼 철학
            </h2>
            <p className="text-[#374151] text-base leading-relaxed mb-8">
              세이잉글리쉬는 단순히 교재를 따라가는 것이 아니라, 각 학생의
              수준과 속도에 맞춰 학습 계획을 세웁니다. 선생님이 직접 학생을
              파악하고, 부족한 부분은 보완하며, 강점은 더욱 키울 수 있도록
              <strong className="text-[#102A43]"> 개인 맞춤형 관리</strong>를
              제공합니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { icon: "🎯", text: "목표 중심 학습" },
                { icon: "🔄", text: "반복과 응용" },
                { icon: "💪", text: "자신감 중심 교육" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="bg-white rounded-2xl p-6 border border-[#E5E7EB] shadow-sm"
                >
                  <span className="text-3xl block mb-2" aria-hidden="true">
                    {item.icon}
                  </span>
                  <p className="font-semibold text-[#102A43] text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactCTA
        heading="우리 아이에게 맞는 단계가 궁금하신가요?"
        subheading="무료 레벨 테스트로 딱 맞는 단계를 찾아드립니다."
      />
    </>
  );
}
