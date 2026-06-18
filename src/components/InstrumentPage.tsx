import { useEffect, useState } from "react";
import { instruments, categories } from "../data/instruments";

export default function InstrumentPage({ slug }: { slug: string }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  const cat = categories[slug];
  const items = instruments.filter((it) => it.category === slug);
  const [feeIdx, setFeeIdx] = useState(0);
  const feeConfig: Record<string, { dir: string; count: number }> = {
    "pilot-plant": { dir: "pilot-fees", count: 4 },
    "food-lab": { dir: "lab-fees", count: 5 },
    "marker-space": { dir: "space-fees", count: 5 },
  };
  const fee = feeConfig[slug];
  const feeImages = fee
    ? Array.from(
        { length: fee.count },
        (_, i) => `${import.meta.env.BASE_URL}${fee.dir}/fee-${i + 1}.jpg`
      )
    : [];
  const feePdf = fee ? `${import.meta.env.BASE_URL}${fee.dir}/fee.pdf` : "";

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

      {/* Category long detail */}
      {slug === "pilot-plant" && (
        <div className="mx-auto max-w-7xl px-4 pt-12 lg:px-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8">
            <h2 className="text-2xl font-bold text-gray-700">FOOD PILOT PLANT</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
              มีโรงงานที่ได้ตามหลักเกณฑ์และวิธีการที่ดีในการผลิตอาหาร (Good Manufacturing
              Practice) มีเครื่องจักรและอุปกรณ์ที่ทันสมัยครบครันสำหรับให้บริการผู้ประกอบการ
              แปรรูปอาหารจากผลผลิตทางการเกษตรและเครื่องดื่ม ดังนี้
            </p>

            {/* GMP production lines */}
            <h3 className="mt-6 inline-block rounded-lg bg-green-100 px-3 py-1 text-base font-semibold text-green-700">
              สายการผลิตที่ได้รับมาตรฐาน GMP
            </h3>
            <ol className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">1</span>
                <p className="text-sm leading-relaxed text-gray-700">
                  สายการผลิตเครื่องดื่มด้วยเทคโนโลยีการแปรรูปด้วยความดันสูง{" "}
                  <a
                    href="https://www.nfi.or.th/datas/files/June2019_HPP.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-orange-600 underline decoration-orange-300 underline-offset-2 hover:text-orange-700"
                  >
                    (High Pressure Processing; HPP)
                  </a>
                </p>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">2</span>
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    สายการผลิตผลิตภัณฑ์อบแห้ง (Drying)
                  </p>
                  <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                    {[
                      "เครื่องอบลมร้อน (Hot air oven)",
                      "เครื่องอบแห้งแบบสุญญากาศ (Vacuum Dryer)",
                      "เครื่องอบแห้งอินฟราเรดสุญญากาศ (Infrared Vacuum Dryer)",
                      "เครื่องอบแห้งไมโครเวฟสุญญากาศ (Microwave Vacuum Dryer)",
                      "เครื่องทำแห้งแบบแช่เยือกแข็ง (Freeze Dryer)",
                      "เครื่องแช่ติดลบแบบลมเย็น (Air Blast Freezer)",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ol>

            {/* Other tools */}
            <h3 className="mt-8 inline-block rounded-lg bg-green-100 px-3 py-1 text-base font-semibold text-green-700">
              การให้บริการเครื่องมืออื่น ๆ
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              สำหรับนักวิจัยในการพัฒนาผลิตภัณฑ์ระดับห้องปฏิบัติการและระดับย่อม
              เพื่อทดลองก่อนผลิตออกสู่ท้องตลาด เช่น
            </p>
            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
              {[
                "เครื่องทอดสุญญากาศ (Vacuum Fryer)",
                "เครื่องทำแห้งแบบพ่นฝอย (Spray Dryer)",
                "เครื่องอัดรีดอาหารชนิดสกรูคู่/สกรูเดี่ยว (Extruder)",
                "เครื่องให้ความร้อนด้วยคลื่นวิทยุแบบสายพาน (Radio Frequency Heating)",
                "การฆ่าเชื้อด้วยระบบรีทอร์ท (Retort Sterilization)",
                "เครื่องปั่นอาหาร (Colloid mill)",
                "ชุดถังกวนผสม (pH Adjustable Tank 70L)",
                "ชุดถังกวนผสม (Protein Washing Tank 70L)",
                "ชุดถังกวนผสม (Mixing Tank 70L - Double Jacket)",
                "เครื่องมือสำหรับบรรจุผลิตภัณฑ์ เช่น เครื่องซีลสุญญากาศ, เครื่องปิดฝากระป๋องอลูมิเนียม, เครื่องซีลระบบสุญญากาศ/เติมแก๊ส เป็นต้น",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Category long detail: food-lab */}
      {slug === "food-lab" && (
        <div className="mx-auto max-w-7xl px-4 pt-12 lg:px-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8">
            <h2 className="text-2xl font-bold text-gray-700">FUTURE FOOD LAB</h2>

            {[
              {
                heading: 'งานบริการเครื่องมือตรวจวิเคราะห์องค์ประกอบ "ด้านเคมีในผลผลิตทางเกษตรและอาหาร"',
                items: [
                  "วิเคราะห์องค์ประกอบทางเคมีในอาหาร (Proximate)",
                  "วิเคราะห์ปริมาณน้ำอิสระ (Aw)",
                  "วิเคราะห์ค่าความเป็นกรด-ด่าง (pH Meter)",
                  "เครื่องเนียร์อินฟราเรดสเปกโทรมิเตอร์ (NIR)",
                  "วิเคราะห์ค่าพลังงานรวม (Bomb Calorimeter)",
                  "วิเคราะห์คุณสมบัติทางพลังงานความร้อน (DSC)",
                  "วิเคราะห์กลุ่มสารอินทรีย์ที่ระเหยง่าย (GC-O-MS)",
                  "วิเคราะห์คุณภาพและปริมาณของสาระสำคัญต่าง ๆ (HPLC)",
                ],
              },
              {
                heading: 'งานบริการเครื่องมือตรวจวิเคราะห์ "ด้านกายภาพในผลผลิตทางเกษตรและอาหาร"',
                items: [
                  "วิเคราะห์คุณสมบัติทางด้านความหนืดแบบรวดเร็ว (RVA)",
                  "วิเคราะห์คุณสมบัติการดูดน้ำของแป้งสาลี (Dough Lab)",
                  "วิเคราะห์คุณสมบัติการไหลของสสาร (Rheometer)",
                  "วิเคราะห์คุณสมบัติด้านเนื้อสัมผัส (Texture Analyzer)",
                ],
              },
              {
                heading: "งานบริการเครื่องมือตรวจด้านจุลชีววิทยา",
                items: [
                  "วิเคราะห์เชื้อจุลินทรีย์ทั้งหมด",
                  "แบคทีเรียผลิตกรดแล็กติก",
                  "ยีสต์และรา",
                ],
              },
              {
                heading: "บริการประเมินอายุการเก็บรักษาผลิตภัณฑ์อาหาร (Shelf Life Evaluation)",
                intro: "ศึกษาการเสื่อมเสียของอาหารในด้านต่าง ๆ ได้แก่",
                items: [
                  "การเสื่อมเสียทางกายภาพ (Physical)",
                  "การเสื่อมเสียทางด้านเคมี (Chemical)",
                  "การเสื่อมเสียทางจุลินทรีย์ (Microbiology)",
                  "การเสื่อมเสียทางด้านประสาทสัมผัส (Sensory Evaluation)",
                ],
              },
            ].map((sec) => (
              <div key={sec.heading} className="mt-6">
                <h3 className="inline-block rounded-lg bg-green-100 px-3 py-1 text-base font-semibold text-green-700">
                  {sec.heading}
                </h3>
                {sec.intro && (
                  <p className="mt-2 text-sm text-gray-600">{sec.intro}</p>
                )}
                <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                  {sec.items.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category long detail: marker-space */}
      {slug === "marker-space" && (
        <div className="mx-auto max-w-7xl px-4 pt-12 lg:px-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8">
            <h2 className="text-2xl font-bold text-gray-700">FOOD MARKER SPACE</h2>

            <div className="mt-4">
              <h3 className="inline-block rounded-lg bg-green-100 px-3 py-1 text-base font-semibold text-green-700">
                บริการพื้นที่ / เครื่องมือ / อุปกรณ์ / ครัวทดลอง
              </h3>
              <blockquote className="mt-3 border-l-4 border-orange-500 bg-orange-50 px-4 py-2 text-sm italic text-gray-700">
                "พร้อมด้วยเครื่องมืออุปกรณ์สำหรับการพัฒนาผลิตภัณฑ์เพื่อนำไปต่อยอดขยายผลต่อไป"
              </blockquote>
            </div>

            <div className="mt-6">
              <h3 className="inline-block rounded-lg bg-green-100 px-3 py-1 text-base font-semibold text-green-700">
                ห้องปฏิบัติการทดสอบทางประสาทสัมผัส (Sensory Testing Lab)
              </h3>
              <blockquote className="mt-3 border-l-4 border-orange-500 bg-orange-50 px-4 py-2 text-sm italic text-gray-700">
                "ผู้วิจัยและผู้ผลิตสามารถปรับปรุงผลิตภัณฑ์ให้เหมาะสมกับความต้องการของตลาดได้ดีขึ้น"
              </blockquote>
            </div>
          </div>
        </div>
      )}

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

      {/* Service fee gallery */}
      {fee && (
        <div className="mx-auto max-w-7xl px-4 pt-12 lg:px-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold text-gray-700">
                อัตราค่าบริการเครื่องมือแปรรูปอาหาร
              </h2>
              <a
                href={feePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-green-500 px-4 py-2 text-sm font-medium text-green-600 transition-colors hover:bg-green-500 hover:text-white"
              >
                ดาวน์โหลด PDF
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>

            <div className="relative mx-auto max-w-[38rem]">
              <div className="overflow-hidden rounded-xl bg-gray-100 ring-1 ring-gray-200">
                <img
                  src={feeImages[feeIdx]}
                  alt={`อัตราค่าบริการ หน้า ${feeIdx + 1}`}
                  className="w-full object-contain"
                />
              </div>
              <button
                onClick={() => setFeeIdx((c) => (c - 1 + feeImages.length) % feeImages.length)}
                aria-label="ก่อนหน้า"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow hover:bg-white"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={() => setFeeIdx((c) => (c + 1) % feeImages.length)}
                aria-label="ถัดไป"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow hover:bg-white"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              <span className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white">
                {feeIdx + 1} / {feeImages.length}
              </span>
            </div>

            {/* dots */}
            <div className="mt-4 flex justify-center gap-2">
              {feeImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setFeeIdx(i)}
                  aria-label={`ไปหน้า ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === feeIdx ? "bg-green-500" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
