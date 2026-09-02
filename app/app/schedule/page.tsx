import { programs, type Program } from "@/lib/festival";

const ORDER: Program["kind"][] = [
  "개·폐막",
  "대표",
  "국제초청",
  "거리·난장",
  "체험",
];

export default function AppSchedule() {
  return (
    <div className="space-y-7">
      <h1 className="text-xl font-black">프로그램표</h1>

      {ORDER.map((kind) => {
        const list = programs.filter((p) => p.kind === kind);
        if (!list.length) return null;
        return (
          <section key={kind}>
            <h2 className="font-display text-xs uppercase tracking-[0.16em] text-amber">
              {kind}
            </h2>
            <ul className="mt-3 space-y-3">
              {list.map((p) => (
                <li
                  key={p.slug}
                  className="rounded-2xl border border-ink/12 bg-card p-4"
                >
                  <h3 className="font-bold">{p.nameKo}</h3>
                  <p className="text-xs text-ink/45">{p.nameEn}</p>
                  <p className="mt-2 text-sm text-ink/70">{p.blurbKo}</p>
                  <p className="mt-2 text-xs text-ink/50">
                    🕘 {p.when} · 📍 {p.where}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <p className="rounded-xl border border-ink/12 bg-card/70 p-4 text-xs text-ink/45">
        상기 편성은 홍보 기획안용 예시입니다.
      </p>
    </div>
  );
}
