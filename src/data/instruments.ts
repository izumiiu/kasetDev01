export type Instrument = {
  id: string;
  category: "pilot-plant" | "food-lab" | "marker-space";
  status: "พร้อมใช้งาน" | "ไม่พร้อมใช้งาน";
  image: string;
  tag: string;
  nameTh: string;
  nameEn: string;
  code: string;
  country: string;
  brand: string;
  principle: string; // รายละเอียดเครื่องมือ
  capability: string; // ความสามารถ
};

export const categories: Record<
  string,
  { title: string; subtitle: string; intro: string }
> = {
  "pilot-plant": {
    title: "IDEA PILOT PLANT",
    subtitle: "บริการสายการผลิตระดับโรงงานต้นแบบ",
    intro:
      "สายการผลิตผลิตภัณฑ์ผักผลไม้แปรรูปและเครื่องดื่มที่ได้มาตรฐาน รองรับการผลิตเพื่อพัฒนาผลิตภัณฑ์และการผลิตเชิงพาณิชย์ (OEM)",
  },
  "food-lab": {
    title: "IDEA FOOD LAB",
    subtitle: "ห้องปฏิบัติการวิเคราะห์และทดสอบ",
    intro:
      "บริการตรวจวิเคราะห์ ทดสอบคุณภาพทางด้านเคมี กายภาพ และจุลชีววิทยา ในผลผลิตทางเกษตรและอาหาร",
  },
  "marker-space": {
    title: "IDEA MAKER SPACE",
    subtitle: "พื้นที่และเครื่องมือสำหรับทดลองปฏิบัติจริง",
    intro:
      "บริการพื้นที่ / เครื่องมือ / อุปกรณ์ / ครัวทดลอง เพื่อให้ผู้ประกอบการและผู้สนใจได้ทดลองปฏิบัติจริง",
  },
};

// TODO: แทนที่ด้วยข้อมูลเครื่องมือจริง
export const instruments: Instrument[] = [
  {
    id: "gc-msms",
    category: "food-lab",
    status: "พร้อมใช้งาน",
    image: "https://placehold.co/400x300/22c55e/ffffff?text=GC-MS%2FMS",
    tag: "งานด้านเคมี",
    nameTh:
      "เครื่องวิเคราะห์แก๊สโครมาโทกราฟี-แมสสเปกโตรมิเตอร์ ชนิดทริปเปิลควอดรูโพล",
    nameEn:
      "Gas Chromatography–Triple Quadrupole Mass Spectrometer (GC–MS/MS)",
    code: "AC1",
    country: "Japan",
    brand: "SHIMADZU / GCMS-TQ8050NX",
    principle:
      "เป็นเครื่องมือวิเคราะห์ที่ผสานเทคนิคแก๊สโครมาโทกราฟีเข้ากับแมสสเปกโตรมิเตอร์ชนิดทริปเปิลควอดรูโพล (GC–MS/MS) ซึ่งให้ความไวและความจำเพาะสูง เหมาะสำหรับการวิเคราะห์สารในระดับความเข้มข้นต่ำมาก ใช้เทคโนโลยีลดสัญญาณรบกวนและเพิ่มความไวของสัญญาณ ช่วยให้ผลการวิเคราะห์มีความเสถียร ความแม่นยำ และความเชื่อถือได้สูง",
    capability:
      "เครื่อง GC–MS/MS เหมาะสำหรับการวิเคราะห์สารประกอบอินทรีย์ที่ระเหยง่าย (Volatile Organic Compounds; VOCs) และสารที่ระเหยกึ่ง (Semi-Volatile Organic Compounds; SVOCs) โดยอาศัยการแยกสารด้วยเทคนิคแก๊สโครมาโทกราฟีร่วมกับการตรวจวัดมวลของสารด้วยแมสสเปกโตรมิเตอร์ ระบบสามารถระบุชนิดและหาปริมาณของสารได้อย่างแม่นยำ โดยเปรียบเทียบรูปแบบการแตกตัวของสารกับฐานข้อมูลมาตรฐาน ทำให้สามารถประยุกต์ใช้ในการวิเคราะห์ได้ทั้งเชิงคุณภาพและเชิงปริมาณ เหมาะสำหรับงานวิเคราะห์สารตกค้าง เช่น ยาฆ่าแมลง สารเสพติด สารปนเปื้อนในอาหารและสิ่งแวดล้อม รวมถึงผลิตภัณฑ์ทางธรรมชาติหลากหลายชนิด",
  },
  {
    id: "hplc",
    category: "food-lab",
    status: "พร้อมใช้งาน",
    image: "https://placehold.co/400x300/16a34a/ffffff?text=HPLC",
    tag: "งานด้านเคมี",
    nameTh: "เครื่องโครมาโทกราฟีของเหลวสมรรถนะสูง",
    nameEn: "High Performance Liquid Chromatography (HPLC)",
    code: "AC2",
    country: "Japan",
    brand: "SHIMADZU / LC-2030",
    principle: "รายละเอียดหลักการของเครื่องมือ (placeholder) แก้ไขได้ภายหลัง",
    capability: "รายละเอียดความสามารถของเครื่องมือ (placeholder) แก้ไขได้ภายหลัง",
  },
  {
    id: "texture-analyzer",
    category: "food-lab",
    status: "พร้อมใช้งาน",
    image: "https://placehold.co/400x300/f97316/ffffff?text=Texture",
    tag: "งานด้านกายภาพ",
    nameTh: "เครื่องวัดเนื้อสัมผัส",
    nameEn: "Texture Analyzer",
    code: "AC3",
    country: "UK",
    brand: "Stable Micro Systems / TA.XTplus",
    principle: "รายละเอียดหลักการของเครื่องมือ (placeholder) แก้ไขได้ภายหลัง",
    capability: "รายละเอียดความสามารถของเครื่องมือ (placeholder) แก้ไขได้ภายหลัง",
  },
  {
    id: "incubator",
    category: "food-lab",
    status: "ไม่พร้อมใช้งาน",
    image: "https://placehold.co/400x300/374151/ffffff?text=Incubator",
    tag: "งานด้านจุลชีววิทยา",
    nameTh: "ตู้บ่มเชื้อ",
    nameEn: "Incubator",
    code: "AC4",
    country: "Germany",
    brand: "Memmert / IN55",
    principle: "รายละเอียดหลักการของเครื่องมือ (placeholder) แก้ไขได้ภายหลัง",
    capability: "รายละเอียดความสามารถของเครื่องมือ (placeholder) แก้ไขได้ภายหลัง",
  },
  {
    id: "pasteurizer",
    category: "pilot-plant",
    status: "พร้อมใช้งาน",
    image: "https://placehold.co/400x300/22c55e/ffffff?text=Pasteurizer",
    tag: "งานแปรรูป",
    nameTh: "เครื่องพาสเจอร์ไรซ์",
    nameEn: "Pasteurizer",
    code: "PP1",
    country: "Thailand",
    brand: "Model PZ-100",
    principle: "รายละเอียดหลักการของเครื่องมือ (placeholder) แก้ไขได้ภายหลัง",
    capability: "รายละเอียดความสามารถของเครื่องมือ (placeholder) แก้ไขได้ภายหลัง",
  },
  {
    id: "hpp",
    category: "pilot-plant",
    status: "ไม่พร้อมใช้งาน",
    image: "https://placehold.co/400x300/f97316/ffffff?text=HPP",
    tag: "งานแปรรูป",
    nameTh: "เครื่องแปรรูปด้วยความดันสูง",
    nameEn: "High Pressure Processing (HPP)",
    code: "PP2",
    country: "Spain",
    brand: "Hiperbaric 55",
    principle: "รายละเอียดหลักการของเครื่องมือ (placeholder) แก้ไขได้ภายหลัง",
    capability: "รายละเอียดความสามารถของเครื่องมือ (placeholder) แก้ไขได้ภายหลัง",
  },
  {
    id: "test-kitchen",
    category: "marker-space",
    status: "พร้อมใช้งาน",
    image: "https://placehold.co/400x300/16a34a/ffffff?text=Test+Kitchen",
    tag: "พื้นที่ทดลอง",
    nameTh: "ครัวทดลอง",
    nameEn: "Test Kitchen",
    code: "MS1",
    country: "-",
    brand: "Standard",
    principle: "รายละเอียดหลักการของพื้นที่/เครื่องมือ (placeholder) แก้ไขได้ภายหลัง",
    capability: "รายละเอียดความสามารถ (placeholder) แก้ไขได้ภายหลัง",
  },
  {
    id: "vacuum-dryer",
    category: "marker-space",
    status: "พร้อมใช้งาน",
    image: "https://placehold.co/400x300/374151/ffffff?text=Vacuum+Dryer",
    tag: "พื้นที่ทดลอง",
    nameTh: "เครื่องอบแห้งสุญญากาศ",
    nameEn: "Vacuum Dryer",
    code: "MS2",
    country: "Thailand",
    brand: "Model VD-30",
    principle: "รายละเอียดหลักการของเครื่องมือ (placeholder) แก้ไขได้ภายหลัง",
    capability: "รายละเอียดความสามารถของเครื่องมือ (placeholder) แก้ไขได้ภายหลัง",
  },
];
