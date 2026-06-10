import { useEffect, useState } from "react";

const contactTypes = [
  "สายตรงผู้บริหาร",
  "ติดต่อสอบถามด้านงานบริการ",
  "ติดต่อข้อมูลด้านอาหาร",
  "แจ้งขอร้องเรียน",
];

const infoItems = [
  {
    label: "ที่ตั้งอาคาร",
    value:
      "อาคารนวัตกรรมและเทคโนโลยีการแปรรูปผลผลิตทางเกษตรและอาหาร (IDEA) คณะเกษตรศาสตร์ ทรัพยากรธรรมชาติและสิ่งแวดล้อม มหาวิทยาลัยนเรศวร อ.เมือง จ.พิษณุโลก 65000",
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    label: "วันเวลาทำการ",
    value: "จันทร์ – ศุกร์ เวลา 08.30 – 16.30 น. (เว้นวันหยุดราชการ)",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    label: "เบอร์โทรติดต่อ",
    value: "0-5596-XXXX",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    ),
  },
  {
    label: "E-mail",
    value: "idea@nu.ac.th",
    icon: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
  {
    label: "Facebook",
    value: "IDEA Naresuan University",
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    label: "Line",
    value: "@idea-nu",
    icon: (
      <>
        <path d="M21 11.5c0-4.14-4.03-7.5-9-7.5s-9 3.36-9 7.5c0 3.71 3.2 6.82 7.52 7.41.29.06.69.2.79.45.09.23.06.59.03.82l-.13.77c-.04.23-.18.9.79.49s5.2-3.06 7.1-5.24h0A6.67 6.67 0 0 0 21 11.5Z" />
      </>
    ),
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(contactTypes[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: เชื่อมต่อ backend/อีเมลจริงภายหลัง
    setSent(true);
  };

  return (
    <main className="bg-green-50/40">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-700 md:text-4xl">ติดต่อสอบถาม</h1>
          <p className="mt-2 text-gray-600">
            ช่องทางการติดต่อและแบบฟอร์มสำหรับสอบถามข้อมูลกับทาง IDEA
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
            <h2 className="mb-5 text-xl font-semibold text-gray-700">ข้อมูลการติดต่อ</h2>
            <ul className="space-y-5">
              {infoItems.map((item) => (
                <li key={item.label} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {item.icon}
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">{item.label}</div>
                    <div className="text-sm leading-relaxed text-gray-600">{item.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
            <h2 className="mb-5 text-xl font-semibold text-gray-700">แบบฟอร์มติดต่อ</h2>

            {sent ? (
              <div className="rounded-xl bg-green-50 p-6 text-center ring-1 ring-green-200">
                <p className="font-semibold text-gray-700">ส่งข้อมูลเรียบร้อยแล้ว</p>
                <p className="mt-1 text-sm text-gray-600">
                  ขอบคุณที่ติดต่อเรา ทีมงานจะติดต่อกลับโดยเร็วที่สุด
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setName("");
                    setEmail("");
                    setType(contactTypes[0]);
                    setMessage("");
                  }}
                  className="mt-4 rounded-lg border border-green-500 px-5 py-2 text-sm font-medium text-green-600 hover:bg-green-50"
                >
                  ส่งข้อความใหม่
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    ชื่อ-นามสกุล
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="กรอกชื่อ-นามสกุลของคุณ"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    อีเมล
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    เรื่องที่ต้องการติดต่อ
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  >
                    {contactTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-700">
                    ข้อความ
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="กรอกรายละเอียดหรือข้อความที่ต้องการติดต่อ"
                    className="w-full resize-y rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600"
                >
                  ส่งข้อมูล
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
