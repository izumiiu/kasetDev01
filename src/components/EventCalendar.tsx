import { useState } from "react";

// TODO: แทนที่ด้วยข้อมูลกิจกรรมจริง (วันที่รูปแบบ YYYY-MM-DD)
type EventItem = { start: string; end: string; title: string; href?: string };

// เพิ่มข้อมูลกิจกรรมในอนาคตที่นี่ เช่น
// { start: "2026-06-01", end: "2026-06-30", title: "ชื่อกิจกรรม", href: "#" }
const events: EventItem[] = [];

const thaiMonths = [
  "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
  "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม",
];
const thaiDows = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];

function fmt(d: string) {
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
}

function toDate(s: string) {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export default function EventCalendar() {
  const today = new Date();
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() });

  const firstDay = new Date(view.year, view.month, 1).getDay();
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();

  const isToday = (d: number) =>
    d === today.getDate() &&
    view.month === today.getMonth() &&
    view.year === today.getFullYear();

  const hasEvent = (d: number) => {
    const cur = new Date(view.year, view.month, d).setHours(0, 0, 0, 0);
    return events.some(
      (e) => cur >= toDate(e.start).setHours(0, 0, 0, 0) && cur <= toDate(e.end).setHours(0, 0, 0, 0)
    );
  };

  const prev = () =>
    setView((v) => (v.month === 0 ? { year: v.year - 1, month: 11 } : { ...v, month: v.month - 1 }));
  const next = () =>
    setView((v) => (v.month === 11 ? { year: v.year + 1, month: 0 } : { ...v, month: v.month + 1 }));

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <section id="event-calendar" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-700">
            <span className="text-orange-500">📅</span> ปฏิทินกิจกรรม
          </h2>
          <a
            href="#event-calendar"
            className="rounded-full border border-green-500 px-4 py-1.5 text-sm font-medium text-green-600 transition-colors hover:bg-green-500 hover:text-white"
          >
            ดูทั้งหมด
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Calendar */}
          <div className="rounded-2xl ring-1 ring-gray-100 shadow-sm">
            <div className="flex items-center justify-between rounded-t-2xl bg-green-500 px-4 py-2 text-white">
              <button onClick={prev} aria-label="เดือนก่อนหน้า" className="rounded p-1 hover:bg-white/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <span className="text-sm font-semibold">
                {thaiMonths[view.month]} {view.year}
              </span>
              <button onClick={next} aria-label="เดือนถัดไป" className="rounded p-1 hover:bg-white/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-7 bg-gray-700 text-center text-xs font-medium text-white">
              {thaiDows.map((d) => (
                <div key={d} className="py-1.5">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-px bg-gray-100 p-px">
              {cells.map((d, i) => (
                <div
                  key={i}
                  className={`flex aspect-square items-center justify-center bg-white text-sm ${
                    d === null ? "" : "text-gray-700"
                  }`}
                >
                  {d !== null && (
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full ${
                        isToday(d)
                          ? "bg-green-500 font-semibold text-white"
                          : hasEvent(d)
                          ? "bg-orange-100 font-medium text-orange-600"
                          : ""
                      }`}
                    >
                      {d}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-4 px-3 py-3 text-xs text-gray-600">
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-orange-400" /> กิจกรรม
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-gray-200" /> ไม่มีกิจกรรม
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded bg-green-500" /> ปัจจุบัน
              </span>
            </div>
          </div>

          {/* Activity list */}
          <div className="overflow-hidden rounded-2xl ring-1 ring-gray-100 shadow-sm">
            <div className="grid grid-cols-[150px_1fr] bg-green-500 text-sm font-semibold text-white">
              <div className="px-4 py-2.5">วันที่-ถึง</div>
              <div className="px-4 py-2.5">กิจกรรม</div>
            </div>
            <div>
              {events.length === 0 ? (
                <div className="px-4 py-10 text-center text-sm text-gray-400">
                  ยังไม่มีข้อมูลกิจกรรม
                </div>
              ) : (
                events.map((e, i) => (
                  <a
                    key={i}
                    href={e.href}
                    className={`grid grid-cols-[150px_1fr] text-sm transition-colors hover:bg-green-50 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <div className="px-4 py-3 text-orange-600">
                      {fmt(e.start)}–{fmt(e.end)}
                    </div>
                    <div className="px-4 py-3 text-gray-700">{e.title}</div>
                  </a>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
