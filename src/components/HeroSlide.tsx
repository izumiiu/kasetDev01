import { useEffect, useState } from "react";

const BASE = import.meta.env.BASE_URL;

// วางรูปไว้ที่ public/hero/ (1.jpg, 2.jpg, 3.jpg)
const slides = [
  {
    id: 1,
    image: `${BASE}hero/1.jpg`,
    // caption: "อาคารนวัตกรรมเทคโนโลยีการแปรรูปผลผลิตทางเกษตรและอาหาร",
  },
  {
    id: 2,
    image: `${BASE}hero/2.jpg`,
    // caption: "Center of Innovation-Driven Entrepreneurship in AgriFood (IDEA)",
  },
  {
    id: 3,
    image: `${BASE}hero/3.jpg`,
    // caption: "FoodInnopolis @NU มหาวิทยาลัยนเรศวร",
  },
];

export default function HeroSlide() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[60vh] w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            // alt={slide.caption}
            className="h-full w-full object-cover"
          />
          {/* gradient + caption */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute bottom-12 left-1/2 w-full max-w-4xl -translate-x-1/2 px-6 text-center">
            {/* <p className="text-base font-semibold text-white drop-shadow md:text-2xl">
              {slide.caption}
            </p> */}
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-800 hover:bg-white"
        aria-label="ก่อนหน้า"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-800 hover:bg-white"
        aria-label="ถัดไป"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`ไปสไลด์ ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
