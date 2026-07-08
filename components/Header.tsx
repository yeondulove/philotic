"use client";

import { useState } from "react";

const LINKS = [
  { href: "#books", label: "도서" },
  { href: "#about", label: "출판사 소개" },
  { href: "#submit", label: "원고 투고" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  function handleNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    setOpen(false);
    if (!href.startsWith("#")) return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    window.setTimeout(() => {
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      history.replaceState(null, "", href);
    }, 0);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          onClick={(e) => handleNav(e, "#top")}
          className="font-serif text-xl font-black tracking-tight text-forest"
        >
          필로틱 <span className="text-ink-soft/70">PHILOTIC</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm font-medium text-ink-soft transition hover:text-forest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#submit"
            onClick={(e) => handleNav(e, "#submit")}
            className="rounded-full bg-forest px-5 py-2 text-sm font-bold text-paper transition hover:bg-forest-deep"
          >
            투고하기
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-forest md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper px-5 pb-4 pt-2 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="block border-b border-line py-3 text-base font-medium text-ink-soft last:border-b-0 hover:text-forest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#submit"
            onClick={(e) => handleNav(e, "#submit")}
            className="mt-3 block rounded-full bg-forest px-5 py-3 text-center text-base font-bold text-paper"
          >
            투고하기
          </a>
        </nav>
      )}
    </header>
  );
}
