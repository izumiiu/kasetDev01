import { useEffect } from "react";

// ลิงก์ตัวอย่าง/ไฟล์เต็มของใบอนุญาต
const FULL_LINK = "https://www.agi.nu.ac.th/?p=7042";

const dryingMethods = [
  "การอบแห้งไมโครเวฟสุญญากาศ (Microwave Vacuum Drying)",
  "การอบแห้งอินฟราเรดสุญญากาศ (Infrared Vacuum Drying)",
  "การอบแห้งแบบสุญญากาศ (Vacuum Drying)",
  "การอบแห้งด้วยลมร้อนแบบถาด (Tray Drying)",
  "การทำแห้งแบบแช่เยือกแข็ง (Freeze Drying)",
];

const foodTypes = [
  { text: "ซอสในภาชนะบรรจุที่ปิดสนิท" },
  { text: "อาหารพร้อมปรุงและอาหารสำเร็จรูปที่พร้อมบริโภคทันที" },
  {
    text: "อาหารทั่วไป ได้แก่ เครื่องเทศ พืช และผลิตภัณฑ์ โดยกรรมวิธีการทำแห้ง ดังนี้",
    sub: dryingMethods,
  },
  {
    text: "เครื่องดื่มในภาชนะบรรจุที่ปิดสนิท",
    sub: ["โดยกรรมวิธีการพาสเจอร์ไรซ์ร่วมกับการใช้ความดันสูง (High Pressure Processing: HPP)"],
  },
];

export default function GmpPage() {
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
                มาตรฐาน GMP 420
              </span>
              <h2 className="mt-4 text-lg font-bold text-gray-700">
                โรงงานต้นแบบ GMP
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                โรงงานสถานนวัตกรรมเทคโนโลยีการแปรรูปผลผลิตการเกษตรและอาหาร
                มหาวิทยาลัยนเรศวร ถูกจัดตั้งภายในอาคารนวัตกรรมเทคโนโลยีการแปรรูป
                ผลผลิตทางเกษตรและอาหาร (IDEA) ชั้น 1 โดยยึดถือตามข้อปฏิบัติตาม
                ประกาศกระทรวงสาธารณสุข (ฉบับที่ 420) พ.ศ. 2563 เรื่อง วิธีการผลิต
                เครื่องมือเครื่องใช้ในการผลิต และการเก็บรักษาอาหาร (GMP 420)
                เพื่อรองรับการให้บริการแก่ผู้ที่สนใจ วิสาหกิจชุมชน
                หรือผู้ประกอบการที่ต้องการวิจัย พัฒนาผลิตภัณฑ์ จนถึงผลิตสินค้า (OEM)
                เพื่อขอเลขสารบบอาหาร
              </p>

              <h3 className="mt-6 text-base font-semibold text-gray-700">
                ประเภทอาหารที่ขออนุญาตผลิต
              </h3>
              <ul className="mt-3 space-y-3">
                {foodTypes.map((f) => (
                  <li key={f.text}>
                    <div className="flex gap-2 text-sm text-gray-700">
                      <span className="mt-0.5 text-orange-500">➡️</span>
                      <span>{f.text}</span>
                    </div>
                    {f.sub && (
                      <ul className="mt-1.5 space-y-1 pl-8">
                        {f.sub.map((s) => (
                          <li key={s} className="flex gap-2 text-sm text-gray-600">
                            <span className="text-green-500">–</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    )}
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
                  src="https://placehold.co/600x800/16a34a/ffffff?text=GMP+420+Certificate"
                  alt="ใบอนุญาต GMP 420"
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="flex items-center justify-center gap-1.5 bg-green-500 py-2.5 text-sm font-medium text-white transition-colors group-hover:bg-green-600">
                  ดูใบอนุญาตฉบับเต็ม
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </a>
              <p className="mt-2 text-center text-xs text-gray-400">
                คลิกที่รูปเพื่อเปิดไฟล์ใบอนุญาตฉบับเต็ม
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
