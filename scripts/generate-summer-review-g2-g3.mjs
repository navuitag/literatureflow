/**
 * Sinh nội dung Ôn hè Tiếng Việt lớp 2 → lớp 3 (6 chủ đề + 12 đề).
 * Nguồn: CHUYÊN ĐỀ / ĐÁP ÁN ÔN HÈ TIẾNG VIỆT LỚP 2 - LÊN 3
 * Chạy: node scripts/generate-summer-review-g2-g3.mjs
 */
import { writeFile } from "node:fs/promises";

const SOURCE =
  "Chuyên đề Ôn hè Tiếng Việt lớp 2 - lên 3 (nội dung tương tác biên soạn theo tài liệu ôn hè).";

const topics = [
  {
    id: "sr2_vocab",
    order: 1,
    title: "Từ chỉ sự vật, hoạt động, đặc điểm",
    emoji: "📖",
    description: "Phân loại từ: chỉ sự vật, hoạt động–trạng thái, đặc điểm.",
    prerequisite: [],
    xp: 40,
    keypoints: [
      "Từ chỉ sự vật: người, vật, cây cối, thiên nhiên, thời gian (bác sĩ, trâu, hoa, mưa…).",
      "Từ chỉ hoạt động–trạng thái: đi, học, ngủ, vui, buồn, yêu…",
      "Từ chỉ đặc điểm: màu sắc, hình dáng, tính nết (xanh, cao, chăm chỉ…).",
      "Gạch chân đúng loại từ theo yêu cầu bài."
    ],
    questions: [
      ["multiple_choice", "«bác sĩ» thuộc loại từ nào?", ["Chỉ sự vật", "Chỉ hoạt động", "Chỉ đặc điểm", "Chỉ nơi chốn"], "Chỉ sự vật", "Chỉ tên người."],
      ["multiple_choice", "«học bài» thuộc loại từ nào?", ["Chỉ hoạt động", "Chỉ sự vật", "Chỉ đặc điểm", "Chỉ thời gian"], "Chỉ hoạt động", "Học = hoạt động."],
      ["multiple_choice", "«xanh biếc» thuộc loại từ nào?", ["Chỉ đặc điểm", "Chỉ sự vật", "Chỉ hoạt động", "Chỉ nghề nghiệp"], "Chỉ đặc điểm", "Màu sắc."],
      ["input", "Từ chỉ sự vật trong: hoa, xinh đẹp, cái bút → một từ", "hoa", "hoa, bút, trâu…"],
      ["input", "Từ chỉ hoạt động trong: cô giáo, viết, nghe giảng → một từ", "viết", "viết, nghe giảng."],
      ["multiple_choice", "«ngoan ngoãn» là từ chỉ?", ["Đặc điểm tính nết", "Sự vật", "Hoạt động", "Thời gian"], "Đặc điểm tính nết", "Phẩm chất con người."],
      ["true_false", "«mưa» là từ chỉ thời tiết, thuộc nhóm chỉ sự vật.", "Đúng", "Thiên nhiên, thời tiết."],
      ["multiple_choice", "Trong «Đàn trâu đang gặm cỏ», «gặm cỏ» là?", ["Hoạt động", "Sự vật", "Đặc điểm", "Địa điểm"], "Hoạt động", "Ai làm gì?"]
    ]
  },
  {
    id: "sr2_punct",
    order: 2,
    title: "Dấu câu",
    emoji: "❗",
    description: "Dấu chấm, phẩy, hỏi chấm, chấm than — khi nào dùng.",
    prerequisite: ["sr2_vocab"],
    xp: 45,
    keypoints: [
      "Dấu chấm: kết thúc câu kể.",
      "Dấu phẩy: ngăn từ cùng loại; ngăn bộ phận phụ đứng đầu câu.",
      "Dấu hỏi chấm: sau câu hỏi.",
      "Dấu chấm than: câu cảm, kêu gọi, yêu cầu."
    ],
    questions: [
      ["multiple_choice", "«Em là học sinh lớp 3A.» — dấu cuối câu?", ["Chấm", "Phẩy", "Hỏi", "Than"], "Chấm", "Câu kể."],
      ["multiple_choice", "«Mèo, chó, gà cùng sống…» — dấu phẩy ngăn?", ["Từ cùng chỉ sự vật", "Hai câu", "Câu hỏi", "Cảm xúc"], "Từ cùng chỉ sự vật", "Mèo, chó, gà."],
      ["true_false", "«Trong lớp, chúng em đang nghe giảng» — phẩy ngăn bộ phận phụ.", "Đúng", "Trong lớp = Ở đâu?"],
      ["multiple_choice", "«Ai là học sinh lớp 6?» — dấu cuối?", ["Hỏi chấm", "Chấm", "Phẩy", "Than"], "Hỏi chấm", "Câu hỏi."],
      ["multiple_choice", "«A, mẹ đã về!» — dấu cuối?", ["Chấm than", "Chấm", "Hỏi", "Phẩy"], "Chấm than", "Cảm xúc."],
      ["input", "Điền dấu: Ngày xưa có đôi bạn là Diệc và Cò ( ) — chấm hay phẩy?", "chấm", "Kết thúc ý."],
      ["true_false", "Dấu phẩy có thể đặt giữa các hoạt động liệt kê: đánh răng, rửa mặt, chải đầu.", "Đúng", "Cùng loại hoạt động."],
      ["multiple_choice", "«Việt Nam đất nước ta ơi!» là câu?", ["Gọi / cảm", "Kể", "Hỏi", "Mệnh lệnh trần thuật"], "Gọi / cảm", "Câu gọi, cảm."]
    ]
  },
  {
    id: "sr2_sentence",
    order: 3,
    title: "Kiểu câu Ai là gì? Ai làm gì? Ai thế nào?",
    emoji: "✍️",
    description: "Nhận biết và đặt câu theo ba mẫu cơ bản lớp 2.",
    prerequisite: ["sr2_punct"],
    xp: 45,
    keypoints: [
      "Ai là gì? — nhận định, giới thiệu (Bạn Nam là lớp trưởng).",
      "Ai làm gì? — kể hoạt động (Đàn trâu đang gặm cỏ).",
      "Ai thế nào? — miêu tả đặc điểm (Bông hoa hồng rất đẹp).",
      "Xác định bộ phận Ai? và phần còn lại."
    ],
    questions: [
      ["multiple_choice", "«Bạn Nam là lớp trưởng» thuộc mẫu?", ["Ai là gì?", "Ai làm gì?", "Ai thế nào?", "Câu hỏi"], "Ai là gì?", "Là lớp trưởng."],
      ["multiple_choice", "«Đàn trâu đang gặm cỏ» — bộ phận làm gì?", ["đang gặm cỏ", "Đàn trâu", "là trâu", "rất đẹp"], "đang gặm cỏ", "Ai làm gì?"],
      ["multiple_choice", "«Bông hoa hồng rất đẹp» thuộc mẫu?", ["Ai thế nào?", "Ai là gì?", "Ai làm gì?", "Ở đâu?"], "Ai thế nào?", "Rất đẹp."],
      ["input", "«Bố em là bác sĩ» — Ai?", "Bố em", "Chủ ngữ."],
      ["input", "«Chim công là nghệ sĩ múa của rừng xanh» — Là gì?", "nghệ sĩ múa của rừng xanh", "Vị ngữ."],
      ["true_false", "«Đàn voi đi đủng đỉnh trong rừng» là câu Ai thế nào?", "Đúng", "Thế nào = đủng đỉnh."],
      ["multiple_choice", "«Trường em là trường Tiểu học Lê Quý Đôn» — mẫu?", ["Ai là gì?", "Ai làm gì?", "Ai thế nào?", "Vì sao?"], "Ai là gì?", "Là trường…"],
      ["input", "Đặt câu Ai làm gì với «Em» và «học bài»", "Em học bài", "Em đang học bài."]
    ]
  },
  {
    id: "sr2_questions",
    order: 4,
    title: "Đặt và trả lời câu hỏi",
    emoji: "❓",
    description: "Khi nào, Ở đâu, Vì sao, Để làm gì, Như thế nào.",
    prerequisite: ["sr2_sentence"],
    xp: 45,
    keypoints: [
      "Khi nào? — thời gian (Tháng năm, hoa phượng nở đỏ rực…).",
      "Ở đâu? — địa điểm (Chim hót trên cành cây).",
      "Vì sao? — nguyên nhân (Vì mưa to, đường lầy lội).",
      "Để làm gì? — mục đích (Để khỏe mạnh, chúng em tập thể dục)."
    ],
    questions: [
      ["multiple_choice", "«Tháng năm, hoa phượng nở đỏ rực» — bộ phận trả lời?", ["Khi nào", "Ở đâu", "Vì sao", "Ai"], "Khi nào", "Tháng năm."],
      ["multiple_choice", "«Chim hót líu lo trên cành cây» — bộ phận?", ["Ở đâu", "Khi nào", "Làm gì", "Thế nào"], "Ở đâu", "Trên cành cây."],
      ["input", "«Vì mưa to, đường lầy lội» — hỏi gì?", "Vì sao", "Nguyên nhân."],
      ["input", "«Để khỏe mạnh, chúng em chăm tập thể dục» — hỏi gì?", "Để làm gì", "Mục đích."],
      ["multiple_choice", "Câu hỏi cho «Anh làm gì?» khi gạch «làm bài tập»?", ["Anh làm gì?", "Ai làm bài tập?", "Anh là ai?", "Anh thế nào?"], "Anh làm gì?", "Hỏi hoạt động."],
      ["multiple_choice", "«Hổ gầm như thế nào?» hỏi về?", ["Cách thức / đặc điểm", "Địa điểm", "Thời gian", "Mục đích"], "Cách thức / đặc điểm", "Như thế nào?"],
      ["true_false", "«Bao giờ hoa cúc nở vàng rực?» hỏi về thời gian.", "Đúng", "Khi nào?"],
      ["input", "Đặt câu hỏi cho gạch chân «vì sao» trong câu có «Thỏ thua Rùa»", "Thỏ thua Rùa vì sao?", "Hỏi nguyên nhân."]
    ]
  },
  {
    id: "sr2_spelling",
    order: 5,
    title: "Chính tả và từ ngữ",
    emoji: "🔤",
    description: "l/n, r/d/gi; mở rộng vốn từ theo chủ đề SGK lớp 2.",
    prerequisite: ["sr2_questions"],
    xp: 45,
    keypoints: [
      "Phân biệt l/n: no ấm, lo lắng, lung linh, nung nấu.",
      "Phân biệt r/d: dòng sông, rộng, dào dạt.",
      "Vốn từ học tập, gia đình, thiên nhiên, Bác Hồ.",
      "Thành ngữ: nhanh như cắt, chậm như rùa, hiền như bụt…"
    ],
    questions: [
      ["input", "«ăn ... ấm» (l/no)", "no", "ăn no."],
      ["input", "«... lắng» (lo/no)", "lo", "lo lắng."],
      ["input", "«gánh ...» (nặng/lặng)", "nặng", "gánh nặng."],
      ["input", "«... sông» (dòng/ròng)", "dòng", "dòng sông."],
      ["input", "«rộng ... mông» (mê/rê)", "mênh", "rộng mênh mông."],
      ["multiple_choice", "«tấp nập» viết?", ["tấp nập", "tấp lập", "tấp nạp", "tấp nạt"], "tấp nập", "Chính tả đúng."],
      ["multiple_choice", "«nóng nực» viết?", ["nóng nực", "lóng nực", "nóng lực", "nong nực"], "nóng nực", "Mùa hè."],
      ["true_false", "«Dế Mèn» viết D, không viết Gi.", "Đúng", "Tên riêng nhân vật."]
    ]
  },
  {
    id: "sr2_writing",
    order: 6,
    title: "Nói – viết và tập làm văn",
    emoji: "💬",
    description: "Đáp lời chào, cảm ơn, xin lỗi; viết đoạn văn ngắn.",
    prerequisite: ["sr2_spelling"],
    xp: 50,
    keypoints: [
      "Đáp lời chào: lịch sự, giới thiệu tên/lớp nếu cần.",
      "Đáp lời cảm ơn: «Không có gì», «Việc em nên làm»…",
      "Đáp lời xin lỗi: «Không sao», «Bạn cẩn thận hơn nhé».",
      "Viết đoạn: giới thiệu người thân, trường, mùa, con vật yêu thích."
    ],
    questions: [
      ["multiple_choice", "Bạn nói «Cảm ơn cậu nhé!» — em đáp?", ["Không có gì", "Tớ không biết", "Đi đi", "Im lặng"], "Không có gì", "Lịch sự."],
      ["multiple_choice", "Bạn xin lỗi vì đá cầu trúng — em đáp?", ["Không có gì", "Trả đũa", "Khóc", "Mắng to"], "Không có gì", "Tha thứ."],
      ["true_false", "Gặp lần đầu nên chào và giới thiệu tên, lớp.", "Đúng", "Giao tiếp lịch sự."],
      ["input", "Chào cô hàng xóm hỏi mẹ có nhà — em đáp bắt đầu «Cháu chào cô»", "Cháu chào cô, mẹ cháu ở nhà ạ", "Lịch sự."],
      ["multiple_choice", "Viết về trường em cần?", ["Tên, địa điểm, cảnh quan, tình cảm", "Chỉ tên trường", "Chỉ điểm số", "Không cần gì"], "Tên, địa điểm, cảnh quan, tình cảm", "Đủ ý."],
      ["multiple_choice", "«Cảm ơn Chích Bông xinh đẹp nhé!» thuộc?", ["Lời cảm ơn / viết thư", "Câu hỏi", "Chính tả", "Toán"], "Lời cảm ơn / viết thư", "Tập làm văn."],
      ["true_false", "Đoạn văn tả mùa thu có thể nói về trời, hoa cúc, không khí.", "Đúng", "Quan sát mùa."],
      ["input", "Câu mở đầu giới thiệu em gái: «Em gái của em tên là ...»", "Bảo Châu", "VD trong đáp án; học sinh tự điền tên."]
    ]
  }
];

/** 12 đề × 5 câu — bám đáp án PHẦN III. */
const examSets = [
  { n: 1, q: [
    ["mc", "Đề 1 — Đọc hiểu câu 1", ["A", "B", "C", "D"], "C"],
    ["mc", "Đề 1 — Đọc hiểu câu 2", ["A", "B", "C", "D"], "B"],
    ["mc", "Đề 1 — Đọc hiểu câu 3", ["A", "B", "C", "D"], "A"],
    ["input", "Điền l/n: «ăn ... ấm»", "no"],
    ["input", "Điền l/n: «gánh ...»", "nặng"]
  ]},
  { n: 2, q: [
    ["mc", "Đề 2 — Đọc hiểu câu 1", ["A", "B", "C", "D"], "B"],
    ["mc", "Đề 2 — Đọc hiểu câu 2", ["A", "B", "C", "D"], "B"],
    ["input", "«Cô giáo đang ... bài trên lớp» (hoạt động)", "giảng"],
    ["mc", "Gạch «cô ca sĩ nhỏ» — câu hỏi?", ["Ai là cô ca sĩ nhỏ của lớp em?", "Cô làm gì?", "Cô ở đâu?", "Cô thế nào?"], "Ai là cô ca sĩ nhỏ của lớp em?"],
    ["mc", "«Cặp sách» — câu hỏi cho bộ phận gạch?", ["Cặp sách là gì?", "Ai là cặp sách?", "Cặp sách làm gì?", "Cặp sách ở đâu?"], "Cặp sách là gì?"]
  ]},
  { n: 3, q: [
    ["mc", "Đề 3 — Đọc hiểu câu 1", ["A", "B", "C", "D"], "B"],
    ["mc", "Đề 3 — Đọc hiểu câu 3", ["A", "B", "C", "D"], "B"],
    ["input", "Điền hoạt động: mẹ «... gạo»", "đong"],
    ["input", "Điền hoạt động: mẹ «... cơm»", "nấu"],
    ["mc", "Dấu phẩy trong «Hoàng Minh thích chơi bóng bàn, bóng đá» để?", ["Ngăn hoạt động cùng loại", "Kết thúc câu", "Hỏi", "Cảm"], "Ngăn hoạt động cùng loại"]
  ]},
  { n: 4, q: [
    ["mc", "Đề 4 — Đọc hiểu câu 1", ["A", "B", "C", "D"], "C"],
    ["mc", "Đề 4 — Đọc hiểu câu 2", ["A", "B", "C", "D"], "A"],
    ["input", "«Bệnh viện là nơi ... cho mọi người»", "khám chữa bệnh"],
    ["input", "«Trường học là nơi ... của học sinh»", "học tập và rèn luyện"],
    ["input", "«Công viên là nơi ...»", "vui chơi giải trí"]
  ]},
  { n: 5, q: [
    ["mc", "Đề 5 — Đọc hiểu câu 1", ["A", "B", "C", "D"], "C"],
    ["mc", "Đề 5 — Đọc hiểu câu 2", ["A", "B", "C", "D"], "A"],
    ["input", "Trong thơ «Khi em bé khóc», anh «... dành» em", "dỗ"],
    ["mc", "«Anh // dỗ dành em bé» — tách câu đúng?", ["Đúng", "Sai", "Không biết", "Bỏ qua"], "Đúng"],
    ["input", "Mẫu Ai làm gì: «Em đang ...»", "học bài"]
  ]},
  { n: 6, q: [
    ["mc", "Đề 6 — Đọc hiểu câu 1", ["A", "B", "C", "D"], "A"],
    ["mc", "Đề 6 — Đọc hiểu câu 3", ["A", "B", "C", "D"], "B"],
    ["input", "«Nước biển xanh ...» (màu)", "biếc"],
    ["input", "«Sóng biển ...» (âm thanh)", "ào ào"],
    ["mc", "«Vì gió to, sóng biển cuộn lên ào ào» — hỏi gì?", ["Vì sao?", "Ở đâu?", "Khi nào?", "Ai?"], "Vì sao?"]
  ]},
  { n: 7, q: [
    ["mc", "Đề 7 — Đọc hiểu câu 1", ["A", "B", "C", "D"], "B"],
    ["input", "«... sông rộng mênh mông» (d/r)", "dòng"],
    ["input", "«bứt lên phía trước» — âm cuối ưt hay ưc?", "ưc"],
    ["mc", "Cá gì nghe ngỡ bay cao trên trời?", ["Cá chuồn", "Cá voi", "Cá rô", "Cá mập"], "Cá chuồn"],
    ["mc", "Cá gì vượt thác hóa rồng?", ["Cá chép", "Cá chuồn", "Cá basa", "Cá thu"], "Cá chép"]
  ]},
  { n: 8, q: [
    ["mc", "Đề 8 — Đọc hiểu câu 1", ["A", "B", "C", "D"], "C"],
    ["input", "«Mùa xuân, cây gạo gọi đến bao nhiêu là ...»", "chim"],
    ["input", "«Mùa đông, cây chỉ còn những cành trơ trụi, ...»", "cằn cỗi"],
    ["mc", "«Mấy cây hoa giấy nở hoa tưng bừng ở đâu?» hỏi về?", ["Địa điểm", "Thời gian", "Mục đích", "Nguyên nhân"], "Địa điểm"],
    ["mc", "Gạch «Như thế nào?» — «liên miên, không dứt» trả lời?", ["Cách thức / mức độ", "Nơi chốn", "Thời gian", "Mục đích"], "Cách thức / mức độ"]
  ]},
  { n: 9, q: [
    ["mc", "Đề 9 — Đọc hiểu câu 1", ["A", "B", "C", "D"], "B"],
    ["input", "«Ông em trồng cây na để con cháu có ... ăn»", "quả"],
    ["mc", "Cây cho lương thực (lúa, ngô, khoai) gọi là?", ["Cây lương thực", "Cây lấy gỗ", "Cây công nghiệp", "Cây bóng mát"], "Cây lương thực"],
    ["mc", "Cây trồng lấy gỗ (xoan, lim) gọi là?", ["Cây lấy gỗ", "Cây hoa", "Cây lương thực", "Cây thuốc"], "Cây lấy gỗ"],
    ["input", "«Mùa xuân( , ) cây gạo gọi đến bao nhiêu là chim ( . )» — dấu trong ngoặc đầu?", "phẩy"]
  ]},
  { n: 10, q: [
    ["mc", "Đề 10 — Đọc hiểu câu 1", ["A", "B", "C", "D"], "C"],
    ["mc", "Bộ phận đâm sâu xuống đất, hút dinh dưỡng là?", ["Rễ", "Lá", "Hoa", "Quả"], "Rễ"],
    ["mc", "Bộ phận tạo chất nuôi cây, hình dẹt trên cành là?", ["Lá", "Rễ", "Gốc", "Hoa"], "Lá"],
    ["mc", "Quả là bộ phận phát triển từ?", ["Bầu nhụy hoa", "Rễ", "Gốc", "Đất"], "Bầu nhụy hoa"],
    ["mc", "Bạn chúc đạt HSG — em đáp lịch sự?", ["Cảm ơn bạn, tớ chúc bạn cũng đạt", "Im lặng", "Không cần", "Đi đi"], "Cảm ơn bạn, tớ chúc bạn cũng đạt"]
  ]},
  { n: 11, q: [
    ["mc", "Đề 11 — Đọc hiểu câu 1", ["A", "B", "C", "D"], "C"],
    ["input", "Sửa chính tả: «Dế Mèn ... ruổi trên đường» (rong/rong)", "rong"],
    ["input", "«Bác Hồ sống rất ...» (giản dị)", "giản dị"],
    ["mc", "Bác Hồ sáng sớm thường?", ["Tập thể dục, tắm rửa", "Ngủ muộn", "Không ra ngoài", "Chỉ ăn sáng"], "Tập thể dục, tắm rửa"],
    ["true_false", "«đáo để» trong «mỗi người một vẻ» viết đúng.", "Sai", "Đúng: đáo để (hay ho)."]
  ]},
  { n: 12, q: [
    ["mc", "Đề 12 — Đọc hiểu câu 1", ["A", "B", "C", "D"], "B"],
    ["mc", "Đề 12 — Đọc hiểu câu 2", ["A", "B", "C", "D"], "A"],
    ["mc", "«Bé chăm chỉ làm việc nhà» thuộc mẫu?", ["Ai làm gì?", "Ai là gì?", "Ai thế nào?", "Câu hỏi"], "Ai làm gì?"],
    ["mc", "«Đôi mắt của bà nội» — «mờ mờ đục đục» trả lời?", ["Thế nào?", "Là gì?", "Làm gì?", "Ở đâu?"], "Thế nào?"],
    ["input", "«Giọng nói của mẹ» — điền đặc điểm: «..., ấm áp»", "dịu dàng"]
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
    const examId = `exam2_${exam.n}`;
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
  id: `exam2_${e.n}`,
  order: e.n,
  title: `Đề ôn số ${e.n}`,
  questionCount: 5,
  xp: 50,
  passScore: 4,
  prerequisite: e.n === 1 ? ["sr2_vocab"] : [`exam2_${e.n - 1}`]
}));

const payload = {
  meta: {
    id: "summer_lit_g2_g3",
    packId: "g2-g3",
    title: "Ôn hè Tiếng Việt lớp 2 → lớp 3",
    subtitle: "6 chủ đề tương tác + 12 đề tổng hợp",
    gradeFrom: 2,
    gradeTo: 3,
    source: SOURCE
  },
  topics: topics.map(({ questions, keypoints, ...rest }) => rest),
  lessons: topicLessons,
  exams,
  questions: [...buildTopicQuestions(), ...buildExamQuestions()]
};

await writeFile("data/summer-review-g2-g3.json", `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(`✓ summer-review-g2-g3.json — ${payload.topics.length} chủ đề, ${payload.exams.length} đề, ${payload.questions.length} câu hỏi`);
