export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-ink-soft sm:flex-row sm:items-start sm:justify-between sm:px-8">
        <div>
          <p className="font-serif text-base font-black text-forest">
            필로틱 PHILOTIC
          </p>
          <p className="mt-3 leading-relaxed">
            라이프해킹(주)의 출판 브랜드
            <br />
            투고·문의: contact@philotic.co.kr
          </p>
        </div>
        <nav className="flex gap-6">
          <a href="#books" className="transition hover:text-forest">
            도서
          </a>
          <a href="#about" className="transition hover:text-forest">
            출판사 소개
          </a>
          <a href="#submit" className="transition hover:text-forest">
            원고 투고
          </a>
        </nav>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-ink-soft/70 sm:px-8">
          © 2026 PHILOTIC · Lifehacking Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
