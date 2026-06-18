import { useState } from "react";

type SubItem = { label: string; href: string; external?: boolean };
type MenuItem = { label: string; href?: string; children?: SubItem[] };

const menuItems: MenuItem[] = [
  { label: "หน้าหลัก", href: "#home" },
  {
    label: "เกี่ยวกับเรา",
    children: [
      { label: "IDEA คืออะไร", href: "#/about/idea" },
      { label: "วิสัยทัศน์ พันธกิจ และเป้าหมาย", href: "#/about/vision" },
      { label: "โครงสร้างคณะและองค์กร", href: "#/about/structure" },
      { label: "คณะกรรมการดำเนินงาน", href: "#/about/committee" },
      { label: "บุคลากรตึก", href: "#/about/staff" },
    ],
  },
  { label: "บริการของเรา", href: "#services" },
  {
    label: "Certificate",
    children: [
      { label: "GMP", href: "#/certificate/gmp" },
      { label: "ISO/IEC 17025 : 2017", href: "#/certificate/iso-17025" },
    ],
  },
  { label: "ประชาสัมพันธ์", href: "#news" },
  { label: "ขั้นตอนการให้บริการ", href: "#equipment-service" },
  {
    label: "หน่วยงานความร่วมมือ",
    children: [
      { label: "สำนักงานนวัตกรรมแห่งชาติ", href: "https://www.nia.or.th/", external: true },
      { label: "กระทรวง อว.", href: "https://www.mhesi.go.th/", external: true },
      { label: "Food Innopolis", href: "https://foodinnopolis.or.th/en/home/", external: true },
      { label: "มหาวิทยาลัยนเรศวร", href: "https://www.nu.ac.th/", external: true },
      { label: "ภาควิชาอุตสาหกรรมเกษตร คณะเกษตรศาสตร์ฯ", href: "https://www.agro.agi.nu.ac.th/", external: true },
      { label: "อุทยานวิทยาศาสตร์และเทคโนโลยี", href: "https://scipark.nu.ac.th/", external: true },
    ],
  },
  { label: "ติดต่อสอบถาม", href: "#/contact" },
];

const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="โลโก้"
            className="h-12 w-12 object-contain"
          />
          <div className="leading-tight">
            <div className="text-lg font-bold text-gray-700">IDEA NU</div>
            <div className="hidden max-w-xs text-[10px] leading-tight text-gray-400 sm:block">
              อาคารนวัตกรรมเทคโนโลยีการแปรรูปผลผลิตทางเกษตรและอาหาร
              {/* <br />
              (Center of Innovation-Driven Entrepreneurship in AgriFood: IDEA) */}
            </div>
          </div>
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-4 lg:flex xl:gap-6">
          {menuItems.map((item) =>
            item.children ? (
              <li key={item.label} className="group relative">
                <button className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-green-600">
                  {item.label}
                  <ChevronDown className="transition-transform group-hover:rotate-180" />
                </button>
                <ul className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 rounded-xl border border-gray-100 bg-white py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((sub) => (
                    <li key={sub.label}>
                      <a
                        href={sub.href}
                        {...(sub.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-green-50 hover:text-green-600"
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-green-600"
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-gray-700 lg:hidden"
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
          {menuItems.map((item) =>
            item.children ? (
              <li key={item.label}>
                <button
                  onClick={() =>
                    setMobileSub((s) => (s === item.label ? null : item.label))
                  }
                  className="flex w-full items-center justify-between rounded px-2 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600"
                >
                  {item.label}
                  <ChevronDown
                    className={`transition-transform ${
                      mobileSub === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileSub === item.label && (
                  <ul className="mb-1 ml-3 border-l border-gray-200 pl-3">
                    {item.children.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          {...(sub.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="block rounded px-2 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600"
                          onClick={() => setOpen(false)}
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block rounded px-2 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
}
