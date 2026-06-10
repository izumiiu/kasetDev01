// TODO: แทนที่ด้วยข่าวจริงของคุณ
const news = [
  {
    id: 1,
    image: "https://placehold.co/600x400/166534/ffffff?text=News+1",
    date: { day: "10", month: "มิ.ย." },
    title: "หัวข้อข่าวประชาสัมพันธ์ที่ 1 (placeholder)",
    excerpt: "รายละเอียดย่อของข่าวสาร แก้ไขข้อความนี้ได้ภายหลัง",
    href: "#",
  },
  {
    id: 2,
    image: "https://placehold.co/600x400/15803d/ffffff?text=News+2",
    date: { day: "08", month: "มิ.ย." },
    title: "หัวข้อข่าวประชาสัมพันธ์ที่ 2 (placeholder)",
    excerpt: "รายละเอียดย่อของข่าวสาร แก้ไขข้อความนี้ได้ภายหลัง",
    href: "#",
  },
  {
    id: 3,
    image: "https://placehold.co/600x400/22c55e/ffffff?text=News+3",
    date: { day: "05", month: "มิ.ย." },
    title: "หัวข้อข่าวประชาสัมพันธ์ที่ 3 (placeholder)",
    excerpt: "รายละเอียดย่อของข่าวสาร แก้ไขข้อความนี้ได้ภายหลัง",
    href: "#",
  },
];

export default function News() {
  return (
    <section id="news" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-green-800">ข่าวประชาสัมพันธ์</h2>
            <p className="mt-2 text-gray-600">ข่าวสารและกิจกรรมล่าสุด (placeholder)</p>
          </div>
          <a
            href="#news"
            className="hidden rounded-full border border-green-700 px-5 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-700 hover:text-white sm:inline-block"
          >
            ดูทั้งหมด
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute left-3 top-3 rounded-lg bg-green-700 px-3 py-1.5 text-center text-white">
                  <div className="text-lg font-bold leading-none">{item.date.day}</div>
                  <div className="text-xs">{item.date.month}</div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="mb-2 line-clamp-2 text-base font-semibold text-gray-800 group-hover:text-green-700">
                  {item.title}
                </h3>
                <p className="line-clamp-2 text-sm text-gray-600">{item.excerpt}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <a
            href="#news"
            className="inline-block rounded-full border border-green-700 px-5 py-2 text-sm font-medium text-green-700 hover:bg-green-700 hover:text-white"
          >
            ดูทั้งหมด
          </a>
        </div>
      </div>
    </section>
  );
}
