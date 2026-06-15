// TODO: แทนที่รูปและข้อความด้วยข้อมูลบริการจริง 6 อย่าง
const services = [
  { id: 1, title: "IDEA SERVICES", desc: "บริการให้คำปรึกษาเพื่อพัฒนาผลิตภัณฑ์ และ การขอเลข อย.", image: "https://placehold.co/400x300/22c55e/ffffff?text=Service+1" },
  { id: 2, title: "IDEA TRAINNING", desc: "การฝึกอบรมด้านเทคโนโลยีการผลิตและนวัตกรรมใหม่ๆ", image: "https://placehold.co/400x300/16a34a/ffffff?text=Service+2" },
  { id: 3, title: "IDEA R&D", desc: "บริการการวิจัยและพัฒนานวัตกรรมผลิตภัณฑ์อาหารในระดับห้องปฏิบัติการ", image: "https://placehold.co/400x300/f97316/ffffff?text=Service+3" },
  { id: 4, title: "IDEA PILOT PLANT", desc: "บริการสายการผลิตผลิตภัณฑ์ผักผลไม้แปรรูปและเครื่องดื่มที่ได้มาตรฐาน", image: "https://placehold.co/400x300/374151/ffffff?text=Service+4" },
  { id: 5, title: "IDEA FOOD LAB", desc: "บริการตรวจวิเคราะห์ ทดสอบคุณภาพทางด้านเคมีกายภาพและจุลชีววิทยาในผลผลิตทางเกษตรและอาหาร", image: "https://placehold.co/400x300/4b5563/ffffff?text=Service+5" },
  { id: 6, title: "IDEA MARKER SPACE", desc: "บริการพื้นที่/เครื่องมือ/อุปกรณ์/ครัวทดลอง เพื่อทดลองปฏิบัติจริง", image: "https://placehold.co/400x300/166534/ffffff?text=Service+6" },
];

export default function Service() {
  return (
    <section id="services" className="bg-green-50/50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-700">บริการของเรา</h2>
          <p className="mt-3 text-gray-600">
            บริการที่เราพร้อมให้บริการแก่คุณ (placeholder)
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={s.image}
                alt={s.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="mb-1 text-base font-semibold text-gray-800">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
