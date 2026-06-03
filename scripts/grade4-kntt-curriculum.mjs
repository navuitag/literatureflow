/**
 * Chương trình Tiếng Việt lớp 4 — SGK Kết nối tri thức với cuộc sống.
 * Tập 1: 32 bài + 2 ôn tập · Tập 2: 30 bài + 2 ôn tập
 */
import { buildUnits, theme } from "./kntt-primary-shared.mjs";

const BOOK_T1 = "Tiếng Việt 4 — Kết nối tri thức · Tập 1";
const BOOK_T2 = "Tiếng Việt 4 — Kết nối tri thức · Tập 2";

const TAP1_THEMES = [
  theme("g4_t1_unique", "Chủ điểm 1: Mỗi người một vẻ", 1, BOOK_T1, [
    [1, "Điều kì diệu", "read", "Mỗi người có điểm đặc biệt riêng."],
    [2, "Thi nhạc", "poetry", "Niềm vui tham gia hoạt động nghệ thuật."],
    [3, "Anh em sinh đôi", "read", "Tình anh em dù khác biệt."],
    [4, "Công chúa và người dẫn chuyện", "read", "Trí tưởng tượng phong phú."],
    [5, "Thằn lằn xanh và tắc kè", "read", "Quan sát thiên nhiên để học hỏi."],
    [6, "Nghệ sĩ trống", "read", "Đam mê nghệ thuật dân gian."],
    [7, "Những bức chân dung", "read", "Miêu tả người qua chi tiết đặc trưng."],
    [8, "Đò ngang", "poetry", "Hình ảnh làng quê Việt Nam."]
  ]),
  theme("g4_t1_explore", "Chủ điểm 2: Trải nghiệm và khám phá", 2, BOOK_T1, [
    [9, "Bầu trời trong quả trứng", "read", "Khám phá thế giới quanh ta."],
    [10, "Tiếng nói của cỏ cây", "read", "Lắng nghe thiên nhiên."],
    [11, "Tập làm văn", "writing", "Luyện viết đoạn văn kể chuyện."],
    [12, "Nhà phát minh 6 tuổi", "read", "Sáng tạo không phụ thuộc tuổi tác."],
    [13, "Con vẹt xanh", "read", "Tình bạn giữa người và vật nuôi."],
    [14, "Chân trời cuối phố", "read", "Ước mơ và khát vọng tuổi thơ."],
    [15, "Gặt chữ trên non", "read", "Học chữ trong lao động, khó khăn."],
    [16, "Trước ngày xa quê", "read", "Tình yêu quê hương khi phải xa cách."]
  ]),
  theme("g4_t1_review_mid", "Ôn tập giữa học kì 1", 3, BOOK_T1, [
    [1, "Ôn tập giữa học kì 1", "review", "Củng cố đọc, viết, LTVC HK1."]
  ]),
  theme("g4_t1_creative", "Chủ điểm 3: Niềm vui sáng tạo", 4, BOOK_T1, [
    [17, "Vẽ màu", "poetry", "Sáng tạo nghệ thuật từ cảm xúc."],
    [18, "Đồng cỏ nở hoa", "read", "Vẻ đẹp thiên nhiên qua mắt nhìn nghệ sĩ."],
    [19, "Âm thanh của núi", "read", "Cảm nhận thiên nhiên bằng giác quan."],
    [20, "Bầu trời mùa thu", "poetry", "Hình ảnh mùa thu trong thơ."],
    [21, "Làm thỏ con bằng giấy", "read", "Khéo tay, sáng tạo đồ chơi."],
    [22, "Bức tường có nhiều phép lạ", "read", "Trí tưởng tượng làm cuộc sống thêm màu."],
    [23, "Bét – tô – ven và bản xô – nát Ánh Trăng", "read", "Âm nhạc cổ điển mở rộng tầm nhìn."],
    [24, "Người tìm đường lên các vì sao", "read", "Khát vọng chinh phục khoa học."]
  ]),
  theme("g4_t1_dream", "Chủ điểm 4: Chắp cánh ước mơ", 5, BOOK_T1, [
    [25, "Bay cùng ước mơ", "read", "Theo đuổi ước mơ bằng nỗ lực."],
    [26, "Con trai người làm vườn", "read", "Gắn bó với đất, yêu lao động."],
    [27, "Nếu có một khu vườn", "read", "Ước mơ và trách nhiệm chăm sóc."],
    [28, "Bốn mùa mơ ước", "read", "Mỗi mùa mang một ước mơ riêng."],
    [29, "Ở vương quốc tương lai", "read", "Tưởng tượng về tương lai khoa học."],
    [30, "Cách chim nhỏ", "read", "Kiên trì rèn luyện để thành công."],
    [31, "Nếu chúng mình có phép lạ", "read", "Dùng trí tưởng tượng để giúp người."],
    [32, "Anh Ba", "read", "Tấm gương người lao động tận tụy."]
  ]),
  theme("g4_t1_review_end", "Ôn tập cuối học kì 1", 6, BOOK_T1, [
    [1, "Ôn tập cuối học kì 1", "review", "Đánh giá cuối học kì 1."]
  ])
];

const TAP2_THEMES = [
  theme("g4_t2_love", "Chủ điểm 1: Sống để yêu thương", 1, BOOK_T2, [
    [1, "Hải thượng lãn ông", "read", "Tấm gương y đức cứu người."],
    [2, "Vệt phấn trên mặt bàn", "read", "Tình yêu thương qua hành động nhỏ."],
    [3, "Ông bụt đã đến", "read", "Lòng nhân hậu, giúp đỡ người khó khăn."],
    [4, "Quả ngọt cuối mùa", "read", "Chia sẻ yêu thương với mọi người."],
    [5, "Tờ báo tường của tôi", "read", "Sáng tạo, hợp tác trong lớp."],
    [6, "Tiếng ru", "poetry", "Tình mẹ con qua lời ru."],
    [7, "Con muốn làm một cái cây", "read", "Ước mơ sống có ích cho đời."],
    [8, "Trên khóm tre đầu ngõ", "poetry", "Hình ảnh làng quê thân thuộc."]
  ]),
  theme("g4_t2_gratitude", "Chủ điểm 2: Uống nước nhớ nguồn", 2, BOOK_T2, [
    [9, "Sự tích con Rồng cháu Tiên", "read", "Nguồn gốc dân tộc Việt Nam."],
    [10, "Cảm xúc Trường Sa", "read", "Biết ơn người bảo vệ Tổ quốc."],
    [11, "Sáng tháng năm", "poetry", "Kỉ niệm tháng năm lịch sử."],
    [12, "Chàng trai làng Phù Ủng", "read", "Tấm gương anh hùng Phạm Ngũ Lão."],
    [13, "Vườn của ông tôi", "read", "Kỉ niệm với ông, tình yêu lao động."],
    [14, "Trong lời mẹ hát", "read", "Tình mẹ và ký ức tuổi thơ."],
    [15, "Người thầy đầu tiên của bố tôi", "read", "Biết ơn thầy cô giáo."],
    [16, "Ngựa biên phòng", "read", "Lòng dũng cảm bảo vệ biên giới."]
  ]),
  theme("g4_t2_review_mid", "Ôn tập giữa học kì 2", 3, BOOK_T2, [
    [1, "Ôn tập và đánh giá giữa học kì 2", "review", "Củng cố đọc, viết, LTVC HK2."]
  ]),
  theme("g4_t2_hometown", "Chủ điểm 3: Quê hương trong tôi", 4, BOOK_T2, [
    [17, "Cây đa quê hương", "read", "Ký ức gắn với cảnh vật quê hương."],
    [18, "Bước mùa xuân", "read", "Vẻ đẹp mùa xuân trên quê hương."],
    [19, "Đi hội chùa Hương", "read", "Văn hóa lễ hội truyền thống."],
    [20, "Chiều ngoại ô", "poetry", "Khung cảnh yên bình ngoại ô."],
    [21, "Những cánh buồm", "read", "Hình ảnh biển quê hương."],
    [22, "Cái cầu", "poetry", "Cây cầu gắn kết con người và đất nước."],
    [23, "Đường đi Sa Pa", "read", "Vẻ đẹp miền núi Tây Bắc."],
    [24, "Quê ngoại", "read", "Tình yêu quê ngoại, gia đình."]
  ]),
  theme("g4_t2_peace", "Chủ điểm 4: Vì một thế giới bình yên", 5, BOOK_T2, [
    [25, "Khu bảo tồn động vật hoang dã Ngô-rông-gô-rô", "info", "Bảo vệ động vật và môi trường."],
    [26, "Ngôi nhà của yêu thương", "read", "Yêu thương xây dựng gia đình hạnh phúc."],
    [27, "Băng tan", "info", "Biến đổi khí hậu và trách nhiệm bảo vệ Trái Đất."],
    [28, "Chuyến du lịch thú vị", "read", "Khám phá văn hóa các vùng miền."],
    [29, "Lễ hội ở Nhật Bản", "info", "Tìm hiểu văn hóa bạn bè quốc tế."],
    [30, "Ngày hội", "read", "Niềm vui lễ hội gắn kết cộng đồng."]
  ]),
  theme("g4_t2_review_end", "Ôn tập cuối năm học", 6, BOOK_T2, [
    [1, "Ôn tập và đánh giá cuối năm học", "review", "Đánh giá cuối năm học."]
  ])
];

export function getGrade4Units() {
  return [
    ...buildUnits(TAP1_THEMES, "lv4"),
    ...buildUnits(TAP2_THEMES, "lv4")
  ];
}

export const GRADE4_META = {
  source: "Bám sát SGK Tiếng Việt 4 — Kết nối tri thức với cuộc sống (Tập 1 & Tập 2).",
  tap1Lessons: 32,
  tap2Lessons: 30,
  reviewBlocks: 4,
  themes: 10
};
