/**
 * Chương trình Ngữ văn lớp 7 — SGK Kết nối tri thức với cuộc sống.
 */
import { buildUnits, theme } from "./kntt-secondary-shared.mjs";

const BOOK_T1 = "Ngữ văn 7 — Kết nối tri thức · Tập 1";
const BOOK_T2 = "Ngữ văn 7 — Kết nối tri thức · Tập 2";

const TAP1 = [
  theme("g7_t1_childhood", "Tập 1 · Tuổi thơ và đất nước", 1, BOOK_T1, [
    [1, "Bầu trời tuổi thơ", "unit", "Bầy chim chìa vôi", "Cảm nhận vẻ đẹp tuổi thơ qua văn học."],
    [2, "Khúc nhạc tâm hồn", "poetry", "Đồng dao mùa xuân", "Thơ ca dao và cảm xúc tâm hồn."],
    [3, "Cội nguồn yêu thương", "unit", "Người thầy đầu tiên", "Biết ơn thầy cô, tình cảm gia đình."],
    [4, "Giai điệu đất nước", "poetry", "Mùa xuân nho nhỏ", "Tình yêu Tổ quốc qua thi ca."],
    [5, "Màu sắc trăm miền", "unit", "Tháng Giêng, mơ về trăng non rét ngọt", "Văn hóa truyền thống các vùng miền."]
  ]),
  theme("g7_t1_review", "Ôn tập học kì 1", 2, BOOK_T1, [
    [1, "Ôn tập học kì 1", "review", "", "Củng cố đọc, viết, nói-nghe, THVN HK1."]
  ])
];

const TAP2 = [
  theme("g7_t2_life", "Tập 2 · Bài học cuộc sống và tri thức", 1, BOOK_T2, [
    [6, "Bài học cuộc sống", "unit", "Đẽo cày giữa đường", "Bài học từ truyện ngụ ngôn, tục ngữ."],
    [7, "Thế giới viễn tưởng", "unit", "Cuộc chạm trán trên đại dương", "Khoa học viễn tưởng và trí tưởng tượng."],
    [8, "Trải nghiệm để trưởng thành", "unit", "Bản đồ dẫn đường", "Trưởng thành qua trải nghiệm thực tế."],
    [9, "Hòa điệu với tự nhiên", "unit", "Thuỷ tiên tháng Một", "Bảo vệ thiên nhiên, văn hóa dân tộc."],
    [10, "Trang sách và cuộc sống", "unit", "Chinh phục những cuốn sách mới", "Văn học gắn với cuộc sống, văn hóa đọc."]
  ]),
  theme("g7_t2_review", "Ôn tập học kì 2", 2, BOOK_T2, [
    [1, "Ôn tập học kì 2", "review", "", "Củng cố đọc, viết, nói-nghe, THVN HK2."]
  ])
];

export function getGrade7Units() {
  return [...buildUnits(TAP1, "lv7"), ...buildUnits(TAP2, "lv7")];
}

export const GRADE7_META = { source: "SGK Ngữ văn 7 KNT.", lessons: 10, reviewBlocks: 2 };
