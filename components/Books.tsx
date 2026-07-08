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
    desc: "진화심리학으로 현대인의 불안과 번아웃을 해부한 인문교양서. 오래된 본능으로 오늘을 사는 우리를 위한 안내서.",
    badge: "출간 직후 교보문고 종합 1위",
  },
  {
    title: "역행자",
    author: "자청",
    cover: "/books/yeokhaengja.jpg",
    desc: "돈·시간·운명으로부터 완전한 자유를 얻는 7단계 인생 공략집. 순리자가 아닌 역행자로 사는 법.",
    badge: "60만 부 베스트셀러",
  },
  {
    title: "프로이트의 감정수업",
    author: "강이안",
    cover: "/books/freud.jpg",
    desc: "보이지 않는 무의식의 세계를 현대 독자의 언어로 풀어낸 심리교양서. 감정에 휘둘리지 않는 법.",
    badge: "교보문고 독자 평점 9.9",
  },
  {
    title: "무한의 부",
    cover: "/books/muhan.jpg",
    desc: "부의 크기를 결정하는 것은 통장이 아니라 생각의 그릇이다. 자본주의 시대의 부를 대하는 태도.",
  },
  {
    title: "라이프코드",
    cover: "/books/lifecode.jpg",
    desc: "세상을 움직이는 인간 본성의 암호를 풀다. 사람과 관계, 선택의 이면을 읽는 코드.",
  },
  {
    title: "강풍에도 쓰러지지 않는다",
    cover: "/books/gangpung.jpg",
    desc: "흔들리는 시대에도 무너지지 않는 단단한 마음의 구조. 회복탄력성에 대한 깊은 통찰.",
  },
  {
    title: "어제보다 멍청해지기 전에",
    cover: "/books/eoje.jpg",
    desc: "무뎌지는 사고를 다시 깨우는 지적 습관에 대하여. 매일 조금씩 더 선명해지는 법.",
  },
  {
    title: "게으른 그들은 어떻게 1조원을 벌었을까",
    cover: "/books/geeoreun.jpg",
    desc: "적게 일하고 크게 버는 사람들의 남다른 사고법. 노동이 아닌 구조로 부를 만드는 원리.",
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
