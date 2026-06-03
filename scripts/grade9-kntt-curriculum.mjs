/**
 * Chương trình Ngữ văn lớp 9 — SGK Kết nối tri thức với cuộc sống.
 */
import { buildUnits, theme } from "./kntt-secondary-shared.mjs";

const BOOK_T1 = "Ngữ văn 9 — Kết nối tri thức · Tập 1";
const BOOK_T2 = "Ngữ văn 9 — Kết nối tri thức · Tập 2";

const TAP1 = [
  theme("g9_t1_fantasy", "Tập 1 · Văn học và cảm xúc con người", 1, BOOK_T1, [
    [1, "Thế giới kì ảo", "unit", "Chuyện người con gái Nam Xương", "Con người trong mối quan hệ với tự nhiên."],
    [2, "Những cung bậc tâm trạng", "poetry", "Tiếng đàn mưa", "Thơ song thất lục bát, cảm xúc nội tâm."],
    [3, "Hồn nước nằm trong tiếng mẹ cha", "unit", "Kim - Kiều gặp gỡ", "Di sản văn học dân tộc, Truyện Kiều."],
    [4, "Khám phá vẻ đẹp văn chương", "unit", "Người con gái Nam Xương - một bi kịch của con người", "Phân tích tác phẩm văn học."],
    [5, "Đối diện với nỗi đau", "drama", "Rô-mê-ô và Giu-li-ét", "Bi kịch, kịch và nghệ thuật sân khấu."]
  ]),
  theme("g9_t1_review", "Ôn tập học kì 1", 2, BOOK_T1, [
    [1, "Ôn tập học kì 1", "review", "", "Củng cố đọc, viết, nói-nghe, THVN HK1."]
  ])
];

const TAP2 = [
  theme("g9_t2_world", "Tập 2 · Tri thức, lương tri và văn học", 1, BOOK_T2, [
    [6, "Giải mã những bí mật", "unit", "Ba chàng sinh viên", "Truyện trinh thám, sáng tạo kể chuyện."],
    [7, "Hồn thơ muôn điệu", "poetry", "Tiếng Việt", "Thơ tám chữ, vẻ đẹp ngôn ngữ Việt."],
    [8, "Tiếng nói của lương tri", "unit", "Đấu tranh cho một thế giới hòa bình", "Nghị luận xã hội, trách nhiệm công dân."],
    [9, "Đi và suy ngẫm", "unit", "Yên Tử, núi thiêng", "Thuyết minh di tích, danh lam thắng cảnh."],
    [10, "Văn học - lịch sử tâm hồn", "unit", "Đọc để trưởng thành", "Văn hóa đọc, dự án văn học tổng hợp."]
  ]),
  theme("g9_t2_review", "Ôn tập học kì 2", 2, BOOK_T2, [
    [1, "Ôn tập học kì 2", "review", "", "Củng cố đọc, viết, nói-nghe, THVN HK2."]
  ])
];

export function getGrade9Units() {
  return [...buildUnits(TAP1, "lv9"), ...buildUnits(TAP2, "lv9")];
}

export const GRADE9_META = { source: "SGK Ngữ văn 9 KNT.", lessons: 10, reviewBlocks: 2 };
