const VALUES = [
  {
    title: "다시 꺼내 읽는 책",
    desc: "한 번 읽고 덮는 책이 아니라, 삶의 국면마다 다시 펼치게 되는 책을 만듭니다.",
  },
  {
    title: "깊이를 쉬운 언어로",
    desc: "어려운 통찰일수록 오늘의 독자가 바로 이해할 수 있는 언어로 옮깁니다.",
  },
  {
    title: "삶이 달라지는 책",
    desc: "읽고 난 뒤 독자의 3개월 뒤가 달라지는가. 그 질문에 답하는 책만 냅니다.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-tint">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-forest">
              About Philotic
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-snug tracking-tight text-ink sm:text-4xl">
              고전의 깊이를,
              <br />
              오늘의 언어로.
            </h2>
            <p className="mt-6 max-w-md leading-loose text-ink-soft">
              필로틱은 인문·심리·자기계발의 경계에서 책을 만드는 출판
              브랜드입니다. 유행을 좇기보다, 시간이 지나도 유효한 통찰을 오늘의
              독자가 읽기 좋은 형태로 짓습니다.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-line bg-paper p-6 sm:p-7"
              >
                <h3 className="font-serif text-lg font-bold text-forest">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
