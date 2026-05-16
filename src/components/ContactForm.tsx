"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const GRADE_OPTIONS = [
  "유치부",
  "초등 1학년",
  "초등 2~3학년",
  "초등 4~6학년",
  "중학생",
  "고등학생",
  "대학생 / 성인",
];

const COURSE_OPTIONS = [
  "유치부 · 초등 1학년 원어민 수업",
  "초등 통합 영어 (주 5일)",
  "중등 내신 · 영어",
  "고등 수능 · 내신 영어",
  "성인 영어회화",
  "TOEIC / TOEFL",
  "AI 프롬프트 엔지니어링",
  "아직 잘 모르겠어요 (상담 희망)",
];

interface FormState {
  name: string;
  phone: string;
  grade: string;
  course: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    grade: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "이름을 입력해 주세요.";
    if (!form.phone.trim()) newErrors.phone = "연락처를 입력해 주세요.";
    if (!form.grade) newErrors.grade = "학년을 선택해 주세요.";
    if (!form.course) newErrors.course = "관심 과정을 선택해 주세요.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Mock submission — 실제 전송 없음
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="bg-[#F0FDF4] rounded-2xl border border-[#BBF7D0] p-10 text-center">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-[#102A43] mb-2">
          상담 신청이 접수되었습니다!
        </h3>
        <p className="text-[#374151] text-sm leading-relaxed mb-1">
          <strong>{form.name}</strong>님의 상담 신청을 받았습니다.
        </p>
        <p className="text-[#6B7280] text-sm">
          입력하신 연락처 <strong>{form.phone}</strong>로
          <br />
          1~2 영업일 내에 연락드리겠습니다.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", phone: "", grade: "", course: "", message: "" });
          }}
          className="mt-6 px-5 py-2.5 rounded-full border border-[#2563EB] text-[#2563EB] text-sm font-medium hover:bg-[#E0F2FE] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
        >
          다시 신청하기
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="상담 신청 양식"
      className="space-y-5"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-[#374151] mb-1.5"
        >
          이름 <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="학생 또는 학부모 이름"
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={cn(
            "w-full px-4 py-3 rounded-xl border text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors",
            errors.name ? "border-red-400 bg-red-50" : "border-[#E5E7EB] bg-white"
          )}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-[#374151] mb-1.5"
        >
          연락처 <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="010-0000-0000"
          autoComplete="tel"
          aria-required="true"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={cn(
            "w-full px-4 py-3 rounded-xl border text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors",
            errors.phone ? "border-red-400 bg-red-50" : "border-[#E5E7EB] bg-white"
          )}
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-500">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Grade */}
      <div>
        <label
          htmlFor="grade"
          className="block text-sm font-semibold text-[#374151] mb-1.5"
        >
          학생 학년 <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="grade"
          name="grade"
          value={form.grade}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.grade}
          aria-describedby={errors.grade ? "grade-error" : undefined}
          className={cn(
            "w-full px-4 py-3 rounded-xl border text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors bg-white",
            errors.grade ? "border-red-400 bg-red-50" : "border-[#E5E7EB]",
            !form.grade && "text-[#9CA3AF]"
          )}
        >
          <option value="" disabled>
            학년 선택
          </option>
          {GRADE_OPTIONS.map((g) => (
            <option key={g} value={g} className="text-[#111827]">
              {g}
            </option>
          ))}
        </select>
        {errors.grade && (
          <p id="grade-error" role="alert" className="mt-1.5 text-xs text-red-500">
            {errors.grade}
          </p>
        )}
      </div>

      {/* Course */}
      <div>
        <label
          htmlFor="course"
          className="block text-sm font-semibold text-[#374151] mb-1.5"
        >
          관심 과정 <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="course"
          name="course"
          value={form.course}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.course}
          aria-describedby={errors.course ? "course-error" : undefined}
          className={cn(
            "w-full px-4 py-3 rounded-xl border text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors bg-white",
            errors.course ? "border-red-400 bg-red-50" : "border-[#E5E7EB]",
            !form.course && "text-[#9CA3AF]"
          )}
        >
          <option value="" disabled>
            과정 선택
          </option>
          {COURSE_OPTIONS.map((c) => (
            <option key={c} value={c} className="text-[#111827]">
              {c}
            </option>
          ))}
        </select>
        {errors.course && (
          <p id="course-error" role="alert" className="mt-1.5 text-xs text-red-500">
            {errors.course}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-[#374151] mb-1.5"
        >
          문의 내용{" "}
          <span className="text-[#9CA3AF] font-normal">(선택)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="궁금한 점이나 아이에 대해 알려주세요. (영어 수준, 학습 목표 등)"
          className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#2563EB] text-white font-bold text-base hover:bg-[#1d4ed8] disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
        aria-busy={loading}
      >
        {loading ? (
          <>
            <span
              className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
              aria-hidden="true"
            />
            접수 중...
          </>
        ) : (
          <>
            <Send size={16} />
            상담 신청하기
          </>
        )}
      </button>

      <p className="text-xs text-[#9CA3AF] text-center">
        * 입력하신 정보는 상담 목적으로만 사용됩니다.
      </p>
    </form>
  );
}
