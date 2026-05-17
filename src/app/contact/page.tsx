import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import { SITE_CONFIG, SITE_LINKS } from "@/lib/data";
import { Phone, Mail, MapPin, Clock, CalendarCheck, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "상담문의",
  description:
    "세이잉글리쉬어학원 상담 및 문의. 온라인 상담 예약, 카카오톡 오픈채팅, 전화 문의. 울산광역시 남구 신선로 83번길 1, 2층.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#102A43] to-[#1e3a52] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block text-sm font-semibold text-[#93C5FD] uppercase tracking-wider mb-3">
              Contact
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
              상담 및 문의
            </h1>
            <p className="text-blue-200 text-base sm:text-lg max-w-2xl leading-relaxed">
              부담 없이 연락해 주세요. 빠르고 친절하게 안내해 드리겠습니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="bg-[#E0F2FE] py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE_LINKS.consultationBooking}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#2563EB] text-white font-bold text-base hover:bg-[#1d4ed8] transition-all hover:scale-105 active:scale-100 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              >
                <CalendarCheck size={20} />
                상담일정 온라인으로 예약하기
              </a>
              <a
                href={SITE_LINKS.kakaoOpenChat}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#FBBF24] text-[#111827] font-bold text-base hover:bg-[#f59e0b] transition-all hover:scale-105 active:scale-100 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24] focus-visible:ring-offset-2"
              >
                <MessageCircle size={20} />
                카카오톡 오픈채팅 문의하기
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Contact Info */}
            <AnimatedSection>
              <h2 className="text-2xl font-black text-[#102A43] mb-8">
                학원 정보
              </h2>

              <ul className="space-y-6" aria-label="학원 연락처 및 위치">
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#E0F2FE] flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-1">
                      전화 문의
                    </p>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-lg font-bold text-[#102A43] hover:text-[#2563EB] transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#E0F2FE] flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-1">
                      운영 시간
                    </p>
                    <p className="text-[#102A43] font-medium">
                      평일 14:00 – 22:00
                    </p>
                    <p className="text-[#6B7280] text-sm">
                      토·일·공휴일 휴무
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#E0F2FE] flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-1">
                      이메일
                    </p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-[#102A43] hover:text-[#2563EB] transition-colors break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#E0F2FE] flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-1">
                      주소
                    </p>
                    <address className="text-[#102A43] font-medium not-italic leading-relaxed">
                      {SITE_CONFIG.address}
                    </address>
                  </div>
                </li>
              </ul>

              {/* Google Maps */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm">
                <iframe
                  src="https://maps.google.com/maps?q=울산광역시+남구+신선로+83번길+1&hl=ko&z=16&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="세이잉글리쉬어학원 위치"
                  aria-label="세이잉글리쉬어학원 위치 지도"
                />
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.12}>
              <h2 className="text-2xl font-black text-[#102A43] mb-8">
                상담 신청
              </h2>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
