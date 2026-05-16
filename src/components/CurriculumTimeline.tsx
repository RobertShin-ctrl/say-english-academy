import { CurriculumStage } from "@/lib/data";
import { cn } from "@/lib/utils";
import AnimatedSection from "@/components/AnimatedSection";

interface CurriculumTimelineProps {
  stages: CurriculumStage[];
  detailed?: boolean;
}

export default function CurriculumTimeline({
  stages,
  detailed = false,
}: CurriculumTimelineProps) {
  return (
    <ol className="space-y-6" aria-label="커리큘럼 단계">
      {stages.map((stage, i) => (
        <AnimatedSection key={stage.id} delay={i * 0.08}>
          <li className="flex gap-5 sm:gap-6">
            {/* Step indicator */}
            <div className="flex flex-col items-center shrink-0 pt-1">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm bg-gradient-to-br shrink-0",
                  stage.color
                )}
                aria-label={`단계 ${stage.step}`}
              >
                {stage.step}
              </div>
              {i < stages.length - 1 && (
                <div
                  className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-[#E5E7EB] to-transparent min-h-8"
                  aria-hidden="true"
                />
              )}
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-5 sm:p-6 flex-1 hover:shadow-md transition-shadow">
              <div className="mb-3">
                <h3 className="text-base sm:text-lg font-bold text-[#102A43]">
                  {stage.title}
                </h3>
                <p className="text-sm text-[#6B7280]">{stage.subtitle}</p>
              </div>

              {/* Content list */}
              <ul className="flex flex-wrap gap-2 mb-3" aria-label="주요 내용">
                {stage.content.map((c) => (
                  <li
                    key={c}
                    className="px-3 py-1 rounded-full bg-[#F0F9FF] text-[#2563EB] text-xs font-medium"
                  >
                    {c}
                  </li>
                ))}
              </ul>

              {detailed && (
                <dl className="mt-4 space-y-2 border-t border-[#F3F4F6] pt-4">
                  <div>
                    <dt className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                      학습 목표
                    </dt>
                    <dd className="text-sm text-[#374151] mt-0.5">{stage.goal}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                      추천 대상
                    </dt>
                    <dd className="text-sm text-[#374151] mt-0.5">{stage.target}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                      수업 후 변화
                    </dt>
                    <dd className="text-sm text-[#374151] mt-0.5">{stage.outcome}</dd>
                  </div>
                </dl>
              )}

              {!detailed && (
                <p className="text-sm text-[#374151] leading-relaxed">
                  <span className="font-semibold">목표: </span>
                  {stage.goal}
                </p>
              )}
            </div>
          </li>
        </AnimatedSection>
      ))}
    </ol>
  );
}
