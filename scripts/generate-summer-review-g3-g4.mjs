/**
 * Sinh nội dung Ôn hè Tiếng Việt lớp 3 → lớp 4 (6 chủ đề + 10 đề).
 * Nguồn: CHUYÊN ĐỀ ÔN HÈ TIẾNG VIỆT LỚP 3 - LÊN 4
 * Chạy: node scripts/generate-summer-review-g3-g4.mjs
 */
import { writeFile } from "node:fs/promises";

const SOURCE =
  "Chuyên đề Ôn hè Tiếng Việt lớp 3 - lên 4 (nội dung tương tác biên soạn theo tài liệu ôn hè).";

const topics = [
  {
    id: "sr3_vocab",
    order: 1,
    title: "Từ chỉ sự vật, đặc điểm, hoạt động",
    emoji: "📖",
    description: "Phân loại từ theo SGK lớp 3; mở rộng vốn từ theo chủ đề.",
    prerequisite: [],
    xp: 40,
    keypoints: [
      "Từ chỉ sự vật: người, vật, cây, thiên nhiên, thời gian.",
      "Từ chỉ đặc điểm: màu, hình dáng, tính nết (xanh biếc, chăm chỉ…).",
      "Từ chỉ hoạt động–trạng thái: học, chạy, vui, buồn…",
      "Vốn từ: thiếu nhi, gia đình, trường học, quê hương, thiên nhiên."
    ],
    questions: [
      ["multiple_choice", "«bác sĩ» thuộc loại từ nào?", ["Chỉ sự vật", "Chỉ đặc điểm", "Chỉ hoạt động", "Chỉ nơi chốn"], "Chỉ sự vật", "Chỉ tên người."],
      ["multiple_choice", "«ngoan ngoãn» là từ chỉ?", ["Đặc điểm tính nết", "Sự vật", "Hoạt động", "Thời gian"], "Đặc điểm tính nết", "Phẩm chất."],
      ["multiple_choice", "«đọc sách» thuộc loại?", ["Hoạt động", "Sự vật", "Đặc điểm", "Địa danh"], "Hoạt động", "Ai làm gì?"],
      ["multiple_choice", "Trái nghĩa «chăm chỉ»?", ["Lười biếng", "Siêng năng", "Chịu khó", "Cần cù"], "Lười biếng", "Đối lập."],
      ["multiple_choice", "«hiền lành» là từ chỉ?", ["Đặc điểm", "Sự vật", "Hoạt động", "Nghề nghiệp"], "Đặc điểm", "Tính nết."],
      ["true_false", "«Sách vở» là từ chỉ hoạt động.", "Sai", "Sách vở = sự vật."],
      ["input", "Từ chỉ người trí thức: bác sĩ, giáo viên, ...?", "kĩ sư", "Nghề nghiệp trí thức."],
      ["multiple_choice", "Dân tộc đông nhất Việt Nam?", ["Kinh", "Tày", "Thái", "Dao"], "Kinh", "Không phải thiểu số."]
    ]
  },
  {
    id: "sr3_punct",
    order: 2,
    title: "Dấu câu (kể cả dấu hai chấm)",
    emoji: "❗",
    description: "Chấm, phẩy, hỏi, than, hai chấm — quy tắc lớp 3.",
    prerequisite: ["sr3_vocab"],
    xp: 45,
    keypoints: [
      "Dấu chấm: kết thúc câu kể.",
      "Dấu hai chấm: trước lời nói nhân vật; liệt kê.",
      "Dấu phẩy: ngăn từ cùng loại; bộ phận phụ đầu câu.",
      "Dấu hỏi / chấm than: câu hỏi và cảm xúc."
    ],
    questions: [
      ["multiple_choice", "«Dế Mèn bảo: - Em đừng sợ» — dấu trước lời nói?", ["Hai chấm", "Phẩy", "Chấm", "Hỏi"], "Hai chấm", "Lời nhân vật."],
      ["multiple_choice", "«Nhà em có nhiều hoa: huệ, cúc, lan» — hai chấm để?", ["Liệt kê", "Hỏi", "Cảm", "Kết câu"], "Liệt kê", "Liệt kê sự vật."],
      ["true_false", "«Trong lớp, chúng em nghe giảng» — phẩy ngăn bộ phận phụ.", "Đúng", "Trong lớp = Ở đâu?"],
      ["input", "«Bố ơi, con nghe nói trái đất quay... Có đúng thế không, bố?» — cuối câu hỏi?", "hỏi chấm", "Câu hỏi."],
      ["multiple_choice", "Câu dùng đúng dấu phẩy?", ["Bạn Hiền hát hay, học giỏi", "Bạn Hiền hát hay học giỏi", "Bạn Hiền, hát hay học giỏi", "Bạn Hiền hát, hay học giỏi"], "Bạn Hiền hát hay, học giỏi", "Ngăn đặc điểm."],
      ["multiple_choice", "«A, mẹ đã về!» — dấu cuối?", ["Chấm than", "Chấm", "Hỏi", "Hai chấm"], "Chấm than", "Cảm xúc."],
      ["true_false", "Dấu hai chấm có thể thay bằng «như» trong thơ «Đũa: nhánh phi lao».", "Đúng", "So sánh ngang."],
      ["multiple_choice", "«Chao ôi! Nước sông chảy siết quá!» — dấu sau «Chao ôi»?", ["Chấm than", "Phẩy", "Hỏi", "Chấm"], "Chấm than", "Kêu cảm."]
    ]
  },
  {
    id: "sr3_sentence",
    order: 3,
    title: "Kiểu câu và câu hỏi",
    emoji: "✍️",
    description: "Ai là gì? Ai làm gì? Ai thế nào? — đặt và trả lời câu hỏi.",
    prerequisite: ["sr3_punct"],
    xp: 45,
    keypoints: [
      "Ai là gì? — nhận định (Bạn Nam là lớp trưởng).",
      "Ai làm gì? — hoạt động (Lớp em đang nghe giảng).",
      "Ai thế nào? — miêu tả (Bạn Như rất chăm chỉ).",
      "Khi nào? Ở đâu? Vì sao? Để làm gì? Như thế nào?"
    ],
    questions: [
      ["multiple_choice", "«Anh Nam là công nhân» — mẫu câu?", ["Ai là gì?", "Ai làm gì?", "Ai thế nào?", "Câu hỏi"], "Ai là gì?", "Là công nhân."],
      ["multiple_choice", "«Lớp em đang chăm chú nghe cô giảng» — mẫu?", ["Ai làm gì?", "Ai là gì?", "Ai thế nào?", "Vì sao?"], "Ai làm gì?", "Đang nghe giảng."],
      ["multiple_choice", "«Bạn Như rất chăm chỉ» — mẫu?", ["Ai thế nào?", "Ai là gì?", "Ai làm gì?", "Khi nào?"], "Ai thế nào?", "Rất chăm chỉ."],
      ["multiple_choice", "«Trong vườn, trăm hoa đua nhau khoe sắc» — «Trong vườn» trả lời?", ["Ở đâu?", "Khi nào?", "Vì sao?", "Ai?"], "Ở đâu?", "Địa điểm."],
      ["multiple_choice", "«Phương nghỉ học vì bị ốm» — bộ phận Vì sao?", ["vì Phương bị ốm", "nghỉ học", "Phương", "ốm"], "vì Phương bị ốm", "Nguyên nhân."],
      ["input", "Hỏi gạch «ở huyện Thường Tín»: Trần Quốc Khái quê ...?", "Trần Quốc Khái quê ở đâu?", "Ở đâu?"],
      ["input", "Hỏi gạch «réo rắt»: Tiếng nhạc nổi lên ...?", "Tiếng nhạc nổi lên như thế nào?", "Như thế nào?"],
      ["true_false", "«Nghỉ hè, cả nhà em về quê» — «Nghỉ hè» trả lời Khi nào?", "Đúng", "Thời gian."]
    ]
  },
  {
    id: "sr3_compare",
    order: 4,
    title: "Biện pháp so sánh",
    emoji: "🔄",
    description: "Cấu tạo so sánh; từ so sánh; các kiểu so sánh SGK lớp 3.",
    prerequisite: ["sr3_sentence"],
    xp: 45,
    keypoints: [
      "4 yếu tố: sự vật 1 + từ so sánh + sự vật 2 + phương diện.",
      "Từ so sánh: như, tựa, giống, chẳng khác gì, hơn, kém…",
      "So sánh ngang: như, tựa như, giống như…",
      "So sánh sự vật–sự vật, âm thanh–âm thanh, hoạt động–hoạt động."
    ],
    questions: [
      ["multiple_choice", "«Hai bàn tay em / Như hoa đầu cành» — từ so sánh?", ["Như", "Là", "Và", "Có"], "Như", "So sánh ngang."],
      ["multiple_choice", "«Cây gạo sừng sững như một tháp đèn khổng lồ» — so sánh?", ["Cây gạo — tháp đèn", "Chim — cây", "Mưa — nắng", "Trâu — cỏ"], "Cây gạo — tháp đèn", "Sự vật với sự vật."],
      ["multiple_choice", "«Trẻ em như búp trên cành» — «như» dùng để?", ["So sánh", "Liệt kê", "Liệt kê ví dụ", "Hỏi"], "So sánh", "Không phải liệt kê «như: Tấm Cám…»."],
      ["input", "«Đũa: nhánh phi lao» — thay dấu hai chấm bằng từ?", "như", "So sánh."],
      ["multiple_choice", "«Tiếng ve râm ran như tiếng nhạc» — kiểu?", ["Âm thanh với âm thanh", "Màu sắc", "Con người với vật", "Liệt kê"], "Âm thanh với âm thanh", "Ve — nhạc."],
      ["multiple_choice", "«Mẹ là ngọn gió của con» — kiểu so sánh?", ["Người với sự vật", "Số đếm", "Chính tả", "Nhân hóa thuần"], "Người với sự vật", "Mẹ — gió."],
      ["true_false", "«Công cha cao hơn núi» dùng so sánh hơn kém.", "Đúng", "Hơn."],
      ["input", "«Con thuyền chồm lên hụp xuống như ...» (nô giỡn)", "nô giỡn", "Hoạt động với hoạt động."]
    ]
  },
  {
    id: "sr3_personify",
    order: 5,
    title: "Biện pháp nhân hóa",
    emoji: "🌸",
    description: "Gọi, tả, xưng hô sự vật như người — SGK lớp 3.",
    prerequisite: ["sr3_compare"],
    xp: 45,
    keypoints: [
      "Gọi sự vật bằng từ gọi người: ông mặt trời, chị chổi rơm.",
      "Tả sự vật bằng từ tả người: uốn mình, lang thang, trầm tư.",
      "Nói/xưng hô thân mật: Em hoa ơi!",
      "Nhân hóa làm sự vật sinh động, gần gũi."
    ],
    questions: [
      ["multiple_choice", "«Cây gạo trầm tư, hiền lành» — cách nhân hóa?", ["Tả tâm trạng/tính cách", "Chỉ liệt kê", "Chính tả", "So sánh"], "Tả tâm trạng/tính cách", "Tả như người."],
      ["multiple_choice", "«Ông mặt trời» — cách nhân hóa?", ["Gọi như người", "So sánh", "Liệt kê", "Hỏi"], "Gọi như người", "Xưng ông."],
      ["multiple_choice", "«Cơn mưa bụi ngập ngừng trong mây» — nhân hóa?", ["Mưa bụi", "Mây", "Bụi", "Không có"], "Mưa bụi", "Ngập ngừng = trạng thái người."],
      ["input", "Trong «Em thương làn gió mồ côi» — sự vật nhân hóa?", "gió", "Gió mồ côi."],
      ["true_false", "«Chim chóc tranh cãi nhau» trong bài Cây gạo là nhân hóa.", "Đúng", "Chim có hoạt động người."],
      ["multiple_choice", "«Tớ là chiếc xe lu» — nhân hóa kiểu?", ["Tự giới thiệu như người", "So sánh", "Chính tả", "Kể chuyện"], "Tự giới thiệu như người", "Xe nói «Tớ»."],
      ["multiple_choice", "«Em hoa ơi! Chị yêu em lắm» — cách?", ["Xưng hô thân mật", "Gọi tên khoa học", "Liệt kê", "Hỏi chấm"], "Xưng hô thân mật", "Chị — em."],
      ["true_false", "Nhân hóa và so sánh không thể có trong cùng một câu.", "Sai", "Có thể kết hợp."]
    ]
  },
  {
    id: "sr3_spelling",
    order: 6,
    title: "Chính tả và từ ngữ",
    emoji: "🔤",
    description: "l/n, r/d/gi, s/x, tr/ch; tục ngữ, địa phương.",
    prerequisite: ["sr3_personify"],
    xp: 50,
    keypoints: [
      "l/n: leo lên lưng, lo lắng, lung linh.",
      "r/d/gi: dòng sông, rạng rỡ, dong ruổi.",
      "s/x: sản xuất, sách, xinh.",
      "Tục ngữ: Dân ta nhớ một chữ đồng…"
    ],
    questions: [
      ["input", "«Anh ta ...eo ...ên ...ưng» (l/n) — từ đầu?", "leo", "leo lên lưng."],
      ["input", "«Chim đập cánh ba ...ần mới ...ên ...ổi» — âm đầu «lên»?", "l", "lên nổi."],
      ["input", "«...ạng rỡ» (d/r/gi) viết?", "rạng", "rạng rỡ."],
      ["input", "«sản ...uất» (s/x)?", "x", "sản xuất."],
      ["input", "«...ong ruổi» (d/gi/r)?", "dong", "dong ruổi."],
      ["multiple_choice", "«tấp nập» hay «tấp lập»?", ["tấp nập", "tấp lập", "tấp nạp", "tấp nạt"], "tấp nập", "Đông đúc."],
      ["input", "Tục ngữ: «Dân ta nhớ một chữ ...»", "đồng", "Đồng tình, đồng sức…"],
      ["true_false", "Miền Nam «trái banh» = miền Bắc «quả bóng».", "Đúng", "Từ địa phương."]
    ]
  }
];

/** 10 đề × 5 câu — bám đáp án trong tài liệu. */
const examSets = [
  { n: 1, q: [
    ["mc", "Đề 1 — Buổi ban đầu trái đất?", ["Ấm áp", "Mát mẻ", "Giá lạnh", "Nóng bỏng"], "Giá lạnh"],
    ["mc", "Đề 1 — Kim loại chủ yếu ở đâu?", ["Trên bề mặt", "Trong lòng trái đất", "Trong núi lửa", "Trong đại dương"], "Trong lòng trái đất"],
    ["mc", "Đề 1 — Trái đất khác hành tinh khác vì?", ["Có nước và sự sống", "Lạnh lẽo", "Nóng bỏng", "Cao tuổi nhất"], "Có nước và sự sống"],
    ["input", "Điền: «Núi lửa, động đất, thời tiết và ...» làm thay đổi trái đất", "con người"],
    ["input", "«Khi trái đất nguội đi, hơi nước ... thành mưa»", "ngưng tụ"]
  ]},
  { n: 2, q: [
    ["mc", "Đề 2 — Cún con làm gì khi Gà con bị bắt?", ["Đội mũ sư tử, tiến ra sân", "Khóc ầm", "Nằm giả chết", "Chạy trốn"], "Đội mũ sư tử, tiến ra sân"],
    ["mc", "Đề 2 — Vì sao Cáo bỏ Gà con?", ["Sợ sư tử", "Sợ Cún", "Thích Gà", "Mệt"], "Sợ sư tử"],
    ["mc", "Đề 2 — Cún cứu Gà con bằng cách?", ["Ôm Gà, đưa đến bác sĩ Dê", "Cởi áo đắp", "Không cứu", "Gọi mẹ"], "Ôm Gà, đưa đến bác sĩ Dê"],
    ["mc", "«Cún liền cởi áo đắp cho bạn» — mẫu câu?", ["Ai làm gì?", "Ai thế nào?", "Ai là gì?", "Vì sao?"], "Ai làm gì?"],
    ["mc", "Câu chuyện khuyên?", ["Thương yêu, giúp bạn", "Sợ hãi", "Ích kỷ", "Chơi một mình"], "Thương yêu, giúp bạn"]
  ]},
  { n: 3, q: [
    ["mc", "Đề 3 — Én gặp khó khăn gì?", ["Bay qua sông lớn nước chảy xiết", "Bay qua cánh đồng", "Bay qua rừng", "Bay qua sông nhỏ"], "Bay qua sông lớn nước chảy xiết"],
    ["mc", "Đề 3 — Bố Én giúp con bằng cách?", ["Cho chiếc lá «thần kì»", "Đỡ cánh", "Bắt cá", "Không giúp"], "Cho chiếc lá «thần kì»"],
    ["mc", "Đề 3 — Én bay qua sông nhờ?", ["Tin vào bản thân", "Lá thần kì thật", "Mẹ giúp", "Phép mầu"], "Tin vào bản thân"],
    ["mc", "Đề 3 — Câu chuyện khuyên (câu 8)?", ["Cố gắng và tin bản thân", "Tin phép mầu", "Vâng lời mẹ", "Sợ hãi"], "Cố gắng và tin bản thân"],
    ["input", "Điền thứ tự: «1... gia đình Én bay đi xa» — mục đích?", "Để trú đông"]
  ]},
  { n: 4, q: [
    ["mc", "Đề 4 — Mục đích chính bài «Cây gạo»?", ["Tả cây gạo", "Tả mùa xuân", "Tả chim", "Tả biển"], "Tả cây gạo"],
    ["mc", "Đề 4 — Hoa gạo màu?", ["Trắng", "Vàng", "Đỏ", "Tím"], "Đỏ"],
    ["mc", "Đề 4 — Tả cây gạo thời gian?", ["Chỉ mùa xuân", "Chỉ mùa hạ", "Hai mùa kế tiếp", "Mùa đông"], "Hai mùa kế tiếp"],
    ["input", "«Cây gạo được so sánh với ...»", "một tháp đèn khổng lồ"],
    ["mc", "«Cây gạo làm tiêu cho con đò» — mẫu?", ["Ai làm gì?", "Ai là gì?", "Ai thế nào?", "So sánh"], "Ai làm gì?"]
  ]},
  { n: 5, q: [
    ["mc", "Đề 5 — Khi Vịt kêu, Gà con?", ["Bay lên cành trốn", "Nằm giả chết", "Nhảy xuống ao", "Khóc ầm"], "Bay lên cành trốn"],
    ["mc", "Đề 5 — Vịt con thoát Cáo bằng?", ["Nằm giả vờ chết", "Nhảy hồ", "Chạy trốn", "Kêu cứu"], "Nằm giả vờ chết"],
    ["mc", "Đề 5 — Bài học của Gà con?", ["Không bỏ rơi bạn lúc hoạn nạn", "Chỉ giúp bạn thân", "Không giúp ai", "Sợ Cáo"], "Không bỏ rơi bạn lúc hoạn nạn"],
    ["mc", "Đề 5 — Đọc hiểu câu 1 (theo đáp án đề 5)?", ["A", "B", "C", "D"], "B"],
    ["mc", "Đề 5 — Đọc hiểu câu 6?", ["A", "B", "C", "D"], "D"]
  ]},
  { n: 6, q: [
    ["mc", "Đề 6 — Dòng có «như» so sánh?", ["Trẻ em như búp trên cành", "Rau như: cải, xà lách", "Truyện như Tấm Cám", "Biết nhiều chuyện"], "Trẻ em như búp trên cành"],
    ["mc", "«Quang co chân sút rất mạnh» — hỏi?", ["Làm gì?", "Là gì?", "Thế nào?", "Ở đâu?"], "Làm gì?"],
    ["mc", "Viết đúng chính tả?", ["rạng rỡ", "dạng rỡ", "rạng dỡ", "dạng dỡ"], "rạng rỡ"],
    ["mc", "«Cơn mưa bụi ngập ngừng trong mây» — nhân hóa?", ["Mưa bụi", "Mây", "Bụi", "Không"], "Mưa bụi"],
    ["input", "So sánh: «Con mèo chạy nhanh như ...»", "sóc"]
  ]},
  { n: 7, q: [
    ["mc", "Đề 7 — Dòng từ chỉ hoạt động?", ["cười, chơi, đọc, dọn dẹp", "tươi, đẹp, hồng", "thầy, bạn, bác sĩ", "chim, bàn ghế"], "cười, chơi, đọc, dọn dẹp"],
    ["mc", "Dòng từ chỉ sự vật đúng?", ["chim chóc, bàn ghế, học sinh", "chim, bàn, ngoan ngoãn", "chim, chạy nhảy", "đẹp, xanh"], "chim chóc, bàn ghế, học sinh"],
    ["mc", "Câu có so sánh?", ["Mặt trời như cái lò lửa khổng lồ", "Miệng bé tròn", "Hoa cau rụng trắng", "Em học bài"], "Mặt trời như cái lò lửa khổng lồ"],
    ["mc", "Cặp từ cùng nghĩa?", ["chăm chỉ — siêng năng", "chia lẻ — hợp lại", "yêu — ghét", "to — nhỏ"], "chăm chỉ — siêng năng"],
    ["input", "Mẫu Ai làm gì: «Mẹ ...»", "đang nấu cơm"]
  ]},
  { n: 8, q: [
    ["mc", "Đề 8 — Trái nghĩa «chăm chỉ»?", ["Lười biếng", "Chăm chút", "Chịu khó", "Cần cù"], "Lười biếng"],
    ["mc", "Dòng chỉ từ đặc điểm?", ["rực rỡ, xanh biếc, hồng tươi, to", "đỏ, vàng, hay, làm", "xanh, oai, kêu, lướt", "bút, sách"], "rực rỡ, xanh biếc, hồng tươi, to"],
    ["mc", "«Lớp em đang chăm chú nghe cô giảng» — mẫu?", ["Ai làm gì?", "Ai thế nào?", "Ai là gì?", "Vì sao?"], "Ai làm gì?"],
    ["mc", "Viết sai chính tả?", ["suất sắc", "xuất sắc", "sản xuất", "xuất hiện"], "suất sắc"],
    ["input", "Hỏi gạch «ở huyện Thường Tín»", "Trần Quốc Khái quê ở đâu?"]
  ]},
  { n: 9, q: [
    ["mc", "«Anh Nam là công nhân ở nhà máy» — mẫu?", ["Ai là gì?", "Ai làm gì?", "Ai thế nào?", "Khi nào?"], "Ai là gì?"],
    ["mc", "«Phương nghỉ vì bị ốm» — Vì sao?", ["vì Phương bị ốm", "ốm", "nghỉ học", "Phương"], "vì Phương bị ốm"],
    ["mc", "Trái nghĩa «dũng cảm»?", ["Hèn nhát", "Gan dạ", "Nhanh trí", "Hiền"], "Hèn nhát"],
    ["mc", "Câu dùng đúng dấu phẩy?", ["Thầy giáo dẫn chúng tôi đến bên cột cao", "Thầy giáo, dẫn chúng tôi đến", "Thầy, giáo, dẫn", "Thầy giáo dẫn chúng"], "Thầy giáo dẫn chúng tôi đến bên cột cao"],
    ["input", "Hỏi «réo rắt» trong «Tiếng nhạc nổi lên réo rắt»", "Tiếng nhạc nổi lên như thế nào?"]
  ]},
  { n: 10, q: [
    ["mc", "Từ chỉ hoạt động?", ["học hát", "chăm chỉ", "hiền lành", "bàn ghế"], "học hát"],
    ["mc", "Từ chỉ đặc điểm?", ["xanh non", "nghe giảng", "bàn ghế", "bác sĩ"], "xanh non"],
    ["mc", "Không phải dân tộc thiểu số?", ["Kinh", "Dao", "Nùng", "Tày"], "Kinh"],
    ["mc", "«Bạn Như rất chăm chỉ» — mẫu?", ["Ai thế nào?", "Ai là gì?", "Ai làm gì?", "Vì sao?"], "Ai thế nào?"],
    ["input", "Hỏi «đông nghịt người» trong câu về chợ hoa Nguyễn Huệ", "Chợ hoa trên đường Nguyễn Huệ như thế nào?"]
  ]}
];

function buildTopicQuestions() {
  const questions = [];
  for (const topic of topics) {
    topic.questions.forEach((q, i) => {
      const id = `${topic.id}_q${i + 1}`;
      if (q[0] === "multiple_choice") {
        questions.push({ id, skill: topic.id, topic: topic.id, type: "multiple_choice", question: q[1], choices: q[2], answer: q[3], hint: q[4] });
      } else if (q[0] === "true_false") {
        questions.push({ id, skill: topic.id, topic: topic.id, type: "true_false", question: q[1], answer: q[2], hint: q[3] });
      } else {
        questions.push({ id, skill: topic.id, topic: topic.id, type: "input", question: q[1], answer: q[2], hint: q[3] });
      }
    });
  }
  return questions;
}

function buildExamQuestions() {
  const questions = [];
  for (const exam of examSets) {
    const examId = `exam3_${exam.n}`;
    exam.q.forEach((item, idx) => {
      const id = `${examId}_q${idx + 1}`;
      const [kind, question, third, fourth, fifth] = item;
      if (kind === "mc") {
        questions.push({
          id,
          skill: examId,
          exam: examId,
          type: "multiple_choice",
          question: `[Đề ${exam.n}] ${question}`,
          choices: third,
          answer: fourth,
          hint: fifth || "Xem lại đáp án đề trong SGK ôn hè."
        });
      } else {
        questions.push({
          id,
          skill: examId,
          exam: examId,
          type: "input",
          question: `[Đề ${exam.n}] ${question}`,
          answer: third,
          hint: fourth || "Gõ đúng chính tả."
        });
      }
    });
  }
  return questions;
}

const topicLessons = topics.map((t) => ({
  id: t.id,
  title: t.title,
  topic: t.id,
  source: SOURCE,
  xp: t.xp,
  steps: [
    { type: "intro", title: "Mục tiêu chủ đề", content: t.description },
    { type: "keypoints", title: "Kiến thức cần nhớ", content: "Nắm vững các ý sau trước khi luyện:", points: t.keypoints },
    { type: "summary", title: "Sẵn sàng thử thách?", content: `Hoàn thành ${t.questions.length} câu để nhận sao và mở khóa đề tiếp theo!` }
  ]
}));

const exams = examSets.map((e) => ({
  id: `exam3_${e.n}`,
  order: e.n,
  title: `Đề ôn số ${e.n}`,
  questionCount: 5,
  xp: 50,
  passScore: 4,
  prerequisite: e.n === 1 ? ["sr3_vocab"] : [`exam3_${e.n - 1}`]
}));

const payload = {
  meta: {
    id: "summer_lit_g3_g4",
    packId: "g3-g4",
    title: "Ôn hè Tiếng Việt lớp 3 → lớp 4",
    subtitle: "6 chủ đề tương tác + 10 đề tổng hợp",
    gradeFrom: 3,
    gradeTo: 4,
    source: SOURCE
  },
  topics: topics.map(({ questions, keypoints, ...rest }) => rest),
  lessons: topicLessons,
  exams,
  questions: [...buildTopicQuestions(), ...buildExamQuestions()]
};

await writeFile("data/summer-review-g3-g4.json", `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(`✓ summer-review-g3-g4.json — ${payload.topics.length} chủ đề, ${payload.exams.length} đề, ${payload.questions.length} câu hỏi`);
