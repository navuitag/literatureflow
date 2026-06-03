/**
 * Chương trình Tiếng Việt lớp 3 — SGK Kết nối tri thức với cuộc sống.
 * Tập 1: 32 bài + 2 ôn tập · Tập 2: 30 bài + 2 ôn tập
 */
import { buildUnits, theme } from "./kntt-primary-shared.mjs";

const BOOK_T1 = "Tiếng Việt 3 — Kết nối tri thức · Tập 1";
const BOOK_T2 = "Tiếng Việt 3 — Kết nối tri thức · Tập 2";

const TAP1_THEMES = [
  theme("g3_t1_exp", "Chủ điểm 1: Những trải nghiệm thú vị", 1, BOOK_T1, [
    [1, "Ngày gặp lại", "poetry", "Niềm vui gặp lại bạn bè sau hè."],
    [2, "Về thăm quê", "poetry", "Tình yêu quê hương, nơi có ông bà."],
    [3, "Cánh rừng trong nắng", "read", "Vẻ đẹp thiên nhiên rừng núi."],
    [4, "Lần đầu ra biển", "read", "Trải nghiệm mới mở rộng hiểu biết."],
    [5, "Nhật kí tập bơi", "read", "Kiên trì luyện tập sẽ tiến bộ."],
    [6, "Tập nấu ăn", "read", "Học làm việc nhà, giúp gia đình."],
    [7, "Mùa hè lấp lánh", "poetry", "Kỉ niệm tuổi thơ trong mùa hè."],
    [8, "Tạm biệt mùa hè", "poetry", "Chuẩn bị tinh thần vào năm học mới."]
  ]),
  theme("g3_t1_school", "Chủ điểm 2: Cổng trường mở rộng", 2, BOOK_T1, [
    [9, "Đi học vui sao", "poetry", "Yêu trường, yêu lớp, yêu học hành."],
    [10, "Con đường đến trường", "read", "Con đường gắn với kỉ niệm tuổi thơ."],
    [11, "Lời giải toán đặc biệt", "read", "Sáng tạo trong học tập."],
    [12, "Bài tập làm văn", "writing", "Luyện viết đoạn văn ngắn."],
    [13, "Bài tay cô giáo", "read", "Biết ơn công lao thầy cô."],
    [14, "Cuộc họp của chữ viết", "grammar", "Hiểu vai trò chữ cái trong tiếng Việt."],
    [15, "Thư viện", "info", "Thư viện là nơi khám phá tri thức."],
    [16, "Ngày em vào Đội", "read", "Tự hào là đội viên Đội TNTP HCM."]
  ]),
  theme("g3_t1_review_mid", "Ôn tập giữa học kì 1", 3, BOOK_T1, [
    [1, "Ôn tập giữa học kì 1", "review", "Củng cố đọc, viết, LTVC HK1."]
  ]),
  theme("g3_t1_family", "Chủ điểm 3: Mái nhà yêu thương", 4, BOOK_T1, [
    [17, "Ngưỡng cửa", "read", "Tình cảm gia đình qua chi tiết nhỏ."],
    [18, "Món quà đặc biệt", "read", "Quà tặng thể hiện tình yêu thương."],
    [19, "Khi cả nhà bé tí", "read", "Kỉ niệm tuổi thơ trong gia đình."],
    [20, "Trò chuyện cùng mẹ", "read", "Chia sẻ cảm xúc với người thân."],
    [21, "Tia nắng bé nhỏ", "poetry", "Tình yêu thương trong gia đình."],
    [22, "Để cháu năm tay ông", "read", "Kính yêu và chăm sóc ông bà."],
    [23, "Tôi yêu em tôi", "read", "Tình anh chị em ruột thịt."],
    [24, "Bạn nhỏ trong nhà", "read", "Yêu thương thú cưng như người bạn."]
  ]),
  theme("g3_t1_community", "Chủ điểm 4: Cộng đồng gắn bó", 5, BOOK_T1, [
    [25, "Những bậc đá chạm mây", "read", "Sự hy sinh vì cộng đồng."],
    [26, "Đi tìm mặt trời", "read", "Hy vọng và nghị lực vượt khó."],
    [27, "Những chiếc áo ấm", "read", "Chia sẻ với người khó khăn."],
    [28, "Con đường của bé", "read", "Nỗ lực vươn lên trong học tập."],
    [29, "Ngôi nhà trong cỏ", "read", "Tình bạn và sự bảo vệ thiên nhiên."],
    [30, "Những ngọn hải đăng", "read", "Người thầy thuốc cứu người trên biển."],
    [31, "Người làm đồ chơi", "read", "Trân trọng nghề thủ công truyền thống."],
    [32, "Cây bút thần", "read", "Trí tưởng tượng và lòng nhân hậu."]
  ]),
  theme("g3_t1_review_end", "Ôn tập cuối học kì 1", 6, BOOK_T1, [
    [1, "Phần 1: Ôn tập", "review", "Đánh giá cuối học kì 1."]
  ])
];

const TAP2_THEMES = [
  theme("g3_t2_nature", "Chủ điểm 1: Những sắc màu thiên nhiên", 1, BOOK_T2, [
    [1, "Bầu trời", "poetry", "Vẻ đẹp bầu trời qua mắt trẻ thơ."],
    [2, "Mưa", "poetry", "Hình ảnh mưa gợi cảm xúc thiên nhiên."],
    [3, "Cóc kiện trời", "read", "Truyện cổ tích giải thích hiện tượng thiên nhiên."],
    [4, "Những cái tên đáng yêu", "read", "Đặt tên thể hiện tình cảm với sự vật."],
    [5, "Ngày hội rừng xanh", "read", "Thiên nhiên sinh động, đa dạng."],
    [6, "Cây gạo", "poetry", "Hình ảnh cây gạo gắn với làng quê."],
    [7, "Mặt trời xanh của tôi", "poetry", "Ước mơ và khát vọng tuổi thơ."],
    [8, "Bầy voi rừng Trường Sơn", "info", "Bảo vệ động vật hoang dã quý hiếm."]
  ]),
  theme("g3_t2_life", "Chủ điểm 2: Bài học từ cuộc sống", 2, BOOK_T2, [
    [9, "Lời kêu gọi toàn dân tập thể dục", "info", "Rèn luyện thể chất mỗi ngày."],
    [10, "Quả hồng của thỏ con", "read", "Chia sẻ phải công bằng."],
    [11, "Chuyện bên cửa sổ", "read", "Quan sát cuộc sống quanh ta."],
    [12, "Tay trái và tay phải", "read", "Hợp tác, phối hợp trong công việc."],
    [13, "Mèo đi câu cá", "read", "Kiên nhẫn và khéo léo."],
    [14, "Học nghề", "read", "Chăm chỉ học nghề để thành công."],
    [15, "Ngày như thế nào là đẹp", "read", "Ngày đẹp khi sống có ích."],
    [16, "A lô, tớ đây", "read", "Giao tiếp lịch sự, thân thiện."]
  ]),
  theme("g3_t2_review_mid", "Ôn tập giữa học kì 2", 3, BOOK_T2, [
    [1, "Ôn tập giữa học kì 2", "review", "Củng cố đọc, viết, LTVC HK2."]
  ]),
  theme("g3_t2_nation", "Chủ điểm 3: Đất nước ngàn năm", 4, BOOK_T2, [
    [17, "Đất nước là gì", "read", "Tình yêu Tổ quốc qua cảm nhận trẻ thơ."],
    [18, "Núi quê tôi", "poetry", "Gắn bó với quê hương đất nước."],
    [19, "Sông Hương", "read", "Vẻ đẹp di sản văn hóa Việt Nam."],
    [20, "Tiếng nước mình", "poetry", "Tự hào tiếng Việt, văn hóa dân tộc."],
    [21, "Nhà Rông", "info", "Tìm hiểu nhà ở truyền thống Tây Nguyên."],
    [22, "Sự tích ông Đùng, bà Đùng", "read", "Truyền thuyết dân tộc Việt Nam."],
    [23, "Hai Bà Trưng", "read", "Lòng yêu nước, tinh thần dũng cảm."],
    [24, "Cùng Bác qua suối", "read", "Bác Hồ gần gũi, yêu thương thiếu nhi."]
  ]),
  theme("g3_t2_earth", "Chủ điểm 4: Trái đất của chúng mình", 5, BOOK_T2, [
    [25, "Ngọn lửa Ô-lim-pích", "info", "Tinh thần thể thao và hòa bình."],
    [26, "Rô-bốt ở quanh ta", "info", "Công nghệ phục vụ cuộc sống."],
    [27, "Thư của ông Trái Đất gửi các bạn nhỏ", "info", "Bảo vệ môi trường Trái Đất."],
    [28, "Những điều nhỏ tớ làm cho Trái Đất", "read", "Hành động nhỏ góp phần bảo vệ môi trường."],
    [29, "Bác sĩ Y-éc-xanh", "read", "Tấm gương y đức, cống hiến vì con người."],
    [30, "Một mái nhà chung", "read", "Đoàn kết, hòa bình giữa các dân tộc."]
  ]),
  theme("g3_t2_review_end", "Ôn tập cuối học kì 2", 6, BOOK_T2, [
    [1, "Ôn tập đánh giá cuối học kì 2", "review", "Đánh giá cuối năm học."]
  ])
];

export function getGrade3Units() {
  return [
    ...buildUnits(TAP1_THEMES, "lv3"),
    ...buildUnits(TAP2_THEMES, "lv3")
  ];
}

export const GRADE3_META = {
  source: "Bám sát SGK Tiếng Việt 3 — Kết nối tri thức với cuộc sống (Tập 1 & Tập 2).",
  tap1Lessons: 32,
  tap2Lessons: 30,
  reviewBlocks: 4,
  themes: 10
};
