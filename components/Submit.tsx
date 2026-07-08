export default function Submit() {
  return (
    <section id="submit" className="scroll-mt-16 bg-forest">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <h2 className="font-serif text-3xl font-bold leading-snug tracking-tight text-paper sm:text-4xl">
          당신이 만든 책을,
          <br />
          우리가 베스트셀러로 만듭니다
        </h2>
        <p className="mx-auto mt-6 max-w-lg leading-loose text-tint">
          인문·심리·자기계발 분야의 원고 투고를 기다립니다. 다른 곳은 책을 내고
          시장의 반응을 기다리지만, 필로틱은 책을 내는 순간 수십만 명에게 쏘는
          마케팅이 가동됩니다. 당신이 공들인 책이 출간 첫 주에 베스트셀러 매대에
          오르는 경험을 함께 만듭니다.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:contact@philotic.co.kr?subject=[필로틱 원고 투고]"
            className="w-full rounded-full bg-paper px-8 py-3.5 text-base font-bold text-forest transition hover:bg-cream sm:w-auto"
          >
            원고 투고하기
          </a>
          <a
            href="mailto:contact@philotic.co.kr?subject=[필로틱 제휴·문의]"
            className="w-full rounded-full border border-paper/40 px-8 py-3.5 text-base font-bold text-paper transition hover:bg-forest-deep sm:w-auto"
          >
            제휴 · 대량 구매 문의
          </a>
        </div>

        <p className="mt-7 text-sm text-tint/80">
          투고 · 문의: contact@philotic.co.kr
        </p>
      </div>
    </section>
  );
}
