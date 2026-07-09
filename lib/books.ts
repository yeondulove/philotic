// 필로틱 도서 데이터 — 신간이 늘어나도 이 배열에 항목만 추가하면
// 목록 페이지(#books)와 상세 페이지(/books/[slug])가 자동으로 늘어납니다.
//
// 아래 필드 중 toc·excerpt·authorBio·reviews·press는 실제 확인된 내용이
// 있을 때만 채워주세요. 비워두면(undefined) 상세 페이지에서 해당 섹션이
// 자동으로 숨겨집니다 — 지어낸 내용을 절대 채우지 마세요(가짜 발췌·가짜
// 리뷰·가짜 언론 인용은 신뢰도에 치명적입니다).

export type BookReview = {
  quote: string;
  source: string; // 예: "교보문고 독자 리뷰", "김OO님"
};

export type PressMention = {
  outlet: string; // 매체명
  title: string; // 기사 제목
  url?: string;
  date?: string; // 예: "2026.03"
};

export type Book = {
  slug: string;
  title: string;
  author?: string;
  translator?: string;
  cover: string;
  badge?: string;
  /** 목록 카드용 짧은 소개 (2~3줄) */
  summary: string;
  /** 상세 페이지 히어로용 한 줄 후킹 카피. 없으면 summary로 대체 */
  hook?: string;
  /** 목차 — 항목 배열. 실제 목차가 확인되면 채워주세요 */
  toc?: string[];
  /** 본문 발췌 — 문단 배열. 실제 원문에서만 가져오세요 */
  excerpt?: string[];
  /** 저자 소개 — 공개적으로 확인 가능한 사실만 */
  authorBio?: string;
  /** 실제 독자 리뷰만. 지어낸 리뷰 금지 */
  reviews?: BookReview[];
  /** 실제 보도된 기사만. 지어낸 인용 금지 */
  press?: PressMention[];
};

export const BOOKS: Book[] = [
  {
    slug: "wonsiin",
    title: "완벽한 원시인",
    author: "자청",
    cover: "/books/wonsiin.jpg",
    badge: "출간 직후 교보문고 종합 1위",
    summary:
      "석기시대에 최적화된 뇌로 디지털 시대를 사는 우리. 진화심리학의 렌즈로 현대인의 불안과 번아웃, 관계의 어려움을 꿰뚫는다.",
    authorBio:
      "『역행자』로 60만 부 베스트셀러를 만든 저자이자, 출판 브랜드 필로틱과 지식 플랫폼 프드프를 설립한 콘텐츠 창업가.",
  },
  {
    slug: "freud",
    title: "프로이트의 감정수업",
    author: "강이안",
    cover: "/books/freud.jpg",
    badge: "교보문고 독자 평점 9.9",
    summary:
      "보이지 않는 무의식이 오늘의 나를 어떻게 움직이는가. 정신분석의 통찰을 현대의 언어로 옮겨, 감정에 휘둘리지 않고 나를 이해하는 법.",
  },
  {
    slug: "muhan",
    title: "무한의 부",
    cover: "/books/muhan.jpg",
    badge: "베스트셀러",
    summary:
      "부의 크기를 결정하는 것은 통장 잔고가 아니라 생각의 그릇이다. 돈을 담아낼 그릇부터 키우는, 자본주의 시대의 부의 태도.",
  },
  {
    slug: "lifecode",
    title: "라이프코드",
    cover: "/books/lifecode.jpg",
    badge: "베스트셀러",
    summary:
      "왜 어떤 사람은 늘 원하는 것을 얻는가. 사람과 관계, 선택의 이면에서 작동하는 인간 본성의 코드를 해독한다.",
  },
  {
    slug: "gangpung",
    title: "강풍에도 쓰러지지 않는다",
    author: "모옌",
    cover: "/books/gangpung.jpg",
    badge: "노벨문학상 수상작가",
    summary:
      "노벨문학상 수상작가 모옌의 작품. 무너지지 않는 사람에게는 단단한 마음의 구조가 있다. 흔들리는 시대에 나를 지탱하는 힘.",
    authorBio:
      "2012년 노벨문학상을 수상한 중국 작가. 『붉은 수수밭』 등으로 세계적 명성을 얻었으며, 특유의 환상적 리얼리즘으로 현대 중국 사회와 인간 군상을 그려왔다.",
  },
  {
    slug: "eoje",
    title: "어제보다 멍청해지기 전에",
    cover: "/books/eoje.jpg",
    badge: "베스트셀러",
    summary:
      "생각하지 않을수록 뇌는 빠르게 무뎌진다. 매일 조금씩 더 선명하게 사고하는 사람으로 남기 위한 지적 습관.",
  },
  {
    slug: "geeoreun",
    title: "게으른 그들은 어떻게 1조원을 벌었을까",
    cover: "/books/geeoreun.jpg",
    summary:
      "성실하게 오래 일한다고 부자가 되지는 않는다. 적게 일하고 크게 버는 사람들이 공유하는, 노동이 아닌 구조의 사고법.",
  },
  {
    slug: "seneca",
    title: "사형당했지만 이 편지는 주고 싶습니다",
    author: "루키우스 안나이우스 세네카",
    translator: "박정민",
    cover: "/books/seneca.jpg",
    hook: "세네카의 행복론",
    summary:
      "황제에게 사형을 선고받은 철학자가 죽음 앞에서 남긴 마지막 통찰. 2천 년을 살아남은 스토아 철학자 세네카의 행복론을, 오늘의 언어로 새롭게 옮겼다.",
    authorBio:
      "로마 제정 시대의 스토아 철학자이자 정치가(기원전 4년경~기원후 65년). 네로 황제의 스승이었으나 반역 혐의로 자결을 명받았다. 『루킬리우스에게 보내는 편지』, 『행복한 삶에 관하여』 등의 저작을 남겼다.",
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return BOOKS.find((b) => b.slug === slug);
}

export type PurchaseLinks = {
  kyobo: string;
  yes24: string;
  aladin: string;
};

/**
 * 실제 ISBN·상품 URL을 확보하기 전까지는 검색 결과 페이지로 연결합니다.
 * (없는 상품 URL을 지어내면 깨진 링크가 되므로, 항상 도달 가능한 검색
 * 링크를 기본값으로 둡니다. ISBN이 확보되면 직접 상품 링크로 교체하세요.)
 */
export function getPurchaseLinks(book: Pick<Book, "title">): PurchaseLinks {
  const q = encodeURIComponent(book.title);
  return {
    kyobo: `https://search.kyobobook.co.kr/search?keyword=${q}`,
    yes24: `https://www.yes24.com/product/search?domain=BOOK&query=${q}`,
    aladin: `https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=${q}`,
  };
}
