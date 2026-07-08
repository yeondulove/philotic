import Image from "next/image";

type Book = {
  title: string;
  cover: string;
  author?: string;
  desc: string;
  badge?: string;
};

const BOOKS: Book[] = [
  {
    title: "완벽한 원시인",
    author: "자청",
    cover: "/books/wonsiin.jpg",
    desc: "석기시대에 최적화된 뇌로 디지털 시대를 사는 우리. 진화심리학의 렌즈로 현대인의 불안과 번아웃, 관계의 어려움을 꿰뚫는다.",
    badge: "출간 직후 교보문고 종합 1위",
  },
  {
    title: "프로이트의 감정수업",
    author: "강이안",
    cover: "/books/freud.jpg",
    desc: "보이지 않는 무의식이 오늘의 나를 어떻게 움직이는가. 정신분석의 통찰을 현대의 언어로 옮겨, 감정에 휘둘리지 않고 나를 이해하는 법.",
    badge: "교보문고 독자 평점 9.9",
  },
  {
    title: "무한의 부",
    cover: "/books/muhan.jpg",
    desc: "부의 크기를 결정하는 것은 통장 잔고가 아니라 생각의 그릇이다. 돈을 담아낼 그릇부터 키우는, 자본주의 시대의 부의 태도.",
    badge: "베스트셀러",
  },
  {
    title: "라이프코드",
    cover: "/books/lifecode.jpg",
    desc: "왜 어떤 사람은 늘 원하는 것을 얻는가. 사람과 관계, 선택의 이면에서 작동하는 인간 본성의 코드를 해독한다.",
    badge: "베스트셀러",
  },
  {
    title: "강풍에도 쓰러지지 않는다",
    author: "모옌",
    cover: "/books/gangpung.jpg",
    desc: "노벨문학상 수상작가 모옌의 작품. 무너지지 않는 사람에게는 단단한 마음의 구조가 있다. 흔들리는 시대에 나를 지탱하는 힘.",
    badge: "노벨문학상 수상작가",
  },
  {
    title: "어제보다 멍청해지기 전에",
    cover: "/books/eoje.jpg",
    desc: "생각하지 않을수록 뇌는 빠르게 무뎌진다. 매일 조금씩 더 선명하게 사고하는 사람으로 남기 위한 지적 습관.",
    badge: "베스트셀러",
  },
  {
    title: "게으른 그들은 어떻게 1조원을 벌었을까",
    cover: "/books/geeoreun.jpg",
    desc: "성실하게 오래 일한다고 부자가 되지는 않는다. 적게 일하고 크게 버는 사람들이 공유하는, 노동이 아닌 구조의 사고법.",
  },
];

export default function Books() {
  return (
    <section id="books" className="scroll-mt-16 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-forest">
              Books
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              필로틱이 만든 책들
            </h2>
          </div>
          <span className="hidden text-sm text-ink-soft sm:block">
            전체 {BOOKS.length}종
          </span>
        </div>
        <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
          신생 출판사가 2년간, 내는 책마다 종합 베스트셀러 매대에 올렸습니다.
          운이 아니라 시스템으로 증명합니다.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {BOOKS.map((book) => (
            <article key={book.title} className="group flex flex-col">
              <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 transition duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                <Image
                  src={book.cover}
                  alt={`${book.title} 표지`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
                {book.badge && (
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-forest px-2.5 py-1 text-[11px] font-bold text-paper shadow-sm">
                    {book.badge}
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-ink">
                {book.title}
              </h3>
              {book.author && (
                <p className="mt-0.5 text-sm text-ink-soft">{book.author} 지음</p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {book.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
