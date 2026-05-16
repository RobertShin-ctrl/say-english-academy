import AnimatedSection from "@/components/AnimatedSection";

export default function AboutSection() {
  return (
    <section
      className="py-20 sm:py-28 bg-[#FFF7ED]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <AnimatedSection>
            <span className="inline-block text-sm font-semibold text-[#2563EB] uppercase tracking-wider mb-4">
              About SAY ENGLISH
            </span>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-black text-[#102A43] leading-tight mb-6"
            >
              AI 시대, 영어는
              <br />
              <span className="text-[#2563EB]">여전히 핵심 스킬</span>입니다.
            </h2>
            <div className="space-y-4 text-[#374151] leading-relaxed text-base">
              <p>
                세이잉글리쉬는 2014년 개원 이후, 영어를 단순한 시험 암기
                과목이 아니라 실제로 소통하는 언어로 가르쳐 왔습니다.
                영어영문학과 출신 원어민 선생님들과 체계적인 커리큘럼으로
                유치부부터 성인까지 영어 교육의 모든 단계를 책임집니다.
              </p>
              <p>
                ChatGPT, AI 번역기가 넘쳐나는 시대에도 <strong className="text-[#102A43]">영어 기본기</strong>는 흔들리지 않습니다.
                AI에게 좋은 질문을 하고, 답변을 이해하고, 내 생각을 영어로
                표현하는 능력—이것이 바로 AI 시대에 필요한 영어 실력입니다.
              </p>
              <p>
                세이잉글리쉬는 아이들이{" "}
                <strong className="text-[#102A43]">
                  &ldquo;AI에게 밀리는 사람이 아니라, AI와 함께 일하는 사람&rdquo;
                </strong>
                으로 성장하도록 돕습니다. 말하기·쓰기 실전력과 AI 시대 공부법을
                함께 기르는 것이 세이잉글리쉬의 교육 철학입니다.
              </p>
            </div>
          </AnimatedSection>

          {/* Visual Card */}
          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "🗣️",
                  title: "말하기·쓰기 실전력",
                  desc: "실제로 듣고, 말하고, 쓰는 언어로서의 영어",
                },
                {
                  icon: "📖",
                  title: "영어 기본기",
                  desc: "파닉스부터 내신까지 단계별 체계적 학습",
                },
                {
                  icon: "🤖",
                  title: "AI 시대 공부법",
                  desc: "AI를 활용하는 영어 능력, 프롬프트 엔지니어링",
                },
                {
                  icon: "🌱",
                  title: "장기 성장",
                  desc: "유치부부터 성인까지 이어지는 연속적 교육",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-[#F3F4F6] hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl mb-3 block" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="font-bold text-[#102A43] text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#6B7280] text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
