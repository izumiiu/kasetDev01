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
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
                    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79v8.44C19.61 23.1 24 18.1 24 12.07Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Line"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#06C755" aria-hidden="true">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
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
