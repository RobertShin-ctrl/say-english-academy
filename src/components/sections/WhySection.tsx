import AnimatedSection from "@/components/AnimatedSection";
import StrengthCard from "@/components/StrengthCard";
import { STRENGTHS } from "@/lib/data";

export default function WhySection() {
  return (
    <section
      className="py-20 sm:py-28 bg-[#E0F2FE]"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-3">
            Why SAY English
          </span>
          <h2
            id="why-heading"
            className="text-3xl sm:text-4xl font-black text-[#102A43] mb-4"
          >
            세이잉글리쉬만의 특별한 강점
          </h2>
          <p className="text-[#374151] text-base max-w-xl mx-auto leading-relaxed">
            영어가 두렵지 않은 아이, 영어로 말할 수 있는 자신감—
            <br className="hidden sm:block" />
            세이잉글리쉬가 함께 만들어 갑니다.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STRENGTHS.map((s, i) => (
            <AnimatedSection key={s.id} delay={i * 0.08}>
              <StrengthCard strength={s} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
