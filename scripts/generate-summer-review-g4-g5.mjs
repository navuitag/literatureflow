/**
 * Sinh nội dung Ôn hè Tiếng Việt lớp 4 → lớp 5 (6 chủ đề + 14 đề).
 * Nguồn: docs/CHUYÊN ĐỀ ÔN HÈ TIẾNG VIỆT LỚP 4 - LÊN 5.doc
 *        docs/ĐÁP ÁN ÔN HÈ TIẾNG VIỆT LỚP 4 - LÊN 5.doc
 * Chạy: node scripts/generate-summer-review-g4-g5.mjs
 */
import { writeFile } from "node:fs/promises";

const SOURCE =
  "CHUYÊN ĐỀ / ĐÁP ÁN ÔN HÈ TIẾNG VIỆT LỚP 4 - LÊN 5 (LiteratureFlow — 6 chủ đề + 14 đề tổng hợp).";

const topics = [
  {
    id: "sr4_word",
    order: 1,
    title: "Tiếng, từ ghép và từ láy",
    emoji: "🔤",
    description: "Cấu tạo tiếng; từ đơn, từ phức; từ ghép tổng hợp/phân loại; từ láy.",
    prerequisite: [],
    xp: 40,
    keypoints: [
      "Tiếng gồm: âm đầu (có thể không có), vần, thanh.",
      "Từ ghép tổng hợp: nghĩa tổng hợp (xe đạp, nụ hoa).",
      "Từ ghép phân loại: nghĩa phân loại (vui mừng, san sẻ).",
      "Từ láy: hai tiếng giống âm đầu hoặc giống vần (cong queo, ồn ào)."
    ],
    questions: [
      ["multiple_choice", "Tiếng «oán» có đủ ba bộ phận?", ["Có", "Không", "Chỉ có vần", "Chỉ có thanh"], "Có", "Âm đầu o + vần oan + thanh."],
      ["multiple_choice", "Bộ phận có thể không có trong tiếng?", ["Âm đầu", "Vần", "Thanh", "Cả vần và thanh"], "Âm đầu", "Ví dụ: ưa, an."],
      ["multiple_choice", "«xe đạp» thuộc loại?", ["Từ ghép tổng hợp", "Từ ghép phân loại", "Từ láy", "Từ đơn"], "Từ ghép tổng hợp", "Xe + đạp = phương tiện."],
      ["multiple_choice", "«vui mừng» thuộc loại?", ["Từ ghép phân loại", "Từ ghép tổng hợp", "Từ láy", "Danh từ riêng"], "Từ ghép phân loại", "Cùng nghĩa cảm xúc."],
      ["multiple_choice", "«cong queo» là?", ["Từ láy", "Từ ghép", "Từ đơn", "Thành ngữ"], "Từ láy", "Hai tiếng láy vần."],
      ["input", "Âm đầu tiếng «quà»?", "qu", "qu + à."],
      ["input", "Vần tiếng «oán»?", "oan", "o + an."],
      ["true_false", "«vận động viên» là từ ghép.", "Đúng", "vận động + viên."]
    ]
  },
  {
    id: "sr4_class",
    order: 2,
    title: "Danh từ, động từ, tính từ",
    emoji: "📚",
    description: "Từ loại lớp 4; chủ ngữ, vị ngữ trong câu.",
    prerequisite: ["sr4_word"],
    xp: 45,
    keypoints: [
      "Danh từ: chỉ sự vật, hiện tượng, khái niệm (bạn, sách, lòng vị tha).",
      "Động từ: chỉ hoạt động, trạng thái, quá trình (chạy, học, là).",
      "Tính từ: chỉ đặc điểm, tính chất (chăm chỉ, xanh biếc).",
      "Chủ ngữ (CN) trả lời Ai?/Cái gì?; Vị ngữ (VN) nói về CN."
    ],
    questions: [
      ["multiple_choice", "«bạn bè» là?", ["Danh từ", "Động từ", "Tính từ", "Trạng ngữ"], "Danh từ", "Chỉ người."],
      ["multiple_choice", "«học hành» là?", ["Động từ", "Danh từ", "Tính từ", "Liên từ"], "Động từ", "Hoạt động."],
      ["multiple_choice", "«dũng cảm» là?", ["Tính từ", "Danh từ", "Động từ", "Thán từ"], "Tính từ", "Đặc điểm."],
      ["multiple_choice", "«Bộ vẩy của tê tê màu đen nhạt» — CN?", ["Bộ vẩy của tê tê", "màu đen nhạt", "tê tê", "vẩy"], "Bộ vẩy của tê tê", "Ai? Cái gì?"],
      ["multiple_choice", "VN trong «Miệng tê tê nhỏ»?", ["nhỏ", "Miệng tê tê", "tê tê", "miệng"], "nhỏ", "Nói về miệng."],
      ["input", "Trái nghĩa «thật thà»?", "dối trá", "Hoặc: gian dối."],
      ["input", "Trái nghĩa «chăm chỉ»?", "lười biếng", "Đối lập."],
      ["true_false", "«Sách vở» là danh từ.", "Đúng", "Chỉ đồ vật."]
    ]
  },
  {
    id: "sr4_sentence",
    order: 3,
    title: "Các kiểu câu",
    emoji: "✍️",
    description: "Câu kể, hỏi, khiến, cảm; lời kể trực tiếp và gián tiếp.",
    prerequisite: ["sr4_class"],
    xp: 45,
    keypoints: [
      "Câu kể: kể sự việc, kết thúc bằng dấu chấm.",
      "Câu hỏi: hỏi thông tin, dấu hỏi chấm.",
      "Câu khiến: yêu cầu, đề nghị, mệnh lệnh.",
      "Lời kể trực tiếp có dấu hai chấm và ngoặc kép; gián tiếp không."
    ],
    questions: [
      ["multiple_choice", "«Em hãy học bài!» là câu?", ["Khiến", "Kể", "Hỏi", "Cảm"], "Khiến", "Hãy = yêu cầu."],
      ["multiple_choice", "«Bạn có khỏe không?» là câu?", ["Hỏi", "Kể", "Khiến", "Cảm"], "Hỏi", "Dấu hỏi."],
      ["multiple_choice", "«A, đẹp quá!» là câu?", ["Cảm", "Kể", "Hỏi", "Khiến"], "Cảm", "Cảm xúc."],
      ["multiple_choice", "Dấu hai chấm trước lời nói nhân vật báo hiệu?", ["Lời kể trực tiếp", "Lời kể gián tiếp", "Chỉ liệt kê", "Chỉ hỏi"], "Lời kể trực tiếp", "nói: (lời nhân vật)."],
      ["true_false", "«Bố tôi nói rằng sẽ đưa em đi chữa bệnh» là lời kể gián tiếp.", "Đúng", "Có «nói rằng»."],
      ["input", "Đặt một câu khiến mời bạn giữ trật tự", "Hãy giữ trật tự", "VD: Các bạn hãy giữ trật tự."],
      ["multiple_choice", "«Cho đi mà không cần nhận lại» — kiểu câu?", ["Kể", "Hỏi", "Khiến", "Cảm"], "Kể", "Trần thuật."],
      ["true_false", "Câu kể luôn kết thúc bằng dấu chấm.", "Đúng", "Quy tắc cơ bản."]
    ]
  },
  {
    id: "sr4_adverbial",
    order: 4,
    title: "Trạng ngữ trong câu",
    emoji: "📍",
    description: "Trạng ngữ chỉ thời gian, nơi chốn, nguyên nhân, mục đích.",
    prerequisite: ["sr4_sentence"],
    xp: 45,
    keypoints: [
      "Trạng ngữ thời gian: Khi nào? (sáng sớm, nghỉ hè…).",
      "Trạng ngữ nơi chốn: Ở đâu? (trong lớp, trên sân…).",
      "Trạng ngữ nguyên nhân: Vì sao? (vì trời mưa…).",
      "Trạng ngữ mục đích: Để làm gì? (để bảo vệ môi trường…)."
    ],
    questions: [
      ["multiple_choice", "«Nghỉ hè, cả nhà em về quê» — TN?", ["Nghỉ hè", "cả nhà em", "về quê", "nhà em"], "Nghỉ hè", "Thời gian."],
      ["multiple_choice", "«Trong vườn, trăm hoa đua nhau khoe sắc» — TN?", ["Trong vườn", "trăm hoa", "khoe sắc", "đua nhau"], "Trong vườn", "Nơi chốn."],
      ["multiple_choice", "«Vì trời mưa, lớp hoãn hội» — TN?", ["Vì trời mưa", "lớp", "hoãn hội", "hội"], "Vì trời mưa", "Nguyên nhân."],
      ["multiple_choice", "«Em quét rác để giữ sạch trường» — TN?", ["để giữ sạch trường", "quét rác", "em", "trường"], "để giữ sạch trường", "Mục đích."],
      ["input", "Hỏi TN «sáng sớm» trong «Sáng sớm, em dậy học bài»", "Khi nào", "Thời gian."],
      ["true_false", "Trạng ngữ thường đứng đầu câu hoặc cuối câu.", "Đúng", "Vị trí linh hoạt."],
      ["multiple_choice", "«Trên đường đi, bố tôi dừng xe» — TN?", ["Trên đường đi", "bố tôi", "dừng xe", "xe"], "Trên đường đi", "Nơi chốn."],
      ["input", "«Lớp 3B hoãn hội ... trời mưa» — điền liên từ nguyên nhân", "vì", "Vì trời mưa."]
    ]
  },
  {
    id: "sr4_figures",
    order: 5,
    title: "So sánh, nhân hóa và thành ngữ",
    emoji: "🎭",
    description: "Biện pháp tu từ; giải nghĩa thành ngữ, tục ngữ.",
    prerequisite: ["sr4_adverbial"],
    xp: 45,
    keypoints: [
      "So sánh: như, tựa, giống, hơn, kém…",
      "Nhân hóa: gọi, tả, xưng hô sự vật như người.",
      "Thành ngữ: Công cha như núi Thái Sơn…",
      "Tục ngữ: Một cây làm chẳng nên non…"
    ],
    questions: [
      ["multiple_choice", "«Mẹ là ngọn gió của con suốt đời» — BP?", ["So sánh", "Nhân hóa thuần", "Chính tả", "Liệt kê"], "So sánh", "Mẹ — gió."],
      ["multiple_choice", "«Công cha ... núi Thái Sơn» điền?", ["như", "và", "của", "trên"], "như", "Thành ngữ."],
      ["input", "«Một cây ... chẳng nên non»", "làm", "Tục ngữ."],
      ["multiple_choice", "«Thương người như thể thương thân» phù hợp bài?", ["Sẻ chia, giúp đỡ", "Thi chạy", "Chính tả", "Toán"], "Sẻ chia, giúp đỡ", "Tục ngữ."],
      ["multiple_choice", "«Ở hiền gặp lành» nghĩa?", ["Làm điều tốt được điều tốt", "Học giỏi", "Chạy nhanh", "Ăn no"], "Làm điều tốt được điều tốt", "Thành ngữ."],
      ["true_false", "«Ba cây chụm lại nên hòn núi cao» khuyên đoàn kết.", "Đúng", "Tục ngữ."],
      ["input", "«Tiếng ve râm ran ... tiếng nhạc» — từ SS", "như", "So sánh âm thanh."],
      ["multiple_choice", "«Tớ là chiếc xe lu» — BP?", ["Nhân hóa", "So sánh", "Chỉ liệt kê", "Hỏi"], "Nhân hóa", "Xe tự xưng."]
    ]
  },
  {
    id: "sr4_spelling",
    order: 6,
    title: "Chính tả và tập làm văn",
    emoji: "📝",
    description: "l/n, s/x, tr/ch; kể chuyện, miêu tả ngắn.",
    prerequisite: ["sr4_figures"],
    xp: 50,
    keypoints: [
      "Phân biệt l/n: làm, nên, non, núi.",
      "Phân biệt s/x: sách, xinh, sản xuất.",
      "Kể chuyện: có mở–thân–kết, đúng trình tự.",
      "Miêu tả: quan sát hình dáng, màu sắc, tình cảm."
    ],
    questions: [
      ["input", "«Một cây ...àm chẳng ...ên ...on» — âm đầu «làm»", "l", "làm."],
      ["input", "«Ba cây chụm ...ại ...ên hòn ...úi cao» — «nên»", "n", "nên."],
      ["input", "«...ản xuất» (s/x)", "s", "sản xuất."],
      ["input", "«cặp ...ách» (s/x)", "s", "sách."],
      ["multiple_choice", "Viết đúng?", ["xuất sắc", "suất sắc", "xuất sắt", "suất sắt"], "xuất sắc", "Chính tả."],
      ["true_false", "Kể chuyện nên có nhân vật, sự việc và ý nghĩa.", "Đúng", "Cấu trúc."],
      ["multiple_choice", "Tả đồ vật yêu quý cần?", ["Hình dáng, công dụng, tình cảm", "Chỉ tên", "Chỉ màu", "Không cần gì"], "Hình dáng, công dụng, tình cảm", "Đủ ý."],
      ["input", "«...inh xắn» (s/x)", "x", "xinh xắn."]
    ]
  }
];

/** 14 đề × 5 câu — bám đáp án trong tài liệu gốc (phần tự chấm được). */
const examSets = [
  { n: 1, q: [
    ["mc", "«nụ hoa» thuộc nhóm?", ["Từ ghép phân loại", "Từ ghép tổng hợp", "Từ láy", "Từ đơn"], "Từ ghép phân loại"],
    ["mc", "«cong queo» thuộc nhóm?", ["Từ láy", "Từ ghép tổng hợp", "Từ ghép phân loại", "Danh từ riêng"], "Từ láy"],
    ["input", "Đồng nghĩa «thật thà»?", "chân thật"],
    ["mc", "«Bộ vẩy của tê tê màu đen nhạt» — CN?", ["Bộ vẩy của tê tê", "màu đen nhạt", "tê tê", "vẩy cá gáy"], "Bộ vẩy của tê tê"],
    ["input", "«Một cây ...àm chẳng ...ên non» — âm đầu «làm»", "l"]
  ]},
  { n: 2, q: [
    ["mc", "Trong đoạn về biển, «mơ màng» là?", ["Từ láy", "Từ ghép tổng hợp", "Từ đơn", "Danh từ riêng"], "Từ láy"],
    ["mc", "«thay đổi» trong đoạn về biển là?", ["Từ ghép", "Từ láy", "Từ đơn", "Thành ngữ"], "Từ ghép"],
    ["input", "«Công cha ... núi Thái Sơn» (tr/ch)", "tr"],
    ["mc", "«Suối chảy róc rách» — CN?", ["Suối", "chảy", "róc rách", "tiếng suối"], "Suối"],
    ["mc", "«Tiếng suối chảy róc rách» — VN?", ["róc rách", "Tiếng suối chảy", "suối", "chảy"], "róc rách"]
  ]},
  { n: 3, q: [
    ["mc", "Trong đoạn giáo sư Vàng Anh, từ ghép là?", ["học trò", "dạy dỗ", "Ve Sầu", "hồi hộp"], "học trò"],
    ["mc", "Trong đoạn đó, từ láy là?", ["dạy dỗ", "học trò", "giáo sư", "tổ chức"], "dạy dỗ"],
    ["mc", "«tài giỏi» — tiếng Tài nghĩa?", ["Có khả năng hơn người bình thường", "Tiền của", "Tên riêng", "Địa danh"], "Có khả năng hơn người bình thường"],
    ["mc", "«Ông ngoại dẫn tôi đi mua vở, chọn bút» — mẫu câu?", ["Ai làm gì?", "Ai là gì?", "Ai thế nào?", "Cái gì là gì?"], "Ai làm gì?"],
    ["mc", "«Bác Hồ là vị anh hùng thiên tài của đất nước» — mẫu câu?", ["Ai là gì?", "Ai làm gì?", "Ai thế nào?", "Khi nào?"], "Ai là gì?"]
  ]},
  { n: 4, q: [
    ["mc", "«Anh chị nói nhỏ một chút có được không?» — câu hỏi dùng để?", ["Yêu cầu giữ trật tự", "Khen ngợi", "Chê bạn", "Khẳng định"], "Yêu cầu giữ trật tự"],
    ["mc", "«Sao bạn chịu khó thế?» — câu hỏi dùng để?", ["Khen ngợi bạn", "Chê bạn", "Hỏi thông tin", "Yêu cầu"], "Khen ngợi bạn"],
    ["mc", "«Mùa xuân, cây gạo gọi đến bao nhiêu là chim» — TN?", ["Mùa xuân", "cây gạo", "gọi đến", "chim"], "Mùa xuân"],
    ["mc", "«...một bông hoa rập rờn trước gió» — CN?", ["một bông hoa", "Giữa vườn lá xum xuê", "rập rờn", "gió"], "một bông hoa"],
    ["mc", "«Tớ làm thế này mà sai à?» — câu hỏi dùng để?", ["Khẳng định mình làm đúng", "Chê bạn", "Khen bạn", "Hỏi thời tiết"], "Khẳng định mình làm đúng"]
  ]},
  { n: 5, q: [
    ["mc", "Câu khiến thể hiện phép lịch sự?", ["Bạn có thể mở cửa sổ giúp mình được không?", "Mở cửa sổ ra cái", "Tắt ti vi đi!", "Này! Chiều qua chị nói gì?"], "Bạn có thể mở cửa sổ giúp mình được không?"],
    ["mc", "Biện pháp thể hiện phép lịch sự?", ["Cả hai ý trên", "Chỉ dùng câu hỏi và câu kể", "Chỉ thêm từ giúp, giùm", "Không dùng biện pháp nào"], "Cả hai ý trên"],
    ["mc", "«Trên triền đê, đàn trâu đang gặm cỏ» — TN?", ["Trên triền đê", "đàn trâu", "gặm cỏ", "đang"], "Trên triền đê"],
    ["mc", "«Nước chảy đá mòn» — động từ?", ["chảy", "Nước", "đá", "mòn"], "chảy"],
    ["input", "«Ba cây chụm ...ại ...ên hòn núi cao» — «nên»", "n"]
  ]},
  { n: 6, q: [
    ["mc", "Trong đoạn lá phượng, từ láy là?", ["dần dần", "mùa xuân", "ban đầu", "xòe ra"], "dần dần"],
    ["input", "Đồng nghĩa «thật thà»?", "trung thực"],
    ["input", "Trái nghĩa «siêng năng»?", "lười biếng"],
    ["mc", "Cùng nghĩa «dũng cảm»?", ["gan dạ", "thân thiết", "chăm chỉ", "lễ phép"], "gan dạ"],
    ["mc", "Câu kể Ai làm gì? trong đoạn thung lũng?", ["Thanh niên gỡ bẫy gà, bẫy chim", "Cả thung lũng giống như một bức tranh", "Phụ nữ giặt giũ bên giếng nước", "Không có câu nào"], "Thanh niên gỡ bẫy gà, bẫy chim"]
  ]},
  { n: 7, q: [
    ["mc", "Khổ thơ «Em mơ làm gió mát» — danh từ?", ["Em, gió, bác nông dân, chú công nhân", "mơ, làm, xua, cày", "mát, chuyên cần", "nhọc nhằn"], "Em, gió, bác nông dân, chú công nhân"],
    ["mc", "Khổ thơ đó — động từ?", ["mơ, làm, xua, cày", "Em, gió", "mát", "nông dân"], "mơ, làm, xua, cày"],
    ["mc", "«Trên bãi cỏ rộng, các em bé xinh xắn nô đùa vui vẻ» — TN?", ["Trên bãi cỏ rộng", "các em bé", "nô đùa", "vui vẻ"], "Trên bãi cỏ rộng"],
    ["input", "Đồng nghĩa «chăm chỉ»?", "siêng năng"],
    ["true_false", "«Mùa xuân, những tán lá xanh um, che mát cả sân trường» — TN là «Mùa xuân».", "Đúng"]
  ]},
  { n: 8, q: [
    ["mc", "«xanh tươi» trong bài thơ Bút chì xanh đỏ là?", ["Tính từ", "Danh từ", "Động từ", "Trạng ngữ"], "Tính từ"],
    ["mc", "«Ngoài đồng, bà con nông dân đang gặt lúa» — TN?", ["Ngoài đồng", "bà con", "gặt lúa", "lúa"], "Ngoài đồng"],
    ["mc", "«Con xanh biếc pha đen như nhung» — mẫu câu?", ["Ai thế nào?", "Ai làm gì?", "Ai là gì?", "Khi nào?"], "Ai thế nào?"],
    ["mc", "«Những con bướm đủ hình dáng, đủ màu sắc» — CN?", ["Những con bướm", "hình dáng", "màu sắc", "bướm quạ"], "Những con bướm"],
    ["mc", "«Buổi sáng, ánh nắng tràn trên mặt biển» — TN?", ["Buổi sáng", "ánh nắng", "mặt biển", "tràn"], "Buổi sáng"]
  ]},
  { n: 9, q: [
    ["mc", "«hay» trong «Ăn vóc học hay» là?", ["Tính từ", "Danh từ", "Động từ", "Thán từ"], "Tính từ"],
    ["input", "Trái nghĩa «nhỏ bé»?", "to lớn"],
    ["mc", "«Nhờ lạc quan, yêu đời, Bác vẫn sống ung dung...» — TN?", ["Nhờ lạc quan, yêu đời", "Bác", "vẫn sống", "ung dung"], "Nhờ lạc quan, yêu đời"],
    ["mc", "«Tại vì không nghe lời mẹ, cún con đã lạc đường» — TN?", ["Tại vì không nghe lời mẹ", "cún con", "lạc đường", "mẹ"], "Tại vì không nghe lời mẹ"],
    ["input", "Đồng nghĩa «gan dạ»?", "dũng cảm"]
  ]},
  { n: 10, q: [
    ["mc", "«sách vở» là?", ["Danh từ", "Động từ", "Tính từ", "Trạng ngữ"], "Danh từ"],
    ["mc", "Trong đoạn tre, từ láy là?", ["mộc mạc, nhũn nhặn", "cứng cáp, dẻo dai", "giản dị, chí khí", "thanh cao"], "mộc mạc, nhũn nhặn"],
    ["mc", "«Tuấn đi học» — kiểu câu?", ["Câu kể", "Câu hỏi", "Câu cảm", "Câu khiến"], "Câu kể"],
    ["mc", "«Vì gặp nhiều khó khăn, bạn Lan phải nghỉ học» — TN?", ["Vì gặp nhiều khó khăn", "bạn Lan", "nghỉ học", "khó khăn"], "Vì gặp nhiều khó khăn"],
    ["mc", "Trong đoạn tre, từ ghép là?", ["cứng cáp, dẻo dai", "mộc mạc", "nhũn nhặn", "vươn"], "cứng cáp, dẻo dai"]
  ]},
  { n: 11, q: [
    ["input", "«Nhường cơm ...ẻ áo» (s/x)", "s"],
    ["mc", "«Phùng Khắc Khoan là người con của xứ Đoài» — mẫu câu?", ["Ai là gì?", "Ai làm gì?", "Ai thế nào?", "Cái gì là gì?"], "Ai là gì?"],
    ["mc", "«Ông vốn thông minh từ nhỏ» — CN?", ["Ông", "thông minh", "vốn", "từ nhỏ"], "Ông"],
    ["mc", "«Ông vốn thông minh từ nhỏ» — VN?", ["vốn thông minh từ nhỏ", "Ông", "thông minh", "nhỏ"], "vốn thông minh từ nhỏ"],
    ["true_false", "«Ngày nọ, bố tôi lái xe đưa ông chủ đi tham dự buổi họp» có từ phức «buổi họp».", "Đúng"]
  ]},
  { n: 12, q: [
    ["input", "«Chớ thấy sóng cả mà lo / Sóng cả ... sóng chèo cho bỏng chèo»", "mặc"],
    ["mc", "Trong danh sách từ loại: «thợ rèn, mùa xuân, cửa sổ» là?", ["Danh từ", "Động từ", "Tính từ", "Trạng ngữ"], "Danh từ"],
    ["mc", "«Cô giáo đang giảng bài» chuyển thành câu hỏi?", ["Cô giáo đang giảng bài đúng không?", "Cô giáo giảng bài!", "Cô giáo giảng bài à?", "Giảng bài cô giáo"], "Cô giáo đang giảng bài đúng không?"],
    ["mc", "«Ông trời nổi lửa đằng đông» — CN?", ["Ông trời", "nổi lửa", "đằng đông", "lửa"], "Ông trời"],
    ["mc", "«Mẹ em tát nước, nắng đầy trong khau» — VN?", ["tát nước, nắng đầy trong khau", "Mẹ em", "nước", "khau"], "tát nước, nắng đầy trong khau"]
  ]},
  { n: 13, q: [
    ["mc", "«tài nghệ» — tiếng Tài nghĩa?", ["Có khả năng hơn người bình thường", "Tiền của", "Tên người", "Địa danh"], "Có khả năng hơn người bình thường"],
    ["mc", "«tài sản» — tiếng Tài nghĩa?", ["Tiền của", "Có khả năng hơn người", "Tên riêng", "Động từ"], "Tiền của"],
    ["mc", "Trong «tươi đẹp, tươi tắn, xinh xắn» — từ láy?", ["tươi tắn, xinh xắn", "tươi đẹp", "xinh đẹp", "tươi cười"], "tươi tắn, xinh xắn"],
    ["mc", "«Những lá ngô rộng dài trổ ra mạnh mẽ nõn nà» — CN?", ["Những lá ngô rộng dài", "trổ ra", "mạnh mẽ", "nõn nà"], "Những lá ngô rộng dài"],
    ["mc", "«Trên sông, thuyền bè ngược xuôi tấp nập» — TN?", ["Trên sông", "thuyền bè", "ngược xuôi", "tấp nập"], "Trên sông"]
  ]},
  { n: 14, q: [
    ["mc", "«hoa hồng» thuộc nhóm?", ["Từ ghép phân loại", "Từ ghép tổng hợp", "Từ láy", "Từ đơn"], "Từ ghép phân loại"],
    ["mc", "«hoa quả» thuộc nhóm?", ["Từ ghép tổng hợp", "Từ ghép phân loại", "Từ láy", "Danh từ riêng"], "Từ ghép tổng hợp"],
    ["mc", "Khi viết dấu thanh phải đặt ở?", ["Âm chính", "Âm đầu", "Cuối vần", "Bất kỳ âm nào"], "Âm chính"],
    ["mc", "«Chim hót líu lo» — danh từ?", ["Chim, nắng, hương hoa, tràm, gió, mùi hương, rừng", "hót, bốc, đưa", "líu lo, thơm ngây ngất", "ngọt"], "Chim, nắng, hương hoa, tràm, gió, mùi hương, rừng"],
    ["mc", "«Hoa hướng dương là chàng nhạc trưởng tài ba» — CN?", ["Hoa hướng dương", "chàng nhạc trưởng", "tài ba", "nhạc trưởng"], "Hoa hướng dương"]
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
    const examId = `exam4_${exam.n}`;
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
      } else if (kind === "true_false") {
        questions.push({
          id,
          skill: examId,
          exam: examId,
          type: "true_false",
          question: `[Đề ${exam.n}] ${question}`,
          answer: third,
          hint: fourth || "Đúng hoặc Sai."
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
  id: `exam4_${e.n}`,
  order: e.n,
  title: `Đề ôn số ${e.n}`,
  questionCount: 5,
  xp: 50,
  passScore: 4,
  prerequisite: e.n === 1 ? ["sr4_word"] : [`exam4_${e.n - 1}`]
}));

const payload = {
  meta: {
    id: "summer_lit_g4_g5",
    packId: "g4-g5",
    title: "Ôn hè Tiếng Việt lớp 4 → lớp 5",
    subtitle: "6 chủ đề tương tác + 14 đề tổng hợp",
    gradeFrom: 4,
    gradeTo: 5,
    source: SOURCE
  },
  topics: topics.map(({ questions, keypoints, ...rest }) => rest),
  lessons: topicLessons,
  exams,
  questions: [...buildTopicQuestions(), ...buildExamQuestions()]
};

await writeFile("data/summer-review-g4-g5.json", `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(`✓ summer-review-g4-g5.json — ${payload.topics.length} chủ đề, ${payload.exams.length} đề, ${payload.questions.length} câu hỏi`);
