import Image from "next/image";
import Link from "next/link";
import { Countdown } from "@/components/Countdown";
import { InstallPrompt } from "@/components/InstallPrompt";
import { SaveButton } from "@/components/share";
import { Mascot } from "@/components/Mascot";
import { festival, programs } from "@/lib/festival";
import { photos } from "@/lib/photos";

export default function AppHome() {
  const highlights = programs
    .filter((p) => p.kind === "개·폐막" || p.kind === "대표")
    .slice(0, 3);

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-3xl border border-paper/12 p-6 text-center">
        <Image
          src={photos.waterOpening.img}
          alt=""
          fill
          priority
          sizes="(min-width: 448px) 448px, 100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 to-ink" />
        <div className="relative">
          <Mascot className="mx-auto h-32 w-28" />
          <p className="mt-3 text-sm text-paper/70">미모(MIMO)가 기다리고 있어요</p>
          <h1 className="mt-1 text-xl font-black leading-snug">
            {festival.sloganKo}
          </h1>
          <div className="mt-5 flex justify-center">
            <Countdown />
          </div>
          <p className="mt-4 text-xs text-paper/55">
            {festival.periodKo}
            <br />
            {festival.placeKo}
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="font-display text-sm uppercase tracking-[0.16em] text-amber">
            놓치면 아쉬운 3
          </h2>
          <Link href="/app/schedule" className="text-xs text-paper/50">
            전체 →
          </Link>
        </div>
        <ul className="mt-3 space-y-3">
          {highlights.map((p) => (
            <li
              key={p.slug}
              className="rounded-2xl border border-paper/12 bg-ink-soft/40 p-4"
            >
              <span className="font-display text-[11px] uppercase tracking-[0.16em] text-coral">
                {p.kind}
              </span>
              <h3 className="mt-1 font-bold">{p.nameKo}</h3>
              <p className="mt-1 text-xs text-paper/55">
                {p.when} · {p.where}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <Link
          href="/app/map"
          className="rounded-2xl border border-paper/12 bg-ink-soft/40 p-4 text-sm font-bold hover:border-amber/60"
        >
          축제장 지도
          <span className="mt-1 block text-xs font-normal text-paper/50">
            6개 공간 · 셔틀
          </span>
        </Link>
        <Link
          href="/bookmark"
          className="rounded-2xl border border-paper/12 bg-ink-soft/40 p-4 text-sm font-bold hover:border-amber/60"
        >
          공유하기
          <span className="mt-1 block text-xs font-normal text-paper/50">
            QR · 링크 · 배경화면
          </span>
        </Link>
      </section>

      <SaveButton className="w-full justify-center" />

      <InstallPrompt />
    </div>
  );
}
