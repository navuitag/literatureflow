/**
 * Sinh nội dung Ôn hè Tiếng Việt lớp 5 → lớp 6 (6 chủ đề + 15 đề).
 * Nguồn: docs/CHUYÊN ĐỀ ÔN HÈ TIẾNG VIỆT LỚP 5 - LÊN 6.doc
 *        docs/ĐÁP ÁN ÔN HÈ TIẾNG VIỆT LỚP 5 - LÊN 6.doc
 * Chạy: node scripts/generate-summer-review-g5-g6.mjs
 */
import { writeFile } from "node:fs/promises";

const SOURCE =
  "CHUYÊN ĐỀ / ĐÁP ÁN ÔN HÈ TIẾNG VIỆT LỚP 5 - LÊN 6 (LiteratureFlow — 6 chủ đề + 15 đề tổng hợp).";

const topics = [
  {
    id: "sr5_word",
    order: 1,
    title: "Tiếng và từ",
    emoji: "🔤",
    description: "Từ đơn, từ phức; phân định ranh giới từ (chêm xen, chuyển nghĩa, thế đối lập).",
    prerequisite: [],
    xp: 40,
    keypoints: [
      "Tiếng gồm âm đầu (có thể không có), vần và thanh.",
      "Từ đơn: một tiếng có nghĩa; từ phức: hai+ tiếng ghép nghĩa chung.",
      "Chêm xen được → hai từ đơn (tung cánh / tung đôi cánh).",
      "Không chêm xen, cố định → từ phức (chuồn chuồn nước, mặt hồ)."
    ],
    questions: [
      ["multiple_choice", "«chuồn chuồn nước» là?", ["Từ phức", "Hai từ đơn", "Từ láy", "Từ đơn"], "Từ phức", "Không thể chêm xen tách nghĩa."],
      ["multiple_choice", "«tung cánh» là?", ["Hai từ đơn", "Từ phức", "Từ láy", "Danh từ riêng"], "Hai từ đơn", "Có thể chêm «đôi»."],
      ["multiple_choice", "«bánh dày» (tên bánh) là?", ["Từ phức", "Hai từ đơn", "Từ láy", "Cụm từ"], "Từ phức", "«dày» mờ nghĩa gốc."],
      ["multiple_choice", "«hoa hồng» (loài hoa) là?", ["Từ phức", "Hai từ đơn", "Từ láy", "Từ đơn"], "Từ phức", "Tên loài hoa."],
      ["true_false", "«mặt hồ» là từ phức.", "Đúng", "Không chêm «của» được."],
      ["input", "Từ phức trong «Em mơ làm mây trắng»?", "mây trắng", "Hoặc: làm mây."],
      ["multiple_choice", "«Tổ quốc» trong câu tả là?", ["Từ phức", "Từ đơn", "Từ láy", "Danh từ riêng"], "Từ phức", "tổ + quốc."],
      ["true_false", "Tiếng nào cũng phải có vần và thanh.", "Đúng", "Có thể không có âm đầu."]
    ]
  },
  {
    id: "sr5_compound",
    order: 2,
    title: "Từ ghép và từ láy",
    emoji: "🌿",
    description: "Ghép tổng hợp/phân loại; láy âm đầu, vần, cả âm và vần.",
    prerequisite: ["sr5_word"],
    xp: 45,
    keypoints: [
      "Ghép tổng hợp: thay đổi, buồn vui, xe đạp.",
      "Ghép phân loại: xanh thẳm, nụ hoa, uống nước.",
      "Láy âm đầu: mơ màng, ầm ầm; láy vần: sôi nổi.",
      "Láy cả âm và vần: cong queo, lấp ló."
    ],
    questions: [
      ["multiple_choice", "«thay đổi» trong đoạn về biển là?", ["Từ ghép", "Từ láy", "Từ đơn", "Thành ngữ"], "Từ ghép", "Ghép tổng hợp."],
      ["multiple_choice", "«mơ màng» là?", ["Từ láy", "Từ ghép", "Từ đơn", "Danh từ"], "Từ láy", "Láy âm đầu."],
      ["multiple_choice", "«xanh thẳm» thuộc nhóm?", ["Ghép phân loại", "Ghép tổng hợp", "Từ láy", "Từ đơn"], "Ghép phân loại", "xanh + thẳm."],
      ["multiple_choice", "«san sẻ» là?", ["Từ láy", "Từ ghép phân loại", "Từ ghép tổng hợp", "Từ đơn"], "Từ láy", "Láy vần/âm."],
      ["multiple_choice", "«sôi nổi» là?", ["Từ láy", "Từ ghép", "Từ đơn", "Thành ngữ"], "Từ láy", "Láy vần."],
      ["input", "«Công cha ... núi Thái Sơn» (tr/ch)", "tr", "trong tục ngữ."],
      ["true_false", "«học hành» là từ láy.", "Đúng", "Theo đáp án đề 1 g4→5 tương tự."],
      ["multiple_choice", "Nhóm toàn từ láy?", ["lẩy bẩy, khập khiễng, rạng rỡ", "xe đạp, nụ hoa", "học trò, giáo viên", "Tổ quốc, đất nước"], "lẩy bẩy, khập khiễng, rạng rỡ", "Láy âm/vần."]
    ]
  },
  {
    id: "sr5_class",
    order: 3,
    title: "Từ loại và quan hệ từ",
    emoji: "📚",
    description: "Danh từ, động từ, tính từ; đại từ; quan hệ từ (vì…nên…, tuy…nhưng…).",
    prerequisite: ["sr5_compound"],
    xp: 45,
    keypoints: [
      "ĐT chỉ hoạt động (đọc, chạy) hoặc trạng thái (là, nằm).",
      "TT chỉ đặc điểm sự vật, hoạt động, trạng thái.",
      "QHT: vì…nên… (nguyên nhân–kết quả); tuy…nhưng… (tương phản).",
      "Không những…mà còn… (tăng tiến)."
    ],
    questions: [
      ["multiple_choice", "«phẳng lặng» là?", ["Tính từ", "Danh từ", "Động từ", "Trạng ngữ"], "Tính từ", "Đặc điểm dòng sông."],
      ["multiple_choice", "«Nước chảy đá mòn» — động từ?", ["chảy", "Nước", "đá", "mòn"], "chảy", "Hoạt động."],
      ["multiple_choice", "«học giỏi» — «giỏi» là?", ["Tính từ", "Danh từ", "Động từ", "Thán từ"], "Tính từ", "Chỉ đặc điểm hoạt động."],
      ["input", "«Vì trời mưa ... đường lầy lội» — QHT kết quả", "nên", "Vì…nên…"],
      ["multiple_choice", "«Chẳng những Lan chăm học mà còn chăm làm việc nhà» — QHT?", ["Tăng tiến", "Nguyên nhân", "Giả thiết", "Tương phản"], "Tăng tiến", "Không những…mà còn…"],
      ["multiple_choice", "Đại từ trong «Được, nhưng rải thế nào anh phải chỉ vẽ, em mới làm được chớ!» — số lượng?", ["2 đại từ", "1", "3", "4"], "2 đại từ", "em, anh (xưng hô)."],
      ["true_false", "«suy nghĩ» (Anh ấy đang suy nghĩ) là động từ.", "Đúng", "Chỉ hoạt động."],
      ["multiple_choice", "«Tuy vậy» trong đoạn Hồ Chí Minh có tác dụng?", ["Biểu thị sự đối lập", "Liệt kê", "Giải thích", "Hỏi"], "Biểu thị sự đối lập", "Nối ý trên–dưới."]
    ]
  },
  {
    id: "sr5_sentence",
    order: 4,
    title: "Câu đơn, câu ghép và liên kết",
    emoji: "✍️",
    description: "Mẫu câu; câu ghép; liên kết bằng thay thế, lặp từ, từ nối.",
    prerequisite: ["sr5_class"],
    xp: 45,
    keypoints: [
      "Câu ghép: hai+ vế, mỗi vế có CN–VN riêng.",
      "Liên kết: thay thế từ (đó), lặp từ, từ nối (vậy mà).",
      "CN trả lời Ai?/Cái gì?; VN nói về CN.",
      "Trạng ngữ: Khi nào? Ở đau? Vì sao?"
    ],
    questions: [
      ["multiple_choice", "«Thân nó xù xì… vậy mà lá thì xanh mởn» — nối vế bằng?", ["vậy mà", "vì", "nên", "tuy"], "vậy mà", "Tương phản."],
      ["multiple_choice", "«Dân tộc ta có một lòng nồng nàn yêu nước. Đó là truyền thống quý báu» — liên kết?", ["Dùng từ thay thế", "Lặp từ", "Chỉ từ nối", "Không liên kết"], "Dùng từ thay thế", "«Đó» thay «lòng yêu nước»."],
      ["multiple_choice", "«Cây gạo buồn thiu, những chiếc lá cụp xuống, ủ ê» — loại câu?", ["Câu ghép", "Câu đơn", "Câu hỏi", "Câu cảm"], "Câu ghép", "Nhiều vế."],
      ["multiple_choice", "«Phút yên tĩnh của rừng ban mai dần biến mất» — VN?", ["dần biến mất", "Phút yên tĩnh", "rừng ban mai", "của rừng"], "dần biến mất", "Nói về phút yên tĩnh."],
      ["multiple_choice", "«Tôi / rảo bước và truyền đơn» — CN?", ["Tôi", "rảo bước", "truyền đơn", "đất"], "Tôi", "Ai?"],
      ["true_false", "«Buổi chiều, nắng vừa nhạt, sương đã buông xuống» có thể là câu ghép.", "Đúng", "Hai vế song song."],
      ["input", "Mẫu câu «Bác Hồ là vị anh hùng thiên tài»?", "Ai là gì?", "CN + VN."],
      ["multiple_choice", "«Cuối đông, lá bàng… Vậy màu xanh của lá biến đi đâu nhỉ?» — nối?", ["Thay thế từ ngữ", "Lặp từ", "Chỉ từ nối", "Dùng từ nối và lặp"], "Thay thế từ ngữ", "Đề 11 đáp án C."]
    ]
  },
  {
    id: "sr5_punct",
    order: 5,
    title: "Dấu câu, từ nhiều nghĩa và điệp ngữ",
    emoji: "❗",
    description: "Dấu phẩy, hai chấm, ngoặc kép; đồng nghĩa; nghĩa chuyển; điệp ngữ.",
    prerequisite: ["sr5_sentence"],
    xp: 45,
    keypoints: [
      "Dấu phẩy: ngăn TN, bộ phận cùng chức vụ, vế câu ghép.",
      "Dấu hai chấm: liệt kê, lời giải thích, lời nói trực tiếp.",
      "Từ nhiều nghĩa: chạy (chạy bộ / bán chạy / chạy qua làng).",
      "Điệp ngữ nhấn mạnh: Việt Nam! Việt Nam ơi!"
    ],
    questions: [
      ["multiple_choice", "Dấu phẩy sau «Tan học» có tác dụng?", ["Ngăn TN với CN–VN", "Kết câu", "Hỏi", "Liệt kê danh từ"], "Ngăn TN với CN–VN", "Đề 2."],
      ["multiple_choice", "«Hàng tết bán rất chạy» — «chạy»?", ["Nghĩa chuyển", "Nghĩa gốc", "Danh từ", "Tính từ"], "Nghĩa chuyển", "Bán nhanh."],
      ["multiple_choice", "Đồng nghĩa «sửng sốt»?", ["ngạc nhiên", "lo lắng", "hoảng hốt", "buồn bã"], "ngạc nhiên", "Đề 11 — đáp án B."],
      ["multiple_choice", "«Tôi không biết bạn có thích chơi diều không?» — loại câu?", ["Câu kể (không phải câu hỏi)", "Câu hỏi", "Câu cảm", "Câu khiến"], "Câu kể (không phải câu hỏi)", "Không dùng dấu ? đúng nghĩa hỏi."],
      ["multiple_choice", "Thành ngữ về lòng tự trọng?", ["Giấy rách phải giữ lấy lề", "Cây ngay không sợ chết đứng", "Thuốc đắng dã tật", "Thẳng như ruột ngựa"], "Giấy rách phải giữ lấy lề", "Đề 4 đáp án B."],
      ["input", "Điền «bảo» phù hợp: «Chúng em tích cực ... vệ môi trường»", "bảo", "bảo vệ."],
      ["true_false", "Điệp ngữ «Việt Nam» ba lần nhấn tình yêu đất nước.", "Đúng", "Đề 4 câu 9."],
      ["multiple_choice", "Dấu hai chấm liệt kê màu xanh trong «một màu xanh có nhiều sắc độ: màu xanh thẳm…»?", ["Báo hiệu liệt kê", "Lời nói nhân vật", "Kết thúc câu", "Hỏi"], "Báo hiệu liệt kê", "Đề 11 câu 7A."]
    ]
  },
  {
    id: "sr5_spelling",
    order: 6,
    title: "Chính tả và viết hoa",
    emoji: "📝",
    description: "l/n, s/x, d/gi/r; viết hoa tên riêng, cơ quan, huân chương.",
    prerequisite: ["sr5_punct"],
    xp: 50,
    keypoints: [
      "l/n: làm, nên, non, nước, lên.",
      "s/x: sẻ, xẻ, sách, xinh.",
      "d/gi/r: dòng, giọt, rung.",
      "Viết hoa: Nhà xuất bản Giáo dục, Huân chương Kháng chiến."
    ],
    questions: [
      ["input", "«Bàn tay ta ...àm ...ên tất cả» — «làm»", "l", "Đề 1."],
      ["input", "«...ắng tốt dưa mưa tốt ...úa» — «lúa»", "l", "Tục ngữ."],
      ["input", "«Nhường cơm ...ẻ áo» (s/x)", "s", "Đề 3."],
      ["input", "«...ẻ dọc Trường Sơn» (s/x)", "x", "Ca dao."],
      ["multiple_choice", "Viết hoa đúng tổ chức?", ["Chủ nhiệm Ủy ban Khoa học và Kĩ thuật Nhà nước", "Huân chương chiến công giải phóng", "huy chương anh hùng", "nhà xuất bản giáo dục"], "Chủ nhiệm Ủy ban Khoa học và Kĩ thuật Nhà nước", "Đề 2 đáp án A."],
      ["input", "«Đầu hè không thấy ...ọt sương» (gi/r/d)", "gi", "Trần Đăng Khoa."],
      ["multiple_choice", "Tên riêng viết đúng?", ["Pu- tin", "Bin Clin Tơn", "Cat Xtơ rô", "Ô ba ma"], "Pu- tin", "Đề 13 đáp án B."],
      ["input", "«Nhà xuất bản Giáo dục» — viết «Giáo dục» với chữ?", "G", "Viết hoa danh từ riêng."]
    ]
  }
];

/** 15 đề × 5 câu — bám đáp án tài liệu gốc (phần trắc nghiệm). */
const examSets = [
  { n: 1, q: [
    ["mc", "Chim họa mi từ đâu bay đến?", ["Không rõ từ phương nào", "Từ phương đông", "Từ phương Bắc", "Từ phương Nam"], "Không rõ từ phương nào"],
    ["mc", "Buổi chiều tiếng hót họa mi như thế nào?", ["Êm đềm, rộn rã", "Trong trẻo, réo rắt", "Hót vang lừng chào nắng sớm", "Lảnh lót, ngân nga"], "Êm đềm, rộn rã"],
    ["mc", "Sáng họa mi kéo cổ hót vì?", ["Muốn các bạn xa gần lắng nghe", "Khoe giọng", "Luyện giọng", "Thích hót"], "Muốn các bạn xa gần lắng nghe"],
    ["mc", "Dòng có từ in đậm là từ nhiều nghĩa?", ["Nó từ từ nhắm hai mắt lại. Quả na đã mở mắt", "Nó không biết tự phương nào bay đến", "Con họa mi lại hót vang lừng", "Bạn Lan đang hót rác"], "Nó từ từ nhắm hai mắt lại. Quả na đã mở mắt"],
    ["input", "«Một cây ...àm chẳng ...ên non» — «làm»", "l"]
  ]},
  { n: 2, q: [
    ["mc", "Mơ giúp mẹ ngoài giờ học?", ["Tưới rau rồi chẻ củi, nấu cơm", "Chẻ củi, nấu cơm", "Tưới rau", "Nhặt rau"], "Tưới rau rồi chẻ củi, nấu cơm"],
    ["mc", "Dấu phẩy sau «Tan học»?", ["Ngăn TN và ngăn bộ phận cùng chức vụ", "Chỉ ngăn TN", "Chỉ ngăn cùng chức vụ", "Ngăn vế câu ghép"], "Ngăn TN và ngăn bộ phận cùng chức vụ"],
    ["mc", "«truyền thống, truyền nghề, truyền ngôi» — «truyền» nghĩa?", ["Trao lại cho thế hệ sau", "Lan rộng ra", "Nhập vào cơ thể", "Phát sóng"], "Trao lại cho thế hệ sau"],
    ["mc", "Viết hoa đúng?", ["Chủ nhiệm Ủy ban Khoa học và Kĩ thuật Nhà nước", "Huân chương chiến công giải phóng", "Huy chương Anh hùng lực lượng vũ trang", "Huân chương Kháng Chiến"], "Chủ nhiệm Ủy ban Khoa học và Kĩ thuật Nhà nước"],
    ["true_false", "«Ngoài vườn, các loài hoa đua nhau khoe sắc» là câu có dấu phẩy ngăn TN.", "Đúng"]
  ]},
  { n: 3, q: [
    ["mc", "Tâm trạng chị Út khi nhận nhiệm vụ?", ["Bồn chồn, thấp thỏm", "Vui mừng, rộn rã", "Bình thường", "Vui nhưng lo"], "Bồn chồn, thấp thỏm"],
    ["mc", "Chi tiết hồi hộp khi nhận việc?", ["Chị dậy từ nửa đêm nghĩ cách giấu truyền đơn", "Chỉ vui mừng", "Chỉ ngủ không yên", "Không hồi hộp"], "Chị dậy từ nửa đêm nghĩ cách giấu truyền đơn"],
    ["mc", "Cách rải truyền đơn?", ["Giả bán cá, bó giắt lưng, truyền đơn rơi dần", "Một tay bê rổ một tay cầm bó", "Đưa từng tờ cho người gặp", "Giấu dưới rổ"], "Giả bán cá, bó giắt lưng, truyền đơn rơi dần"],
    ["mc", "Dấu phẩy «Về đến nhà, tôi khoe…»?", ["Ngăn TN với CN–VN", "Ngăn cùng chức vụ", "Ngăn CN–VN", "Ngăn vế ghép"], "Ngăn TN với CN–VN"],
    ["mc", "«Được, nhưng rải… em mới làm được chớ!» — số đại từ?", ["2 đại từ", "1", "3", "4"], "2 đại từ"]
  ]},
  { n: 4, q: [
    ["mc", "Cậu bé tự tin vì?", ["Nhận được sự giúp đỡ từ cô bé", "Hết đói", "Có tiền học", "Không bán hàng"], "Nhận được sự giúp đỡ từ cô bé"],
    ["mc", "Bác sĩ bất ngờ khi nhớ chuyện?", ["Một tia sáng lóe lên trong mắt ông", "Ông nhận khám", "Ông đứng dậy", "Ông cứu chữa"], "Một tia sáng lóe lên trong mắt ông"],
    ["mc", "«Một ly sữa» nói về?", ["Sự chia sẻ", "Sự cố gắng", "Sự tự tin", "Lòng can đảm"], "Sự chia sẻ"],
    ["mc", "Thành ngữ về lòng tự trọng?", ["Giấy rách phải giữ lấy lề", "Cây ngay không sợ chết đứng", "Thẳng như ruột ngựa", "Thuốc đắng dã tật"], "Giấy rách phải giữ lấy lề"],
    ["mc", "Hai câu về yêu nước liên kết bằng?", ["Dùng từ thay thế", "Lặp từ", "Chỉ từ nối", "Thay thế và từ nối"], "Dùng từ thay thế"]
  ]},
  { n: 5, q: [
    ["mc", "Khổ thơ «Lúc ấy» (công trường sông Đà) — biện pháp nghệ thuật?", ["Nhân hóa", "So sánh", "Ẩn dụ", "Nhân hóa và so sánh"], "Nhân hóa"],
    ["mc", "Vẻ đẹp đêm trăng công trường sông Đà?", ["Hòa quyện con người và thiên nhiên vừa tĩnh vừa sinh động", "Công trường say ngủ", "Cô gái Nga đánh đàn", "Xe ủi nằm nghỉ"], "Hòa quyện con người và thiên nhiên vừa tĩnh vừa sinh động"],
    ["mc", "Đồng nghĩa «non sông»?", ["Nước nhà", "Năm châu", "Thế giới", "Hoàn cầu"], "Nước nhà"],
    ["mc", "Nghĩa «hòa bình»?", ["Trạng thái không có chiến tranh", "Bình thản", "Hiền hòa yên ả", "Yên lặng"], "Trạng thái không có chiến tranh"],
    ["input", "Thành ngữ «Chậm như ...»", "rùa"]
  ]},
  { n: 6, q: [
    ["mc", "«Những cánh buồm» tập trung tả?", ["Những cánh buồm", "Con sông", "Làng quê", "Làng và sông"], "Những cánh buồm"],
    ["mc", "«phẳng lặng» là?", ["Tính từ", "Danh từ", "Động từ", "Đại từ"], "Tính từ"],
    ["mc", "Màu buồm so sánh với?", ["Màu áo người thân trong gia đình", "Màu nắng", "Chỉ màu áo chị", "Màu áo nông dân"], "Màu áo người thân trong gia đình"],
    ["mc", "So sánh màu áo thể hiện?", ["Tình yêu tác giả với cánh buồm quê hương", "Màu chính xác", "Buồm vất vả", "Dễ liên tưởng"], "Tình yêu tác giả với cánh buồm quê hương"],
    ["mc", "«lên ngược về xuôi» chứa?", ["Cặp từ trái nghĩa", "Đồng nghĩa", "Đồng âm", "Nhiều nghĩa"], "Cặp từ trái nghĩa"]
  ]},
  { n: 7, q: [
    ["mc", "«Một tiếng lá rơi… giật mình» nói rừng?", ["Rất yên tĩnh", "Hoang vu", "Vắng người", "Rất đẹp"], "Rất yên tĩnh"],
    ["mc", "Mùi hoa tràm được tả?", ["Thơm ngây ngất, phảng phất khắp rừng", "Thơm ngan ngát", "Thơm ngọt theo gió", "Thoang thoảng"], "Thơm ngây ngất, phảng phất khắp rừng"],
    ["mc", "Vật đổi màu để?", ["Phù hợp môi trường và tự bảo vệ", "Làm đẹp rừng", "Phô vẻ đẹp", "Khoe với bạn"], "Phù hợp môi trường và tự bảo vệ"],
    ["mc", "Trái nghĩa «im lặng»?", ["Ồn ào, náo nhiệt, huyên náo", "Ồn ào, tĩnh lặng", "Vui vẻ", "Lao xao"], "Ồn ào, náo nhiệt, huyên náo"],
    ["mc", "VN «Phút yên tĩnh của rừng ban mai dần biến mất»?", ["dần biến mất", "Phút yên tĩnh", "rừng ban mai", "biến mất"], "dần biến mất"]
  ]},
  { n: 8, q: [
    ["mc", "Ý chính bài Núi rừng Trường Sơn?", ["Sau mưa rừng bừng tỉnh, cảnh vật thêm sức sống", "Mưa tạnh", "Chỏm núi tím biếc", "Mây ôm núi"], "Sau mưa rừng bừng tỉnh, cảnh vật thêm sức sống"],
    ["mc", "Hình ảnh sau cơn mưa (đầy đủ)?", ["Mây xám, tia nắng, nước mưa; chồn, dũi; vòm lá, chim Klang; chỏm núi, dải mây", "Chỉ trời và núi", "Chỉ chim và mây", "Chỉ nước mưa"], "Mây xám, tia nắng, nước mưa; chồn, dũi; vòm lá, chim Klang; chỏm núi, dải mây"],
    ["mc", "«dải mây… như dải lụa… ôm ấp» — BP?", ["So sánh và nhân hóa", "Chỉ so sánh", "Chỉ nhân hóa", "Không có"], "So sánh và nhân hóa"],
    ["mc", "«rừng» nghĩa gốc?", ["Núi rừng Trường Sơn như bừng tỉnh", "Một rừng cờ hoa", "Một rừng người", "Rừng cây xanh"], "Núi rừng Trường Sơn như bừng tỉnh"],
    ["input", "«Bão ... to, cây đổ ... nhiều» — cặp từ", "càng"]
  ]},
  { n: 9, q: [
    ["mc", "Cây gạo có từ lâu vì?", ["Cây già; thân xù xì; Thương và bạn đã thấy nở hoa", "Chỉ tán lá tròn", "Nghe ông bà kể", "Hoa đỏ ngút trời"], "Cây già; thân xù xì; Thương và bạn đã thấy nở hoa"],
    ["mc", "Dấu hiệu cây gạo lớn thêm tuổi?", ["Xoè thêm một tán lá tròn vươn cao", "Thân gai góc hơn", "Nở thêm mùa hoa", "Rễ trơ ra"], "Xoè thêm một tán lá tròn vươn cao"],
    ["mc", "«bừng» trong «Bến sông bừng lên đẹp»?", ["Hoa gạo làm bến sông sáng bừng", "Mặt trời mọc", "Mọi vật thức dậy", "Cây tươi lại"], "Hoa gạo làm bến sông sáng bừng"],
    ["mc", "Câu ghép?", ["Cây gạo buồn thiu, những chiếc lá cụp xuống, ủ ê", "Chiều nay Thương ùa ra cây gạo", "Cây gạo như đám lửa", "Cây gạo xoè thêm tán lá"], "Cây gạo buồn thiu, những chiếc lá cụp xuống, ủ ê"],
    ["mc", "«Thân nó xù xì… vậy mà lá thì xanh mởn» — nối vế?", ["Nối bằng «vậy mà»", "Nối bằng «mà»", "Nối trực tiếp", "Nối bằng «thì»"], "Nối bằng «vậy mà»"]
  ]},
  { n: 10, q: [
    ["mc", "Đồng nghĩa «hòa bình»?", ["bình yên, thái bình, thanh bình", "bình yên, hiền hòa", "thanh thản, lặng yên", "bình thản, yên tĩnh"], "bình yên, thái bình, thanh bình"],
    ["mc", "«chạy» nghĩa chuyển?", ["Hàng tết bán rất chạy", "Chạy 100m", "Đánh kẻ chạy đi", "Chạy qua làng (gốc)"], "Hàng tết bán rất chạy"],
    ["mc", "Không phải câu hỏi (dù có ?)?", ["Tôi không biết bạn có thích chơi diều không?", "Bạn có thích chơi diều không?", "Hãy cho biết bạn thích trò nào?", "Ai dạy bạn làm đèn ông sao?"], "Tôi không biết bạn có thích chơi diều không?"],
    ["mc", "«thay đổi» trong đoạn biển — ghép?", ["Từ ghép tổng hợp", "Từ ghép phân loại", "Từ láy", "Từ đơn"], "Từ ghép tổng hợp"],
    ["mc", "«mơ màng» — loại?", ["Từ láy", "Từ ghép", "Từ đơn", "Danh từ riêng"], "Từ láy"]
  ]},
  { n: 11, q: [
    ["mc", "Đồng nghĩa «sửng sốt»?", ["ngạc nhiên", "hoảng hốt", "lo lắng", "bàng hoàng"], "ngạc nhiên"],
    ["mc", "Hai câu về lá bàng liên kết?", ["Thay thế từ ngữ", "Lặp từ", "Dùng từ nối", "Từ nối và lặp"], "Thay thế từ ngữ"],
    ["mc", "Dấu phẩy «Khi những trận mưa xuân đã hết, cây bàng lại xanh ròn…»?", ["Ngăn TN với CN–VN", "Ngăn vế ghép", "Ngăn cùng chức vụ", "Ngăn CN–VN"], "Ngăn TN với CN–VN"],
    ["mc", "Tiếng «thiên» = «trời»?", ["Thiên tai, thiên thần, thiên văn", "Thiên tài, thiên cổ", "Thiên vị, biến thiên", "Thiên đô"], "Thiên tai, thiên thần, thiên văn"],
    ["mc", "«Buổi chiều, nắng vừa nhạt, sương đã buông…» — loại?", ["Câu ghép nối vế bằng QHT/dấu phẩy", "Câu đơn có TN", "Câu hỏi", "Câu cảm"], "Câu ghép nối vế bằng QHT/dấu phẩy"]
  ]},
  { n: 12, q: [
    ["mc", "Đền Hùng ở đâu, thờ ai?", ["Phú Thọ, thờ các vua Hùng", "Vĩnh Phúc, Hùng Vương", "Phú Thọ, An Dương Vương", "Hà Nội, vua Hùng"], "Phú Thọ, thờ các vua Hùng"],
    ["mc", "Tả cảnh đền Hùng — ý?", ["Ca ngợi cảnh thiên nhiên tráng lệ, hùng vĩ", "Chỉ lịch sử", "Giàu đẹp đất nước", "Nhớ quê hương"], "Ca ngợi cảnh thiên nhiên tráng lệ, hùng vĩ"],
    ["mc", "Núi Sóc Sơn, dấu chân ngựa sắt — truyền thuyết?", ["Thánh Gióng", "Lạc Long Quân", "Bánh chưng", "Hai Bà Trưng"], "Thánh Gióng"],
    ["mc", "«Dù ai đi ngược về xuôi…» — hiểu?", ["Nhắc không quên ngày giỗ Tổ, cội nguồn", "Chỉ ca ngợi", "Nhớ quê", "Cả ba ý"], "Nhắc không quên ngày giỗ Tổ, cội nguồn"],
    ["mc", "Câu ghép?", ["Trước đền, khóm hải đường…, bướm bay dập dờn", "Trong đền, dòng chữ vàng…", "Đền Thượng nằm chót vót", "Lăng vua Hùng kề bên đền"], "Trước đền, khóm hải đường…, bướm bay dập dờn"]
  ]},
  { n: 13, q: [
    ["mc", "Hình chữ V gửi gì?", ["Tên Tổ quốc Việt Nam và lời chào chiến thắng", "Tình yêu cá nhân", "Khâm phục", "Tin chiến thắng"], "Tên Tổ quốc Việt Nam và lời chào chiến thắng"],
    ["mc", "Hộp thư được đặt?", ["Nơi dễ tìm, ít bị chú ý", "Ven đường", "Nơi khó tìm", "Giữa đồng"], "Nơi dễ tìm, ít bị chú ý"],
    ["mc", "Nghĩa «truyền thống»?", ["Lối sống hình thành lâu đời, truyền qua thế hệ", "Cách sống nhiều nơi", "Được ca ngợi", "Phong tục tổ tiên"], "Lối sống hình thành lâu đời, truyền qua thế hệ"],
    ["mc", "Tên riêng viết đúng?", ["Pu- tin", "Bin Clin Tơn", "Ô ba ma", "Cat Xtơ rô"], "Pu- tin"],
    ["mc", "Đại từ «Mặt trời… nhưng tôi cảm thấy…»?", ["Tôi", "Tôi, mặt trời", "Tôi, bóng", "Tôi, sườn đồi"], "Tôi"]
  ]},
  { n: 14, q: [
    ["input", "«Bạn Thảo chẳng những học giỏi ... Thảo còn là người con ngoan» — liên từ", "mà"],
    ["input", "«Đầu hè không thấy ...ọt sương»", "gi"],
    ["mc", "«Tuy vậy» — tác dụng?", ["Biểu thị đối lập ý trên–dưới", "Liệt kê", "Giải thích", "Kết luận"], "Biểu thị đối lập ý trên–dưới"],
    ["input", "«Chúng em tích cực ... vệ môi trường»", "bảo"],
    ["mc", "«Tôi có cảm giác ... khi được cô bác sĩ khám»?", ["an tâm", "an ninh", "an toàn", "an lành"], "an tâm"]
  ]},
  { n: 15, q: [
    ["mc", "Hội thổi cơm Đồng Vân bắt nguồn?", ["Từ trẩy quân đánh giặc bên sông Đáy", "Bên bờ sông Đáy (chung chung)", "Hai bờ sông Hồng", "Làng Đồng Vân"], "Từ trẩy quân đánh giặc bên sông Đáy"],
    ["mc", "Hội thi bắt đầu bằng?", ["Lấy lửa", "Giã thóc", "Vót chông", "Lấy nước"], "Lấy lửa"],
    ["mc", "Dấu phẩy «Thế kỉ XX…, còn thế kỉ XXI…»?", ["Ngăn các vế câu ghép", "Ngăn TN", "Ngăn CN–VN", "Ngăn cùng chức vụ"], "Ngăn các vế câu ghép"],
    ["mc", "«Miệng hang» — «miệng»?", ["Nghĩa chuyển", "Nghĩa gốc", "Danh từ riêng", "Từ láy"], "Nghĩa chuyển"],
    ["input", "«Nhà xuất bản ... dục» — chữ hoa", "Giáo"]
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
    const examId = `exam5_${exam.n}`;
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
          hint: fifth || "Xem đáp án trong tài liệu ôn hè lớp 5→6."
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
  id: `exam5_${e.n}`,
  order: e.n,
  title: `Đề ôn số ${e.n}`,
  questionCount: 5,
  xp: 50,
  passScore: 4,
  prerequisite: e.n === 1 ? ["sr5_word"] : [`exam5_${e.n - 1}`]
}));

const payload = {
  meta: {
    id: "summer_lit_g5_g6",
    packId: "g5-g6",
    title: "Ôn hè Tiếng Việt lớp 5 → lớp 6",
    subtitle: "6 chủ đề tương tác + 15 đề tổng hợp",
    gradeFrom: 5,
    gradeTo: 6,
    source: SOURCE
  },
  topics: topics.map(({ questions, keypoints, ...rest }) => rest),
  lessons: topicLessons,
  exams,
  questions: [...buildTopicQuestions(), ...buildExamQuestions()]
};

await writeFile("data/summer-review-g5-g6.json", `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(`✓ summer-review-g5-g6.json — ${payload.topics.length} chủ đề, ${payload.exams.length} đề, ${payload.questions.length} câu hỏi`);
