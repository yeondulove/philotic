const PILLARS = [
  {
    title: "만들면 띄웁니다",
    desc: "출간과 동시에 카드뉴스·릴스·쇼츠·AI 영상이 가동됩니다. 자청 생태계의 채널 — 유튜브 44만·인스타 9만 —으로 출간 첫날 수십만 명에게 동시에 가닿습니다.",
  },
  {
    title: "데이터로 기획합니다",
    desc: "감이 아니라 데이터로 읽습니다. 대중이 무엇에 결핍을 느끼는지, 어떤 주제가 지금 터질지를 근거 위에서 기획합니다. 좋은 기획을 운에 맡기지 않습니다.",
  },
  {
    title: "삶을 바꾸는 책을 냅니다",
    desc: "읽고 끝나는 책이 아니라, 읽은 뒤 3개월 뒤가 달라지는 책. 뻔한 위로를 넘어 과학적·인문학적 통찰로 독자의 방향을 바꾸는 책만 만듭니다.",
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
              만들면, 띄웁니다.
            </h2>
            <p className="mt-6 max-w-md leading-loose text-ink-soft">
              다른 곳은 책을 내고 시장의 반응을 기다립니다. 필로틱은 책을 내는
              순간, 마케팅 엔진이 가동됩니다. 좋은 책을 &lsquo;만드는
              일&rsquo;을 넘어 &lsquo;알리는 일&rsquo;까지 책임지는, 베스트셀러를
              만드는 출판 브랜드입니다.
            </p>
            <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-8">
              <div>
                <dt className="text-sm text-ink-soft">2년간 출간작</dt>
                <dd className="mt-1 font-serif text-2xl font-bold text-forest">
                  연속 베스트셀러
                </dd>
              </div>
              <div>
                <dt className="text-sm text-ink-soft">채널 총 도달</dt>
                <dd className="mt-1 font-serif text-2xl font-bold text-forest">
                  60만+
                </dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4">
            {PILLARS.map((v) => (
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
