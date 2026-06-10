import { useState } from "react";

const menuItems = [
  { label: "หน้าหลัก", href: "#home" },
  { label: "เกี่ยวกับเรา", href: "#about" },
  { label: "บริการของเรา", href: "#services" },
  { label: "ประชาสัมพันธ์", href: "#news" },
  { label: "หน่วยงานความร่วมมือ", href: "#partners" },
  { label: "แถบรายการเครื่องมือ", href: "#tools" },
  { label: "ขั้นตอนการส่งตัวอย่าง", href: "#sample-process" },
  { label: "ติดต่อสอบถาม", href: "#/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-700 font-bold text-white">
            LOGO
          </div>
          <span className="text-lg font-semibold text-green-800">
            ชื่อแบรนด์
          </span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-4 lg:flex xl:gap-6">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-green-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="เมนู"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t bg-white px-4 py-2 lg:hidden">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block rounded px-2 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
