const PATHS = [
  {
    label: "독자",
    icon: "📚",
    desc: "지금 필로틱이 만든 책을 둘러보세요.",
    href: "#books",
    cta: "도서 목록 보기",
  },
  {
    label: "예비 저자",
    icon: "✍️",
    desc: "당신의 원고를 베스트셀러로 만들어 드립니다.",
    href: "#submit",
    cta: "원고 투고 안내",
  },
  {
    label: "제휴 · 대량구매처",
    icon: "🤝",
    desc: "서점·기업·기관 단위 제휴와 대량 구매 문의.",
    href: "#submit",
    cta: "제휴 문의하기",
  },
];

export default function Audience() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {PATHS.map((p) => (
            <a
              key={p.label}
              href={p.href}
              className="group flex flex-col rounded-2xl border border-line bg-cream p-6 transition hover:border-forest hover:bg-tint"
            >
              <span className="text-2xl" aria-hidden>
                {p.icon}
              </span>
              <h3 className="mt-3 font-serif text-lg font-bold text-ink">
                {p.label}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">
                {p.desc}
              </p>
              <span className="mt-4 text-sm font-bold text-forest">
                {p.cta}{" "}
                <span className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
