const steps = [
  {
    no: "1",
    title: "สอบถามข้อมูล",
    desc: "สอบถามรายละเอียดการให้บริการได้ที่ หมายเลขโทรศัพท์ 055-96-3030",
    icon: (
      <>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
      </>
    ),
  },
  {
    no: "2",
    title: "กรอกแบบฟอร์ม",
    desc: "เจ้าหน้าที่จะทำการส่งแบบฟอร์มเพื่อจองการใช้งานเครื่องมือ",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h6" />
      </>
    ),
  },
  {
    no: "3",
    title: "ใช้บริการ",
    desc: "มาใช้บริการในวันที่แจ้งเจ้าหน้าที่ หากมีการเปลี่ยนแปลงให้รีบแจ้งก่อน 1 วันทำการ",
    icon: (
      <>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
      </>
    ),
  },
  {
    no: "4",
    title: "ชำระเงิน",
    desc: "แจ้งค่าบริการหลังการใช้งาน สามารถชำระได้ทั้งเงินสดหรือเงินโอน",
    icon: (
      <>
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </>
    ),
  },
];

export default function EquipmentServiceSteps() {
  return (
    <section id="equipment-service" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
            ขั้นตอนการให้บริการ
          </span>
          <h2 className="mt-3 text-2xl font-bold text-gray-700 md:text-3xl">
            ขั้นตอนการให้บริการเครื่องมือแปรรูป / เครื่องมือวิเคราะห์ / เครื่องมือเบเกอรี่
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.no} className="relative text-center">
              {/* connector line (desktop) */}
              {i < steps.length - 1 && (
                <span className="absolute left-1/2 top-10 hidden h-0.5 w-full bg-green-100 lg:block" />
              )}

              <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-white shadow-md">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white ring-2 ring-white">
                  {s.no}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-700">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-gray-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
