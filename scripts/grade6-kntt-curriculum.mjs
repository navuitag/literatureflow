/**
 * Chương trình Ngữ văn lớp 6 — SGK Kết nối tri thức với cuộc sống.
 * 10 bài học + 2 ôn tập (Tập 1: Bài 1–5 · Tập 2: Bài 6–10)
 */
import { buildUnits, theme } from "./kntt-secondary-shared.mjs";

const BOOK_T1 = "Ngữ văn 6 — Kết nối tri thức · Tập 1";
const BOOK_T2 = "Ngữ văn 6 — Kết nối tri thức · Tập 2";

const TAP1 = [
  theme("g6_t1_friends", "Tập 1 · Chủ đề bạn bè và trưởng thành", 1, BOOK_T1, [
    [1, "Tôi và các bạn", "unit", "Bài học đường đời đầu tiên", "Tình bạn chân thành, đồng hành trong học tập."],
    [2, "Gõ cửa trái tim", "unit", "Chuyện cổ tích về loài người", "Yêu thương, chia sẻ trong gia đình."],
    [3, "Yêu thương và chia sẻ", "unit", "Cô bé bán diêm", "Lòng nhân hậu, quan tâm người khó khăn."],
    [4, "Quê hương yêu dấu", "poetry", "Chùm ca dao về quê hương đất nước", "Tình yêu quê hương, đất nước."],
    [5, "Những nẻo đường xứ sở", "unit", "Cửu Long Giang ta ơi", "Khám phá vẻ đẹp các vùng miền."]
  ]),
  theme("g6_t1_review", "Ôn tập học kì 1", 2, BOOK_T1, [
    [1, "Ôn tập học kì 1", "review", "", "Củng cố đọc, viết, nói-nghe, THVN HK1."]
  ])
];

const TAP2 = [
  theme("g6_t2_heroes", "Tập 2 · Anh hùng, cổ tích và cộng đồng", 1, BOOK_T2, [
    [6, "Chuyện kể về những người anh hùng", "unit", "Sơn Tinh, Thủy Tinh", "Tinh thần yêu nước, sức mạnh ý chí con người."],
    [7, "Thế giới cổ tích", "unit", "Truyện cổ tích", "Giá trị nhân văn qua truyện cổ tích."],
    [8, "Khác biệt và gần gũi", "unit", "Xem người ta kìa!", "Tôn trọng sự khác biệt, sống hòa nhập."],
    [9, "Trái Đất - ngôi nhà chung", "unit", "Trái Đất - cái nôi của sự sống", "Bảo vệ môi trường, sống hài hòa với thiên nhiên."],
    [10, "Cuốn sách tôi yêu", "unit", "Mỗi ngày một cuốn sách", "Yêu sách, đọc sách mở rộng tri thức."]
  ]),
  theme("g6_t2_review", "Ôn tập học kì 2", 2, BOOK_T2, [
    [1, "Ôn tập học kì 2", "review", "", "Củng cố đọc, viết, nói-nghe, THVN HK2."]
  ])
];

export function getGrade6Units() {
  return [...buildUnits(TAP1, "lv6"), ...buildUnits(TAP2, "lv6")];
}

export const GRADE6_META = {
  source: "Bám sát SGK Ngữ văn 6 — Kết nối tri thức với cuộc sống (Tập 1 & Tập 2).",
  lessons: 10,
  reviewBlocks: 2
};
