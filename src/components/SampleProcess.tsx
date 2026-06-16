// TODO: แก้ไขขั้นตอนและรายละเอียดให้ตรงกับการให้บริการจริง
const steps = [
  {
    no: "01",
    title: "ติดต่อและปรึกษาเบื้องต้น",
    desc: "ติดต่อเจ้าหน้าที่เพื่อปรึกษาความต้องการ ประเภทการวิเคราะห์/ทดสอบ และขอบเขตงาน",
  },
  {
    no: "02",
    title: "กรอกแบบฟอร์มส่งตัวอย่าง",
    desc: "กรอกข้อมูลตัวอย่าง รายการที่ต้องการวิเคราะห์ และข้อมูลผู้ส่งให้ครบถ้วน",
  },
  {
    no: "03",
    title: "เตรียมและจัดส่งตัวอย่าง",
    desc: "บรรจุตัวอย่างตามคำแนะนำ พร้อมแนบเอกสาร แล้วนำส่งด้วยตนเองหรือทางไปรษณีย์",
  },
  {
    no: "04",
    title: "ตรวจรับและชำระค่าบริการ",
    desc: "เจ้าหน้าที่ตรวจรับตัวอย่าง ออกใบเสนอราคา และแจ้งช่องทางการชำระเงิน",
  },
  {
    no: "05",
    title: "ดำเนินการวิเคราะห์/ทดสอบ",
    desc: "ห้องปฏิบัติการดำเนินการตามมาตรฐาน ภายในระยะเวลาที่กำหนด",
  },
  {
    no: "06",
    title: "รับผลและรายงาน",
    desc: "รับรายงานผลการวิเคราะห์ผ่านช่องทางที่ตกลงไว้ พร้อมคำแนะนำเพิ่มเติม",
  },
];

export default function SampleProcess() {
  return (
    <section id="sample-process" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {/* <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
            ขั้นตอนการให้บริการ
          </span> */}
          <h2 className="mt-3 text-3xl font-bold text-gray-700">ขั้นตอนการส่งตัวอย่าง</h2>
          <p className="mt-3 text-gray-600">
            ขั้นตอนการส่งตัวอย่างเพื่อวิเคราะห์และทดสอบกับทาง IDEA (placeholder)
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.no}
              className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-lg font-bold text-white">
                {s.no}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-700">{s.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
