import Link from "next/link";
import type { Metadata } from "next";
import { MimeSymbol } from "@/components/brand";

export const metadata: Metadata = {
  title: "오프라인",
  robots: { index: false },
};

export default function OfflinePage() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 text-center">
      <MimeSymbol className="h-20 w-20 text-paper/70" />
      <h1 className="mt-6 text-2xl font-black">지금은 오프라인이에요</h1>
      <p className="mt-3 text-sm text-paper/60">
        마임처럼, 잠시 말이 없네요. 인터넷 연결을 확인해 주세요. 저장해 둔
        프로그램표와 지도는 계속 볼 수 있습니다.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/app/schedule"
          className="rounded-full border border-paper/25 px-4 py-2 text-sm font-bold hover:border-amber hover:text-amber"
        >
          프로그램표
        </Link>
        <Link
          href="/app"
          className="rounded-full bg-amber px-4 py-2 text-sm font-bold text-ink"
        >
          앱 홈
        </Link>
      </div>
    </div>
  );
}
