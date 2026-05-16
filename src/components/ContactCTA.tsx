import { CalendarCheck, MessageCircle } from "lucide-react";
import { SITE_LINKS } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";

interface ContactCTAProps {
  heading?: string;
  subheading?: string;
  variant?: "default" | "navy";
}

export default function ContactCTA({
  heading = "지금, 세이잉글리쉬에서 우리 아이의 영어 자신감을 키워주세요.",
  subheading = "무료 레벨 테스트부터 시작하세요. 부담 없이 연락주세요.",
  variant = "default",
}: ContactCTAProps) {
  const isNavy = variant === "navy";

  return (
    <section
      className={
        isNavy
          ? "py-20 sm:py-28 bg-[#102A43]"
          : "py-20 sm:py-28 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8]"
      }
      aria-labelledby="cta-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2
            id="cta-heading"
            className="text-2xl sm:text-4xl font-black text-white leading-tight mb-4"
          >
            {heading}
          </h2>
          <p className="text-blue-200 text-base mb-10">{subheading}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_LINKS.consultationBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#2563EB] font-bold text-base hover:bg-blue-50 transition-all hover:scale-105 active:scale-100 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563EB]"
            >
              <CalendarCheck size={18} />
              상담일정 온라인으로 예약하기
            </a>
            <a
              href={SITE_LINKS.kakaoOpenChat}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FBBF24] text-[#111827] font-bold text-base hover:bg-[#f59e0b] transition-all hover:scale-105 active:scale-100 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563EB]"
            >
              <MessageCircle size={18} />
              카카오톡 오픈채팅 문의하기
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
