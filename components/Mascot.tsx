type MascotProps = {
  className?: string;
  /** 보이지 않는 벽(점선)을 함께 그릴지 */
  wall?: boolean;
};

/**
 * 공식 캐릭터 — 몸짓요정 "미모(MIMO)"
 * 춘천 호수의 물방울에서 태어나, 보이지 않는 상자·벽·바람과 노는 마임 요정.
 * 하얀 분장 얼굴 · 물방울 베레 · 코랄 스트라이프 셔츠가 식별 요소.
 */
export function Mascot({ className, wall = true }: MascotProps) {
  return (
    <svg
      viewBox="0 0 220 260"
      role="img"
      aria-label="춘천마임축제 캐릭터 미모(MIMO)"
      className={className}
    >
      {wall && (
        <rect
          x="150"
          y="24"
          width="52"
          height="210"
          rx="6"
          fill="none"
          stroke="#f6f2e9"
          strokeWidth="3"
          strokeDasharray="2 10"
          strokeLinecap="round"
          opacity="0.6"
        />
      )}

      {/* 그림자 */}
      <ellipse cx="104" cy="244" rx="60" ry="10" fill="#000" opacity="0.35" />

      {/* 다리 */}
      <path
        d="M86 196v34M122 196v34"
        stroke="#0e0e12"
        strokeWidth="14"
        strokeLinecap="round"
      />
      {/* 신발 */}
      <path
        d="M74 232h20M114 232h20"
        stroke="#f6f2e9"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* 몸통 — 스트라이프 셔츠 */}
      <g>
        <rect
          x="70"
          y="120"
          width="70"
          height="84"
          rx="20"
          fill="#f6f2e9"
          stroke="#1c1712"
          strokeWidth="2.5"
        />
        <rect x="70" y="132" width="70" height="8" fill="#ff5a5f" />
        <rect x="70" y="152" width="70" height="8" fill="#ff5a5f" />
        <rect x="70" y="172" width="70" height="8" fill="#ff5a5f" />
        <rect x="70" y="192" width="70" height="8" fill="#ff5a5f" />
      </g>

      {/* 팔 — 보이지 않는 벽을 미는 자세 */}
      <path
        d="M74 132 L150 150"
        stroke="#0e0e12"
        strokeWidth="13"
        strokeLinecap="round"
      />
      <path
        d="M136 128 L150 116"
        stroke="#0e0e12"
        strokeWidth="13"
        strokeLinecap="round"
      />
      {/* 하얀 장갑 */}
      <circle cx="151" cy="151" r="9" fill="#f6f2e9" />
      <circle cx="151" cy="114" r="9" fill="#f6f2e9" />

      {/* 머리 */}
      <circle
        cx="104"
        cy="82"
        r="40"
        fill="#f6f2e9"
        stroke="#1c1712"
        strokeWidth="2.5"
      />
      {/* 눈썹 */}
      <path
        d="M84 68c5-6 15-6 20 0M104 68c5-6 15-6 20 0"
        stroke="#0e0e12"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* 눈 */}
      <circle cx="93" cy="82" r="4.5" fill="#0e0e12" />
      <circle cx="118" cy="82" r="4.5" fill="#0e0e12" />
      {/* 볼 — 코랄 다이아몬드 */}
      <path d="M126 90l6 8-6 8-6-8z" fill="#ff5a5f" />
      {/* 미소 */}
      <path
        d="M92 100c8 7 20 7 26 0"
        stroke="#0e0e12"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* 물방울 베레 */}
      <path
        d="M104 20c14 16 24 27 24 37a24 22 0 0 1-48 0c0-10 10-21 24-37Z"
        fill="#1e6f8e"
      />
      <circle cx="96" cy="48" r="5" fill="#f6f2e9" opacity="0.7" />
    </svg>
  );
}
