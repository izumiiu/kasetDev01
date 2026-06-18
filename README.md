# IDEA NU — เว็บไซต์ Food@NU

เว็บไซต์ของ **อาคารนวัตกรรมเทคโนโลยีการแปรรูปผลผลิตทางเกษตรและอาหาร (IDEA / FoodInnopolis @NU)**
ภาควิชาอุตสาหกรรมเกษตร คณะเกษตรศาสตร์ ทรัพยากรธรรมชาติและสิ่งแวดล้อม มหาวิทยาลัยนเรศวร

พัฒนาด้วย React + TypeScript + Vite + Tailwind CSS

---

## สิ่งที่ต้องมีก่อนรัน (Requirements)

- **Node.js เวอร์ชัน 20 ขึ้นไป** (แนะนำ 20 LTS หรือ 22) — ดาวน์โหลดที่ https://nodejs.org
  ตัว Node มาพร้อม `npm` อยู่แล้ว ไม่ต้องติดตั้งเพิ่ม
- ตรวจเวอร์ชันได้ด้วยคำสั่ง:

  ```bash
  node -v
  npm -v
  ```

---

## วิธีรันโปรเจกต์ (Getting Started)

เปิด terminal ที่โฟลเดอร์โปรเจกต์ (โฟลเดอร์ที่มีไฟล์ `package.json`) แล้วทำตามลำดับ:

### 1. ติดตั้ง dependency (ทำครั้งเดียวหลังได้โค้ดมา)

```bash
npm install
```

### 2. รันแบบ development (สำหรับแก้ไข/ดูผลแบบ live)

```bash
npm run dev
```

เปิดเบราว์เซอร์ไปที่ URL ที่ขึ้นใน terminal (ปกติคือ `http://localhost:5173/kasetDev01/`)
แก้ไฟล์ใน `src/` แล้วหน้าเว็บจะอัปเดตอัตโนมัติ (Hot Reload)

### 3. Build เวอร์ชัน production และดูผล

```bash
npm run build      # สร้างไฟล์เว็บที่ใช้งานจริงไว้ในโฟลเดอร์ dist/
npm run preview    # เปิดดูเวอร์ชันที่ build แล้ว
```

### คำสั่งอื่น

```bash
npm run lint       # ตรวจคุณภาพโค้ดด้วย ESLint
```

---

## โครงสร้างโปรเจกต์

```
kasettest001/
├─ public/             ← รูปภาพและไฟล์ static (committee/, idea-services/, hero/, news/, structure/, staff/, logo.png ฯลฯ)
├─ src/
│  ├─ components/      ← คอมโพเนนต์ทั้งหมด (Navbar, HeroSlide, Service, Footer, หน้าต่างๆ)
│  ├─ data/            ← ข้อมูลที่ใช้ร่วมกัน (instruments.ts, news.ts)
│  ├─ App.tsx          ← จัดการ routing ของหน้าต่างๆ (ใช้ hash routing)
│  └─ main.tsx         ← จุดเริ่มต้นของแอป
├─ index.html
├─ vite.config.ts      ← ตั้งค่า Vite (ดูหมายเหตุเรื่อง base ด้านล่าง)
├─ tailwind.config.js
├─ package.json        ← รายการ dependency และ scripts
└─ package-lock.json   ← ล็อกเวอร์ชัน dependency (ห้ามลบ — ทำให้ทุกเครื่องติดตั้งเหมือนกัน)
```

---

## หมายเหตุสำคัญ ⚠️

**1. ค่า `base` ใน `vite.config.ts`**

ตอนนี้ตั้งไว้เป็น `base: '/kasetDev01/'` เพื่อให้ deploy ขึ้น GitHub Pages ของ repo ชื่อ `kasetDev01` ได้ถูกต้อง

- ถ้ารัน `npm run dev` / `npm run build` บนเครื่องตัวเอง — **ใช้งานได้ปกติ ไม่ต้องแก้**
- ถ้าจะ **deploy ขึ้น GitHub Pages ในชื่อ repo อื่น** ต้องแก้ค่านี้ให้ตรงกับชื่อ repo ใหม่ (เช่น `base: '/ชื่อ-repo-ใหม่/'`) ไม่งั้นรูปและลิงก์จะแสดงผิด

**2. เรื่องรูปภาพ**

รูปทั้งหมดอยู่ในโฟลเดอร์ `public/` และอ้างอิงผ่าน `import.meta.env.BASE_URL` รูปบางส่วนที่ยังไม่มีไฟล์ (เช่น `public/staff/`, `public/committee/9-11.jpg`) จะแสดงไอคอนแทนโดยอัตโนมัติ เมื่อนำไฟล์รูปมาวางตามชื่อที่กำหนด รูปจะขึ้นเอง

**3. ห้ามส่ง `node_modules/` และ `dist/`**

สองโฟลเดอร์นี้ถูกตั้งค่าให้ git ไม่เก็บไว้แล้ว (อยู่ใน `.gitignore`) ถ้าส่งงานแบบ zip ให้ลบสองโฟลเดอร์นี้ออกก่อนบีบอัด แล้วผู้รับรัน `npm install` เพื่อสร้างใหม่

---

## เทคโนโลยีที่ใช้

| ส่วน | เครื่องมือ |
|------|-----------|
| UI Framework | React 19 + TypeScript |
| Build tool | Vite |
| CSS | Tailwind CSS v3 |
| ฟอนต์ | Noto Sans Thai |
| Routing | Hash-based routing (เขียนเองใน `App.tsx`) |
| Deploy | GitHub Pages (GitHub Actions) |
