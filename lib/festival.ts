/**
 * 2026 춘천마임축제 — 프로젝트 단일 데이터 소스
 * 프로그램명·일정·장소는 공개된 2026 홍보물(‘photo/’ 자료)을 참고했으며,
 * 일부 세부(주최·후원·티켓·연혁)는 기획안용 예시값입니다.
 */

import type { PhotoKey } from "@/lib/photos";

export const SITE_URL = "https://chuncheon-mime.example";

export const festival = {
	edition: 38,
	titleKo: "2026 춘천마임축제",
	titleEn: "Chuncheon International Mime Festival 2026",
	editionKo: "제38회",

	/** 축제 기간 (KST) */
	startDate: "2026-05-24",
	endDate: "2026-05-31",
	periodKo: "2026. 5. 24.(일) – 5. 31.(일) · 8일간",
	periodEn: "24–31 May 2026 · 8 days",

	placeKo: "강원특별자치도 춘천시 일원",
	placeEn: "Across the city of Chuncheon, Gangwon, Korea",
	venues: [
		{
			ko: "축제극장 몸짓",
			en: "Momjit Festival Theatre",
			role: "메인 공연장 · 야외광장",
		},
		{
			ko: "춘천 중앙로",
			en: "Jungang-ro, Downtown",
			role: "개막난장 ‘아!水라장’",
		},
		{
			ko: "레고랜드 코리아 리조트 주차장",
			en: "Legoland Korea Resort",
			role: "밤샘난장 ‘도깨비난장’",
		},
		{ ko: "브라운5번가", en: "Brown 5th Ave.", role: "거리극·난장" },
		{
			ko: "공지천 유원지",
			en: "Gongjicheon Riverside",
			role: "가족 프로그램",
		},
		{ ko: "남이섬", en: "Nami Island", role: "국제 초청 무대" },
	],

	hostKo: "(사)춘천마임축제",
	hostEn: "Chuncheon Mime Festival (incorporated association)",
	organizerKo: "춘천마임축제 조직위원회",
	organizerEn: "Chuncheon Mime Festival Organizing Committee",
	sponsorsKo: [
		"문화체육관광부",
		"강원특별자치도",
		"춘천시",
		"(재)춘천문화재단",
		"한국문화예술위원회",
	],

	sloganKo: "말 없이, 세계와 통하다",
	sloganEn: "Where Silence Speaks",
	taglineKo: "국경을 넘는 단 하나의 언어, 몸짓.",
	taglineEn: "One language that needs no translation — the body.",

	contactEmail: "hello@chuncheon-mime.example",
	phone: "033-000-0000",
	instagram: "https://instagram.com/",
	youtube: "https://youtube.com/",
} as const;

export type Program = {
	slug: string;
	nameKo: string;
	nameEn: string;
	kind: "개·폐막" | "대표" | "거리·난장" | "국제초청" | "체험" | "상설";
	when: string;
	where: string;
	blurbKo: string;
	photo?: PhotoKey;
};

export const programs: Program[] = [
	{
		slug: "opening",
		nameKo: "개막난장 ‘아!水라장’",
		nameEn: "Opening Riot — Water Chaos",
		kind: "개·폐막",
		when: "5. 24.(일) 13:00–16:00",
		where: "춘천 중앙로 (중앙로터리–강원일보사)",
		blurbKo:
			"물총과 물대포가 오가는 도심 개막 난장. 컬러 슈트를 입은 배우들의 군무로 8일간의 축제가 시작된다.",
		photo: "waterOpening",
	},
	{
		slug: "mad-friday",
		nameKo: "미친금요일",
		nameEn: "Mad Friday",
		kind: "대표",
		when: "5. 29.(금) 19:00–24:00",
		where: "브라운5번가 · 도심 일대",
		blurbKo:
			"밤새 이어지는 춘천마임축제의 상징. 우비를 입은 관객과 배우가 뒤엉켜 거리를 무대로 만든다.",
		photo: "streetWater",
	},
	{
		slug: "goblin",
		nameKo: "밤샘난장 ‘도깨비난장’",
		nameEn: "All-Night Riot — Goblin Night",
		kind: "개·폐막",
		when: "5. 30.(토) 14:00 – 5. 31.(일) 05:00",
		where: "레고랜드 코리아 리조트 주차장",
		blurbKo:
			"불과 어둠, 화염 퍼포먼스와 함께 해 뜰 때까지 이어지는 폐막 밤샘 난장. 관객 모두가 무대에 오른다.",
		photo: "goblinFire",
	},
	{
		slug: "world-mime",
		nameKo: "세계마임초청전",
		nameEn: "World Mime Showcase",
		kind: "국제초청",
		when: "5. 26.(화)–5. 30.(토)",
		where: "축제극장 몸짓 · 남이섬",
		blurbKo:
			"프랑스·독일·일본·체코 등 해외 극단이 참여하는 국제 초청 무대. 언어 없이 통하는 밤.",
	},
	{
		slug: "hada",
		nameKo: "하다마당",
		nameEn: "Hada Stage",
		kind: "대표",
		when: "축제 기간 매일 14:00 / 17:00",
		where: "축제극장 몸짓",
		blurbKo:
			"국내 마임·피지컬시어터 대표 레퍼토리를 매일 만나는 메인 프로그램.",
	},
	{
		slug: "street",
		nameKo: "아수라장 거리극",
		nameEn: "Asura Street Arts",
		kind: "거리·난장",
		when: "축제 기간 매일 13:00–18:00",
		where: "브라운5번가 · 공지천",
		blurbKo:
			"예고 없이 나타나는 거리 공연. 골목을 돌면 새로운 장면이 기다린다.",
	},
	{
		slug: "kids",
		nameKo: "몸짓놀이터",
		nameEn: "Body Play Lab",
		kind: "체험",
		when: "주말 11:00–16:00",
		where: "공지천 유원지",
		blurbKo: "보이지 않는 상자, 벽, 바람을 함께 만드는 가족 마임 워크숍.",
	},
	{
		slug: "salon",
		nameKo: "효자몸짓살롱; 안녕마임",
		nameEn: "Hyoja Body Salon — Hello Mime",
		kind: "상설",
		when: "9. 9. · 9. 16. · 9. 30. · 10. 7.(수) 19:30–21:00",
		where: "축제극장 몸짓 야외광장",
		blurbKo:
			"축제가 없는 계절에도 몸짓은 계속된다. 가을밤, 동네 광장에서 열리는 상설 마임 살롱.",
		photo: "salon",
	},
];

/** 프로그램 성격별 포인트 컬러 (어두운 칩 위에서 읽히는 원색) */
export const kindTone: Record<Program["kind"], string> = {
	"개·폐막": "text-coral",
	대표: "text-amber",
	"거리·난장": "text-lake",
	국제초청: "text-lake",
	체험: "text-amber",
	상설: "text-paper/70",
};

/** 밝은 배경에서 쓰는 성격별 점 컬러 */
export const kindDot: Record<Program["kind"], string> = {
	"개·폐막": "text-coral",
	대표: "text-amber",
	"거리·난장": "text-lake",
	국제초청: "text-lake",
	체험: "text-amber",
	상설: "text-ink/40",
};

/** 홍보 카피 뱅크 */
export const copyBank = [
	"손끝으로 말하고, 눈빛으로 듣는다.",
	"5월, 춘천이 무대가 된다.",
	"침묵이 가장 큰 소리를 낸다.",
	"북마크 한 번, 세계인의 축제로.",
	"번역이 필요 없는 8일.",
];
