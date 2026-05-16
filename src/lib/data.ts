// ─── External Links (쉽게 교체 가능한 외부 링크) ──────────────────────────
export const SITE_LINKS = {
  consultationBooking: "https://forms.gle/placeholder-booking-form", // 상담 예약 링크로 교체
  kakaoOpenChat: "https://open.kakao.com/o/placeholder",            // 카카오 오픈채팅 링크로 교체
} as const;

// ─── Site Config ──────────────────────────────────────────────────────────────
export const SITE_CONFIG = {
  name: "세이잉글리쉬어학원",
  nameEn: "SAY ENGLISH Academy",
  tagline: "대한민국 영어교육의 새로운 기준을 만듭니다",
  subTagline: "영어를 시험을 위한 암기과목이 아니라, 실제로 소통하는 언어로 배우는 곳",
  phone: "010-5210-0264",
  email: "diavant3459@gmail.com",
  address: "울산광역시 남구 신선로 83번길 1, 2층",
  representative: "신용식",
  registrationNumber: "울산강남교육지원청 제6497호",
  businessNumber: "710-94-01916",
  foundedYear: 2014,
  copyright: "© 2025 SAY ENGLISH Academy. All rights reserved.",
} as const;

// ─── Navigation ────────────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "홈", href: "/" },
  { label: "프로그램", href: "/programs" },
  { label: "커리큘럼", href: "/curriculum" },
  { label: "왜 세이잉글리쉬인가요", href: "/why-sayenglish" },
  { label: "FAQ", href: "/faq" },
  { label: "상담문의", href: "/contact" },
] as const;

// ─── Stats (Hero Section) ─────────────────────────────────────────────────────
export const STATS = [
  { value: "2014년", label: "개원" },
  { value: "원어민", label: "전문 수업" },
  { value: "유치~성인", label: "전 연령 과정" },
  { value: "울산 남구", label: "위치" },
] as const;

// ─── Programs ─────────────────────────────────────────────────────────────────
export interface Program {
  id: string;
  title: string;
  ageGroup: string;
  daysPerWeek: string;
  features: string[];
  description: string;
  badge?: string;
  tuition?: string;
}

export const PROGRAMS: Program[] = [
  {
    id: "kindergarten",
    title: "유치부 · 초등 1학년",
    ageGroup: "5~7세, 초등 1학년",
    daysPerWeek: "주 3일",
    badge: "원어민 수업",
    tuition: "월 12만원",
    features: ["파닉스 & 알파벳", "기초 회화", "원어민 수업", "영어와 친해지기"],
    description:
      "영어를 처음 만나는 아이들이 두려움 없이 언어와 친해질 수 있도록 놀이 중심, 경험 중심으로 수업을 구성합니다. 원어민 선생님과 함께하는 파닉스와 기초 회화로 영어의 소리와 리듬을 자연스럽게 익힙니다.",
  },
  {
    id: "elementary",
    title: "초등 2~6학년",
    ageGroup: "초등 2~6학년",
    daysPerWeek: "주 5일",
    badge: "원어민 집중",
    tuition: "월 20만원",
    features: ["듣기 · 말하기 · 읽기 · 쓰기 통합", "원어민 집중 수업", "스토리북 읽기", "영어 자신감 형성"],
    description:
      "초등 과정은 영어 4대 영역(듣기, 말하기, 읽기, 쓰기)을 통합적으로 발전시킵니다. 매일 원어민 선생님과 수업하며 영어를 자연스러운 언어로 받아들이고, 중학교 내신까지 이어지는 탄탄한 기초를 다집니다.",
  },
  {
    id: "middle",
    title: "중등부",
    ageGroup: "중학교 1~3학년",
    daysPerWeek: "주 3일",
    badge: "내신 대비",
    tuition: "월 22만원",
    features: ["내신 · 문법 · 독해", "작문 강화", "입시 대비", "실전 감각 습득"],
    description:
      "중학교 내신과 실전 영어 실력을 동시에 키웁니다. 학교 교과과정에 맞춘 문법, 독해, 작문 수업과 함께 실제로 듣고 말하는 능력을 균형 있게 향상시켜 고등 내신으로 이어지는 연속적 학습을 지원합니다.",
  },
  {
    id: "high",
    title: "고등부",
    ageGroup: "고등학교 1~3학년",
    daysPerWeek: "주 3일",
    badge: "수능 · 내신",
    tuition: "월 30만원",
    features: ["내신 · 수능 · 입시", "독해력 강화", "문법 정확도", "실전 문제풀이"],
    description:
      "고등 내신과 수능을 모두 대비합니다. 독해력과 문법 정확도를 높이고, 실전 문제풀이 훈련으로 시험 당일 최고의 결과를 낼 수 있도록 체계적으로 준비합니다.",
  },
  {
    id: "adult",
    title: "성인 영어회화",
    ageGroup: "대학생 · 직장인 · 일반인",
    daysPerWeek: "주 2일",
    badge: "회화 중심",
    tuition: "월 22만원",
    features: ["실무 · 비즈니스 영어", "회화 자신감 향상", "대학생 대상", "일반인 가능"],
    description:
      "영어로 말하고 싶은데 자신감이 부족하신가요? 실제 상황에서 바로 쓸 수 있는 표현과 비즈니스 영어를 중심으로, 일상과 실무에서 자연스럽게 영어로 소통할 수 있도록 도와드립니다.",
  },
  {
    id: "toeic-ai",
    title: "TOEIC · TOEFL · AI 프롬프트",
    ageGroup: "대학생 · 직장인",
    daysPerWeek: "주 2일",
    badge: "AI 시대 영어",
    tuition: "월 22만원",
    features: ["TOEIC · TOEFL 대비", "AI 프롬프트 엔지니어링", "영어로 AI 활용", "실용 시험 영어"],
    description:
      "시험 영어와 AI 시대 영어를 함께 배웁니다. TOEIC/TOEFL 점수 향상은 물론, ChatGPT와 같은 AI 도구를 영어로 효과적으로 활용하는 AI 프롬프트 엔지니어링까지 배워 미래 경쟁력을 갖춥니다.",
  },
];

// ─── Curriculum Stages ────────────────────────────────────────────────────────
export interface CurriculumStage {
  id: string;
  step: number;
  title: string;
  subtitle: string;
  content: string[];
  goal: string;
  target: string;
  outcome: string;
  color: string;
}

export const CURRICULUM_STAGES: CurriculumStage[] = [
  {
    id: "phonics",
    step: 1,
    title: "파닉스 / 알파벳",
    subtitle: "영어의 기초 다지기",
    content: ["발음 규칙 이해", "알파벳 인식 및 쓰기", "기초 읽기 · 쓰기"],
    goal: "영어 소리와 문자의 연결 관계를 자연스럽게 습득",
    target: "유치부 · 초등 1~2학년",
    outcome: "영어 단어를 스스로 읽고 발음할 수 있는 능력",
    color: "from-yellow-400 to-orange-400",
  },
  {
    id: "listening-speaking",
    step: 2,
    title: "영어 듣기 / 말하기",
    subtitle: "실제로 듣고 말하는 영어 익히기",
    content: ["생활 회화 표현", "원어민 듣기 훈련", "주제별 말하기 발표"],
    goal: "실제 대화 상황에서 자연스럽게 반응하는 능력",
    target: "초등 전 학년",
    outcome: "두려움 없이 영어로 말하는 자신감",
    color: "from-blue-400 to-cyan-400",
  },
  {
    id: "reading-writing",
    step: 3,
    title: "영어 읽기 / 쓰기",
    subtitle: "생각을 영어로 표현하고 읽기 자신감 키우기",
    content: ["스토리북 읽기", "주제별 영어 글쓰기", "독해력 강화 훈련"],
    goal: "영어 텍스트를 이해하고 자신의 생각을 글로 표현하는 능력",
    target: "초등 2~6학년",
    outcome: "독립적인 독해와 작문 능력",
    color: "from-green-400 to-teal-400",
  },
  {
    id: "grammar",
    step: 4,
    title: "문법",
    subtitle: "내신, 시험, 실생활 모두 잡는 문법",
    content: ["초 · 중등 핵심 문법", "활용 중심 실전 연습", "오류 분석 및 교정"],
    goal: "정확한 영어 표현을 위한 문법적 이해",
    target: "초등 고학년 · 중학생",
    outcome: "내신 시험에서 높은 점수, 실생활에서도 정확한 영어 사용",
    color: "from-purple-400 to-violet-400",
  },
  {
    id: "advanced",
    step: 5,
    title: "심화 · 내신 대비",
    subtitle: "내신 성적 향상 및 실전 감각 습득",
    content: ["중 · 고등 교과 심화", "독해 · 문법 · 작문 통합", "실전 모의고사 분석"],
    goal: "내신과 수능에서 결과로 증명하는 영어 실력",
    target: "중학생 · 고등학생",
    outcome: "내신 성적 향상, 수능 고득점, 입시 경쟁력 확보",
    color: "from-red-400 to-rose-400",
  },
];

// ─── Strengths ────────────────────────────────────────────────────────────────
export interface Strength {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const STRENGTHS: Strength[] = [
  {
    id: "native",
    icon: "🌏",
    title: "전문성 있는 원어민 선생님",
    description:
      "영어영문학과 출신 필리핀 원어민 선생님이 수업을 진행합니다. 영어영문학 전공 원장이 직접 수업을 관리하고 커리큘럼을 설계하여, 전문성과 체계를 모두 갖춘 교육을 제공합니다.",
  },
  {
    id: "curriculum",
    icon: "📚",
    title: "학생 중심 체계적 커리큘럼",
    description:
      "알파벳 · 파닉스부터 듣기, 말하기, 읽기, 쓰기, 문법, 내신까지 단계별로 체계적으로 관리합니다. 아이의 수준에 맞는 반 배정과 개별 학습 계획으로 누구나 성장할 수 있습니다.",
  },
  {
    id: "language",
    icon: "💬",
    title: "언어로서의 영어",
    description:
      "평가만을 위한 영어가 아니라, 실제로 듣고 말하고 이해하는 영어를 가르칩니다. 영어가 시험 과목이 아닌 소통의 도구가 될 수 있도록, 언어 본연의 목적에 충실한 교육을 실천합니다.",
  },
  {
    id: "motivation",
    icon: "🌟",
    title: "따뜻하고 열정적인 선생님",
    description:
      "학생이 포기하지 않도록 격려하고 동기를 부여하는 수업 분위기를 만듭니다. 잘하는 학생뿐 아니라, 조금 느린 학생도 자신의 속도로 성장할 수 있도록 세심하게 지도합니다.",
  },
];

// ─── Tuition ──────────────────────────────────────────────────────────────────
export interface TuitionRow {
  grade: string;
  daysPerWeek: string;
  course: string;
  fee: string;
}

export const TUITION_TABLE: TuitionRow[] = [
  {
    grade: "유치부 · 초등 1학년",
    daysPerWeek: "주 3회",
    course: "파닉스 · 기초 회화",
    fee: "월 12만원",
  },
  {
    grade: "초등 2~6학년",
    daysPerWeek: "주 5회",
    course: "초등 통합 영어",
    fee: "월 20만원",
  },
  {
    grade: "중 1~3학년",
    daysPerWeek: "주 3회",
    course: "중등 영어 · 내신 대비",
    fee: "월 22만원",
  },
  {
    grade: "고 1~3학년",
    daysPerWeek: "주 3회",
    course: "고등 영어 · 수능 대비",
    fee: "월 30만원",
  },
  {
    grade: "대학생 · 성인",
    daysPerWeek: "주 2회",
    course: "TOEIC · TOEFL · 성인 회화",
    fee: "월 22만원",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "영어 교육은 몇 살 때 시작하는 것이 가장 좋은가요?",
    answer:
      "정해진 답은 없으나, 아이가 즐겁게 받아들일 수 있다면 일찍 시작할수록 언어 습득에 유리합니다. 세이잉글리쉬는 유치부부터 영어와 자연스럽게 친해질 수 있는 놀이 중심 수업을 운영하고 있습니다. 무엇보다 아이가 영어를 즐기는 경험이 가장 중요합니다.",
  },
  {
    id: "faq-2",
    question: "우리 아이의 영어 레벨을 어떻게 알 수 있나요?",
    answer:
      "무료 레벨 테스트를 통해 종합 평가 후 가장 적합한 반을 배정합니다. 테스트 소요 시간은 30분~1시간이며, 결과는 즉시 확인 가능합니다. 전화 또는 카카오톡으로 테스트 일정을 예약하시면 됩니다.",
  },
  {
    id: "faq-3",
    question: "수업 시작이 늦었는데, 다른 학생들을 잘 따라갈 수 있을까요?",
    answer:
      "가능합니다. 레벨 테스트 후 아이에게 맞는 반을 배정하고, 부족한 부분은 개별 학습 계획과 보충 수업으로 지원합니다. 세이잉글리쉬는 한 아이도 뒤처지지 않도록 선생님이 개별적으로 챙기는 관리형 수업을 운영합니다.",
  },
  {
    id: "faq-4",
    question: "수업이 너무 쉽거나 어려우면 어떻게 하나요?",
    answer:
      "담당 선생님 또는 상담전화를 통해 요청하면 평가 후 실력에 맞는 반으로 이동 조치합니다. 아이의 실력 변화에 맞춰 유연하게 반 이동이 가능하니, 부담 없이 말씀해 주세요.",
  },
  {
    id: "faq-5",
    question: "원어민 선생님과 매일 수업하는 것과 주 3회 수업은 차이가 큰가요?",
    answer:
      "매일 수업이 더 효과적일 수 있으나, 주 3회 수업도 꾸준히 참여하면 충분히 좋은 결과를 기대할 수 있습니다. 세이잉글리쉬는 유치부·초등 1학년은 주 3회, 초등 2학년부터 초등과정은 주 5회, 중·고등부는 주 3회 수업으로 운영합니다.",
  },
  {
    id: "faq-6",
    question: "숙제를 안 해가면 어떻게 되나요?",
    answer:
      "먼저 이유를 듣고 숙제의 중요성을 안내합니다. 필요 시 남아서 지도하거나 학부모님께 추가 보강 일정을 안내합니다. 아이를 혼내는 것보다 스스로 하고 싶게 만드는 것이 세이잉글리쉬의 방식입니다.",
  },
  {
    id: "faq-7",
    question: "수업 중 학생들끼리 다툼이 생기면 어떻게 대처하나요?",
    answer:
      "교사가 즉시 중재하고 서로의 입장을 이해하며 평화롭게 문제를 해결할 수 있도록 지도합니다. 사안에 따라 학부모님께 안내하고 함께 방안을 모색합니다. 아이들이 관계 속에서 배우는 것도 교육의 일부라고 생각합니다.",
  },
];

// ─── Why SAY English ──────────────────────────────────────────────────────────
export const WHY_SECTIONS = [
  {
    id: "language-not-memory",
    icon: "🗣️",
    title: "영어는 암기가 아니라 언어입니다",
    description:
      "단어를 외우고 문법을 공식으로 푸는 것은 영어를 배우는 방법이 아닙니다. 세이잉글리쉬는 영어를 실제로 듣고, 말하고, 읽고, 쓰는 언어로 가르칩니다. 영어가 두렵지 않은 아이, 영어를 즐기는 아이로 키우는 것이 우리의 목표입니다.",
  },
  {
    id: "native-managed",
    icon: "🌏",
    title: "원어민 선생님과 함께하는 관리형 수업",
    description:
      "영어영문학과 출신 필리핀 원어민 선생님의 수업을 영어영문학 전공 원장이 직접 관리합니다. 원어민 발음과 문화적 맥락을 배우면서도, 체계적인 커리큘럼과 학습 관리가 이루어지는 것이 세이잉글리쉬만의 강점입니다.",
  },
  {
    id: "systematic-curriculum",
    icon: "📈",
    title: "초등부터 고등까지 이어지는 체계적인 커리큘럼",
    description:
      "파닉스부터 시작해 회화, 독해, 문법, 내신까지 단계별로 이어지는 커리큘럼을 갖추고 있습니다. 세이잉글리쉬 한 곳에서 초등, 중등, 고등, 성인 과정까지 학습할 수 있어, 성장 단계에 따라 연속적인 학습이 가능합니다.",
  },
  {
    id: "student-centered",
    icon: "💛",
    title: "아이의 흥미와 자신감을 살리는 수업",
    description:
      "영어를 잘하는 아이뿐 아니라, 영어를 무서워하는 아이도 세이잉글리쉬에서 자신감을 되찾습니다. 선생님이 학생 한 명 한 명을 파악하고, 포기하지 않도록 격려하며 동기를 심어주는 수업을 진행합니다.",
  },
  {
    id: "ai-era",
    icon: "🤖",
    title: "AI 시대에도 흔들리지 않는 영어 기본기",
    description:
      "ChatGPT 시대에도 영어는 여전히 핵심 역량입니다. 영어로 질문하고, 정보를 정리하고, 자신의 생각을 표현하는 능력은 AI를 잘 활용하는 핵심 스킬입니다. 세이잉글리쉬는 AI와 함께 일하는 사람으로 성장하도록 돕습니다.",
  },
] as const;
