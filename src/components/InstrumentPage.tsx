import { useEffect } from "react";
import { instruments, categories } from "../data/instruments";

export default function InstrumentPage({ slug }: { slug: string }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  const cat = categories[slug];
  const items = instruments.filter((it) => it.category === slug);

  if (!cat) {
    return (
      <main className="bg-green-50/40">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
          <h1 className="text-2xl font-bold text-gray-700">ไม่พบหน้าที่ต้องการ</h1>
          <a href="#home" className="mt-4 inline-block text-green-600 hover:text-green-700">
            ← กลับหน้าหลัก
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-green-50/40">
      {/* Header banner */}
      <div className="border-b-4 border-orange-500 bg-gradient-to-br from-green-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <a href="#services" className="text-sm font-medium text-green-600 hover:text-green-700">
            ← กลับไปบริการของเรา
          </a>
          <h1 className="mt-3 text-3xl font-bold text-gray-700 md:text-4xl">{cat.title}</h1>
          <p className="mt-1 text-base font-medium text-green-600">{cat.subtitle}</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
            {cat.intro}
          </p>
        </div>
      </div>

      {/* Instruments table */}
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-sm">
          <div className="flex items-center justify-between bg-green-500 px-5 py-3 text-white">
            <span className="font-semibold">เครื่องมือทั้งหมด</span>
            <span className="text-sm font-medium">{items.length} รายการ</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="px-5 py-3 font-medium">รูปภาพเครื่อง</th>
                  <th className="px-5 py-3 font-medium">สถานะ</th>
                  <th className="px-5 py-3 font-medium">ชื่อเครื่องมือ</th>
                  <th className="px-5 py-3 font-medium">ยี่ห้อ/รุ่น</th>
                  <th className="px-5 py-3 text-center font-medium">กดดูข้อมูล</th>
                </tr>
              </thead>
              <tbody>
                {items.map((it, i) => (
                  <tr
                    key={it.id}
                    className={`border-t border-gray-100 ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
                  >
                    <td className="px-5 py-3">
                      <img
                        src={it.image}
                        alt={it.nameTh}
                        className="h-16 w-24 rounded-md object-cover ring-1 ring-gray-100"
                      />
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                          it.status === "พร้อมใช้งาน"
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        {it.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-medium text-gray-800">{it.nameTh}</td>
                    <td className="px-5 py-3 text-gray-600">{it.brand}</td>
                    <td className="px-5 py-3 text-center">
                      <a
                        href={`#/instrument-detail/${it.id}`}
                        className="inline-block rounded-lg bg-orange-500 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-orange-600"
                      >
                        ดูข้อมูล
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
