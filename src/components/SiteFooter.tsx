import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE_CONFIG, SITE_LINKS, NAV_ITEMS } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="bg-[#102A43] text-white">
      {/* CTA Band */}
      <div className="bg-[#2563EB] py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            지금, 세이잉글리쉬에서 우리 아이의 영어 자신감을 키워주세요.
          </h2>
          <p className="text-blue-100 text-sm mb-6">
            무료 레벨 테스트와 상담 예약을 지금 바로 신청하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={SITE_LINKS.consultationBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#2563EB] font-semibold text-sm hover:bg-blue-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563EB]"
            >
              상담일정 온라인으로 예약하기
            </a>
            <a
              href={SITE_LINKS.kakaoOpenChat}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FBBF24] text-[#111827] font-semibold text-sm hover:bg-[#f59e0b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563EB]"
            >
              <MessageCircle size={16} />
              카카오톡 오픈채팅 문의하기
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="font-black text-xl tracking-tight">SAY ENGLISH</p>
              <p className="text-[#93C5FD] text-xs font-semibold tracking-widest uppercase">
                Academy
              </p>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              영어를 시험 암기과목이 아니라,
              <br />
              실제로 소통하는 언어로 가르치는
              <br />
              울산 남구의 영어전문 어학원입니다.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-4">
              바로가기
            </h3>
            <nav aria-label="푸터 메뉴">
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-blue-200 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-4">
              연락처
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="text-blue-300 mt-0.5 shrink-0" />
                <div>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-blue-100 text-sm hover:text-white transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <p className="text-blue-400 text-xs mt-0.5">평일 14:00 – 22:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-blue-300 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-blue-100 text-sm hover:text-white transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-blue-300 mt-0.5 shrink-0" />
                <address className="text-blue-100 text-sm not-italic leading-relaxed">
                  {SITE_CONFIG.address}
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1e3a52] px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <dl className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-blue-400">
            <div className="flex gap-1">
              <dt>학원명</dt>
              <dd className="text-blue-300">{SITE_CONFIG.name}</dd>
            </div>
            <div className="flex gap-1">
              <dt>대표</dt>
              <dd className="text-blue-300">{SITE_CONFIG.representative}</dd>
            </div>
            <div className="flex gap-1">
              <dt>학원운영등록</dt>
              <dd className="text-blue-300">{SITE_CONFIG.registrationNumber}</dd>
            </div>
            <div className="flex gap-1">
              <dt>사업자등록번호</dt>
              <dd className="text-blue-300">{SITE_CONFIG.businessNumber}</dd>
            </div>
          </dl>
          <p className="text-blue-500 text-xs whitespace-nowrap">
            {SITE_CONFIG.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
