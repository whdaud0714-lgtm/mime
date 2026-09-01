"use client";

import { useEffect, useState } from "react";
import { useClientValue } from "@/lib/use-client-value";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

/**
 * 홈 화면 추가 안내.
 * - Android/Chrome: beforeinstallprompt 를 잡아 설치 버튼 노출
 * - iOS/Safari: 공유 → "홈 화면에 추가" 안내 문구 노출
 * 이미 설치(standalone)된 경우 렌더하지 않음.
 */
export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);

  const isIOS = useClientValue(
    () => /ipad|iphone|ipod/i.test(navigator.userAgent),
    false,
  );
  const isStandalone = useClientValue(
    () =>
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true,
    false,
  );

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  if (isStandalone) return null;

  return (
    <div className="rounded-2xl border border-paper/15 bg-ink-soft/60 p-5">
      <h3 className="font-display text-lg text-amber">홈 화면에 추가 · Install</h3>
      <p className="mt-1 text-sm text-paper/70">
        앱처럼 전체화면으로 열리고, 오프라인에서도 프로그램표를 볼 수 있어요.
      </p>

      {deferred ? (
        <button
          type="button"
          onClick={async () => {
            await deferred.prompt();
            await deferred.userChoice;
            setDeferred(null);
          }}
          className="mt-3 rounded-full bg-amber px-5 py-2.5 text-sm font-bold text-ink"
        >
          지금 설치하기
        </button>
      ) : isIOS ? (
        <p className="mt-3 text-sm text-paper/80">
          Safari 하단의 <span aria-hidden>⎋</span> <b>공유</b> 버튼을 누른 뒤{" "}
          <b>‘홈 화면에 추가’</b>를 선택하세요.
        </p>
      ) : (
        <p className="mt-3 text-sm text-paper/60">
          브라우저 메뉴에서 <b>‘앱 설치’</b> 또는 <b>‘홈 화면에 추가’</b>를 선택하세요.
        </p>
      )}
    </div>
  );
}
