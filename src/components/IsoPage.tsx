import { useEffect } from "react";

// ลิงก์ตัวอย่าง/ไฟล์เต็มของใบรับรอง (แก้เป็นลิงก์จริงภายหลังได้)
const FULL_LINK = "https://www.agi.nu.ac.th/";

const policies = [
  "ห้องปฏิบัติการทดสอบมีนโยบายไม่จ้างเหมาช่วงงานทดสอบ กรณีที่ห้องปฏิบัติการไม่สามารถรับงานทดสอบได้ จะทำการส่งตัวอย่างคืนลูกค้าทันที",
  "ห้องปฏิบัติการทดสอบมีนโยบายไม่มีการแสดงข้อคิดเห็นและการแปลผลการทดสอบ ไม่ว่ากรณีใดๆ ทั้งสิ้น",
  "ห้องปฏิบัติการจะรายงานค่าความไม่แน่นอนในการวัด (Uncertainty) เฉพาะกรณีที่ลูกค้าร้องขอเท่านั้น",
  "ห้องปฏิบัติการมีนโยบายไม่ระบุข้อความเกี่ยวกับความเป็นไปตามข้อกำหนดเฉพาะหรือมาตรฐานทดสอบ (เช่น ระบุผ่าน/ตก)",
];

export default function IsoPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main className="bg-green-50/40">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        {/* Header banner */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-orange-500 bg-white shadow-sm ring-1 ring-gray-100">
          <div className="bg-gradient-to-br from-green-50 to-white px-6 py-6 text-center">
            <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
              อาคารนวัตกรรมเทคโนโลยีการแปรรูปผลผลิตทางเกษตรและอาหาร
            </h1>
            <p className="mt-1 text-sm text-green-600 md:text-base">
              (Center of Innovation-Driven Entrepreneurship in AgriFood : IDEA)
            </p>
          </div>

          {/* Two columns */}
          <div className="grid gap-8 border-t border-gray-100 p-6 md:p-8 lg:grid-cols-2">
            {/* Left: content */}
            <div>
              <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
                มาตรฐาน ISO/IEC 17025 : 2017
              </span>
              <h2 className="mt-4 text-lg font-bold text-gray-700">
                นโยบายห้องปฏิบัติการทดสอบ
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                ห้องปฏิบัติการทดสอบของอาคารนวัตกรรมเทคโนโลยีการแปรรูปผลผลิตทางเกษตร
                และอาหาร (IDEA) ดำเนินการตามมาตรฐาน ISO/IEC 17025 : 2017
                ว่าด้วยข้อกำหนดทั่วไปเกี่ยวกับความสามารถของห้องปฏิบัติการทดสอบ
                และห้องปฏิบัติการสอบเทียบ โดยมีนโยบายในการให้บริการ ดังนี้
              </p>

              <h3 className="mt-6 text-base font-semibold text-gray-700">
                นโยบายในการให้บริการทดสอบ
              </h3>
              <ul className="mt-3 space-y-3">
                {policies.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: certificate image */}
            <div>
              <a
                href={FULL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-xl ring-1 ring-gray-200 transition hover:ring-green-300"
                title="คลิกเพื่อดูไฟล์เต็ม"
              >
                <img
                  src="https://placehold.co/600x800/16a34a/ffffff?text=ISO%2FIEC+17025+:+2017"
                  alt="ใบรับรอง ISO/IEC 17025 : 2017"
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="flex items-center justify-center gap-1.5 bg-green-500 py-2.5 text-sm font-medium text-white transition-colors group-hover:bg-green-600">
                  ดูใบรับรองฉบับเต็ม
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </a>
              <p className="mt-2 text-center text-xs text-gray-400">
                คลิกที่รูปเพื่อเปิดไฟล์ใบรับรองฉบับเต็ม
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <a href="#home" className="text-sm font-medium text-green-600 hover:text-green-700">
            ← กลับหน้าหลัก
          </a>
        </div>
      </div>
    </main>
  );
}
