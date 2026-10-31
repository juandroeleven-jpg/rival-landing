"use client";

import { useMemo, useState } from "react";

type Filter = "Todo combinado" | "Experiencias y stands" | "Talleres IA";

const rows = [
  ["Prompt Engineering", "Innovación · IA", 42, "10,700", "Talleres IA", [66, 22, 8, 4]],
  ["Agentes de IA", "Innovación · IA", 27, "7,700", "Talleres IA", [0, 78, 22, 0]],
  ["LinkedIn + Networking", "Innovación · Negocios", 24, "6,500", "Talleres IA", [16, 50, 34, 0]],
  ["Copilotos de IA", "Innovación · IA", 11, "2,600", "Talleres IA", [25, 35, 40, 0]],
  ["Gira y descubre · Scholarshine", "Experiencias", 29, "2,490", "Experiencias y stands", [38, 45, 13, 4]],
  ["Reto Innova Nation", "SEM Academy", 20, "2,080", "Talleres IA", [15, 70, 10, 5]],
  ["Convierte tu conocimiento en negocio", "Innovación · Negocios", 10, "1,900", "Talleres IA", [20, 40, 40, 0]],
  ["Deja tu Marca", "Innovación · Negocios", 6, "1,600", "Talleres IA", [17, 50, 33, 0]],
  ["Universidad Francisco Marroquín", "Conexiones", 23, "1,030", "Experiencias y stands", [25, 62, 13, 0]],
  ["TECOLOGY & TARQYN IA", "Conexiones", 17, "1,020", "Experiencias y stands", [24, 61, 10, 5]],
  ["QLU GAME ON", "Conexiones", 23, "870", "Experiencias y stands", [34, 52, 14, 0]],
  ["Descubre las matemáticas", "Experiencias", 19, "800", "Experiencias y stands", [26, 60, 14, 0]],
  ["Experiencia Alienware", "Experiencias", 18, "720", "Experiencias y stands", [16, 46, 23, 15]],
  ["Robots y simuladores", "Experiencias", 17, "720", "Experiencias y stands", [24, 61, 15, 0]],
  ["AIESEC", "Conexiones", 18, "670", "Experiencias y stands", [20, 55, 20, 5]],
  ["Gira y descubre · Smart Rabbit", "Experiencias", 17, "620", "Experiencias y stands", [30, 65, 0, 5]],
  ["Emergencias en realidad virtual", "Experiencias", 12, "600", "Experiencias y stands", [24, 61, 15, 0]],
  ["Explora en realidad virtual", "Experiencias", 16, "500", "Experiencias y stands", [22, 61, 17, 0]],
  ["Panamá American Center / EducationUSA", "Conexiones", 18, "450", "Experiencias y stands", [28, 45, 22, 5]],
] as const;

const legend = [["12–14", "47", "#62c2ea"], ["15–17", "43", "#7b67df"], ["18–24", "21", "#45c78b"], ["25+", "4", "#f7ba59"], ["Sin edad", "1", "#cbd5e1"]] as const;
const colors = ["#62c2ea", "#7b67df", "#45c78b", "#f7ba59"];

function AgeBar({ values }: { values: readonly number[] }) {
  return <div className="flex h-5 w-full min-w-[10rem] overflow-hidden rounded-full bg-slate-100">{values.map((value, i) => value > 0 && <span key={i} style={{ width: `${value}%`, backgroundColor: colors[i] }} />)}</div>;
}

export default function BentoSection() {
  const [filter, setFilter] = useState<Filter>("Todo combinado");
  const [showAll, setShowAll] = useState(false);
  const visibleRows = useMemo(() => filter === "Todo combinado" ? rows : rows.filter((row) => row[4] === filter), [filter]);
  const displayedRows = showAll ? visibleRows : visibleRows.slice(0, 5);

  return (
    <section id="bento" className="relative z-10 mx-auto w-full max-w-[116rem] px-5 py-10 sm:px-8 lg:px-12">
      <div className="overflow-hidden border border-orange-100 bg-white/85 shadow-console backdrop-blur-md">
        <header className="flex flex-col border-b border-slate-200 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="px-6 py-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Analítica general de actividades</h2>
          <div className="flex overflow-x-auto px-3 lg:px-0">
            {(["Todo combinado", "Experiencias y stands", "Talleres IA"] as Filter[]).map((item) => <button key={item} onClick={() => { setFilter(item); setShowAll(false); }} className={`shrink-0 border-l border-slate-200 px-7 py-5 text-lg font-bold transition-colors sm:px-9 ${filter === item ? "bg-white text-slate-950" : "bg-slate-100/80 text-slate-600 hover:bg-orange-50 hover:text-orange-700"}`}>{item}</button>)}
          </div>
        </header>

        <div className="grid lg:grid-cols-[30rem_minmax(0,1fr)]">
          <aside className="border-b border-slate-200 p-6 lg:border-b-0 lg:border-r">
            <h3 className="text-2xl font-bold text-slate-950">Rangos de edad</h3>
            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xl font-medium text-slate-900">Participantes únicos</p>
              <div className="mx-auto mt-6 h-56 w-56 rounded-full" style={{ background: "conic-gradient(#62c2ea 0 40%, #7b67df 40% 77%, #45c78b 77% 95%, #f7ba59 95% 99%, #cbd5e1 99% 100%)" }}><div className="relative left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" /></div>
              <div className="mt-7 divide-y divide-slate-100">{legend.map(([label, total, color]) => <div key={label} className="flex items-center gap-3 py-2.5 text-lg text-slate-800"><span className="h-4 w-4 rounded-full" style={{ backgroundColor: color }} /><span>{label}</span><strong className="ml-auto">{total}</strong></div>)}</div>
              <p className="mt-6 text-lg leading-6 text-slate-800">Personas únicas en stands, experiencias y talleres.</p>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6"><h4 className="text-xl font-bold text-slate-950">Dónde se concentró la participación</h4><ul className="mt-5 list-disc space-y-4 pl-6 text-lg leading-7 text-slate-800"><li><b>78%</b> de participantes tiene entre 12 y 17 años.</li><li>Mayor actividad: <b>Prompt Engineering</b>.</li></ul></div>
          </aside>

          <div className="min-w-0 p-6 lg:p-10">
            <div className="grid gap-8 border-b border-slate-200 pb-8 sm:grid-cols-3">{[["116", "Total de personas", "Sin duplicar participantes"], ["19", "Actividades rankeadas", "Todas las rutas analizadas"], ["43,570", "Puntos generados", "Puntos oficiales otorgados"]].map(([value, label, note]) => <div key={label}><p className="text-5xl font-bold tracking-tight text-slate-950">{value}</p><p className="mt-3 text-xl font-bold text-slate-700">{label}</p><p className="text-lg font-bold text-emerald-600">{note}</p></div>)}</div>
            <div className="mt-9 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-slate-950">Ranking: {filter === "Todo combinado" ? "todas las actividades" : filter}</h3>
              <p className="mt-2 text-lg text-slate-500">Personas únicas, puntos generados y distribución por edad. Combina Stands, Experiencias y Talleres IA.</p>
              <div className="mt-8 overflow-x-auto"><table className="min-w-[44rem] w-full text-left"><thead className="border-b border-slate-200 text-sm font-bold uppercase tracking-wide text-slate-500"><tr><th className="px-2 py-4">#</th><th className="px-2 py-4">Actividad</th><th className="px-2 py-4">Personas</th><th className="px-2 py-4">Puntos</th><th className="px-2 py-4">Distribución por edad</th></tr></thead><tbody>{displayedRows.map((row, i) => <tr key={row[0]} className="border-b border-slate-100"><td className="px-2 py-5 text-lg text-slate-700">{visibleRows.indexOf(row) + 1}</td><td className="px-2 py-5"><b className="block text-lg text-slate-950">{row[0]}</b><span className="text-base text-slate-600">{row[1]}</span></td><td className="px-2 py-5 text-lg text-slate-800">{row[2]}</td><td className="px-2 py-5 text-lg text-slate-800">{row[3]}</td><td className="px-2 py-5"><AgeBar values={row[5]} /></td></tr>)}</tbody></table></div>
              <p className="mt-5 text-lg text-slate-500">{showAll ? `Mostrando las ${visibleRows.length} actividades disponibles.` : "Solo se muestran las primeras 5 actividades."}</p>{visibleRows.length > 5 && <button onClick={() => setShowAll((value) => !value)} className="mt-7 rounded-xl border border-orange-500 px-5 py-3 text-lg font-bold text-orange-700 transition hover:bg-orange-50">{showAll ? "Ver solo top 5" : `Ver las ${visibleRows.length} actividades`}</button>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
