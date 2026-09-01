import { VenueMap } from "@/components/VenueMap";
import { festival } from "@/lib/festival";

export default function AppMap() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-black">축제장 지도</h1>

      <div className="rounded-2xl border border-paper/12 bg-ink-soft/40 p-4">
        <VenueMap className="w-full" />
      </div>

      <ul className="space-y-2">
        {festival.venues.map((v, i) => (
          <li
            key={v.ko}
            className="flex items-start gap-3 rounded-xl border border-paper/12 bg-ink-soft/40 p-3"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber font-display text-xs text-ink">
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-bold">{v.ko}</p>
              <p className="text-xs text-paper/50">
                {v.en} · {v.role}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="rounded-xl border border-paper/12 bg-ink-soft/30 p-4 text-xs text-paper/55">
        무료 순환 셔틀이 춘천역·시외버스터미널과 주요 축제장을 10분 간격으로
        운행합니다. 도보 이동도 대부분 15분 이내입니다.
      </div>
    </div>
  );
}
