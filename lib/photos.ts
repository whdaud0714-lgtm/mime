import type { StaticImageData } from "next/image";
import salon from "@/media/1.png";
import maJungMul from "@/media/2.jpg";
import streetWater from "@/media/3.jpg";
import waterOpening from "@/media/4.jpg";
import goblinFire from "@/media/5.jpg";
import keyVisual from "@/media/6.jpg";

export type Photo = {
  img: StaticImageData;
  alt: string;
  caption: string;
  credit: string;
};

const CREDIT = "© 춘천마임축제";

export const photos = {
  keyVisual: {
    img: keyVisual,
    alt: "2026 춘천마임축제 공식 포스터 — 색색의 사각 배경 위에서 몸짓하는 검은 실루엣들",
    caption: "2026 공식 키비주얼",
    credit: CREDIT,
  },
  waterOpening: {
    img: waterOpening,
    alt: "개막난장 ‘아!水라장’ — 물보라가 이는 거리에서 컬러 슈트를 입은 퍼포머들이 군무를 추고 관객이 둘러싼 모습",
    caption: "개막난장 ‘아!水라장’ · 춘천 중앙로",
    credit: CREDIT,
  },
  streetWater: {
    img: streetWater,
    alt: "도심 광장을 가득 메운 우비 차림의 관객에게 무대 위 퍼포머가 물을 뿌리는 장면",
    caption: "도시를 적시는 물난장",
    credit: CREDIT,
  },
  goblinFire: {
    img: goblinFire,
    alt: "밤샘난장 ‘도깨비난장’ — 한복을 입은 퍼포머가 불을 휘두르고 야간 관객이 둘러앉은 모습",
    caption: "밤샘난장 ‘도깨비난장’ · 레고랜드 주차장",
    credit: CREDIT,
  },
  salon: {
    img: salon,
    alt: "‘효자몸짓살롱; 안녕마임’ 상설공연 포스터 — 검은 배경에 네온 옐로 손글씨 타이포그래피",
    caption: "상설공연 ‘안녕마임’",
    credit: CREDIT,
  },
  maJungMul: {
    img: maJungMul,
    alt: "후원회원 모집 ‘마중물’ 그래픽 — 종이배를 탄 마임이스트들이 물결 위를 떠가는 일러스트",
    caption: "후원회원 캠페인 ‘마중물’",
    credit: CREDIT,
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/** 현장 스케치 갤러리 순서 */
export const galleryKeys: PhotoKey[] = [
  "waterOpening",
  "streetWater",
  "goblinFire",
  "salon",
  "maJungMul",
];
