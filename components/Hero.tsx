import Image from "next/image";

const FEATURED = [
  { title: "완벽한 원시인", cover: "/books/wonsiin.jpg" },
  { title: "무한의 부", cover: "/books/muhan.jpg" },
  { title: "프로이트의 감정수업", cover: "/books/freud.jpg" },
];

export default function Hero() {
  return (
    <section id="top" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-forest">
              Bestseller Publishing · Seoul
            </p>
            <h1 className="mt-6 font-serif text-4xl font-black leading-[1.28] tracking-tight text-ink sm:text-5xl lg:text-[3.3rem]">
              좋은 책을 만들고,
              <br />
              베스트셀러로 만듭니다.
            </h1>
            <p className="mt-7 max-w-md text-base leading-loose text-ink-soft sm:text-lg">
              필로틱은 60만 부 베스트셀러 『역행자』의 저자 자청이 세운 출판
              브랜드입니다. 신생 출판사가 2년간, 내는 책마다 종합 베스트셀러에
              올렸습니다. 좋은 책을 만드는 일을 넘어 알리는 일까지 — 만들면
              띄웁니다.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
              <a
                href="#books"
                className="rounded-full bg-forest px-7 py-3.5 text-base font-bold text-paper transition hover:bg-forest-deep"
              >
                출간 도서 보기
              </a>
              <a
                href="#submit"
                className="text-base font-bold text-forest underline-offset-4 hover:underline"
              >
                원고 투고 안내 →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {FEATURED.map((book, i) => (
              <figure
                key={book.title}
                className={i === 1 ? "mt-6 sm:mt-10" : ""}
              >
                <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-white shadow-xl ring-1 ring-black/5">
                  <Image
                    src={book.cover}
                    alt={`${book.title} 표지`}
                    fill
                    sizes="(min-width: 640px) 180px, 30vw"
                    className="object-cover"
                    loading="eager"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
