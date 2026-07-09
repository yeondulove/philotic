import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BOOKS, getBookBySlug, getPurchaseLinks } from "@/lib/books";

export function generateStaticParams() {
  return BOOKS.map((b) => ({ slug: b.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};

  const byline = book.author
    ? `${book.author}${book.translator ? ` · ${book.translator} 옮김` : ""} 지음 — `
    : "";
  const description = `${byline}${book.summary}`;

  return {
    title: `${book.title} | 필로틱`,
    description,
    openGraph: {
      title: book.title,
      description,
      url: `https://www.philotic.co.kr/books/${book.slug}`,
      siteName: "필로틱",
      locale: "ko_KR",
      type: "website",
      images: [{ url: book.cover }],
    },
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  const links = getPurchaseLinks(book);
  const others = BOOKS.filter((b) => b.slug !== book.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    ...(book.author
      ? { author: { "@type": "Person", name: book.author } }
      : {}),
    ...(book.translator
      ? { translator: { "@type": "Person", name: book.translator } }
      : {}),
    image: `https://www.philotic.co.kr${book.cover}`,
    publisher: { "@type": "Organization", name: "필로틱" },
    description: book.summary,
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 히어로 */}
        <section className="bg-cream">
          <div className="mx-auto max-w-5xl px-5 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14">
            <Link
              href="/#books"
              className="text-sm font-bold text-ink-soft transition hover:text-forest"
            >
              ← 전체 도서 목록
            </Link>

            <div className="mt-6 grid gap-10 sm:grid-cols-[220px_1fr] sm:items-start">
              <div className="relative mx-auto aspect-[2/3] w-[200px] overflow-hidden rounded-md bg-white shadow-xl ring-1 ring-black/5 sm:mx-0 sm:w-full">
                <Image
                  src={book.cover}
                  alt={`${book.title} 표지`}
                  fill
                  sizes="220px"
                  className="object-cover"
                  loading="eager"
                />
              </div>

              <div>
                {book.badge && (
                  <span className="inline-block rounded-full bg-forest px-3 py-1 text-xs font-bold text-paper">
                    {book.badge}
                  </span>
                )}
                <h1 className="mt-4 font-serif text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">
                  {book.title}
                </h1>
                {book.hook && (
                  <p className="mt-2 text-lg font-bold text-forest">
                    {book.hook}
                  </p>
                )}
                {book.author && (
                  <p className="mt-3 text-sm text-ink-soft">
                    {book.author} 지음
                    {book.translator ? ` · ${book.translator} 옮김` : ""}
                  </p>
                )}
                <p className="mt-5 max-w-xl leading-loose text-ink-soft">
                  {book.summary}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={links.kyobo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-forest px-6 py-3 text-sm font-bold text-paper transition hover:bg-forest-deep"
                  >
                    교보문고에서 보기
                  </a>
                  <a
                    href={links.yes24}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-line bg-paper px-6 py-3 text-sm font-bold text-ink transition hover:border-forest"
                  >
                    예스24
                  </a>
                  <a
                    href={links.aladin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-line bg-paper px-6 py-3 text-sm font-bold text-ink transition hover:border-forest"
                  >
                    알라딘
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {book.toc && book.toc.length > 0 && (
          <section className="border-b border-line bg-paper">
            <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
              <h2 className="font-serif text-2xl font-bold text-ink">목차</h2>
              <ol className="mt-6 space-y-2.5">
                {book.toc.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                  >
                    <span className="font-bold text-forest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {book.excerpt && book.excerpt.length > 0 && (
          <section className="border-b border-line bg-tint">
            <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
              <h2 className="font-serif text-2xl font-bold text-ink">
                본문 발췌
              </h2>
              <div className="mt-6 space-y-5">
                {book.excerpt.map((p, i) => (
                  <p
                    key={i}
                    className="font-serif text-[17px] leading-loose text-ink"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {book.authorBio && (
          <section className="border-b border-line bg-paper">
            <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
              <h2 className="font-serif text-2xl font-bold text-ink">
                저자 소개
              </h2>
              <p className="mt-6 leading-loose text-ink-soft">
                {book.authorBio}
              </p>
            </div>
          </section>
        )}

        {book.reviews && book.reviews.length > 0 && (
          <section className="border-b border-line bg-tint">
            <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
              <h2 className="font-serif text-2xl font-bold text-ink">
                독자 리뷰
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {book.reviews.map((r, i) => (
                  <figure
                    key={i}
                    className="rounded-2xl border border-line bg-paper p-6"
                  >
                    <blockquote className="text-sm leading-relaxed text-ink">
                      &ldquo;{r.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-3 text-xs font-bold text-ink-soft">
                      — {r.source}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {book.press && book.press.length > 0 && (
          <section className="border-b border-line bg-paper">
            <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
              <h2 className="font-serif text-2xl font-bold text-ink">
                언론 보도
              </h2>
              <ul className="mt-6 space-y-4">
                {book.press.map((p, i) => (
                  <li
                    key={i}
                    className="border-b border-line pb-4 last:border-0"
                  >
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-ink hover:text-forest"
                      >
                        {p.title}
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-ink">
                        {p.title}
                      </span>
                    )}
                    <p className="mt-1 text-xs text-ink-soft">
                      {p.outlet}
                      {p.date ? ` · ${p.date}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 마케팅 엔진 — 필로틱의 차별점 (실제 채널 규모만 표기, 책별 가짜 수치 없음) */}
        <section className="border-b border-line bg-forest">
          <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-20">
            <p className="text-xs font-bold uppercase tracking-widest text-tint">
              Marketing Engine
            </p>
            <h2 className="mt-3 font-serif text-2xl font-bold text-paper sm:text-3xl">
              이 책도, 이렇게 띄웁니다
            </h2>
            <p className="mx-auto mt-5 max-w-lg leading-loose text-tint">
              출간과 동시에 카드뉴스·릴스·쇼츠·AI 영상이 가동됩니다. 유튜브
              44만·인스타 9만 채널로 출간 첫날부터 독자에게 직접 가닿습니다.
            </p>
          </div>
        </section>

        {others.length > 0 && (
          <section className="bg-paper">
            <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
              <h2 className="font-serif text-xl font-bold text-ink">
                이런 책은 어떠세요?
              </h2>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {others.map((b) => (
                  <Link key={b.slug} href={`/books/${b.slug}`} className="group">
                    <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-white shadow-md ring-1 ring-black/5 transition duration-300 group-hover:-translate-y-1">
                      <Image
                        src={b.cover}
                        alt={`${b.title} 표지`}
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-3 text-sm font-bold text-ink transition group-hover:text-forest">
                      {b.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 투고 유도 */}
        <section className="bg-tint">
          <div className="mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-20">
            <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
              당신의 원고도, 이렇게 대접받습니다
            </h2>
            <p className="mx-auto mt-4 max-w-md leading-loose text-ink-soft">
              이 페이지가 곧 필로틱이 저자를 대하는 방식입니다.
            </p>
            <Link
              href="/#submit"
              className="mt-8 inline-flex rounded-full bg-forest px-8 py-3.5 text-sm font-bold text-paper transition hover:bg-forest-deep"
            >
              원고 투고 안내 보기
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
