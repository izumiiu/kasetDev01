import { useEffect } from "react";

const missions = [
  "ยกระดับการบริหารจัดการ เพื่อให้เกิดประสิทธิภาพในการบริการ",
  "สร้างโอกาสและเพิ่มขีดความสามารถในการแข่งขันของผู้ประกอบการอาหารอย่างยั่งยืน",
  "วิจัยเพื่อสร้างนวัตกรรมอาหาร",
  "บริหารองค์กรอย่างมืออาชีพ พัฒนาบุคลากรให้สามารถแข่งขันได้ในระดับสากล",
];

const goals = [
  "ดำเนินการขอมาตรฐานการผลิตอาหารและเครื่องดื่ม ไม่ต่ำกว่า 1 ประเภทการผลิตต่อปี",
  "เปิดหลักสูตรอบรมพัฒนาด้านนวัตกรรมอาหารและเครื่องดื่ม ร่วมกับหน่วยงานภาครัฐและเอกชน SMEs ไม่ต่ำกว่า 4 หลักสูตรต่อปี",
  "เสริมความสามารถในการแข่งขันสำหรับผู้ประกอบการภูมิภาค ในการวิเคราะห์ผลิตภัณฑ์และแปรรูปผลิตภัณฑ์ ไม่ต่ำกว่า 10 ผลิตภัณฑ์ต่อปี",
  "ขอทุนวิจัยนวัตกรรมอาหาร หรือเครื่องดื่ม ไม่ต่ำกว่า 1 ทุนต่อปี",
  "อบรมและพัฒนาทักษะบุคลากรฝ่ายปฏิบัติการภายในองค์กร ไม่น้อยกว่า 1 หลักสูตรต่อปี เพื่อเสริมศักยภาพให้บุคลากรดำเนินการในหน้าที่อย่างมืออาชีพ",
  "มีรายได้ไม่ต่ำกว่าจุดคุ้มทุนต่อปีของทุกปี",
];

export default function VisionPage() {
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
            วิสัยทัศน์ พันธกิจ และเป้าหมาย
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        {/* Vision */}
        <div className="rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-8 text-center text-white shadow-sm">
          <h2 className="text-lg font-semibold uppercase tracking-wide text-green-50">
            วิสัยทัศน์ (Vision)
          </h2>
          <p className="mt-3 text-base font-bold leading-relaxed md:whitespace-nowrap md:text-xl">
            ผู้นำการพัฒนานวัตกรรมอาหาร ด้วยนวัตกรรมและเทคโนโลยี เพื่อสร้างผู้ประกอบการเกษตรอาหาร
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-gray-700">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              พันธกิจ (Mission)
            </h2>
            <ul className="space-y-3">
              {missions.map((m, i) => (
                <li key={m} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-gray-700">{m}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Goals */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8">
            <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-gray-700">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </span>
              เป้าหมาย (Goal)
            </h2>
            <ul className="space-y-3">
              {goals.map((g, i) => (
                <li key={g} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-gray-700">{g}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#/contact"
            className="inline-block rounded-lg bg-green-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600"
          >
            ติดต่อสอบถาม
          </a>
        </div>
      </div>
    </main>
  );
}
