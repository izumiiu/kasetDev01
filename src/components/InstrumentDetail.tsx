import { useEffect } from "react";
import { instruments } from "../data/instruments";

export default function InstrumentDetail({ id }: { id: string }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  const item = instruments.find((it) => it.id === id);

  if (!item) {
    return (
      <main className="bg-green-50/40">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
          <h1 className="text-2xl font-bold text-gray-700">ไม่พบข้อมูลเครื่องมือ</h1>
          <a href="#services" className="mt-4 inline-block text-green-600 hover:text-green-700">
            ← กลับไปบริการของเรา
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-green-50/40">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
        <a
          href={`#/instrument/${item.category}`}
          className="text-sm font-medium text-green-600 hover:text-green-700"
        >
          ← กลับไปรายการเครื่องมือ
        </a>

        {/* Top card */}
        <div className="mt-4 overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Image */}
            <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-white p-6">
              <img
                src={item.image}
                alt={item.nameTh}
                className="max-h-80 w-full rounded-xl object-contain"
              />
            </div>

            {/* Info */}
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                  {item.tag}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    item.status === "พร้อมใช้งาน"
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <h1 className="text-2xl font-bold leading-snug text-gray-700">
                {item.nameTh}
              </h1>
              <p className="mt-2 text-sm text-gray-500">{item.nameEn}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl ring-1 ring-gray-100 p-4">
                  <div className="text-xs text-gray-400">รหัสเครื่อง</div>
                  <div className="mt-0.5 font-semibold text-green-600">{item.code}</div>
                </div>
                <div className="rounded-xl ring-1 ring-gray-100 p-4">
                  <div className="text-xs text-gray-400">ประเทศผู้ผลิต</div>
                  <div className="mt-0.5 font-semibold text-gray-700">{item.country}</div>
                </div>
                <div className="rounded-xl ring-1 ring-gray-100 p-4 sm:col-span-2">
                  <div className="text-xs text-gray-400">ยี่ห้อ / รุ่น</div>
                  <div className="mt-0.5 font-semibold text-gray-700">{item.brand}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detail boxes */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-700">
              <svg className="text-green-500" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              รายละเอียดเครื่องมือ
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">{item.principle}</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-700">
              <svg className="text-orange-500" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              ความสามารถ
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">{item.capability}</p>
          </div>
        </div>

        {/* Booking button -> contact page */}
        <div className="mt-8 text-center">
          <a
            href="#/contact"
            className="inline-block rounded-lg bg-green-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600"
          >
            จองใช้งานเครื่องมือ
          </a>
        </div>
      </div>
    </main>
  );
}
