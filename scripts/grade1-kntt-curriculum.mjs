/**
 * Chương trình Tiếng Việt lớp 1 — SGK Kết nối tri thức với cuộc sống.
 * Tập 1: 80 bài (học vần + ôn tập kể chuyện)
 * Tập 2: 8 chủ điểm luyện tập tổng hợp + ôn tập HK1/cuối năm
 */

const BOOK_T1 = "Tiếng Việt 1 — Kết nối tri thức · Tập 1";
const BOOK_T2 = "Tiếng Việt 1 — Kết nối tri thức · Tập 2";

/** Bài 5, 10, … 80 — kể chuyện xen kẽ (Chào em vào lớp 1) */
const STORY_LESSONS = {
  5: { title: "Búp bê và dế mèn", moral: "Tình bạn và sự chia sẻ làm ta vui." },
  10: { title: "Đàn kiến con ngoan ngoãn", moral: "Chăm chỉ, đoàn kết sẽ hoàn thành công việc." },
  15: { title: "Con quạ thông minh", moral: "Thông minh, biết quan sát giúp vượt qua khó khăn." },
  20: { title: "Cô chủ không biết quý tình bạn", moral: "Phải biết trân trọng tình bạn chân thành." },
  25: { title: "Chó sói và cừu non", moral: "Bình tĩnh và thông minh có thể thoát hiểm." },
  30: { title: "Kiến và dế mèn", moral: "Chăm chỉ tích lũy sẽ có lúc hữu ích." },
  35: { title: "Gà nâu và vịt xám", moral: "Không nên ganh tỵ; mỗi người có điểm hay riêng." },
  40: { title: "Hai người bạn và con gấu", moral: "Đoàn kết, giúp đỡ nhau vượt qua nguy hiểm." },
  45: { title: "Sự tích hoa cúc trắng", moral: "Lòng hiếu thảo và lòng biết ơn." },
  50: { title: "Bài học đầu tiên của thỏ con", moral: "Nghe lời cha mẹ, cẩn thận khi đi chơi." },
  55: { title: "Mật ong của gấu con", moral: "Chia sẻ phần mình cho người khác." },
  60: { title: "Quạ và đàn bồ câu", moral: "Đoàn kết tạo nên sức mạnh." },
  65: { title: "Lửa, mưa và con hổ hung hăng", moral: "Khiêm tốn, biết lắng nghe lời khuyên." },
  70: { title: "Chuột nhà và chuột đồng", moral: "Biết ơn sự giúp đỡ của bạn bè." },
  75: { title: "Chuyện của mây", moral: "Thiên nhiên mang lại niềm vui và tri thức." },
  80: { title: "Sừng và chân", moral: "Mỗi bộ phận đều có giá trị riêng; đừng chê mình." }
};

/** 64 bài học vần (bài không chia hết cho 5), bám VBT/SGK KNT */
const PHONICS_BY_SLOT = [
  null,
  { focus: "A, a", sample: "a, bà, cá", desc: "Nhận biết chữ và âm a; đọc, viết tiếng có a." },
  { focus: "B, b · dấu huyền", sample: "b, bé, bè", desc: "Học chữ b và dấu huyền (`)." },
  { focus: "C, c · dấu sắc", sample: "c, cá, cò", desc: "Học chữ c và dấu sắc (/)." },
  { focus: "E, e · Ê, ê", sample: "e, bé, ê", desc: "Học e, ê và ghép tiếng." },
  null,
  { focus: "O, o · dấu hỏi", sample: "o, bò, cỏ", desc: "Học o và dấu hỏi (?)." },
  { focus: "Ô, ô · dấu nặng", sample: "ô, cô, mồ", desc: "Học ô và dấu nặng (.)" },
  { focus: "D, d · Đ, đ", sample: "d, đ, da, đa", desc: "Phân biệt d và đ." },
  { focus: "Ơ, ơ", sample: "ơ, bơ, cờ", desc: "Học chữ ơ và tiếng mẫu." },
  null,
  { focus: "I, i · K, k", sample: "i, ki, bi", desc: "Học i, k; ghép tiếng ki, bi." },
  { focus: "H, h · L, l", sample: "h, l, la, lo", desc: "Học h, l; đọc tiếng có h, l." },
  { focus: "U, u · Ư, ư", sample: "u, ư, cu, cư", desc: "Phân biệt u và ư." },
  { focus: "Ch, ch · Kh, kh", sample: "ch, kh, cha, khe", desc: "Học vị âm ghép ch, kh." },
  null,
  { focus: "M, m · N, n", sample: "m, n, me, ne", desc: "Học m, n; ghép tiếng me, ne." },
  { focus: "G, g · Gi, gi", sample: "g, gi, ga, già", desc: "Học g và gi." },
  { focus: "Gh, gh · Nh, nh", sample: "gh, nh, ghe, nho", desc: "Học gh, nh." },
  { focus: "Ng, ng · Ngh, ngh", sample: "ng, ngh, nghe, nghé", desc: "Học ng, ngh." },
  null,
  { focus: "R, r · S, s", sample: "r, s, ra, sa", desc: "Học r, s." },
  { focus: "T, t · Tr, tr", sample: "t, tr, ta, tre", desc: "Học t, tr." },
  { focus: "Th, th · ia", sample: "th, tha, tia", desc: "Học th và vần ia." },
  { focus: "ua · ưa", sample: "mua, mưa", desc: "Học vần ua, ưa." },
  null,
  { focus: "Ph, ph · Qu, qu", sample: "ph, qu, pho, qua", desc: "Học ph, qu." },
  { focus: "V, v · X, x", sample: "v, x, ve, xe", desc: "Học v, x." },
  { focus: "Y, y", sample: "y, ya, y tá", desc: "Học chữ y." },
  { focus: "Luyện tập chính tả", sample: "viết đúng chữ đã học", desc: "Ôn chữ cái; viết đúng, đẹp." },
  null,
  { focus: "an · ăn · ân", sample: "ban, băn, bân", desc: "Học vần an, ăn, ân." },
  { focus: "on · ôn · ơn", sample: "con, côn, cơn", desc: "Học vần on, ôn, ơn." },
  { focus: "en · ên · in · un", sample: "sen, sên, sin, sun", desc: "Học vần en, ên, in, un." },
  { focus: "am · ăm · âm", sample: "cam, cắm, câm", desc: "Học vần am, ăm, âm." },
  null,
  { focus: "om · ôm · ơm", sample: "com, côm, cơm", desc: "Học vần om, ôm, ơm." },
  { focus: "em · êm · im · um", sample: "tem, têm, tim, tum", desc: "Học vần em, êm, im, um." },
  { focus: "ai · ay · ây", sample: "bai, bay, bây", desc: "Học vần ai, ay, ây." },
  { focus: "oi · ôi · ơi", sample: "boi, bôi, bơi", desc: "Học vần oi, ôi, ơi." },
  null,
  { focus: "ui · ưi", sample: "bui, bưi", desc: "Học vần ui, ưi." },
  { focus: "ao · eo", sample: "bao, beo", desc: "Học vần ao, eo." },
  { focus: "au · âu · êu", sample: "bau, bâu, bêu", desc: "Học vần au, âu, êu." },
  { focus: "iu · ưu", sample: "biu, bưu", desc: "Học vần iu, ưu." },
  null,
  { focus: "ac · ăc · âc", sample: "bac, bắc, bâc", desc: "Học vần ac, ăc, âc." },
  { focus: "oc · ôc · uc · ưc", sample: "boc, bộc, buc", desc: "Học vần oc, ôc, uc, ưc." },
  { focus: "at · ăt · ât", sample: "bat, băt, bât", desc: "Học vần at, ăt, ât." },
  { focus: "ot · ôt · ơt", sample: "bot, bôt, bơt", desc: "Học vần ot, ôt, ơt." },
  null,
  { focus: "et · êt · it", sample: "bet, bêt, bit", desc: "Học vần et, êt, it." },
  { focus: "ut · ưt", sample: "but, bưt", desc: "Học vần ut, ưt." },
  { focus: "ap · ăp · âp", sample: "bap, bắp, bâp", desc: "Học vần ap, ăp, âp." },
  { focus: "op · ôp · ơp", sample: "bop, bộp, bơp", desc: "Học vần op, ôp, ơp." },
  null,
  { focus: "ep · êp · ip · up", sample: "bep, bêp, bip", desc: "Học vần ep, êp, ip, up." },
  { focus: "anh · ênh · inh", sample: "banh, bênh, binh", desc: "Học vần anh, ênh, inh." },
  { focus: "ach · êch · ich", sample: "bach, bêch, bich", desc: "Học vần ach, êch, ich." },
  { focus: "ang · ăng · âng", sample: "bang, băng, bâng", desc: "Học vần ang, ăng, âng." },
  null,
  { focus: "ong · ông · ung · ưng", sample: "bong, bông, bung", desc: "Học vần ong, ông, ung, ưng." },
  { focus: "iêc · iên · iêp", sample: "biêc, biên, biêp", desc: "Học vần iêc, iên, iêp." },
  { focus: "iêng · iêm · yên", sample: "biêng, biêm, yên", desc: "Học vần iêng, iêm, yên." },
  { focus: "iêt · iêu · yêu", sample: "biêt, biêu, yêu", desc: "Học vần iêt, iêu, yêu." },
  null,
  { focus: "uôi · uôm", sample: "buôi, buôm", desc: "Học vần uôi, uôm." },
  { focus: "uôc · uôt", sample: "buôc, buôt", desc: "Học vần uôc, uôt." },
  { focus: "uôn · uông", sample: "buôn, buông", desc: "Học vần uôn, uông." },
  { focus: "ươi · ươu", sample: "bươi, bươu", desc: "Học vần ươi, ươu." },
  null,
  { focus: "ươc · ươt", sample: "bươc, bươt", desc: "Học vần ươc, ươt." },
  { focus: "ươm · ươp", sample: "bươm, bươp", desc: "Học vần ươm, ươp." },
  { focus: "ươn · ương", sample: "bươn, bương", desc: "Học vần ươn, ương." },
  { focus: "oa · oe", sample: "hoa, loe", desc: "Học vần oa, oe." },
  null,
  { focus: "oan · oăn · oat · oăt", sample: "hoan, hoăn", desc: "Học vần oan, oăn, oat, oăt." },
  { focus: "oai · uê · uy", sample: "hoai, huê, huy", desc: "Học vần oai, uê, uy." },
  { focus: "uân · uât", sample: "huân, huât", desc: "Học vần uân, uât." },
  { focus: "uyên · uyêt", sample: "huyên, huyêt", desc: "Học vần uyên, uyêt." },
  null
];

const TAP2_THEMES = [
  {
    id: "t2_friends",
    chapter: "Chủ điểm 1: Tôi và các bạn",
    chapterIndex: 1,
    book: BOOK_T2,
    lessons: [
      { no: 1, title: "Tôi là học sinh lớp 1", type: "read", desc: "Đọc hiểu bài thơ; cảm nhận niềm vui ngày đầu đi học." },
      { no: 2, title: "Đôi tai xấu xí", type: "read", desc: "Đọc truyện; hiểu nội dung, nhân vật và thông điệp." },
      { no: 3, title: "Bạn của gió", type: "read", desc: "Đọc thơ; cảm nhận hình ảnh và tình cảm." },
      { no: 4, title: "Giải thưởng tình bạn", type: "read", desc: "Đọc truyện về tình bạn chân thành." },
      { no: 5, title: "Sinh nhật của voi con", type: "read", desc: "Đọc truyện; chia sẻ niềm vui cùng bạn." },
      { no: 6, title: "Ôn tập", type: "review", desc: "Ôn đọc, viết, nói chủ điểm Tôi và các bạn." }
    ]
  },
  {
    id: "t2_family",
    chapter: "Chủ điểm 2: Mái ấm gia đình",
    chapterIndex: 2,
    book: BOOK_T2,
    lessons: [
      { no: 1, title: "Nụ hôn trên bàn tay", type: "read", desc: "Đọc truyện về tình cảm gia đình." },
      { no: 2, title: "Làm anh", type: "read", desc: "Đọc truyện; vai trò người anh/chị trong gia đình." },
      { no: 3, title: "Cả nhà đi chơi núi", type: "read", desc: "Đọc truyện; cảm nhận niềm vui sum họp." },
      { no: 4, title: "Quạt cho bà ngủ", type: "read", desc: "Đọc thơ; hiếu thảo với ông bà." },
      { no: 5, title: "Bữa cơm gia đình", type: "read", desc: "Đọc truyện; giá trị bữa cơm sum vầy." },
      { no: 6, title: "Ngôi nhà", type: "read", desc: "Đọc thơ; tình yêu mái ấm." },
      { no: 7, title: "Ôn tập", type: "review", desc: "Ôn kỹ năng đọc viết chủ điểm Gia đình." }
    ]
  },
  {
    id: "t2_school",
    chapter: "Chủ điểm 3: Mái trường mến yêu",
    chapterIndex: 3,
    book: BOOK_T2,
    lessons: [
      { no: 1, title: "Tôi đi học", type: "read", desc: "Đọc thơ; cảm xúc ngày đầu tiên đến trường." },
      { no: 2, title: "Đi học", type: "read", desc: "Đọc thơ Lưu Quang Vũ; yêu trường, yêu lớp." },
      { no: 3, title: "Hoa yêu thương", type: "read", desc: "Đọc truyện; tình cảm thầy trò." },
      { no: 4, title: "Cây bàng và lớp học", type: "read", desc: "Đọc truyện; gắn bó với trường lớp." },
      { no: 5, title: "Bác trống trường", type: "read", desc: "Đọc thơ; nhịp sinh hoạt ở trường." },
      { no: 6, title: "Giờ ra chơi", type: "read", desc: "Đọc truyện; niềm vui giờ giải lao." },
      { no: 7, title: "Ôn tập", type: "review", desc: "Ôn đọc viết chủ điểm Mái trường." }
    ]
  },
  {
    id: "t2_life_skills",
    chapter: "Chủ điểm 4: Điều em cần biết",
    chapterIndex: 4,
    book: BOOK_T2,
    lessons: [
      { no: 1, title: "Rửa tay trước khi ăn", type: "info", desc: "Đọc văn bản thông tin; thói quen vệ sinh." },
      { no: 2, title: "Lời chào đi trước", type: "info", desc: "Đọc và thực hành lời chào lịch sự." },
      { no: 3, title: "Khi mẹ vắng nhà", type: "info", desc: "Đọc truyện; an toàn khi ở nhà một mình." },
      { no: 4, title: "Nếu không may bị lạc", type: "info", desc: "Đọc hướng dẫn; ứng xử khi bị lạc." },
      { no: 5, title: "Đèn giao thông", type: "info", desc: "Đọc văn bản; chấp hành luật giao thông." },
      { no: 6, title: "Ôn tập", type: "review", desc: "Ôn kỹ năng đọc hiểu văn bản thông tin." }
    ]
  },
  {
    id: "t2_life_lessons",
    chapter: "Chủ điểm 5: Bài học từ cuộc sống",
    chapterIndex: 5,
    book: BOOK_T2,
    lessons: [
      { no: 1, title: "Kiến và chim bồ câu", type: "read", desc: "Đọc truyện ngụ ngôn; giúp đỡ lẫn nhau." },
      { no: 2, title: "Câu chuyện của rễ", type: "read", desc: "Đọc truyện; mỗi người có vai trò riêng." },
      { no: 3, title: "Câu hỏi của sói", type: "read", desc: "Đọc truyện; thông minh thoát hiểm." },
      { no: 4, title: "Chú bé chăn cừu", type: "read", desc: "Đọc truyện; trung thực, không nói dối." },
      { no: 5, title: "Tiếng vọng của núi", type: "read", desc: "Đọc truyện; đối xử với người khác như với mình." },
      { no: 6, title: "Ôn tập", type: "review", desc: "Ôn đọc hiểu truyện ngụ ngôn." }
    ]
  },
  {
    id: "t2_nature",
    chapter: "Chủ điểm 6: Thiên nhiên kì thú",
    chapterIndex: 6,
    book: BOOK_T2,
    lessons: [
      { no: 1, title: "Loài chim của biển cả", type: "read", desc: "Đọc truyện; khám phá thiên nhiên biển." },
      { no: 2, title: "Bảy sắc cầu vồng", type: "read", desc: "Đọc truyện; hiện tượng thiên nhiên." },
      { no: 3, title: "Chúa tể rừng xanh", type: "read", desc: "Đọc truyện; bảo vệ rừng." },
      { no: 4, title: "Cuộc thi tài năng rừng xanh", type: "read", desc: "Đọc truyện; đa dạng loài trong rừng." },
      { no: 5, title: "Cây liễu dẻo dai", type: "read", desc: "Đọc truyện; sức sống của cây cối." },
      { no: 6, title: "Ôn tập", type: "review", desc: "Ôn đọc viết chủ điểm Thiên nhiên." }
    ]
  },
  {
    id: "t2_world",
    chapter: "Chủ điểm 7: Thế giới trong mắt em",
    chapterIndex: 7,
    book: BOOK_T2,
    lessons: [
      { no: 1, title: "Tia nắng đi đâu?", type: "poetry", desc: "Đọc thơ; cảm nhận hình ảnh thơ." },
      { no: 2, title: "Trong giấc mơ buổi sáng", type: "poetry", desc: "Đọc thơ; trí tưởng tượng." },
      { no: 3, title: "Ngày mới bắt đầu", type: "poetry", desc: "Đọc thơ; niềm vui buổi sáng." },
      { no: 4, title: "Hỏi mẹ", type: "poetry", desc: "Đọc thơ; tình cảm mẹ con." },
      { no: 5, title: "Những cánh cò", type: "poetry", desc: "Đọc thơ; hình ảnh thiên nhiên." },
      { no: 6, title: "Buổi trưa hè", type: "poetry", desc: "Đọc thơ; cảnh mùa hè." },
      { no: 7, title: "Hoa phượng", type: "poetry", desc: "Đọc thơ; kỷ niệm mùa hè." },
      { no: 8, title: "Ôn tập", type: "review", desc: "Ôn đọc thuộc lòng, cảm thụ thơ." }
    ]
  },
  {
    id: "t2_country",
    chapter: "Chủ điểm 8: Đất nước và con người",
    chapterIndex: 8,
    book: BOOK_T2,
    lessons: [
      { no: 1, title: "Cậu bé thông minh", type: "read", desc: "Đọc truyện dân gian; trí thông minh Việt Nam." },
      { no: 2, title: "Lính cứu hỏa", type: "read", desc: "Đọc truyện; nghề nghiệp và lòng dũng cảm." },
      { no: 3, title: "Lớn lên bạn làm gì?", type: "read", desc: "Đọc truyện; ước mơ nghề nghiệp." },
      { no: 4, title: "Ruộng bậc thang ở Sa Pa", type: "info", desc: "Đọc văn bản; vẻ đẹp quê hương." },
      { no: 5, title: "Nhớ ơn", type: "poetry", desc: "Đọc thơ; biết ơn những người có công." },
      { no: 6, title: "Du lịch biển Việt Nam", type: "info", desc: "Đọc văn bản; tự hào đất nước." },
      { no: 7, title: "Ôn tập", type: "review", desc: "Ôn tổng hợp chủ điểm cuối năm." }
    ]
  }
];

const TAP1_HK1_REVIEW = [
  { n: 81, title: "Ôn tập (1)", desc: "Ôn âm, vần, từ và câu đã học HK1." },
  { n: 82, title: "Ôn tập (2)", desc: "Luyện đọc, viết từ và câu ngắn." },
  { n: 83, title: "Ôn tập (3)", desc: "Luyện kể chuyện và chính tả cơ bản." },
  { n: 84, title: "Đánh giá cuối học kì I", desc: "Kiểm tra đọc, viết, kể chuyện HK1." }
];

const TAP2_FINAL_REVIEW = [
  { n: 1, title: "Ôn tập cuối năm (1)", desc: "Ôn đọc hiểu các văn bản đã học." },
  { n: 2, title: "Ôn tập cuối năm (2)", desc: "Ôn viết câu, đoạn ngắn." },
  { n: 3, title: "Ôn tập cuối năm (3)", desc: "Ôn nói, kể chuyện theo tranh." },
  { n: 4, title: "Đánh giá cuối năm học", desc: "Kiểm tra tổng hợp cuối năm lớp 1." }
];

function weekForLesson(n) {
  return Math.ceil(n / 5);
}

function buildTap1Units() {
  const units = [];
  for (let n = 1; n <= 80; n += 1) {
    const week = weekForLesson(n);
    const chapter = `Tuần ${week} · Chào em vào lớp 1`;
    if (STORY_LESSONS[n]) {
      const story = STORY_LESSONS[n];
      units.push({
        id: `lv1_b${String(n).padStart(2, "0")}`,
        sgkNo: n,
        title: `Bài ${n}. Ôn tập và kể chuyện: ${story.title}`,
        chapter,
        chapterIndex: week,
        lessonNo: ((n - 1) % 5) + 1,
        book: BOOK_T1,
        category: "Kể chuyện",
        kind: "story",
        viz: "plotDiagram",
        desc: `Kể chuyện «${story.title}»; rút ra bài học: ${story.moral}`,
        storyTitle: story.title,
        moral: story.moral
      });
    } else {
      const ph = PHONICS_BY_SLOT[n];
      if (!ph) continue;
      units.push({
        id: `lv1_b${String(n).padStart(2, "0")}`,
        sgkNo: n,
        title: `Bài ${n}. ${ph.focus}`,
        chapter,
        chapterIndex: week,
        lessonNo: ((n - 1) % 5) + 1,
        book: BOOK_T1,
        category: "Học vần",
        kind: "phonics",
        viz: "syllableChart",
        desc: ph.desc,
        focus: ph.focus,
        sample: ph.sample
      });
    }
  }
  TAP1_HK1_REVIEW.forEach((r, i) => {
    units.push({
      id: `lv1_b${r.n}`,
      sgkNo: r.n,
      title: `Bài ${r.n}. ${r.title}`,
      chapter: "Ôn tập học kì I",
      chapterIndex: 18,
      lessonNo: i + 1,
      book: BOOK_T1,
      category: "Ôn tập",
      kind: "review",
      viz: "readingSteps",
      desc: r.desc
    });
  });
  return units;
}

function buildTap2Units() {
  const units = [];
  for (const theme of TAP2_THEMES) {
    for (const lesson of theme.lessons) {
      const kind = lesson.type;
      const viz = kind === "poetry" ? "literaryDevices" : kind === "info" ? "readingSteps" : kind === "review" ? "writingSteps" : "plotDiagram";
      const category = kind === "review" ? "Ôn tập" : kind === "info" ? "Đọc hiểu" : kind === "poetry" ? "Văn học" : "Đọc hiểu";
      units.push({
        id: `lv1_${theme.id}_b${lesson.no}`,
        sgkNo: lesson.no,
        title: `Bài ${lesson.no}. ${lesson.title}`,
        chapter: theme.chapter,
        chapterIndex: theme.chapterIndex,
        lessonNo: lesson.no,
        book: theme.book,
        category,
        kind,
        viz,
        desc: lesson.desc,
        themeId: theme.id
      });
    }
  }
  TAP2_FINAL_REVIEW.forEach((r, i) => {
    units.push({
      id: `lv1_final_b${r.n}`,
      sgkNo: r.n,
      title: `Bài ${r.n}. ${r.title}`,
      chapter: "Ôn tập và đánh giá cuối năm",
      chapterIndex: 9,
      lessonNo: i + 1,
      book: BOOK_T2,
      category: "Ôn tập",
      kind: "review",
      viz: "readingSteps",
      desc: r.desc
    });
  });
  return units;
}

/** @returns {Array<object>} units for grade 1 skill builder */
export function getGrade1Units() {
  return [...buildTap1Units(), ...buildTap2Units()];
}

export const GRADE1_META = {
  source: "Bám sát SGK Tiếng Việt 1 — Kết nối tri thức với cuộc sống (Tập 1 & Tập 2).",
  tap1Lessons: 80,
  tap2Themes: 8,
  storyCount: 16
};
