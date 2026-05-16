import AnimatedSection from "@/components/AnimatedSection";
import TuitionTable from "@/components/TuitionTable";

export default function TuitionSection() {
  return (
    <section
      className="py-20 sm:py-28 bg-white"
      aria-labelledby="tuition-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">
            Tuition
          </span>
          <h2
            id="tuition-heading"
            className="text-3xl sm:text-4xl font-black text-[#102A43] mb-4"
          >
            수강료 안내
          </h2>
          <p className="text-[#6B7280] text-base max-w-xl mx-auto leading-relaxed">
            합리적인 비용으로 전문적인 원어민 영어 교육을 받을 수 있습니다.
            <br className="hidden sm:block" />
            무료 레벨 테스트 후 맞는 과정을 상담해 드립니다.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <TuitionTable />
        </AnimatedSection>
      </div>
    </section>
  );
}
