import { useEffect } from "react";

const BASE = import.meta.env.BASE_URL;

type Member = {
  name: string;
  role: string;
  sub?: string;
  image: string;
  phone?: string;
  email?: string;
};

// TODO: วางรูปไว้ที่ public/committee/ (เช่น 1.jpg) — ที่ยังไม่มีรูปจะแสดงไอคอนแทน
const board: Member[] = [
  { name: "ดร.เจษฎา วิชาพร", role: "ประธาน", image: `${BASE}committee/1.jpg` },
  { name: "รองศาสตราจารย์ ดร.นิติพงศ์ จิตรีโภชน์", role: "รองประธาน", image: `${BASE}committee/2.jpg` },
  { name: "รองศาสตราจารย์ ดร.เหรียญทอง สิงห์จานุสงค์", role: "กรรมการ", image: `${BASE}committee/3.jpg` },
  { name: "ผู้ช่วยศาสตราจารย์ ดร.วรสิทธิ์ โทจำปา", role: "กรรมการ", image: `${BASE}committee/4.jpg` },
  { name: "ผู้ช่วยศาสตราจารย์ ดร.อาภรณ์ จรัญรัตนศรี", role: "กรรมการ", image: `${BASE}committee/5.jpg` },
  { name: "นายทรงวุฒิ ทิอ่อน", role: "กรรมการ", image: `${BASE}committee/6.jpg` },
  { name: "นางสาวภิรนิตย์ ลบลม", role: "กรรมการ", image: `${BASE}committee/7.jpg` },
  { name: "นายนิวัฒน์ ศักดิ์ดาเดช", role: "กรรมการ", image: `${BASE}committee/8.jpg` },
  { name: "นางสาวปิยพร ศิริคง", role: "กรรมการและเลขานุการ", image: `${BASE}committee/9.jpg` },
  { name: "นางสาววนัชพร ชำนาญช่าง", role: "กรรมการและผู้ช่วยเลขานุการ", image: `${BASE}committee/10.jpg` },
  { name: "นายธีรพงศ์ พรมจันทร์", role: "กรรมการและผู้ช่วยเลขานุการ", image: `${BASE}committee/11.jpg` },
];

const advisors: Member[] = [
  { name: "คณบดีคณะเกษตรศาสตร์ ทรัพยากรธรรมชาติและสิ่งแวดล้อม", sub: "(ผู้ช่วยศาสตราจารย์ ดร.ชนินทร์ อัมพรสถิร)", role: "ที่ปรึกษา", image: `${BASE}committee/a1.jpg` },
  { name: "รองคณบดีฝ่ายวิชาการ", sub: "(รองศาสตราจารย์ ดร.ธนัชสัณห์ พูนไพบูลย์พิพิพัฒน์)", role: "ที่ปรึกษา", image: `${BASE}committee/a2.jpg` },
  { name: "หัวหน้าภาควิชาอุตสาหกรรมเกษตร", sub: "(รองศาสตราจารย์ ดร.ทิพวรรณ ทองสุข)", role: "ที่ปรึกษา", image: `${BASE}committee/a3.jpg` },
];

// บุคลากรประจำตึก — วางรูปไว้ที่ public/staff/ (เช่น 1.jpg) — ที่ยังไม่มีรูปจะแสดงไอคอนแทน
const staff: Member[] = [
  {
    name: "นางสาวปิยพร ศิริคง",
    role: "นักวิทยาศาสตร์ (Food Pilot Plant)",
    phone: "089 437 9321",
    email: "piyaporns@nu.ac.th",
    image: `${BASE}staff/1.jpg`,
  },
  {
    name: "นางสาววนัชพร ชำนาญช่าง",
    role: "นักวิทยาศาสตร์ (Future Food Lab)",
    phone: "088 159 2565",
    email: "wanatchapornc@nu.ac.th",
    image: `${BASE}staff/2.jpg`,
  },
  {
    name: "นายธีรพงศ์ พรมจันทร์",
    role: "ผู้ปฏิบัติงานโภชนาการ (Food Maker Space)",
    phone: "095 292 9179",
    email: "theerapongp@nu.ac.th",
    image: `${BASE}staff/3.jpg`,
  },
];

function Card({ m }: { m: Member }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-shadow hover:shadow-md">
      <div className="relative aspect-square bg-gradient-to-br from-green-50 to-gray-100">
        {/* fallback icon */}
        <svg
          className="absolute inset-0 m-auto h-16 w-16 text-gray-300"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <img
          src={m.image}
          alt={m.name}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-sm font-semibold text-gray-800">{m.name}</h3>
        {m.sub && <p className="mt-0.5 text-xs text-gray-500">{m.sub}</p>}
        <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-0.5 text-xs font-medium text-green-600">
          {m.role}
        </span>
        {(m.phone || m.email) && (
          <div className="mt-3 space-y-1 text-xs text-gray-600">
            {m.phone && (
              <div className="flex items-center justify-center gap-1.5">
                <svg className="shrink-0 text-orange-500" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                <span>{m.phone}</span>
              </div>
            )}
            {m.email && (
              <div className="flex items-center justify-center gap-1.5">
                <svg className="shrink-0 text-orange-500" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href={`mailto:${m.email}`} className="break-all hover:text-green-600">{m.email}</a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CommitteePage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main className="bg-green-50/40">
      {/* Header banner */}
      <div className="border-b-4 border-orange-500 bg-gradient-to-br from-green-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <a href="#home" className="text-sm font-medium text-green-600 hover:text-green-700">
            ← กลับหน้าหลัก
          </a>
          <span className="mt-3 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
            เกี่ยวกับเรา
          </span>
          <h1 className="mt-3 text-3xl font-bold text-gray-700 md:text-4xl">
            คณะกรรมการดำเนินงานและบุคลากรตึก
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <section>
          <h2 className="mb-6 text-xl font-bold text-gray-700">คณะกรรมการดำเนินงาน</h2>
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {board.map((m) => (
              <Card key={m.name} m={m} />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-xl font-bold text-gray-700">คณะกรรมการที่ปรึกษา</h2>
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {advisors.map((m) => (
              <Card key={m.name} m={m} />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-xl font-bold text-gray-700">บุคลากรตึก</h2>
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {staff.map((m) => (
              <Card key={m.name} m={m} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
