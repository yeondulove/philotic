import Image from "next/image";
import Link from "next/link";
import { BOOKS } from "@/lib/books";

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
            <Link
              key={book.slug}
              href={`/books/${book.slug}`}
              className="group flex flex-col"
            >
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
              <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-ink transition group-hover:text-forest">
                {book.title}
              </h3>
              {book.author && (
                <p className="mt-0.5 text-sm text-ink-soft">
                  {book.author} 지음
                  {book.translator ? ` · ${book.translator} 옮김` : ""}
                </p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {book.summary}
              </p>
              <span className="mt-3 text-sm font-bold text-forest opacity-0 transition group-hover:opacity-100">
                자세히 보기 →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
