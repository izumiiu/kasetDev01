export default function Footer() {
  return (
    <footer id="contact" className="border-t-4 border-orange-500 bg-gray-800 text-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 font-bold text-white">
                LOGO
              </div>
              <span className="text-lg font-semibold">ชื่อแบรนด์</span>
            </div>
            <p className="text-sm text-gray-400">
              คำอธิบายสั้น ๆ เกี่ยวกับองค์กรของคุณ (placeholder)
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-white">ติดต่อเรา</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-orange-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
                </svg>
                <span>www.AGI.NU.ac.th</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 shrink-0 text-orange-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  คณะเกษตรศาสตร์ ทรัพยากรธรรมชาติและสิ่งแวดล้อม
                  มหาวิทยาลัยนเรศวร 99 ม.9 ตำบลท่าโพธิ์ อำเภอเมือง
                  จังหวัดพิษณุโลก 65000
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 shrink-0 text-orange-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                <span>โทรศัพท์ 055-962710 Fax. 055-962709</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="mb-3 text-base font-semibold text-white">ติดตามเรา</h4>
              <div className="flex gap-3">
                <a href="#" aria-label="Facebook" className="rounded-full bg-gray-700 p-2 transition-colors hover:bg-green-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" aria-label="Line" className="rounded-full bg-gray-700 p-2 transition-colors hover:bg-green-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5c0-4.14-4.03-7.5-9-7.5s-9 3.36-9 7.5c0 3.71 3.2 6.82 7.52 7.41.29.06.69.2.79.45.09.23.06.59.03.82l-.13.77c-.04.23-.18.9.79.49 1.9-.8 5.2-3.06 7.1-5.24A6.67 6.67 0 0 0 21 11.5Z" />
                    <path d="M8 9.5v4M8 9.5l2.5 4v-4M14 9.5h-2v4h2M12 11.5h1.5M16 9.5v4h2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>


          {/* NU Map */}
          <div>
            <h3 className="mb-3 text-base font-semibold text-white">
              ค้นหาเส้นทางด้วย NU Map
            </h3>
            <div className="overflow-hidden rounded-xl ring-1 ring-gray-700">
              <iframe
                src="https://numap.nu.ac.th/"
                title="NU Map"
                loading="lazy"
                className="h-40 w-full border-0"
              />
              <a
                href="https://numap.nu.ac.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-gray-700 py-2 text-sm font-medium text-gray-100 transition-colors hover:bg-green-500"
              >
                เปิดแผนที่ NU Map
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ชื่อแบรนด์. สงวนลิขสิทธิ์.
        </div>
      </div>
    </footer>
  );
}
