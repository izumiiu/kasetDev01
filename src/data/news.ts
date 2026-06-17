export type NewsItem = {
  id: number;
  date: string; // YYYY-MM-DD
  title: string;
  excerpt: string;
  image: string;
  fbUrl: string; // ลิงก์โพสต์ Facebook ของข่าวนี้
};

const thaiMonthAbbr = [
  "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.",
  "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค.",
];

export function formatThaiDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { day: String(d).padStart(2, "0"), month: thaiMonthAbbr[m - 1], year: y };
}

const BASE = import.meta.env.BASE_URL;

// TODO: วางไฟล์รูปไว้ที่ public/news/ (เช่น public/news/idea-5.jpg) และใส่ลิงก์โพสต์ Facebook จริงใน fbUrl
const rawNews: NewsItem[] = [
  {
    id: 10,
    date: "2026-06-08",
    title: "เปิดกิจกรรมหลักสูตรเชฟอาหารไทยมืออาชีพ (Master Thai Chef Program)",
    excerpt:
      "วันที่ 8 มิถุนายน 2569 ได้รับเกียรติจาก ผศ.ดร.สมลักษณ์ วรรณฤมล กีเยลาโรว่า ผู้อำนวยการอุทยานวิทยาศาสตร์ฯ และคณะผู้บริหาร กล่าวเปิดกิจกรรมหลักสูตรเชฟอาหารไทยมืออาชีพ (Master Thai Chef Program) ภายใต้โครงการ หนึ่งหมู่บ้าน หนึ่งเชฟอาหารไทย",
    image: `${BASE}news/idea-10.png`,
    fbUrl: "https://www.facebook.com/share/p/18tP9FJzFd/",
  },
  {
    id: 9,
    date: "2026-05-30",
    title: "หลักสูตรเชฟอาหารไทยมืออาชีพ (Master Thai Chef Program)",
    excerpt:
      "วันที่ 30 พฤษภาคม 2569 ได้รับเกียรติจาก ผศ.ดร.จรูญ สารินทร์ รองอธิการบดีฝ่ายกิจการพิเศษ และคณะ กล่าวเปิดกิจกรรมหลักสูตรเชฟอาหารไทยมืออาชีพ พัฒนาทักษะด้านอาหารไทยผ่านกระบวนการ Up skill / Re-skill / New skill",
    image: `${BASE}news/idea-9.jpg`,
    fbUrl: "https://www.facebook.com/share/p/1CsYCWQsN8/",
  },
  {
    id: 8,
    date: "2026-04-30",
    title: "อบรมเชิงปฏิบัติการ Art of Baking: เปลี่ยนแป้งเป็นปัง",
    excerpt:
      "วันที่ 30 เมษายน 2569 IDEA เดินหน้าโครงการอบรมด้านอาหารและเครื่องดื่ม หัวข้อ Art of Baking: เปลี่ยนแป้งเป็นปัง เรียนรู้การทำ Kouign-amann และ New York CheeseCake โดยเชฟบอล กิตติภูมิ หาญพัฒนกิจพานิช",
    image: `${BASE}news/idea-8.png`,
    fbUrl: "https://www.facebook.com/share/p/1FgmirBPjT/",
  },
  {
    id: 7,
    date: "2026-04-29",
    title: "อบรม Train the Trainer Course: Sweet Start เริ่มต้นธุรกิจเบเกอรี่",
    excerpt:
      "วันที่ 29 เมษายน 2569 IDEA จัดกิจกรรมอบรมเชิงปฏิบัติการพัฒนาศักยภาพนิสิตเพื่อเตรียมตัวเป็นผู้ประกอบการธุรกิจอาหารและเครื่องดื่ม หัวข้อ Train the Trainer Course: Sweet Start (เมนู Butter cake, Shio Pan และ Bagel)",
    image: `${BASE}news/idea-7.png`,
    fbUrl: "https://www.facebook.com/share/p/18aqYo7mPA/",
  },
  {
    id: 6,
    date: "2026-04-24",
    title: "คณะดูงานจากสำนักงานพาณิชย์จังหวัดกาญจนบุรี เข้าศึกษาดูงาน IDEA",
    excerpt:
      "วันที่ 24 เม.ย. 69 ดร.เจษฎา วิชาพร นำคณะดูงานจากสำนักงานพาณิชย์จังหวัดกาญจนบุรี จำนวน 55 คน เข้าศึกษาดูงาน ณ อาคาร IDEA เพื่อเสริมสร้างความรู้และประสบการณ์แก่ผู้ประกอบการ วิสาหกิจชุมชน และหน่วยงานที่เกี่ยวข้อง",
    image: `${BASE}news/idea-6.jpg`,
    fbUrl: "https://www.facebook.com/share/p/1DFTvfYo65/",
  },
  {
    id: 5,
    date: "2026-02-03",
    title: "ต้อนรับคณะนักมาตรวิทยาจากสถาบันมาตรวิทยาแห่งชาติ เยี่ยมชมระบบ High Pressure",
    excerpt:
      "วันที่ 3 กุมภาพันธ์ 2569 ผศ.ดร.วรสิทธิ์ โทจำปา ให้การต้อนรับคุณลิขิต ใสหนู นักมาตรวิทยาชำนาญการพิเศษ และคณะ จากสถาบันมาตรวิทยาแห่งชาติ เข้าเยี่ยมชมอาคาร IDEA เพื่อสำรวจข้อมูลทางเทคนิคการใช้งานระบบ High Pressure ในอุตสาหกรรมแปรรูปอาหารด้วยความดันสูง",
    image: `${BASE}news/idea-5.jpg`,
    fbUrl: "https://www.facebook.com/",
  },
];

// เรียงจากข่าวล่าสุดไว้อันแรก
export const news: NewsItem[] = [...rawNews].sort(
  (a, b) => +new Date(b.date) - +new Date(a.date)
);
