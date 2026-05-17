"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG, SITE_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-[#E5E7EB] shadow-sm"
          : "bg-white border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
            aria-label="세이잉글리쉬어학원 홈으로 이동"
          >
            <Image
              src="/images/KakaoTalk_20260517_113951502.png"
              alt="SAY ENGLISH Academy"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="주 메뉴" className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-[#2563EB] bg-[#E0F2FE]"
                    : "text-[#374151] hover:text-[#2563EB] hover:bg-[#F0F9FF]"
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1.5 text-sm text-[#374151] hover:text-[#2563EB] transition-colors"
              aria-label={`전화 문의: ${SITE_CONFIG.phone}`}
            >
              <Phone size={14} />
              <span className="font-medium">{SITE_CONFIG.phone}</span>
            </a>
            <a
              href={SITE_LINKS.consultationBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
            >
              상담 예약
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg text-[#374151] hover:text-[#2563EB] hover:bg-[#F0F9FF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-[#E5E7EB] bg-white"
        >
          <nav aria-label="모바일 메뉴" className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-[#2563EB] bg-[#E0F2FE]"
                    : "text-[#374151] hover:text-[#2563EB] hover:bg-[#F0F9FF]"
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2 border-t border-[#E5E7EB] mt-2">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-[#374151] hover:text-[#2563EB] hover:bg-[#F0F9FF] transition-colors"
              >
                <Phone size={16} />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={SITE_LINKS.consultationBooking}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-3 rounded-full bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
              >
                상담 예약하기
              </a>
              <a
                href={SITE_LINKS.kakaoOpenChat}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-3 rounded-full bg-[#FBBF24] text-[#111827] text-sm font-semibold hover:bg-[#f59e0b] transition-colors"
              >
                카카오톡 문의
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
