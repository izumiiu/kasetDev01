import { news, formatThaiDate } from "../data/news";

export default function News() {
  const latest = news.slice(0, 3);

  return (
    <section id="news" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-700">ข่าวประชาสัมพันธ์</h2>
            <p className="mt-2 text-gray-600">ข่าวสารและกิจกรรมล่าสุดจากเรา</p>
          </div>
          <a
            href="#/news"
            className="hidden rounded-full border border-green-500 px-5 py-2 text-sm font-medium text-green-600 transition-colors hover:bg-green-500 hover:text-white sm:inline-block"
          >
            ดูทั้งหมด
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((item) => {
            const d = formatThaiDate(item.date);
            return (
              <a
                key={item.id}
                href={item.fbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md"
              >
                <div className="relative">
                  <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                  <div className="absolute left-3 top-3 rounded-lg bg-orange-500 px-3 py-1.5 text-center text-white">
                    <div className="text-lg font-bold leading-none">{d.day}</div>
                    <div className="text-xs">{d.month}</div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="mb-2 line-clamp-2 text-base font-semibold text-gray-800 group-hover:text-green-600">
                    {item.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-gray-600">{item.excerpt}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <a
            href="#/news"
            className="inline-block rounded-full border border-green-500 px-5 py-2 text-sm font-medium text-green-600 hover:bg-green-500 hover:text-white"
          >
            ดูทั้งหมด
          </a>
        </div>
      </div>
    </section>
  );
}
