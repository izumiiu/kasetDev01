import { useEffect, useState } from "react";
import { news, formatThaiDate } from "../data/news";

const PER_PAGE = 6;

export default function NewsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(news.length / PER_PAGE));

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const start = (page - 1) * PER_PAGE;
  const items = news.slice(start, start + PER_PAGE);

  return (
    <main className="bg-green-50/40">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <a href="#home" className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600 hover:text-green-700">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          กลับหน้าหลัก
        </a>

        <div className="mt-6 text-center">
          <h1 className="inline-block border-b-4 border-green-500 pb-2 text-3xl font-bold text-gray-700 md:text-4xl">
            ดูข่าวทั้งหมด
          </h1>
          <p className="mt-4 text-gray-600">ติดตามข่าวสารและกิจกรรมล่าสุดจากเรา</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const d = formatThaiDate(item.date);
            return (
              <div
                key={item.id}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md"
              >
                <div className="relative">
                  <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
                  <div className="absolute right-3 top-3 rounded-lg bg-orange-500 px-3 py-1.5 text-center text-white">
                    <div className="text-sm font-bold leading-none">{d.day} {d.month}</div>
                    <div className="text-[10px]">{d.year}</div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 line-clamp-2 text-base font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="line-clamp-3 text-sm text-gray-600">{item.excerpt}</p>
                  <a
                    href={item.fbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-green-600 hover:text-green-700"
                  >
                    อ่านเพิ่มเติม
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-gray-200 text-gray-600 transition-colors hover:bg-green-50 disabled:opacity-40"
              aria-label="ก่อนหน้า"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`h-9 w-9 rounded-full text-sm font-medium transition-colors ${
                  p === page ? "bg-green-500 text-white" : "ring-1 ring-gray-200 text-gray-600 hover:bg-green-50"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-gray-200 text-gray-600 transition-colors hover:bg-green-50 disabled:opacity-40"
              aria-label="ถัดไป"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
