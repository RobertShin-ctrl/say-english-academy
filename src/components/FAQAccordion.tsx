"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/lib/data";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3" role="list" aria-label="자주 묻는 질문">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-btn-${item.id}`;

        return (
          <div
            key={item.id}
            role="listitem"
            className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm overflow-hidden"
          >
            <h3>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-semibold text-[#102A43] hover:bg-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <span className="pr-4">{item.question}</span>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 text-[#6B7280] transition-transform duration-300",
                    isOpen ? "rotate-180" : "rotate-0"
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-96" : "max-h-0"
              )}
            >
              <div className="px-6 pb-5 pt-0">
                <div className="border-t border-[#F3F4F6] pt-4">
                  <p className="text-[#374151] text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
