/**
 * Chương trình Tiếng Việt lớp 5 — SGK Kết nối tri thức với cuộc sống.
 * Tập 1: 32 bài + 2 ôn tập · Tập 2: 30 bài + 2 ôn tập
 */
import { buildUnits, theme } from "./kntt-primary-shared.mjs";

const BOOK_T1 = "Tiếng Việt 5 — Kết nối tri thức · Tập 1";
const BOOK_T2 = "Tiếng Việt 5 — Kết nối tri thức · Tập 2";

const TAP1_THEMES = [
  theme("g5_t1_childhood", "Chủ điểm 1: Thế giới tuổi thơ", 1, BOOK_T1, [
    [1, "Thanh âm của gió", "poetry", "Cảm nhận thiên nhiên qua âm thanh."],
    [2, "Cánh đồng hoa", "poetry", "Vẻ đẹp tuổi thơ trên cánh đồng."],
    [3, "Tuổi ngựa", "read", "Kỉ niệm tuổi thơ gắn với con vật."],
    [4, "Bến sông tuổi thơ", "read", "Hình ảnh bến sông trong ký ức."],
    [5, "Tiếng hạt nảy mầm", "poetry", "Sức sống và hy vọng từ thiên nhiên."],
    [6, "Ngôi sao sân cỏ", "read", "Ước mơ và nghị lực của trẻ em."],
    [7, "Bộ sưu tập độc đáo", "read", "Sưu tầm, khám phá thế giới quanh ta."],
    [8, "Hành tinh kì lạ", "read", "Trí tưởng tượng về vũ trụ."]
  ]),
  theme("g5_t1_nature", "Chủ điểm 2: Thiên nhiên kì thú", 2, BOOK_T1, [
    [9, "Trước cổng trời", "read", "Khám phá thiên nhiên hùng vĩ."],
    [10, "Kì diệu rừng xanh", "read", "Đa dạng sinh học trong rừng."],
    [11, "Hang Sơn Đoòng – những điều kì thú", "info", "Di sản thiên nhiên thế giới Việt Nam."],
    [12, "Những hòn đảo trên vịnh Hạ Long", "info", "Vẻ đẹp di sản thiên nhiên."],
    [13, "Mầm non", "poetry", "Sức sống mới từ cây cối."],
    [14, "Những ngọn núi nóng rẫy", "info", "Hiện tượng địa chất kì thú."],
    [15, "Bài ca về mặt trời", "poetry", "Ca ngợi mặt trời, nguồn sống."],
    [16, "Xin chào, Xa-ha-ra", "info", "Tìm hiểu sa mạc và môi trường khắc nghiệt."]
  ]),
  theme("g5_t1_review_mid", "Ôn tập giữa học kì 1", 3, BOOK_T1, [
    [1, "Ôn tập giữa học kì 1", "review", "Củng cố đọc, viết, LTVC HK1."]
  ]),
  theme("g5_t1_study", "Chủ điểm 3: Trên con đường học tập", 4, BOOK_T1, [
    [17, "Thư gửi các học sinh", "info", "Lời dạy của Bác về học tập."],
    [18, "Tấm gương tự học", "read", "Kiên trì tự học để thành công."],
    [19, "Trải nghiệm để sáng tạo", "read", "Học qua trải nghiệm thực tế."],
    [20, "Khổ luyện thành tài", "read", "Cần cù rèn luyện mới giỏi."],
    [21, "Thế giới trong trang sách", "read", "Sách mở rộng tri thức và tưởng tượng."],
    [22, "Từ những câu chuyện ấu thơ", "read", "Truyện cổ tích dạy bài học cuộc sống."],
    [23, "Giới thiệu sách Dế Mèn phiêu lưu kí", "info", "Tìm hiểu tác phẩm văn học thiếu nhi."],
    [24, "Tinh thần học tập của nhà Phi-lít", "read", "Tấm gương học tập kiên trì."]
  ]),
  theme("g5_t1_art", "Chủ điểm 4: Nghệ thuật muôn màu", 5, BOOK_T1, [
    [25, "Tiếng đàn ba-la-lai-ca trên sông Đà", "read", "Âm nhạc gắn với công trình thủy điện."],
    [26, "Trí tưởng tượng phong phú", "read", "Sáng tạo trong nghệ thuật."],
    [27, "Tranh làng Hồ", "info", "Di sản tranh dân gian Việt Nam."],
    [28, "Tập hát quan họ", "read", "Văn hóa dân ca Bắc Ninh."],
    [29, "Phim hoạt hình Chú ốc sên bay", "read", "Nghệ thuật điện ảnh hoạt hình."],
    [30, "Nghệ thuật múa ba lê", "info", "Tìm hiểu múa ba lê cổ điển."],
    [31, "Một ngôi chùa độc đáo", "info", "Kiến trúc tôn giáo Việt Nam."],
    [32, "Sự tích chú Tễu", "read", "Nghệ thuật múa rối nước truyền thống."]
  ]),
  theme("g5_t1_review_end", "Ôn tập cuối học kì 1", 6, BOOK_T1, [
    [1, "Ôn tập cuối học kì 1", "review", "Đánh giá cuối học kì 1."]
  ])
];

const TAP2_THEMES = [
  theme("g5_t2_life", "Chủ điểm 1: Vẻ đẹp cuộc sống", 1, BOOK_T2, [
    [1, "Tiếng hát của người đá", "read", "Vẻ đẹp tâm hồn vượt hoàn cảnh."],
    [2, "Khúc hát ru những em bé lớn trên lưng mẹ", "poetry", "Tình mẹ con trên chiến trường."],
    [3, "Hạt gạo làng ta", "poetry", "Công sức người nông dân qua hạt gạo."],
    [4, "Hộp quà màu thiên thanh", "read", "Yêu thương qua món quà nhỏ."],
    [5, "Giỏ hoa tháng Năm", "read", "Kỉ niệm ngày sinh Bác Hồ."],
    [6, "Thư của bố", "read", "Tình cảm gia đình qua lá thư."],
    [7, "Đoàn thuyền đánh cá", "poetry", "Hình ảnh biển và lao động."],
    [8, "Khu rừng của Mát", "read", "Bảo vệ rừng, yêu thiên nhiên."]
  ]),
  theme("g5_t2_regions", "Chủ điểm 2: Hương sắc trăm miền", 2, BOOK_T2, [
    [9, "Hội thổi cơm thi ở Đồng Vân", "read", "Lễ hội văn hóa dân tộc Thái."],
    [10, "Những búp chè trên cây cổ thụ", "read", "Văn hóa trà Việt Nam."],
    [11, "Hương cốm mùa thu", "poetry", "Hương vị mùa thu Hà Nội."],
    [12, "Vũ điệu trên nền thổ cẩm", "read", "Văn hóa dân tộc thiểu số."],
    [13, "Đàn t'rưng – tiếng ca đại ngàn", "info", "Nhạc cụ truyền thống Tây Nguyên."],
    [14, "Đường quê Đồng Tháp Mười", "read", "Cảnh sắc miền Tây sông nước."],
    [15, "Xuồng ba lá quê tôi", "poetry", "Hình ảnh sông nước miền Tây."],
    [16, "Về thăm Đất Mũi", "read", "Điểm cực Nam Tổ quốc."]
  ]),
  theme("g5_t2_review_mid", "Ôn tập giữa học kì 2", 3, BOOK_T2, [
    [1, "Ôn tập giữa học kì 2", "review", "Củng cố đọc, viết, LTVC HK2."]
  ]),
  theme("g5_t2_heritage", "Chủ điểm 3: Tiếp bước cha ông", 4, BOOK_T2, [
    [17, "Nghìn năm văn hiến", "read", "Tự hào văn hóa Việt Nam."],
    [18, "Người thầy của muôn đời", "read", "Tôn sư trọng đạo, biết ơn thầy cô."],
    [19, "Danh y Tuệ Tĩnh", "read", "Tấm gương y học cổ truyền Việt Nam."],
    [20, "Cụ Đồ Chiểu", "read", "Tấm gương học tập kiên trì."],
    [21, "Anh hùng Lao động Trần Đại Nghĩa", "read", "Cống hiến khoa học vì Tổ quốc."],
    [22, "Bộ đội về làng", "read", "Tình quân dân gắn bó."],
    [23, "Về ngôi nhà đang xây", "read", "Xây dựng đất nước ngày càng giàu đẹp."],
    [24, "Việt Nam quê hương ta", "poetry", "Tự hào quê hương đất nước."]
  ]),
  theme("g5_t2_world", "Chủ điểm 4: Thế giới của chúng ta", 5, BOOK_T2, [
    [25, "Bài ca trái đất", "poetry", "Bảo vệ hành tinh xanh."],
    [26, "Những con hạc giấy", "read", "Hòa bình và ước mơ của trẻ em."],
    [27, "Một người hùng thầm lặng", "read", "Lòng dũng cảm cứu người."],
    [28, "Giờ Trái Đất", "info", "Hành động bảo vệ môi trường toàn cầu."],
    [29, "Điện thoại di động", "info", "Công nghệ trong đời sống hiện đại."],
    [30, "Thành phố thông minh Mát-xđa", "info", "Đô thị thông minh và tương lai."]
  ]),
  theme("g5_t2_review_end", "Ôn tập cuối năm học", 6, BOOK_T2, [
    [1, "Ôn tập cuối năm học", "review", "Đánh giá cuối năm học."]
  ])
];

export function getGrade5Units() {
  return [
    ...buildUnits(TAP1_THEMES, "lv5"),
    ...buildUnits(TAP2_THEMES, "lv5")
  ];
}

export const GRADE5_META = {
  source: "Bám sát SGK Tiếng Việt 5 — Kết nối tri thức với cuộc sống (Tập 1 & Tập 2).",
  tap1Lessons: 32,
  tap2Lessons: 30,
  reviewBlocks: 4,
  themes: 10
};
