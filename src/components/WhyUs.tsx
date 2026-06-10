const highlights = [
  {
    title: "บริการจุดเดียวเบ็ดเสร็จ",
    desc: "One-Stop Service ครบทั้งวิเคราะห์ ทดสอบ และแปรรูปผลผลิตเกษตรและอาหาร",
  },
  {
    title: "มาตรฐาน GMP",
    desc: "แพลตฟอร์มการผลิตที่ได้รับรองแนวปฏิบัติที่ดีในการผลิต (GMP)",
  },
  {
    title: "เครือข่าย Food Innopolis",
    desc: "ส่วนขยายของเมืองนวัตกรรมอาหาร เชื่อมโยงมหาวิทยาลัยทั่วประเทศ",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 via-green-50/40 to-white p-8 ring-1 ring-green-100 md:p-14">
          {/* Decorative circle */}
          <div className="pointer-events-none absolute -bottom-16 right-0 h-72 w-72 rounded-full bg-orange-200/50 blur-xl md:-right-10" />

          <div className="relative z-10 max-w-3xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-green-800 ring-1 ring-green-200">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
              Innovation • Agriculture • Food
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-bold leading-tight text-green-900 md:text-4xl">
              นวัตกรรมเพื่อ{" "}
              <span className="text-green-600">การแปรรูปผลผลิตทางเกษตรและอาหาร</span>{" "}
              แบบครบวงจร
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
              IDEA คืออาคารนวัตกรรมและเทคโนโลยีการแปรรูปผลผลิตทางเกษตรและอาหาร
              ภายใต้คณะเกษตรศาสตร์ ทรัพยากรธรรมชาติและสิ่งแวดล้อม มหาวิทยาลัยนเรศวร
              เป็นศูนย์กลางเทคโนโลยี เครื่องมือ และผู้เชี่ยวชาญ พร้อมให้บริการแก่
              ผู้ประกอบการ SMEs สตาร์ทอัพ และเกษตรกรในภาคเหนือตอนล่างแบบรอบด้าน
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#services"
                className="inline-block rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800"
              >
                ดูบริการของเรา
              </a>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid gap-6 border-t border-green-100 pt-8 sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.title}>
                  <h3 className="text-base font-semibold text-green-800">{h.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
