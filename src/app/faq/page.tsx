import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import ContactCTA from "@/components/ContactCTA";
import { FAQ_ITEMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "세이잉글리쉬어학원 자주 묻는 질문. 영어 교육 시작 시기, 레벨 테스트, 수업 방식, 숙제, 수강료 등 학부모님들의 궁금한 점에 답합니다.",
};

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#102A43] to-[#1e3a52] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block text-sm font-semibold text-[#93C5FD] uppercase tracking-wider mb-3">
              FAQ
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
              자주 묻는 질문
            </h1>
            <p className="text-blue-200 text-base sm:text-lg max-w-2xl leading-relaxed">
              학부모님들이 가장 많이 물어보시는 질문들을 모았습니다.
              더 궁금한 점은 언제든지 연락 주세요.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ List */}
      <section
        className="py-20 sm:py-28 bg-[#F8FAFC]"
        aria-labelledby="faq-list-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2
              id="faq-list-heading"
              className="text-2xl sm:text-3xl font-black text-[#102A43] mb-2"
            >
              Q&amp;A
            </h2>
            <p className="text-[#6B7280] text-sm">
              총 {FAQ_ITEMS.length}개의 질문 · 항목을 클릭하면 답변을 확인할 수 있습니다.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <FAQAccordion items={FAQ_ITEMS} />
          </AnimatedSection>

          {/* Still have questions */}
          <AnimatedSection delay={0.2} className="mt-12">
            <div className="bg-[#E0F2FE] rounded-2xl p-8 text-center border border-[#BAE6FD]">
              <p className="text-2xl mb-3" aria-hidden="true">💬</p>
              <h3 className="text-lg font-bold text-[#102A43] mb-2">
                원하시는 답변을 찾지 못하셨나요?
              </h3>
              <p className="text-[#374151] text-sm mb-5 leading-relaxed">
                전화 또는 카카오톡으로 편하게 물어보세요.
                <br />
                빠르고 친절하게 답변 드리겠습니다.
              </p>
              <a
                href="tel:010-5210-0264"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563EB] text-white font-semibold text-sm hover:bg-[#1d4ed8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              >
                010-5210-0264 바로 전화하기
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactCTA
        heading="아직 더 궁금한 점이 있으신가요?"
        subheading="상담 예약 또는 카카오톡으로 빠르게 문의해 주세요."
      />
    </>
  );
}
