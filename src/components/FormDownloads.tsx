// TODO: ใส่ลิงก์ไฟล์ PDF จริงในช่อง href
const forms = [
  { title: "ใบคำขอรับบริการ", href: "#" },
  { title: "ตัวอย่างการกรอกใบคำขอ", href: "#" },
  { title: "วิธีรักษาตัวอย่าง", href: "#" },
  { title: "ตัวอย่างใบรายงานผล (ไทย)", href: "#" },
  { title: "ใบรับข้อร้องเรียน", href: "#" },
];

const PdfIcon = () => (
  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h1.5a1.5 1.5 0 0 1 0 3H9zM9 13v6M15.5 13H14v6M14 16h1.5" />
    </svg>
  </span>
);

export default function FormDownloads() {
  return (
    <section id="form-downloads" className="bg-green-50/50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="flex items-center justify-center gap-2 text-3xl font-bold text-gray-700">
            <svg className="text-green-500" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            ดาวน์โหลดแบบฟอร์ม
          </h2>
          <p className="mt-3 text-gray-600">
            เอกสารและแบบฟอร์มที่จำเป็นสำหรับการส่งตัวอย่าง
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {forms.map((f) => (
            <a
              key={f.title}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-green-200"
            >
              <PdfIcon />
              <span className="text-base font-medium text-gray-700 group-hover:text-green-600">
                {f.title}
              </span>
              <svg className="ml-auto text-gray-300 transition-colors group-hover:text-green-500" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
