/**
 * Sinh nội dung Ôn hè Tiếng Việt lớp 1 → lớp 2 (6 chủ đề + 30 đề).
 * Nguồn: CHUYÊN ĐỀ / ĐÁP ÁN ÔN HÈ TIẾNG VIỆT LỚP 1 - LÊN 2
 * Chạy: node scripts/generate-summer-review-g1-g2.mjs
 */
import { writeFile } from "node:fs/promises";

const SOURCE =
  "Chuyên đề Ôn hè Tiếng Việt lớp 1 - lên 2 (nội dung tương tác biên soạn theo tài liệu ôn hè).";

const topics = [
  {
    id: "sr1_syllable",
    order: 1,
    title: "Âm tiết và vần",
    emoji: "🔤",
    description: "Cấu tạo âm tiết: âm đầu, vần, thanh; các mẫu vần cơ bản.",
    prerequisite: [],
    xp: 40,
    keypoints: [
      "Mỗi tiếng Việt là một âm tiết: âm đầu + vần + thanh.",
      "Vần có thể chỉ có âm chính (/ba/), có đệm (/oa/), có cuối (/an/), đủ ba (/oan/).",
      "Nguyên âm đôi: /iê/, /uô/, /ươ/ đặt ở âm chính.",
      "Tiếng Việt có 6 thanh: ngang, huyền, hỏi, ngã, sắc, nặng."
    ],
    questions: [
      ["multiple_choice", "Tiếng Việt có mấy thanh?", ["4", "5", "6", "8"], "6", "Ngang, huyền, hỏi, ngã, sắc, nặng."],
      ["multiple_choice", "Vần /ba/ thuộc mẫu nào?", ["Chỉ có âm chính", "Có đệm và chính", "Có chính và cuối", "Đủ đệm chính cuối"], "Chỉ có âm chính", "Mẫu 1: ba, me, lo."],
      ["multiple_choice", "Vần /oan/ gồm?", ["Đệm + chính + cuối", "Chỉ âm chính", "Chỉ âm đầu", "Chỉ thanh"], "Đệm + chính + cuối", "Mẫu 4: o-a-n."],
      ["input", "Nguyên âm đôi /iê/ thường ghi bằng chữ?", "iê", "Ví dụ: tiến, biển."],
      ["multiple_choice", "Tiếng nào không có âm đầu?", ["im", "bim", "tim", "kim"], "im", "ẵm, im, yên, ai…"],
      ["input", "Vần /uô/ có nguyên âm đôi gì?", "uô", "uôn, muốn, cuốn."],
      ["true_false", "Mỗi tiếng đều phải có vần và thanh.", "Đúng", "Có thể không có âm đầu."],
      ["multiple_choice", "Vần /oa/ là?", ["Đệm o + chính a", "Chỉ a", "Chỉ o", "Nguyên âm đôi"], "Đệm o + chính a", "Mẫu 2: hoa, loa."]
    ]
  },
  {
    id: "sr1_initial",
    order: 2,
    title: "Quy tắc viết âm đầu",
    emoji: "✏️",
    description: "c/k/qu; ng/ngh; gh/g — quy tắc có trong SGK lớp 1.",
    prerequisite: ["sr1_syllable"],
    xp: 45,
    keypoints: [
      "Trước e, ê, i viết k (kem, kẻ); trước a, o, u… viết c (cá, cỏ).",
      "Trước e, ê, i viết gh (ghé); trước a, o, u… viết g (gà, gỗ).",
      "Trước e, ê, i viết ng (nghe); trước a, o, u… viết ngh (nghé, nghĩ).",
      "qu + e, ê, i → qu (que, quy); không viết cu, ku."
    ],
    questions: [
      ["multiple_choice", "Tiếng «kem» viết k vì trước âm?", ["e", "a", "o", "u"], "e", "k + e, ê, i."],
      ["multiple_choice", "Tiếng «cá» viết c vì trước âm?", ["a", "e", "i", "ê"], "a", "c + a, o, u, ư…"],
      ["input", "«nghĩ» viết ngh vì trước vần?", "i", "ngh + a, o, u…"],
      ["multiple_choice", "«nghe» viết ng vì?", ["Trước e", "Trước a", "Trước u", "Trước o"], "Trước e", "ng + e, ê, i."],
      ["multiple_choice", "«que» viết đầu là?", ["qu", "cu", "ku", "gu"], "qu", "qu + e, ê, i."],
      ["true_false", "«gà» viết gh vì trước a.", "Sai", "g + a, o, u; gh + e, ê, i."],
      ["input", "Điền đầu: ...é (con vật kêu sáng sớm)", "g", "g + a → gà; ngh + e → nghé."],
      ["multiple_choice", "«nghé» viết ngh vì?", ["Trước e", "Trước a", "Trước o", "Không có quy tắc"], "Trước e", "ngh + e."]
    ]
  },
  {
    id: "sr1_tone",
    order: 3,
    title: "Quy tắc dấu thanh",
    emoji: "🎵",
    description: "Đặt dấu trên nguyên âm chính; quy tắc nguyên âm đôi.",
    prerequisite: ["sr1_initial"],
    xp: 45,
    keypoints: [
      "Một nguyên âm: dấu đặt trên âm chính (lá, mạ, bút).",
      "Có âm cuối: dấu ở yếu tố sau của âm chính (muốn, tiến).",
      "Không âm cuối: dấu ở yếu tố trước (múa, cửa, mía).",
      "Vần oa, oe, uy: dấu đặt ở âm chính (hoa, hoè, quý)."
    ],
    questions: [
      ["multiple_choice", "«lá» — dấu sắc đặt ở?", ["Âm chính a", "Âm đầu l", "Cuối tiếng", "Thanh riêng"], "Âm chính a", "Một nguyên âm."],
      ["multiple_choice", "«muốn» — dấu đặt ở?", ["uô", "mu", "n", "o"], "uô", "Có âm cuốn → dấu ở sau."],
      ["multiple_choice", "«múa» — dấu đặt ở?", ["u", "a", "m", "Không có dấu"], "u", "Không âm cuối → dấu ở trước."],
      ["true_false", "«hoa» — dấu đặt trên a.", "Đúng", "Quy tắc vần oa."],
      ["input", "«tiến» ghi nguyên âm đôi là?", "iê", "iê + n."],
      ["multiple_choice", "«cửa» ghi vần?", ["ưa", "ua", "ia", "oe"], "ưa", "Không âm cuối → ưa."],
      ["true_false", "«mía» dấu sắc ở i (trước).", "Đúng", "ia không âm cuối."],
      ["input", "«quý» — dấu đặt trên chữ?", "y", "Vần uy."]
    ]
  },
  {
    id: "sr1_confusion",
    order: 4,
    title: "Âm đầu dễ lẫn",
    emoji: "🔀",
    description: "x/s; r/d/gi; ch/tr — phân biệt khi điền và đọc.",
    prerequisite: ["sr1_tone"],
    xp: 45,
    keypoints: [
      "x/s: xinh xắn, sách, sao, xuân.",
      "r/d/gi: rùa, dừa, giun; rét/dét, rau/dau.",
      "ch/tr: chăm, trường, chanh, trang.",
      "Đọc kỹ ngữ cảnh trước khi chọn chữ."
    ],
    questions: [
      ["multiple_choice", "«...inh xắn» điền?", ["x", "s", "ch", "tr"], "x", "xinh xắn."],
      ["multiple_choice", "«...ách» (vật đọc) điền?", ["s", "x", "r", "d"], "s", "sách."],
      ["multiple_choice", "«...ùa con đi học» (truyện)?", ["R", "D", "Gi", "Tr"], "R", "Rùa con đi học."],
      ["multiple_choice", "«...ó thổi» trong thơ Rùa con?", ["g", "r", "d", "gi"], "g", "Heo heo gió thổi."],
      ["input", "«...ường em» (nơi học)", "tr", "trường."],
      ["multiple_choice", "«cây ...anh» (cây ăn quả chua)?", ["ch", "tr", "x", "s"], "ch", "chanh."],
      ["multiple_choice", "«...ang» (màu cờ) điền?", ["tr", "ch", "r", "gi"], "tr", "trang / vàng."],
      ["true_false", "«giun» viết gi, không viết d.", "Đúng", "gi + u, e, ê, i."]
    ]
  },
  {
    id: "sr1_rhyme",
    order: 5,
    title: "Vần và từ vựng",
    emoji: "📚",
    description: "Tìm tiếng theo vần; ghép từ; từ đồng nghĩa gần nghĩa.",
    prerequisite: ["sr1_confusion"],
    xp: 45,
    keypoints: [
      "Tìm tiếng cùng vần trong bài hoặc ngoài bài.",
      "Ghép tiếng thành từ đúng nghĩa.",
      "Từ chủ đề: gia đình, trường học, thiên nhiên.",
      "Giải câu đố: đoán từ theo gợi ý."
    ],
    questions: [
      ["input", "Vần ao: «đèn ông ...» (đèn lồng)", "sáo", "Đèn ông sáo."],
      ["input", "Vần au: «con ...» (vật nuôi)", "trâu", "Con trâu."],
      ["multiple_choice", "«xôi gấc» — «sôi» hay «xôi»?", ["xôi", "sôi", "Cả hai", "Không có"], "xôi", "Xôi gấc (thức ăn)."],
      ["multiple_choice", "«nước sôi» — «sôi» hay «xôi»?", ["sôi", "xôi", "soi", "xoi"], "sôi", "Nước sôi."],
      ["input", "Ghép từ: cây + bàng → ?", "cây bàng", "Danh từ ghép."],
      ["input", "Vần ang: «cây ...» (cây trường học)", "bàng", "Cây bàng."],
      ["multiple_choice", "«nỗi buồn» hay «lỗi buồn»?", ["nỗi buồn", "lỗi buồn", "nỗi vui", "lỗi vui"], "nỗi buồn", "nỗi = cảm xúc."],
      ["input", "«mắc ...» (sai sót)", "lỗi", "mắc lỗi."]
    ]
  },
  {
    id: "sr1_reading",
    order: 6,
    title: "Đọc hiểu và câu",
    emoji: "📖",
    description: "Ý chính, nối câu, sắp xếp từ, trả lời câu hỏi đọc.",
    prerequisite: ["sr1_rhyme"],
    xp: 50,
    keypoints: [
      "Đọc kỹ bài; gạch chân từ khóa trong câu hỏi.",
      "Nối vế câu: chủ ngữ + vị ngữ hợp nghĩa.",
      "Sắp xếp từ thành câu: ai làm gì, ở đâu.",
      "Viết câu đủ ý; chữ cái đầu viết hoa, chấm cuối câu."
    ],
    questions: [
      ["multiple_choice", "«Bạn Tuấn rất chăm chỉ học bài» — ai chăm chỉ?", ["Tuấn", "Cô giáo", "Sách", "Trường"], "Tuấn", "Chủ ngữ Tuấn."],
      ["multiple_choice", "Nối: «Thời tiết hôm nay» + ?", ["rất nóng", "suốt mùa hè", "đuổi bắt", "ríu rít"], "rất nóng", "Thời tiết — rất nóng."],
      ["true_false", "Câu cần viết hoa chữ đầu và chấm cuối.", "Đúng", "Quy tắc cơ bản."],
      ["input", "Sắp xếp: «bài / chú / ếch / học / xanh» → bắt đầu «Chú»", "Chú ếch xanh học bài", "Chú ếch xanh học bài."],
      ["multiple_choice", "«Cô giáo cho Hoa mượn cuốn sách» — ai mượn sách?", ["Hoa", "Cô giáo", "Tuấn", "Bạn"], "Hoa", "Hoa mượn sách."],
      ["multiple_choice", "Ý chính bài đọc là?", ["Điều quan trọng nhất", "Tên tác giả", "Số trang", "Màu sắc"], "Điều quan trọng nhất", "Đọc hiểu."],
      ["input", "«Sân trường có những cây ... tỏa bóng xanh mát»", "bàng", "Cây bàng."],
      ["true_false", "Có thể nối «Chú ve ca hát» với «suốt mùa hè».", "Đúng", "Ve hát suốt mùa hè."]
    ]
  }
];

/** 30 đề × 5 câu — bám đáp án tài liệu (bỏ bài chép chính tả, thay bằng trắc nghiệm). */
const examSets = [
  { n: 1, q: [
    ["mc", "«ngẫm nghĩ» viết «ngh» vì?", ["Trước i", "Trước a", "Trước u", "Trước o"], "Trước i"],
    ["mc", "«hang động» hay «giang động»?", ["hang động", "giang động", "hang đọng", "nhang động"], "hang động"],
    ["mc", "Đề 1 — Chọn đáp án đúng (câu 1):", ["A", "B", "C", "D"], "B"],
    ["mc", "Đề 1 — Chọn đáp án đúng (câu 3):", ["A", "B", "C", "D"], "A"],
    ["input", "Hoàn thành: Chú ... xanh học bài bên bờ ao.", "ếch"]
  ]},
  { n: 2, q: [
    ["mc", "«ngắm nghía» viết đầu?", ["ng", "ngh", "n", "g"], "ng"],
    ["mc", "«rét buốt» viết đầu?", ["r", "d", "gi", "tr"], "r"],
    ["input", "«cái ... xe» (yên ngựa)", "yên"],
    ["mc", "Đề 2 — Câu 1 đáp án?", ["A", "B", "C", "D"], "B"],
    ["input", "Thành chơi bóng đá cùng các bạn → chủ ngữ?", "Thành"]
  ]},
  { n: 3, q: [
    ["input", "Ghép từ chủ đề trường: cô ...", "giáo"],
    ["mc", "«xôi gấc» viết?", ["xôi", "sôi", "soi", "xoi"], "xôi"],
    ["mc", "«nỗi buồn» viết?", ["nỗi buồn", "lỗi buồn", "nỗi vui", "lõi buồn"], "nỗi buồn"],
    ["mc", "Đề 3 — Câu 1?", ["A", "B", "C", "D"], "B"],
    ["input", "«Bạn Tuấn rất chăm chỉ ...»", "học bài"]
  ]},
  { n: 4, q: [
    ["input", "«cây ...» (cây ăn quả chua)", "chanh"],
    ["input", "Vần oang: «...» (khoảng cách)", "khoảng"],
    ["mc", "Đề 4 — Câu 1?", ["A", "B", "C", "D"], "A"],
    ["input", "Vần uyên: «ch...ến» (đi chuyến)", "uy"],
    ["input", "Câu có vần oang: Mùi hương hoa hồng ... trong gió.", "thoang"]
  ]},
  { n: 5, q: [
    ["mc", "Đề 5 — Câu 1?", ["A", "B", "C", "D"], "B"],
    ["mc", "Loài vật có mai cứng, tám chân?", ["Con cua", "Con cá", "Con chim", "Con chó"], "Con cua"],
    ["mc", "Từ hàng dọc đố ô chữ: T U Ổ I T H Ơ →?", ["tuổi thơ", "tuổi học", "tuổi thơ", "trường học"], "tuổi thơ"],
    ["input", "«Lũy tre xanh ...»", "mát"],
    ["input", "«bức ...» (tranh vẽ)", "tranh"]
  ]},
  { n: 6, q: [
    ["input", "«buổi chiều» — «th...y triều»", "ủ"],
    ["input", "«con ...» (kéo cày)", "trâu"],
    ["mc", "Đề 6 — Câu 1?", ["A", "B", "C", "D"], "C"],
    ["input", "Từ ghép: ... trường", "sân"],
    ["input", "«Hươu Cao Cổ mới được chuyển về ...»", "vườn thú"]
  ]},
  { n: 7, q: [
    ["mc", "Đề 7 — Câu 1?", ["A", "B", "C", "D"], "A"],
    ["input", "«Không phải tại ... chua» (quả)", "sấu"],
    ["input", "Tiếng bắt đầu bằng g: ...ốc", "g"],
    ["mc", "«Ch: chia» — từ nào bắt đầu ch?", ["chia sẻ", "trồng", "gốc", "rau"], "chia sẻ"],
    ["input", "Tiếng bắt đầu tr: tr...", "ồng"]
  ]},
  { n: 8, q: [
    ["input", "«con ...» (vịt hoang)", "ngan"],
    ["mc", "Đố vui: con gì ăn lá dâu nhả tơ?", ["Tằm", "Trâu", "Cá", "Chó"], "Tằm"],
    ["mc", "Từ hàng dọc T H Â N Y Ê U →?", ["thân yêu", "thanh yêu", "thân thiết", "tháng năm"], "thân yêu"],
    ["mc", "Đề 8 — Câu 1?", ["A", "B", "C", "D"], "B"],
    ["input", "Chim sơn ca hót ...", "lảnh lót"]
  ]},
  { n: 9, q: [
    ["input", "«cái ...» (dụng cụ cắt)", "kéo"],
    ["input", "«... nhanh» (thông minh)", "tinh"],
    ["mc", "Đề 9 — Câu 1?", ["A", "B", "C", "D"], "B"],
    ["input", "Gà trống vỗ cánh như hai chiếc ...", "quạt"],
    ["mc", "Màu bông râm bụt?", ["đỏ chói", "xanh", "vàng", "trắng"], "đỏ chói"]
  ]},
  { n: 10, q: [
    ["mc", "«Trắng như ...» (tuyết/bông)?", ["tuyết", "đen", "xanh", "đỏ"], "tuyết"],
    ["mc", "«dế ...» viết?", ["dế mèn", "rế mèn", "giế mèn", "chế mèn"], "dế mèn"],
    ["mc", "Đề 10 — Câu 1?", ["A", "B", "C", "D"], "C"],
    ["input", "«Một màu vàng đáng yêu như màu những con ... non»", "tơ"],
    ["input", "«Đôi chân chú ngan con bé tí như hai que ...»", "diêm"]
  ]},
  { n: 11, q: [
    ["input", "«quả ...» (quýt)", "đào"],
    ["mc", "Đề 11 — Câu 2?", ["A", "B", "C", "D"], "C"],
    ["input", "«Cày cấy ; nhảy ... ; đám mây»", "dây"],
    ["mc", "Đề 11 — Câu 4?", ["A", "D", "B", "C"], "A"],
    ["input", "«Em rất yêu ... của mình»", "mẹ"]
  ]},
  { n: 12, q: [
    ["input", "«Mùa ...» (mùa đầu năm)", "xuân"],
    ["input", "«Quả ...» (trái cây nhiệt đới)", "xoài"],
    ["mc", "Đề 12 — Câu 1?", ["A", "B", "C", "D"], "B"],
    ["input", "«chị ... rất giống mẹ» (tên)", "Yến"],
    ["mc", "Bài học: cần chăm chỉ?", ["lao động", "chơi", "ngủ", "vẽ"], "lao động"]
  ]},
  { n: 13, q: [
    ["input", "«Buổi sáng ; ... đẹp ; xe đạp»", "xinh"],
    ["mc", "Đề 13 — Câu 1?", ["A", "B", "C", "D"], "B"],
    ["input", "Thơ: «Có chú là chú ... con»", "ếch"],
    ["mc", "Đề 13 — Câu 4?", ["A", "B", "C", "D"], "C"],
    ["input", "Khi gặp người lớn em ... hỏi.", "chào"]
  ]},
  { n: 14, q: [
    ["mc", "Thành ngữ: «Tre già ... mọc»", ["măng", "lá", "gốc", "cành"], "măng"],
    ["mc", "Đề 14 — Câu 1?", ["A", "B", "C", "D"], "B"],
    ["input", "«Em nghĩ mình là người ...»", "thông minh"],
    ["input", "Bài thơ nói về quả ... màu vàng.", "thị"],
    ["input", "«Cây tre xanh ...» (mát)", "mát"]
  ]},
  { n: 15, q: [
    ["input", "«cá ...» (cá nước ngọt)", "rô"],
    ["input", "«kẹo ...»", "dừa"],
    ["mc", "Trời mưa bò thích vì?", ["Mát mẻ", "Nóng", "Khô", "Đói"], "Mát mẻ"],
    ["input", "«con ...» (đánh trống)", "chuột"],
    ["input", "«... giảng» (nghe bài)", "giảng"]
  ]},
  { n: 16, q: [
    ["input", "«bánh ...»", "quy"],
    ["mc", "Đề 16 — Câu 1?", ["A", "B", "C", "D"], "A"],
    ["input", "Vần ay trong «Ru con»: bắt ...", "cá"],
    ["input", "«con ...» (động vật có mai)", "rùa"],
    ["mc", "«tranh thêu» hay «chanh thêu»?", ["tranh thêu", "chanh thêu", "trang thêu", "tranh teo"], "tranh thêu"]
  ]},
  { n: 17, q: [
    ["mc", "«Khôn ăn cái, dại ăn ...»", ["nước", "cơm", "bánh", "kẹo"], "nước"],
    ["mc", "Đề 17 — Câu 2?", ["A và C", "B", "A", "D"], "A và C"],
    ["mc", "Đề 17 — Câu 1?", ["A", "B", "C", "D"], "A"],
    ["input", "«Sân trường em ... rộng»", "rất"],
    ["input", "Vần yên: «yên ...» (yên bình)", "bình"]
  ]},
  { n: 18, q: [
    ["input", "«Mẹ đan ... cho em»", "áo"],
    ["input", "«Bánh cuốn Hà Nội rất ...»", "ngon"],
    ["input", "«Suôn sẻ ; lóng lánh ; ... xắn»", "xinh"],
    ["mc", "Đề 18 — Câu 1?", ["A", "B", "C", "D"], "A"],
    ["input", "«Ngày tết hoa ... nở rực rỡ»", "đào"]
  ]},
  { n: 19, q: [
    ["input", "Vần âm: «...» (họ Lâm)", "Lâm"],
    ["mc", "Đề 19 — Câu 1?", ["A", "B", "C", "D"], "A"],
    ["input", "«Rửa tay sạch trước khi ... cơm»", "ăn"],
    ["mc", "«gà gô» viết g hay gh?", ["g", "gh", "ng", "ngh"], "g"],
    ["input", "«hoa ...» (hoa trong ao)", "sen"]
  ]},
  { n: 20, q: [
    ["input", "«Bước, ..., dưa» — thiếu?", "vườn"],
    ["mc", "Đề 20 — Câu 1?", ["A", "B", "C", "D"], "B"],
    ["input", "«Cá ... chạy thi với ô tô»", "heo"],
    ["mc", "Con ong trong truyện?", ["Đáng khen", "Đáng chê", "Lười", "Hư"], "Đáng khen"],
    ["input", "«... nhạc» (nghe)", "nghe"]
  ]},
  { n: 21, q: [
    ["input", "«ngọn ...» (lửa)", "lửa"],
    ["input", "Vần ân: «...» (tên người)", "Ân"],
    ["mc", "Đề 21 — Câu 4 câu 1?", ["A", "B", "C", "D"], "A"],
    ["input", "«Em chưa bao giờ nói ...»", "dối"],
    ["mc", "Đề 21 — Câu 4 câu 6?", ["Đúng", "Sai", "Không biết", "Bỏ qua"], "Đúng"]
  ]},
  { n: 22, q: [
    ["input", "Vần ang: «...» (họ Trang)", "Trang"],
    ["input", "Vần ac: «...» (mất phương hướng)", "lạc"],
    ["mc", "Đề 22 — Câu 1?", ["A", "B", "C", "D"], "B"],
    ["input", "«Em đã đi ... rồi»", "biển"],
    ["mc", "«chào» có dấu?", ["huyền", "sắc", "hỏi", "ngang"], "huyền"]
  ]},
  { n: 23, q: [
    ["mc", "Đề 23 — Câu 1?", ["A", "B", "C", "D"], "A"],
    ["input", "«Em theo mẹ đi ...»", "chợ"],
    ["input", "«Bố em làm ở ...» (cơ quan)", "ngân hàng"],
    ["input", "«Ông em đang nhặt cỏ ngoài vườn ...»", "rau"],
    ["mc", "Lớn lên em muốn làm?", ["Giáo viên", "Chỉ ngủ", "Không học", "Không biết"], "Giáo viên"]
  ]},
  { n: 24, q: [
    ["input", "«Vui ...»", "mừng"],
    ["input", "«Khung ...» (dệt vải)", "cửi"],
    ["mc", "Đề 24 — Câu 3 câu 1?", ["A", "B", "C", "D"], "A"],
    ["input", "«... nghĩ» (suy)", "suy"],
    ["input", "«Tưới cây cảnh cùng ...»", "ông"]
  ]},
  { n: 25, q: [
    ["input", "«Rửa ...» (đồ ăn)", "bát"],
    ["input", "«Trường học là ... thứ hai của em»", "ngôi nhà"],
    ["mc", "Đề 25 — Câu 4 câu 1?", ["A", "B", "C", "D"], "B"],
    ["input", "«Em thích học môn ... nhất»", "Toán"],
    ["mc", "Em yêu thích việc?", ["Học", "Không học", "Chơi suốt", "Ngủ"], "Học"]
  ]},
  { n: 26, q: [
    ["input", "«Xe ...» (bus)", "buýt"],
    ["mc", "Đề 26 — Câu 2?", ["A", "B", "C", "D"], "B"],
    ["input", "«Con ...» (ở biển)", "cua"],
    ["input", "«Trang ...» (tờ giấy)", "giấy"],
    ["mc", "Đề 26 — Câu 7 câu 1?", ["A", "B", "C", "D"], "A"]
  ]},
  { n: 27, q: [
    ["input", "«Máy vi ...» (máy tính)", "tính"],
    ["input", "«Phong cảnh Vịnh Hạ ...»", "Long"],
    ["mc", "Đề 27 — Câu 3 câu 1?", ["A", "B", "C", "D"], "A"],
    ["input", "«Em rất yêu đất nước Việt ...»", "Nam"],
    ["input", "Tên mùa: mùa ..., mùa hạ, mùa thu, mùa đông.", "xuân"]
  ]},
  { n: 28, q: [
    ["input", "«sum họp ; ... xuê»", "xum"],
    ["input", "Vần uê: «quê ...» (thủ đô miền Trung)", "Huế"],
    ["mc", "Đề 28 — Câu 3 câu 1?", ["A", "B", "C", "D"], "A"],
    ["input", "«Mưa ...» (mưa lâu)", "ngâu"],
    ["input", "Từ vần ong trong bài: s..., không", "ống"]
  ]},
  { n: 29, q: [
    ["input", "«qua ...» (bến phà)", "phà"],
    ["input", "«ghế ...» viết gh hay g?", "gỗ"],
    ["mc", "Đề 29 — Câu 3 câu 1?", ["A", "B", "C", "D"], "B"],
    ["input", "«lòng ...» (lòng người)", "dạ"],
    ["mc", "Quả bóng / Bánh chưng / Cái chăn — đố vui?", ["Quả bóng", "Bánh chưng", "Cái chăn", "Cây tre"], "Quả bóng"]
  ]},
  { n: 30, q: [
    ["input", "«Củ ...» (củ ăn)", "sắn"],
    ["input", "«lá ...» (mùa nóng)", "hè"],
    ["mc", "Đề 30 — Câu 1?", ["A", "B", "C", "D"], "A"],
    ["mc", "Đề 30 — Câu 3?", ["A", "B", "C", "D"], "C"],
    ["input", "«... miết» (chăm chỉ)", "mải"]
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
    const examId = `exam1_${exam.n}`;
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

const exams = examSets.map((e, i) => ({
  id: `exam1_${e.n}`,
  order: e.n,
  title: `Đề ôn số ${e.n}`,
  questionCount: 5,
  xp: 50,
  passScore: 4,
  prerequisite: e.n === 1 ? ["sr1_syllable"] : [`exam1_${e.n - 1}`]
}));

const payload = {
  meta: {
    id: "summer_lit_g1_g2",
    packId: "g1-g2",
    title: "Ôn hè Tiếng Việt lớp 1 → lớp 2",
    subtitle: "6 chủ đề tương tác + 30 đề tổng hợp",
    gradeFrom: 1,
    gradeTo: 2,
    source: SOURCE
  },
  topics: topics.map(({ questions, keypoints, ...rest }) => rest),
  lessons: topicLessons,
  exams,
  questions: [...buildTopicQuestions(), ...buildExamQuestions()]
};

await writeFile("data/summer-review-g1-g2.json", `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(`✓ summer-review-g1-g2.json — ${payload.topics.length} chủ đề, ${payload.exams.length} đề, ${payload.questions.length} câu hỏi`);
