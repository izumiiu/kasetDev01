import { useEffect } from "react";

const BASE = import.meta.env.BASE_URL;

// TODO: วางไฟล์รูปไว้ที่ public/structure/ ชื่อ structure-1.jpg และ structure-2.jpg
const charts = [
  {
    title: "โครงสร้างคณะ",
    subtitle: "คณะเกษตรศาสตร์ ทรัพยากรธรรมชาติและสิ่งแวดล้อม",
    image: `${BASE}structure/structure-1.png`,
  },
  {
    title: "โครงสร้างสถานนวัตกรรมฯ (IDEA)",
    subtitle: "สถานนวัตกรรมและเทคโนโลยีการแปรรูปผลผลิตทางเกษตรและอาหาร",
    image: `${BASE}structure/structure-2.png`,
  },
];

export default function StructurePage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main className="bg-green-50/40">
      {/* Header banner */}
      <div className="border-b-4 border-orange-500 bg-gradient-to-br from-green-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <a href="#home" className="text-sm font-medium text-green-600 hover:text-green-700">
            ← กลับหน้าหลัก
          </a>
          <span className="mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
            เกี่ยวกับเรา
          </span>
          <h1 className="mt-3 text-3xl font-bold text-gray-700 md:text-4xl">
            โครงสร้างคณะและองค์กร
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-10 px-4 py-14 lg:px-8">
        {charts.map((c) => (
          <section key={c.title}>
            <h2 className="text-xl font-bold text-gray-700">{c.title}</h2>
            <p className="mt-1 text-sm text-gray-500">{c.subtitle}</p>
            <div className="mt-4 overflow-hidden rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
              <img
                src={c.image}
                alt={c.title}
                className="w-full rounded-xl object-contain"
              />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
