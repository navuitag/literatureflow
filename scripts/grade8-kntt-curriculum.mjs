/**
 * Chương trình Ngữ văn lớp 8 — SGK Kết nối tri thức với cuộc sống.
 */
import { buildUnits, theme } from "./kntt-secondary-shared.mjs";

const BOOK_T1 = "Ngữ văn 8 — Kết nối tri thức · Tập 1";
const BOOK_T2 = "Ngữ văn 8 — Kết nối tri thức · Tập 2";

const TAP1 = [
  theme("g8_t1_history", "Tập 1 · Lịch sử và văn hóa dân tộc", 1, BOOK_T1, [
    [1, "Câu chuyện của lịch sử", "unit", "Lá cờ thêu sáu chữ vàng", "Tự hào lịch sử dân tộc Việt Nam."],
    [2, "Vẻ đẹp cổ điển", "poetry", "Thiên Trường vãn vọng", "Thơ Đường luật, thất ngôn bát cú."],
    [3, "Lời sông núi", "poetry", "Nam quốc sơn hà", "Tinh thần yêu nước qua thi ca."],
    [4, "Tiếng cười trào phúng trong thơ", "poetry", "Lễ xướng danh khoa Đinh Dậu", "Thơ trào phúng phê phán hiện thực."],
    [5, "Những câu chuyện hài", "unit", "Trưởng giả học làm sang", "Hài hước, phê phán thói xấu xã hội."]
  ]),
  theme("g8_t1_review", "Ôn tập học kì 1", 2, BOOK_T1, [
    [1, "Ôn tập học kì 1", "review", "", "Củng cố đọc, viết, nói-nghe, THVN HK1."]
  ])
];

const TAP2 = [
  theme("g8_t2_life", "Tập 2 · Cuộc sống, tương lai và sách", 1, BOOK_T2, [
    [6, "Chân dung cuộc sống", "unit", "Lặng lẽ Sa Pa", "Phân tích truyện ngắn hiện đại."],
    [7, "Tin yêu và ước vọng", "poetry", "Những ngôi sao xa xôi", "Thơ tự do và khát vọng tuổi trẻ."],
    [8, "Nhà văn và trang viết", "unit", "Nhà thơ của quê hương làng cảnh Việt Nam", "Vai trò văn học trong đời sống."],
    [9, "Hôm nay và ngày mai", "media", "Dấu chân sinh thái", "Văn bản đa phương tiện, môi trường."],
    [10, "Sách – người bạn đồng hành", "unit", "Đọc như một hành trình", "Văn hóa đọc và sáng tạo với sách."]
  ]),
  theme("g8_t2_review", "Ôn tập học kì 2", 2, BOOK_T2, [
    [1, "Ôn tập học kì 2", "review", "", "Củng cố đọc, viết, nói-nghe, THVN HK2."]
  ])
];

export function getGrade8Units() {
  return [...buildUnits(TAP1, "lv8"), ...buildUnits(TAP2, "lv8")];
}

export const GRADE8_META = { source: "SGK Ngữ văn 8 KNT.", lessons: 10, reviewBlocks: 2 };
