import { useEffect } from "react";

const highlights = [
  {
    title: "บริการจุดเดียวเบ็ดเสร็จ (One-Stop Solution : OSS)",
    desc: "วิเคราะห์ ทดสอบ และบริการแปรรูปผลผลิตทางเกษตรและอาหารครบในที่เดียว",
  },
  {
    title: "มาตรฐาน GMP",
    desc: "แพลตฟอร์มการผลิตที่ได้รับรองแนวปฏิบัติที่ดีในการผลิต (GMP)",
  },
  {
    title: "เครือข่าย Food Innopolis",
    desc: "ส่วนขยายของเมืองนวัตกรรมอาหาร เชื่อมโยงมหาวิทยาลัยทั่วประเทศ",
  },
  {
    title: "บ่มเพาะกำลังคน",
    desc: "แหล่งฝึกปฏิบัติสหกิจด้านวิทยาศาสตร์และเทคโนโลยีการอาหารสู่ภาคอุตสาหกรรม",
  },
];

export default function AboutPage() {
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
          <h1 className="mt-3 text-3xl font-bold text-gray-700 md:text-4xl">IDEA คืออะไร</h1>
          <p className="mt-2 text-base font-medium text-green-600">
            Innovation-Driven Entrepreneurship in AgriFood (IDEA)
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8">
          <p className="text-base leading-relaxed text-gray-700">
            <span className="font-semibold text-gray-800">
              อาคารนวัตกรรมและเทคโนโลยีการแปรรูปผลผลิตทางเกษตรและอาหาร
            </span>{" "}
            (Innovation-Driven Entrepreneurship in AgriFood: IDEA)
            ภายใต้การกำกับดูแลของคณะเกษตรศาสตร์ ทรัพยากรธรรมชาติและสิ่งแวดล้อม
            มหาวิทยาลัยนเรศวร มีบทบาทเป็นศูนย์กลางเทคโนโลยีและนวัตกรรมด้านการแปรรูปอาหาร
            และผลิตผลการเกษตร โดยให้บริการแบบจุดเดียวเบ็ดเสร็จ (One-Stop Solution : OSS)
            สำหรับการวิเคราะห์ ทดสอบ และบริการแปรรูปผลผลิตทางเกษตรและอาหาร
            โดยอาศัยเทคโนโลยี นวัตกรรม และความเชี่ยวชาญของบุคลากร
            ให้กับผู้ประกอบการอุตสาหกรรมเกษตร/อาหาร (SMEs และ start-up)
            และเกษตรกรในภูมิภาคเหนือตอนล่าง
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            ด้วยแพลตฟอร์มการผลิตที่ได้รับรองมาตรฐานแนวปฏิบัติที่ดีในการผลิต (GMP)
            และเป็นที่รู้จักในเครือข่ายเมืองนวัตกรรมอาหาร (Food Innopolis) ส่วนขยาย
            ที่รองรับการให้บริการอยู่ในมหาวิทยาลัยทั่วประเทศ
            รวมทั้งความพร้อมของบุคลากรทางวิชาการด้านวิทยาศาสตร์และเทคโนโลยีการอาหาร
            เพื่อบ่มเพาะ (แหล่งฝึกปฏิบัติสหกิจ) กำลังคนเข้าสู่อุตสาหกรรมอาหารของประเทศ
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <h3 className="font-semibold text-green-600">{h.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{h.desc}</p>
            </div>
          ))}
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
