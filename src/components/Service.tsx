// TODO: แทนที่รูปและข้อความด้วยข้อมูลบริการจริง 7 อย่าง
const BASE = import.meta.env.BASE_URL;

const services = [
  { id: 1, title: "IDEA SERVICES", desc: "บริการให้คำปรึกษาเพื่อพัฒนาผลิตภัณฑ์ และ การขอเลข อย.", image: `${BASE}idea-services/15.jpg`, href: "#/service/idea-services" },
  { id: 2, title: "IDEA TRAINING", desc: "การฝึกอบรมด้านเทคโนโลยีการผลิตและนวัตกรรมใหม่ๆ", image: `${BASE}idea-services/7.jpg` },
  { id: 3, title: "IDEA R&D", desc: "บริการการวิจัยและพัฒนานวัตกรรมผลิตภัณฑ์อาหารในระดับห้องปฏิบัติการ", image: `${BASE}idea-services/9.jpg` },
  { id: 4, title: "IDEA PILOT PLANT", desc: "บริการสายการผลิตผลิตภัณฑ์ผักผลไม้แปรรูปและเครื่องดื่มที่ได้มาตรฐาน", image: `${BASE}idea-services/11.jpg`, href: "#/instrument/pilot-plant" },
  { id: 5, title: "IDEA FOOD LAB", desc: "บริการตรวจวิเคราะห์ ทดสอบคุณภาพทางด้านเคมีกายภาพและจุลชีววิทยาในผลผลิตทางเกษตรและอาหาร", image: `${BASE}idea-services/10.jpg`, href: "#/instrument/food-lab" },
  { id: 6, title: "IDEA MAKER SPACE", desc: "บริการพื้นที่/เครื่องมือ/อุปกรณ์/ครัวทดลอง เพื่อทดลองปฏิบัติจริง", image: `${BASE}idea-services/6.jpg`, href: "#/instrument/marker-space" },
  { id: 7, title: "IDEA ROOM", desc: "บริการพื้นที่ และห้องปฏิบัติการภายในอาคารนวัตกรรมฯ", image: `${BASE}idea-services/5.jpg` },
];

export default function Service() {
  return (
    <section id="services" className="bg-green-50/50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-700">บริการของเรา</h2>
          <p className="mt-3 text-gray-600">
            บริการที่เราพร้อมให้บริการแก่คุณ
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const isLastAlone =
              i === services.length - 1 && services.length % 3 === 1;
            const cardClass = `block overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md ${
              isLastAlone ? "lg:col-start-2" : ""
            } ${s.href ? "cursor-pointer hover:ring-2 hover:ring-green-200" : ""}`;
            const inner = (
              <>
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
              </>
            );
            return s.href ? (
              <a key={s.id} href={s.href} className={cardClass}>
                {inner}
              </a>
            ) : (
              <div key={s.id} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
