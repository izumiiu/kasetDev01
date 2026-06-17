import { useEffect, useState } from "react";

const BASE = import.meta.env.BASE_URL;

// TODO: วางไฟล์รูปไว้ที่ public/idea-services/ ชื่อ 1.jpg, 2.jpg, ... (แก้จำนวน/นามสกุลได้ที่นี่)
const gallery = Array.from({ length: 15 }, (_, i) => `${BASE}idea-services/${i + 1}.jpg`);

const services = [
  {
    title: "วิจัยและพัฒนา (R&D)",
    desc: "บริการการวิจัยและพัฒนานวัตกรรมผลิตภัณฑ์อาหารในระดับห้องปฏิบัติการ",
  },
  {
    title: "สายการผลิตมาตรฐาน (Pilot Plant)",
    desc: "บริการสายการผลิตผลิตภัณฑ์ผักผลไม้แปรรูปและเครื่องดื่มที่ได้มาตรฐาน",
  },
  {
    title: "ให้คำปรึกษา",
    desc: "บริการให้คำปรึกษาการพัฒนาผลิตภัณฑ์อาหาร",
  },
  {
    title: "ฝึกอบรม",
    desc: "การฝึกอบรมด้านเทคโนโลยีการผลิตและนวัตกรรมใหม่ๆ",
  },
  {
    title: "ตรวจวิเคราะห์และทดสอบ",
    desc: "บริการตรวจวิเคราะห์ ทดสอบคุณภาพทางด้านเคมีกายภาพและจุลชีววิทยาในผลผลิตทางเกษตรและอาหาร",
  },
];

export default function IdeaServicesPage() {
  const [idx, setIdx] = useState(0);
  const total = gallery.length;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const go = (n: number) => setIdx((c) => (c + n + total) % total);

  return (
    <main className="bg-green-50/40">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-8">
        <a href="#services" className="text-sm font-medium text-green-600 hover:text-green-700">
          ← กลับไปบริการของเรา
        </a>

        <div className="mt-4 text-center">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
            บริการของเรา
          </span>
          <h1 className="mt-3 text-3xl font-bold text-gray-700 md:text-4xl">IDEA SERVICES</h1>
        </div>

        {/* Gallery */}
        <div className="mt-8 overflow-hidden rounded-3xl bg-white p-4 shadow-sm ring-1 ring-gray-100 md:p-6">
          <div className="relative mx-auto max-w-[85%]">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100">
              <img
                src={gallery[idx]}
                alt={`IDEA SERVICES ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            </div>

            <button
              onClick={() => go(-1)}
              aria-label="ก่อนหน้า"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow hover:bg-white"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => go(1)}
              aria-label="ถัดไป"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow hover:bg-white"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <span className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
              {idx + 1} / {total}
            </span>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg ring-2 transition ${
                  i === idx ? "ring-green-500" : "ring-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img src={src} alt={`thumb ${i + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="mt-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-700">ขอบเขตการให้บริการ</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-green-600">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#/contact"
            className="inline-block rounded-lg bg-green-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600"
          >
            ติดต่อสอบถามบริการ
          </a>
        </div>
      </div>
    </main>
  );
}
