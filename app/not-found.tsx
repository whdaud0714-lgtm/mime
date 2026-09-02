import Link from "next/link";
import { Mascot } from "@/components/Mascot";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 text-center">
      <Mascot className="h-40 w-36" />
      <p className="mt-4 font-display text-5xl text-amber">404</p>
      <h1 className="mt-2 text-xl font-black">이 장면은 대본에 없어요</h1>
      <p className="mt-2 text-sm text-ink/60">
        미모가 길을 잃었습니다. 무대로 돌아갈까요?
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink"
      >
        홈으로
      </Link>
    </div>
  );
}
