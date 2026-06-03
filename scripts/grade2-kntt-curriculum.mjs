/**
 * Chương trình Tiếng Việt lớp 2 — SGK Kết nối tri thức với cuộc sống.
 * Tập 1: 32 bài + ôn giữa HK1 + ôn cuối HK1
 * Tập 2: 30 bài + ôn giữa HK2 + ôn cuối HK2
 */

const BOOK_T1 = "Tiếng Việt 2 — Kết nối tri thức · Tập 1";
const BOOK_T2 = "Tiếng Việt 2 — Kết nối tri thức · Tập 2";

/** @typedef {{ no: number, title: string, kind: string, desc: string, moral?: string, focus?: string }} LessonDef */

const TAP1_THEMES = [
  {
    id: "g2_t1_grow",
    chapter: "Chủ điểm 1: Em lớn lên từng ngày",
    chapterIndex: 1,
    book: BOOK_T1,
    lessons: [
      { no: 1, title: "Tôi là học sinh lớp 2", kind: "poetry", desc: "Đọc thơ; cảm nhận niềm vui trở lại trường lớp 2.", moral: "Tự hào là học sinh lớp 2, chăm ngoan học giỏi." },
      { no: 2, title: "Ngày hôm qua đâu rồi?", kind: "poetry", desc: "Đọc thơ; hiểu thời gian trôi qua.", moral: "Trân trọng từng ngày, học hành chăm chỉ." },
      { no: 3, title: "Niềm vui của Bi và Bống", kind: "read", desc: "Đọc truyện; tình bạn và sự chia sẻ.", moral: "Chia sẻ niềm vui làm tình bạn thêm gắn bó." },
      { no: 4, title: "Làm việc thật là vui", kind: "poetry", desc: "Đọc thơ; mọi công việc đều có ích.", moral: "Lao động vui, có ích và đáng tự hào." },
      { no: 5, title: "Em có xinh không?", kind: "poetry", desc: "Đọc thơ; tình cảm mẹ con.", moral: "Mẹ yêu con vô điều kiện." },
      { no: 6, title: "Một giờ học", kind: "read", desc: "Đọc truyện; hoạt động trong lớp.", moral: "Tích cực tham gia giờ học." },
      { no: 7, title: "Cây xấu hổ", kind: "read", desc: "Đọc truyện khoa học; đặc điểm cây xấu hổ.", moral: "Quan sát thiên nhiên để học hỏi." },
      { no: 8, title: "Cầu thủ dự bị", kind: "read", desc: "Đọc truyện; tinh thần đồng đội.", moral: "Cố gắng hết mình, sẵn sàng giúp đội." }
    ]
  },
  {
    id: "g2_t1_school",
    chapter: "Chủ điểm 2: Đi học vui sao",
    chapterIndex: 2,
    book: BOOK_T1,
    lessons: [
      { no: 9, title: "Cô giáo lớp em", kind: "poetry", desc: "Đọc thơ; lòng biết ơn thầy cô.", moral: "Kính trọng và biết ơn cô giáo." },
      { no: 10, title: "Thời khóa biểu", kind: "info", desc: "Đọc và hiểu thời khóa biểu.", moral: "Sắp xếp thời gian học tập hợp lý.", focus: "Thời khóa biểu" },
      { no: 11, title: "Cái trống trường em", kind: "poetry", desc: "Đọc thơ; nhịp sinh hoạt trường học.", moral: "Yêu trường, yêu lớp." },
      { no: 12, title: "Danh sách học sinh", kind: "read", desc: "Đọc truyện; tình bạn lớp học.", moral: "Đoàn kết, giúp đỡ bạn cùng lớp." },
      { no: 13, title: "Yêu lắm trường ơi!", kind: "read", desc: "Đọc truyện; gắn bó với trường.", moral: "Giữ gìn và yêu quý ngôi trường." },
      { no: 14, title: "Em học vẽ", kind: "read", desc: "Đọc truyện; phát triển năng khiếu.", moral: "Kiên trì luyện tập sẽ tiến bộ." },
      { no: 15, title: "Cuốn sách của em", kind: "poetry", desc: "Đọc thơ; yêu sách và đọc sách.", moral: "Sách là người bạn tốt." },
      { no: 16, title: "Khi trang sách mở ra", kind: "read", desc: "Đọc truyện; thế giới qua trang sách.", moral: "Đọc sách mở rộng tri thức." }
    ]
  },
  {
    id: "g2_t1_review_mid1",
    chapter: "Ôn tập giữa học kì 1",
    chapterIndex: 3,
    book: BOOK_T1,
    lessons: [
      { no: 1, title: "Ôn tập giữa học kì 1", kind: "review", desc: "Ôn đọc, viết, luyện từ và câu HK1 (phần 1).", focus: "Ôn tập giữa kì" }
    ]
  },
  {
    id: "g2_t1_childhood",
    chapter: "Chủ điểm 3: Niềm vui tuổi thơ",
    chapterIndex: 4,
    book: BOOK_T1,
    lessons: [
      { no: 17, title: "Gọi bạn", kind: "poetry", desc: "Đọc thơ Minh Huệ; tình bạn thuỷ chung.", moral: "Tình bạn chân thành, trung thành." },
      { no: 18, title: "Tớ nhớ cậu", kind: "read", desc: "Đọc truyện; nhớ bạn khi xa cách.", moral: "Trân trọng tình bạn." },
      { no: 19, title: "Chữ A và những người bạn", kind: "read", desc: "Đọc truyện; sự hợp tác giữa các chữ cái.", moral: "Hợp tác tạo nên sức mạnh." },
      { no: 20, title: "Nhím nâu kết bạn", kind: "read", desc: "Đọc truyện; kết bạn khác biệt.", moral: "Không nên đánh giá bạn qua vẻ bề ngoài." },
      { no: 21, title: "Thả diều", kind: "poetry", desc: "Đọc thơ; niềm vui tuổi thơ.", moral: "Tận hưởng và chia sẻ niềm vui." },
      { no: 22, title: "Tớ là Lê-gô", kind: "read", desc: "Đọc truyện; sáng tạo với đồ chơi.", moral: "Trí tưởng tượng giúp ta sáng tạo." },
      { no: 23, title: "Rồng rắn lên mây", kind: "read", desc: "Đọc truyện; trò chơi dân gian.", moral: "Trò chơi dân gian gắn kết bạn bè." },
      { no: 24, title: "Nặn đồ chơi", kind: "read", desc: "Đọc truyện; khéo tay và kiên nhẫn.", moral: "Kiên trì thì làm được điều mình muốn." }
    ]
  },
  {
    id: "g2_t1_family",
    chapter: "Chủ điểm 4: Mái ấm gia đình",
    chapterIndex: 5,
    book: BOOK_T1,
    lessons: [
      { no: 25, title: "Sự tích hoa tỉ muội", kind: "read", desc: "Đọc truyện; hiếu thảo với cha mẹ.", moral: "Hiếu thảo, biết ơn cha mẹ." },
      { no: 26, title: "Em mang về yêu thương", kind: "read", desc: "Đọc truyện; tình cảm gia đình.", moral: "Yêu thương và quan tâm người thân." },
      { no: 27, title: "Mẹ", kind: "poetry", desc: "Đọc thơ Trần Quốc Minh; công ơn mẹ.", moral: "Biết ơn công lao mẹ." },
      { no: 28, title: "Trò chơi của bố", kind: "read", desc: "Đọc truyện; niềm vui bên bố.", moral: "Quý trọng thời gian bên gia đình." },
      { no: 29, title: "Cánh cửa nhớ bà", kind: "poetry", desc: "Đọc thơ; nhớ ông bà.", moral: "Kính yêu và nhớ ơn ông bà." },
      { no: 30, title: "Thương ông", kind: "poetry", desc: "Đọc thơ; chăm sóc ông bà.", moral: "Quan tâm sức khỏe người già." },
      { no: 31, title: "Ánh sáng của yêu thương", kind: "read", desc: "Đọc truyện; yêu thương xua tan bóng tối.", moral: "Yêu thương mang lại hy vọng." },
      { no: 32, title: "Chơi chong chóng", kind: "read", desc: "Đọc truyện; kỷ niệm tuổi thơ.", moral: "Tình cảm gia đình gắn với kỷ niệm." }
    ]
  },
  {
    id: "g2_t1_review_end1",
    chapter: "Ôn tập cuối học kì 1",
    chapterIndex: 6,
    book: BOOK_T1,
    lessons: [
      { no: 1, title: "Ôn tập và đánh giá cuối học kì 1", kind: "review", desc: "Ôn tổng hợp đọc, viết, nói nghe HK1.", focus: "Kiểm tra HK1" }
    ]
  }
];

const TAP2_THEMES = [
  {
    id: "g2_t2_beauty",
    chapter: "Chủ điểm 1: Vẻ đẹp quanh em",
    chapterIndex: 1,
    book: BOOK_T2,
    lessons: [
      { no: 1, title: "Chuyện bốn mùa", kind: "read", desc: "Đọc truyện; vẻ đẹp bốn mùa.", moral: "Mỗi mùa đều có vẻ đẹp riêng." },
      { no: 2, title: "Mùa nước nổi", kind: "read", desc: "Đọc truyện; cuộc sống miền Tây.", moral: "Thích nghi và yêu quê hương." },
      { no: 3, title: "Họa mi hót", kind: "poetry", desc: "Đọc thơ; âm thanh thiên nhiên.", moral: "Lắng nghe và yêu thiên nhiên." },
      { no: 4, title: "Tết đến rồi", kind: "read", desc: "Đọc truyện; không khí Tết.", moral: "Giữ nét văn hóa truyền thống." },
      { no: 5, title: "Giọt nước và biển lớn", kind: "poetry", desc: "Đọc thơ; sự góp phần tích lũy.", moral: "Mỗi người đều có vai trò." },
      { no: 6, title: "Mùa vàng", kind: "read", desc: "Đọc truyện; mùa gặt lúa.", moral: "Biết ơn người lao động." },
      { no: 7, title: "Hạt thóc", kind: "read", desc: "Đọc truyện; sự kiên trì.", moral: "Kiên trì sẽ gặt hái thành quả." },
      { no: 8, title: "Lũy tre", kind: "read", desc: "Đọc truyện; vẻ đẹp làng quê.", moral: "Yêu cảnh quê hương." }
    ]
  },
  {
    id: "g2_t2_green",
    chapter: "Chủ điểm 2: Hành tinh xanh của em",
    chapterIndex: 2,
    book: BOOK_T2,
    lessons: [
      { no: 9, title: "Vè chim", kind: "poetry", desc: "Đọc vè; các loài chim.", moral: "Yêu và bảo vệ chim chóc." },
      { no: 10, title: "Khủng long", kind: "read", desc: "Đọc truyện; thế giới khủng long.", moral: "Tò mò khám phá thế giới." },
      { no: 11, title: "Sự tích cây thì là", kind: "read", desc: "Đọc truyện cổ; nguồn gốc cây thì là.", moral: "Biết ơn thiên nhiên ban tặng." },
      { no: 12, title: "Bờ tre đón khách", kind: "read", desc: "Đọc truyện; cảnh sắc làng quê.", moral: "Tre gắn với đời sống Việt Nam." },
      { no: 13, title: "Tiếng chổi tre", kind: "poetry", desc: "Đọc thơ; lao động vệ sinh.", moral: "Lao động vệ sinh là đáng quý." },
      { no: 14, title: "Cỏ non cười rồi", kind: "read", desc: "Đọc truyện; bảo vệ môi trường.", moral: "Không được chăn thả trên đồng cỏ chung." },
      { no: 15, title: "Những con sao biển", kind: "read", desc: "Đọc truyện; bảo vệ sinh vật biển.", moral: "Bảo vệ đại dương và sinh vật biển." },
      { no: 16, title: "Tạm biệt cánh cam", kind: "read", desc: "Đọc truyện; bảo vệ loài bướm.", moral: "Không bắt bướm, bảo vệ thiên nhiên." }
    ]
  },
  {
    id: "g2_t2_review_mid2",
    chapter: "Ôn tập giữa học kì 2",
    chapterIndex: 3,
    book: BOOK_T2,
    lessons: [
      { no: 1, title: "Ôn tập giữa học kì 2", kind: "review", desc: "Ôn đọc, viết, luyện từ và câu HK2 (phần 1).", focus: "Ôn tập giữa kì" }
    ]
  },
  {
    id: "g2_t2_connect",
    chapter: "Chủ điểm 3: Giao tiếp và kết nối",
    chapterIndex: 4,
    book: BOOK_T2,
    lessons: [
      { no: 17, title: "Những cách chào độc đáo", kind: "read", desc: "Đọc truyện; cách chào hỏi trên thế giới.", moral: "Tôn trọng văn hóa giao tiếp." },
      { no: 18, title: "Thư viện biết đi", kind: "read", desc: "Đọc truyện; sách đến với mọi nơi.", moral: "Sách mang tri thức đến mọi người." },
      { no: 19, title: "Cảm ơn anh hà mã", kind: "read", desc: "Đọc truyện; lòng biết ơn.", moral: "Biết ơn người giúp đỡ mình." },
      { no: 20, title: "Từ chú bồ câu đến in-tơ-nét", kind: "info", desc: "Đọc văn bản; phương tiện liên lạc.", moral: "Kết nối thông tin có trách nhiệm.", focus: "Phương tiện liên lạc" }
    ]
  },
  {
    id: "g2_t2_vietnam",
    chapter: "Chủ điểm 4: Con người Việt Nam",
    chapterIndex: 5,
    book: BOOK_T2,
    lessons: [
      { no: 21, title: "Mai An Tiêm", kind: "read", desc: "Đọc truyện cổ; tinh thần kiên cường.", moral: "Kiên trì, sáng tạo vượt khó." },
      { no: 22, title: "Thư gửi bố ngoài đảo", kind: "read", desc: "Đọc thư; tình cảm gia đình và Tổ quốc.", moral: "Biết ơn người bảo vệ Tổ quốc." },
      { no: 23, title: "Bóp nát quả cam", kind: "read", desc: "Đọc truyện Trần Quốc Toản.", moral: "Yêu nước, gan dạ bảo vệ đất nước." },
      { no: 24, title: "Chiếc rễ đa tròn", kind: "read", desc: "Đọc truyện Bác Hồ.", moral: "Bác Hồ sống mãi trong trái tim dân." }
    ]
  },
  {
    id: "g2_t2_homeland",
    chapter: "Chủ điểm 5: Việt Nam quê hương em",
    chapterIndex: 6,
    book: BOOK_T2,
    lessons: [
      { no: 25, title: "Đất nước chúng mình", kind: "poetry", desc: "Đọc thơ; vẻ đẹp đất nước.", moral: "Tự hào về Tổ quốc Việt Nam." },
      { no: 26, title: "Trên các miền đất nước", kind: "info", desc: "Đọc văn bản; đa dạng vùng miền.", moral: "Yêu mọi miền quê hương.", focus: "Vùng miền Việt Nam" },
      { no: 27, title: "Chuyện quả bầu", kind: "read", desc: "Đọc truyện cổ; nguồn gốc dân tộc.", moral: "Gắn bó cội nguồn dân tộc." },
      { no: 28, title: "Khám phá đáy biển ở Trường Sa", kind: "info", desc: "Đọc văn bản; biển đảo Việt Nam.", moral: "Bảo vệ chủ quyền biển đảo.", focus: "Trường Sa" },
      { no: 29, title: "Hồ Gươm", kind: "read", desc: "Đọc văn bản; di tích lịch sử.", moral: "Giữ gìn di tích quê hương." },
      { no: 30, title: "Cánh đồng quê em", kind: "poetry", desc: "Đọc thơ; cảnh quê hương.", moral: "Yêu làng quê Việt Nam." }
    ]
  },
  {
    id: "g2_t2_review_end2",
    chapter: "Ôn tập cuối học kì 2",
    chapterIndex: 7,
    book: BOOK_T2,
    lessons: [
      { no: 1, title: "Ôn tập và đánh giá cuối học kì 2", kind: "review", desc: "Ôn tổng hợp đọc, viết, nói nghe HK2.", focus: "Kiểm tra HK2" }
    ]
  }
];

function vizForKind(kind) {
  if (kind === "poetry") return "literaryDevices";
  if (kind === "info") return "readingSteps";
  if (kind === "review") return "writingSteps";
  return "plotDiagram";
}

function categoryForKind(kind) {
  if (kind === "review") return "Ôn tập";
  if (kind === "info") return "Đọc hiểu";
  if (kind === "poetry") return "Văn học";
  return "Đọc hiểu";
}

function buildUnits(themes, idPrefix) {
  const units = [];
  for (const theme of themes) {
    for (const lesson of theme.lessons) {
      const sgkLabel = theme.chapter.includes("Ôn tập")
        ? lesson.title
        : `Bài ${lesson.no}. ${lesson.title}`;
      units.push({
        id: `${idPrefix}_${theme.id}_b${String(lesson.no).padStart(2, "0")}`,
        sgkNo: lesson.no,
        title: sgkLabel,
        chapter: theme.chapter,
        chapterIndex: theme.chapterIndex,
        lessonNo: lesson.no,
        book: theme.book,
        category: categoryForKind(lesson.kind),
        kind: lesson.kind,
        viz: vizForKind(lesson.kind),
        desc: lesson.desc,
        focus: lesson.focus || lesson.title,
        sample: lesson.title,
        storyTitle: lesson.kind === "read" ? lesson.title : "",
        moral: lesson.moral || lesson.desc
      });
    }
  }
  return units;
}

/** @returns {Array<object>} */
export function getGrade2Units() {
  return [
    ...buildUnits(TAP1_THEMES, "lv2"),
    ...buildUnits(TAP2_THEMES, "lv2")
  ];
}

export const GRADE2_META = {
  source: "Bám sát SGK Tiếng Việt 2 — Kết nối tri thức với cuộc sống (Tập 1 & Tập 2).",
  tap1Lessons: 32,
  tap2Lessons: 30,
  reviewBlocks: 4,
  themes: 9
};
