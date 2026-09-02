/**
 * 마임 관련 클립아트 모티프 — 단색 라인 아이콘 모음.
 * 배경 장식과 섹션 포인트에 재사용한다. 모두 currentColor 상속.
 */
type IconProps = { className?: string };

export function IconMask({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M24 6c9 0 15 4 15 14 0 12-8 22-15 22S9 32 9 20C9 10 15 6 24 6Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path d="M16 19c2-2 5-2 7 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M25 19c2-2 5-2 7 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M19 30c3 2 7 2 10 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function IconBalloon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <ellipse cx="22" cy="17" rx="12" ry="14" stroke="currentColor" strokeWidth="3" />
      <path d="M22 31c0 6 6 8 6 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M19 31h6l-3 3z" fill="currentColor" />
    </svg>
  );
}

export function IconSpotlight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect x="17" y="4" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="3" />
      <path d="M18 13 6 42h36L30 13" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHat({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path d="M15 8h18v22H15z" stroke="currentColor" strokeWidth="3" />
      <path d="M6 30h36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M6 30c0 4 8 6 18 6s18-2 18-6" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

/** 보이지 않는 벽을 만지는 손 */
export function IconHands({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path d="M12 42V22c0-3 4-3 4 0v-4c0-3 4-3 4 0v-3c0-3 4-3 4 0v4c0-3 4-3 4 0v13c0 6-4 10-10 10Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M36 6v30" stroke="currentColor" strokeWidth="3" strokeDasharray="2 5" strokeLinecap="round" />
    </svg>
  );
}

export function IconStar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M24 5l4 13h14l-11 8 4 14-11-8-11 8 4-14-11-8h14z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** 흩뿌려진 배경 장식 레이어 (포인터 이벤트 없음) */
export function MotifField({ className }: IconProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      <IconBalloon className="animate-float absolute left-[6%] top-[12%] h-16 w-16 text-lake/40" />
      <IconMask className="animate-float absolute right-[8%] top-[18%] h-20 w-20 text-amber/30 [animation-delay:1.5s]" />
      <IconStar className="absolute left-[14%] bottom-[16%] h-10 w-10 text-coral/40" />
      <IconSpotlight className="animate-float absolute right-[16%] bottom-[10%] h-16 w-16 text-ink/15 [animation-delay:3s]" />
      <IconHat className="absolute left-[42%] top-[8%] h-12 w-12 text-ink/10" />
    </div>
  );
}
