/**
 * Sinh nội dung Ngữ văn / Tiếng Việt (lớp 1–5, 6–9) + ôn hè 6→7.
 * Chạy: node scripts/generate-literature-content.mjs
 */
import { writeFile, mkdir } from "node:fs/promises";
import { getGrade1Units, GRADE1_META } from "./grade1-kntt-curriculum.mjs";
import { getGrade2Units, GRADE2_META } from "./grade2-kntt-curriculum.mjs";
import { getGrade3Units, GRADE3_META } from "./grade3-kntt-curriculum.mjs";
import { getGrade4Units, GRADE4_META } from "./grade4-kntt-curriculum.mjs";
import { getGrade5Units, GRADE5_META } from "./grade5-kntt-curriculum.mjs";

function isPrimaryGrade(grade) {
  return grade >= 1 && grade <= 5;
}

const grades = {
  6: {
    book: "Ngữ văn 6 — Kết nối tri thức",
    units: [
      { id: "lv6_folktale", title: "Đọc — Truyện dân gian", chapter: "Đọc hiểu", viz: "readingSteps", desc: "Đọc truyện dân gian; nhận biết chi tiết, tình tiết, ý nghĩa." },
      { id: "lv6_narrative", title: "Đọc — Văn bản kể chuyện", chapter: "Đọc hiểu", viz: "plotDiagram", desc: "Phân tích cốt truyện: mở–thân–kết; nhân vật và chi tiết tiêu biểu." },
      { id: "lv6_noun", title: "Tiếng Việt — Danh từ", chapter: "Tiếng Việt", viz: "sentenceParts", desc: "Danh từ, tính từ, số lượng; xác định thành phần trong câu." },
      { id: "lv6_verb", title: "Tiếng Việt — Động từ", chapter: "Tiếng Việt", viz: "sentenceParts", desc: "Động từ, trạng từ; chia thì và cách dùng cơ bản." },
      { id: "lv6_vocab", title: "Từ ngữ trong ngữ cảnh", chapter: "Tiếng Việt", viz: "literaryDevices", desc: "Hiểu nghĩa từ theo ngữ cảnh; từ đồng nghĩa, trái nghĩa." },
      { id: "lv6_poetry", title: "Thơ — Vần điệu & hình ảnh", chapter: "Văn học", viz: "literaryDevices", desc: "Vần, lượng, nhịp; biện pháp tu từ cơ bản trong thơ." },
      { id: "lv6_describe", title: "Viết — Đoạn văn miêu tả", chapter: "Nói và viết", viz: "writingSteps", desc: "Cấu trúc đoạn văn; câu mở, thân, kết; miêu tả người, vật." },
      { id: "lv6_speak", title: "Nói — Trình bày ý kiến", chapter: "Nói và viết", viz: "readingSteps", desc: "Nói ngắn gọn, rõ ràng; lập luận đơn giản có dẫn chứng." }
    ]
  },
  7: {
    book: "Ngữ văn 7 — Kết nối tri thức",
    units: [
      { id: "lv7_literary", title: "Đọc — Văn bản văn học", chapter: "Đọc hiểu", viz: "plotDiagram", desc: "Đọc truyện ngắn, tản văn; nắm chủ đề và thái độ tác giả." },
      { id: "lv7_expository", title: "Đọc — Văn bản thông tin", chapter: "Đọc hiểu", viz: "readingSteps", desc: "Tìm thông tin chính, phụ; liên hệ thực tế." },
      { id: "lv7_sentence", title: "Tiếng Việt — Câu và thành phần", chapter: "Tiếng Viết", viz: "sentenceParts", desc: "Câu đơn, câu ghép; CN, VN, TN, trạng ngữ." },
      { id: "lv7_compound", title: "Tiếng Việt — Câu ghép", chapter: "Tiếng Việt", viz: "sentenceParts", desc: "Liên từ, dấu câu nối các vế câu." },
      { id: "lv7_figures", title: "Biện pháp tu từ", chapter: "Văn học", viz: "literaryDevices", desc: "So sánh, nhân hóa, ẩn dụ, điệp ngữ, điệp âm." },
      { id: "lv7_narrative_write", title: "Viết — Văn kể chuyện", chapter: "Nói và viết", viz: "writingSteps", desc: "Kể chuyện có cốt truyện rõ; sắp xếp tình tiết hợp lý." },
      { id: "lv7_express", title: "Viết — Bày tỏ cảm xúc", chapter: "Nói và viết", viz: "writingSteps", desc: "Viết đoạn cảm nghĩ; dùng từ gợi tả, gợi cảm." },
      { id: "lv7_debate", title: "Nói — Thảo luận nhóm", chapter: "Nói và viết", viz: "readingSteps", desc: "Trao đổi, phản biện lịch sự; lắng nghe ý kiến." }
    ]
  },
  8: {
    book: "Ngữ văn 8 — Kết nối tri thức",
    units: [
      { id: "lv8_novel_excerpt", title: "Đọc — Trích đoạn truyện dài", chapter: "Đọc hiểu", viz: "characterMap", desc: "Phân tích nhân vật, xung đột, cao trào." },
      { id: "lv8_essay", title: "Đọc — Văn nghị luận", chapter: "Đọc hiểu", viz: "readingSteps", desc: "Luận điểm, luận cứ, kết luận trong văn nghị luận." },
      { id: "lv8_complex", title: "Tiếng Việt — Câu phức", chapter: "Tiếng Việt", viz: "sentenceParts", desc: "Câu phức, mệnh đề phụ; quan hệ từ." },
      { id: "lv8_style", title: "Phong cách ngôn ngữ", chapter: "Tiếng Việt", viz: "literaryDevices", desc: "Giọng văn trang trọng, thân mật; từ ngữ gợi tả." },
      { id: "lv8_poetry_analysis", title: "Thơ — Phân tích thơ hiện đại", chapter: "Văn học", viz: "literaryDevices", desc: "Chủ đề, hình ảnh, nhịp điệu trong thơ." },
      { id: "lv8_argument", title: "Viết — Văn nghị luận ngắn", chapter: "Nói và viết", viz: "writingSteps", desc: "Mở bài, thân bài, kết bài; lập luận chặt chẽ." },
      { id: "lv8_report", title: "Viết — Báo cáo tham luận", chapter: "Nói và viết", viz: "writingSteps", desc: "Cấu trúc bài nói; dẫn chứng và kết luận." },
      { id: "lv8_media", title: "Đọc đa phương tiện", chapter: "Đọc hiểu", viz: "readingSteps", desc: "Đọc văn bản kết hợp hình ảnh, sơ đồ, infographic." }
    ]
  },
  9: {
    book: "Ngữ văn 9 — Kết nối tri thức",
    units: [
      { id: "lv9_classics", title: "Đọc — Văn bản kinh điển", chapter: "Đọc hiểu", viz: "plotDiagram", desc: "Đọc truyện/trích đoạn kinh điển; giá trị nhân văn." },
      { id: "lv9_social", title: "Đọc — Văn bản xã hội", chapter: "Đọc hiểu", viz: "readingSteps", desc: "Phân tích vấn đề xã hội qua văn bản." },
      { id: "lv9_rhetoric", title: "Tu từ học nâng cao", chapter: "Văn học", viz: "literaryDevices", desc: "Hoán dụ, chuyển từ ngữ nghĩa, đối lập, điệp cấu trúc." },
      { id: "lv9_grammar_adv", title: "Tiếng Việt — Ôn tập câu", chapter: "Tiếng Việt", viz: "sentenceParts", desc: "Phân loại câu theo mục đích; câu cảm, cầu khiến." },
      { id: "lv9_literary_genre", title: "Thể loại văn học", chapter: "Văn học", viz: "genreMap", desc: "Truyện, kịch, thơ, tản văn; đặc trưng từng thể loại." },
      { id: "lv9_essay_full", title: "Viết — Nghị luận xã hội", chapter: "Nói và viết", viz: "writingSteps", desc: "Nghị luận về hiện tượng đời sống; mở–thân–kết chuẩn." },
      { id: "lv9_creative", title: "Viết — Sáng tạo có hướng dẫn", chapter: "Nói và viết", viz: "writingSteps", desc: "Viết truyện ngắn, thơ; phát triển ý tưởng sáng tạo." },
      { id: "lv9_exam_prep", title: "Luyện thi — Đọc hiểu THCS", chapter: "Ôn tập", viz: "readingSteps", desc: "Chiến lược làm bài đọc hiểu; trả lời câu hỏi mở." }
    ]
  }
};

function buildPrimarySkills(units, grade) {
  return units.map((u, i) => ({
    id: u.id,
    title: u.title,
    grade,
    book: u.book,
    chapter: u.chapter,
    chapterIndex: u.chapterIndex,
    lessonNo: u.lessonNo,
    sgkNo: u.sgkNo,
    prerequisite: i > 0 ? [units[i - 1].id] : [],
    description: u.desc,
    visualization: u.viz,
    category: u.category,
    litKind: u.kind,
    litFocus: u.focus || "",
    litSample: u.sample || "",
    litStory: u.storyTitle || ((u.kind === "read" || u.kind === "story") ? u.title.replace(/^Bài \d+\. /, "") : ""),
    litMoral: u.moral || ""
  }));
}

function appendGradeSkills(skills, units, grade) {
  const batch = buildPrimarySkills(units, grade);
  skills.push(...batch);
}

function buildSkills() {
  const skills = [];
  appendGradeSkills(skills, getGrade1Units(), 1);
  appendGradeSkills(skills, getGrade2Units(), 2);
  appendGradeSkills(skills, getGrade3Units(), 3);
  appendGradeSkills(skills, getGrade4Units(), 4);
  appendGradeSkills(skills, getGrade5Units(), 5);
  for (const [grade, cfg] of Object.entries(grades)) {
    const units = cfg.units;
    units.forEach((u, i) => {
      skills.push({
        id: u.id,
        title: u.title,
        grade: Number(grade),
        book: cfg.book,
        chapter: u.chapter,
        chapterIndex: Math.floor(i / 2) + 1,
        lessonNo: (i % 2) + 1,
        prerequisite: i > 0 ? [units[i - 1].id] : [],
        description: u.desc,
        visualization: u.viz,
        category: u.chapter
      });
    });
  }
  return skills;
}

function lessonSteps(skill) {
  return [
    { type: "intro", title: "Mục tiêu bài học", content: skill.description },
    {
      type: "visualization",
      title: "Trực quan hóa",
      visualization: skill.visualization,
      content: "Quan sát sơ đồ minh họa trước khi luyện tập."
    },
    {
      type: "keypoints",
      title: "Điểm cần nhớ",
      content: "Ghi nhớ các ý sau:",
      points: keypointsFor(skill)
    },
    {
      type: "example",
      title: "Ví dụ minh họa",
      content: exampleFor(skill)
    },
    { type: "summary", title: "Sẵn sàng luyện tập", content: "Hoàn thành bài học rồi làm mini quiz để củng cố kiến thức." }
  ];
}

function keypointsFor(skill) {
  const id = skill.id;
  if (isPrimaryGrade(skill.grade)) {
    if (skill.litKind === "phonics") {
      return [
        `Tập trung: ${skill.litFocus}.`,
        `Ví dụ: ${skill.litSample}.`,
        "Đọc to, rõ ràng; viết đúng mẫu chữ."
      ];
    }
    if (skill.litKind === "story" || skill.litKind === "read") {
      return [
        `Văn bản: «${skill.litStory}».`,
        "Nghe/đọc kỹ; nhớ tên nhân vật và việc chính.",
        `Bài học: ${skill.litMoral}`
      ];
    }
    if (skill.litKind === "poetry") {
      return ["Đọc thơ với giọng nhẹ nhàng.", "Chú ý vần điệu và hình ảnh.", "Nói cảm nghĩ sau khi đọc."];
    }
    if (skill.litKind === "info") {
      return ["Đọc chậm, tìm thông tin chính.", "Liên hệ thực tế hàng ngày.", "Thực hành điều đã học."];
    }
    if (skill.litKind === "grammar") {
      return ["Nắm quy tắc ngữ pháp trong bài.", "Làm bài tập LTVC trong SGK.", "Áp dụng vào viết câu đúng."];
    }
    if (skill.litKind === "writing") {
      return ["Nắm yêu cầu đề bài.", "Lập dàn ý trước khi viết.", "Viết đủ ý, đúng chính tả."];
    }
    return ["Ôn lại bài đã học.", "Luyện đọc, viết, nói.", "Chuẩn bị kiểm tra."];
  }
  const map = {
    lv6_folktale: ["Đọc lướt nắm cốt truyện, đọc kỹ tìm chi tiết.", "Chú ý lời thoại và hành động nhân vật.", "Rút ra bài học ý nghĩa cuộc sống."],
    lv6_poetry: ["Thơ có vần, nhịp, hình ảnh.", "Biện pháp so sánh, nhân hóa làm thơ sinh động.", "Đọc thuộc lòng giúp cảm nhận nhịp điệu."],
    lv7_figures: ["So sánh: tìm sự giống/khác.", "Nhân hóa: gán tính người cho sự vật.", "Ẩn dụ: gọi tên này chỉ sự vật khác."],
    lv8_argument: ["Mở bài: giới thiệu vấn đề.", "Thân bài: 2–3 luận điểm + dẫn chứng.", "Kết bài: khẳng định, mở rộng hoặc liên hệ."],
    lv9_rhetoric: ["Hoán dụ thay tên gọi.", "Điệp ngữ nhấn mạnh ý.", "Đối lập tạo sức nặng cho văn bản."]
  };
  return map[id] || [
    "Đọc kỹ yêu cầu đề bài.",
    "Gạch chân từ khóa quan trọng.",
    "Trả lời đủ ý, rõ ràng, mạch lạc."
  ];
}

function exampleFor(skill) {
  const id = skill.id;
  if (isPrimaryGrade(skill.grade)) {
    if (skill.litKind === "phonics") {
      return `Tiếng mẫu: ${skill.litSample}. Ghép âm thành tiếng rồi đọc trơn.`;
    }
    if (skill.litKind === "story" || skill.litKind === "read") {
      return `Đọc/kể lại «${skill.litStory}»; nêu điều em học được.`;
    }
    return `Đọc lại bài «${skill.title.replace(/^Bài \d+\. /, "")}» trong SGK và trả lời 1–2 câu hỏi cuối bài.`;
  }
  const map = {
    lv6_folktale: "Truyện «Sơn Tinh, Thủy Tinh»: xung đột giữa hai nhân vật thể hiện ý chí con người chinh phục thiên nhiên.",
    lv7_figures: "«Trăng ơi… từ đâu đến?» — nhân hóa mặt trăng như người bạn gần gũi.",
    lv8_essay: "Đoạn mở bài nghị luận: nêu vấn đề, khẳng định luận điểm chính.",
    lv9_classics: "Trích «Vợ nhặt» — hình ảnh người phụ nữ nghèo khổ nhưng giàu lòng nhân hậu."
  };
  return map[id] || "Hãy đọc lại văn bản trong SGK và tìm một chi tiết tiêu biểu minh họa cho kiến thức vừa học.";
}

function primaryLitQuestions(skill) {
  const short = skill.title.replace(/^Bài \d+\. /, "").replace(/^Ôn tập[^:]*:?\s*/, "");
  const storyName = skill.litStory || short;
  if (skill.litKind === "phonics") {
    const focus = skill.litFocus.split("·")[0].trim();
    return [
      {
        type: "multiple_choice",
        q: `${short}: Bài này học gì?`,
        choices: [focus, "Phép cộng", "Hình vuông", "Đo lường"],
        a: focus,
        hint: `Trọng tâm: ${skill.litFocus}.`
      },
      {
        type: "true_false",
        q: `${short}: Cần đọc to và rõ khi luyện âm/vần.`,
        a: "Đúng",
        hint: "Đọc to giúp nhớ âm và vần."
      },
      {
        type: "multiple_choice",
        q: `${short}: Tiếng mẫu trong bài?`,
        choices: [skill.litSample.split(",")[0].trim(), "1 + 1", "hình tròn", "thứ hai"],
        a: skill.litSample.split(",")[0].trim(),
        hint: `Gợi ý: ${skill.litSample}.`
      },
      {
        type: "multiple_choice",
        q: `${short}: Khi viết chữ cần?`,
        choices: ["Viết nhanh, không cần đúng", "Viết đúng nét, đẹp", "Chỉ nhìn không viết", "Viết xuôi ngược"],
        a: "Viết đúng nét, đẹp",
        hint: "Tập viết giúp nhớ lâu."
      },
      {
        type: "true_false",
        q: `${short}: Ghép âm đúng thì đọc được tiếng.`,
        a: "Đúng",
        hint: "b + a → ba; c + a → ca."
      }
    ];
  }
  if (skill.litKind === "story" || skill.litKind === "read") {
    return [
      {
        type: "multiple_choice",
        q: `«${storyName}»: Đọc truyện giúp em?`,
        choices: ["Học bài học cuộc sống", "Chỉ để giải trí", "Không cần hiểu", "Chỉ học thuộc"],
        a: "Học bài học cuộc sống",
        hint: skill.litMoral
      },
      {
        type: "true_false",
        q: `«${storyName}»: Cần nhớ tên nhân vật và việc chính.`,
        a: "Đúng",
        hint: "Nắm cốt truyện trước khi kể."
      },
      {
        type: "multiple_choice",
        q: `«${storyName}»: Thông điệp chính?`,
        choices: [skill.litMoral.split(/[.;]/)[0], "Không có bài học", "Chỉ để vui", "Không cần hiểu"],
        a: skill.litMoral.split(/[.;]/)[0],
        hint: skill.litMoral
      },
      {
        type: "multiple_choice",
        q: `«${storyName}»: Kể chuyện theo tranh cần?`,
        choices: ["Sắp xếp tranh đúng thứ tự", "Xem lướt một tranh", "Không cần tranh", "Chỉ đọc thầm"],
        a: "Sắp xếp tranh đúng thứ tự",
        hint: "Trình tự hợp lý mới kể mạch lạc."
      },
      {
        type: "true_false",
        q: `«${storyName}»: Có thể kể bằng lời của em.`,
        a: "Đúng",
        hint: "Không cần học thuộc nguyên văn."
      }
    ];
  }
  if (skill.litKind === "poetry") {
    return [
      {
        type: "multiple_choice",
        q: `${short}: Đọc thơ nên?`,
        choices: ["Đọc với nhịp điệu", "Đọc như đọc báo", "Không cần ngắt nhịp", "Chỉ nhìn tranh"],
        a: "Đọc với nhịp điệu",
        hint: "Thơ có vần, nhịp."
      },
      {
        type: "true_false",
        q: `${short}: Hình ảnh thơ giúp em cảm nhận.`,
        a: "Đúng",
        hint: "Tia nắng, cánh cò, hoa phượng..."
      },
      {
        type: "input",
        q: `${short}: Thơ thường có vần (Đúng/Sai → gõ Đúng hoặc Sai)`,
        a: "Đúng",
        hint: "Vần tạo nhịp điệu."
      },
      {
        type: "multiple_choice",
        q: `${short}: Sau khi đọc thơ em có thể?`,
        choices: ["Nói cảm nghĩ", "Không cần hiểu", "Chỉ chép chữ", "Bỏ qua"],
        a: "Nói cảm nghĩ",
        hint: "Chia sẻ cảm xúc với bạn."
      },
      {
        type: "true_false",
        q: `${short}: Có thể học thuộc lòng khổ thơ hay.`,
        a: "Đúng",
        hint: "Thuộc lòng giúp nhớ lâu."
      }
    ];
  }
  if (skill.litKind === "info") {
    return [
      {
        type: "multiple_choice",
        q: `${short}: Văn bản thông tin dùng để?`,
        choices: ["Cung cấp thông tin, hướng dẫn", "Kể chuyện hư cấu", "Hát ca dao", "Vẽ tranh"],
        a: "Cung cấp thông tin, hướng dẫn",
        hint: "Ví dụ: rửa tay, đèn giao thông."
      },
      {
        type: "true_false",
        q: `${short}: Cần áp dụng điều học vào đời sống.`,
        a: "Đúng",
        hint: "Học để làm đúng hơn."
      },
      {
        type: "input",
        q: `${short}: Đọc văn bản thông tin cần tìm? (2 từ: thông tin chính)`,
        a: "thông tin chính",
        hint: "Ý quan trọng nhất."
      },
      {
        type: "multiple_choice",
        q: `${short}: Khi đọc hướng dẫn an toàn em nên?`,
        choices: ["Làm theo đúng", "Bỏ qua", "Chỉ xem tranh", "Không cần đọc"],
        a: "Làm theo đúng",
        hint: "An toàn cho bản thân."
      },
      {
        type: "true_false",
        q: `${short}: Có thể liên hệ thực tế hàng ngày.`,
        a: "Đúng",
        hint: "Gắn bài học với cuộc sống."
      }
    ];
  }
  if (skill.litKind === "grammar") {
    return [
      {
        type: "multiple_choice",
        q: `${short}: Luyện từ và câu giúp em?`,
        choices: ["Dùng từ đúng, viết câu hay", "Chỉ học thuộc", "Không cần luyện", "Chỉ đọc truyện"],
        a: "Dùng từ đúng, viết câu hay",
        hint: "LTVC nền tảng cho viết văn."
      },
      {
        type: "true_false",
        q: `${short}: Cần làm bài tập trong SGK/VBT.`,
        a: "Đúng",
        hint: "Thực hành củng cố kiến thức."
      },
      {
        type: "multiple_choice",
        q: `${short}: Trước khi viết câu em nên?`,
        choices: ["Nghĩ ý cần nói", "Viết liền không suy nghĩ", "Chép nguyên văn", "Bỏ qua"],
        a: "Nghĩ ý cần nói",
        hint: "Câu rõ ràng, đủ ý."
      },
      {
        type: "true_false",
        q: `${short}: Câu cần viết hoa đầu câu và chấm cuối câu.`,
        a: "Đúng",
        hint: "Quy tắc chính tả cơ bản."
      },
      {
        type: "multiple_choice",
        q: `${short}: Thông điệp bài học?`,
        choices: [skill.litMoral.split(/[.;]/)[0], "Không có", "Chỉ vui", "Bỏ qua"],
        a: skill.litMoral.split(/[.;]/)[0],
        hint: skill.litMoral
      }
    ];
  }
  if (skill.litKind === "writing") {
    return [
      {
        type: "multiple_choice",
        q: `${short}: Trước khi viết em nên?`,
        choices: ["Lập dàn ý", "Viết ngay không suy nghĩ", "Chép sách", "Bỏ qua"],
        a: "Lập dàn ý",
        hint: "Dàn ý giúp bài mạch lạc."
      },
      {
        type: "true_false",
        q: `${short}: Đoạn văn cần có câu mở, thân, kết.`,
        a: "Đúng",
        hint: "Cấu trúc đoạn văn cơ bản."
      },
      {
        type: "multiple_choice",
        q: `${short}: Khi viết cần chú ý?`,
        choices: ["Chính tả và dấu câu", "Chỉ viết nhanh", "Không cần kiểm tra", "Viết một câu"],
        a: "Chính tả và dấu câu",
        hint: "Viết đúng, viết hay."
      },
      {
        type: "true_false",
        q: `${short}: Đọc lại bài giúp sửa lỗi.`,
        a: "Đúng",
        hint: "Tự kiểm tra trước khi nộp."
      },
      {
        type: "multiple_choice",
        q: `${short}: Mục tiêu bài viết?`,
        choices: [skill.litMoral.split(/[.;]/)[0], "Không có", "Chỉ chép", "Bỏ qua"],
        a: skill.litMoral.split(/[.;]/)[0],
        hint: skill.litMoral
      }
    ];
  }
  // review + default
  return [
    {
      type: "multiple_choice",
      q: `${short}: Đọc hiểu — ý chính là?`,
      choices: ["Điều quan trọng nhất", "Chi tiết phụ", "Tên tác giả", "Số trang"],
      a: "Điều quan trọng nhất",
      hint: "Ý chính toàn bài."
    },
    {
      type: "true_false",
      q: `${short}: Đọc kỹ trước khi trả lời câu hỏi.`,
      a: "Đúng",
      hint: "Hiểu bài mới trả lời đúng."
    },
    {
      type: "input",
      q: `${short}: Kể chuyện/đọc cần sắp xếp theo? (1 từ: thời gian hoặc trình tự)`,
      a: "trình tự",
      hint: "Mạch lạc từ đầu đến cuối."
    },
    {
      type: "multiple_choice",
      q: `${short}: Viết câu cần?`,
      choices: ["Viết hoa đầu câu, chấm cuối câu", "Không cần dấu", "Viết liền hết", "Chỉ viết một chữ"],
      a: "Viết hoa đầu câu, chấm cuối câu",
      hint: "Quy tắc chính tả cơ bản."
    },
    {
      type: "true_false",
      q: `${short}: Ôn tập giúp nhớ bài lâu hơn.`,
      a: "Đúng",
      hint: "Luyện lại nhiều lần."
    }
  ];
}

function questionsFor(skill) {
  const id = skill.id;
  if (isPrimaryGrade(skill.grade)) {
    return primaryLitQuestions(skill).map((item, i) => ({
      id: `q_${id}_${i + 1}`,
      skill: id,
      type: item.type,
      question: item.q,
      ...(item.choices ? { choices: item.choices } : {}),
      answer: item.a,
      hint: item.hint
    }));
  }
  const base = [
    {
      type: "multiple_choice",
      q: `[${skill.title}] Đọc hiểu: Mục đích đọc lướt là gì?`,
      choices: ["Ghi nhớ từng chữ", "Nắm ý chính toàn bài", "Học thuộc lòng", "Phân tích ngữ pháp"],
      a: "Nắp ý chính toàn bài",
      hint: "Đọc lướt giúp nắm cốt truyện hoặc luận điểm chung."
    }
  ];
  base[0].a = "Nắm ý chính toàn bài";

  const qs = [
    base[0],
    {
      type: "multiple_choice",
      q: `[${skill.title}] Thành phần câu: "Mẹ em" thường là?`,
      choices: ["Vị ngữ", "Chủ ngữ", "Trạng ngữ", "Tân ngữ"],
      a: "Chủ ngữ",
      hint: "Chủ ngữ trả lời câu hỏi Ai? Cái gì?"
    },
    {
      type: "true_false",
      q: `[${skill.title}] Biện pháp nhân hóa gán tính người cho sự vật.`,
      a: "Đúng",
      hint: "Nhân hóa làm sự vật hiện như có cảm xúc, hành động."
    },
    {
      type: "input",
      q: `[${skill.title}] Một đoạn văn thường gồm mấy phần cơ bản? (gõ số)`,
      a: "3",
      hint: "Mở — thân — kết."
    },
    {
      type: "multiple_choice",
      q: `[${skill.title}] Thể loại nào kể chuyện có cốt truyện?`,
      choices: ["Thơ", "Truyện ngắn", "Báo cáo", "Biên bản"],
      a: "Truyện ngắn",
      hint: "Truyện có nhân vật, sự việc, diễn biến."
    }
  ];

  if (id.includes("poetry") || id.includes("figures") || id.includes("rhetoric")) {
    qs[1] = {
      type: "multiple_choice",
      q: `[${skill.title}] Vần lưng trong thơ lục bát thường ở câu?`,
      choices: ["Câu 6", "Câu 8", "Câu 6 và 8", "Câu 7"],
      a: "Câu 6 và 8",
      hint: "Lục bát: vần giữa câu 6 và cuối câu 8."
    };
  }

  return qs.map((item, i) => ({
    id: `q_${id}_${i + 1}`,
    skill: id,
    type: item.type,
    question: item.q,
    ...(item.choices ? { choices: item.choices } : {}),
    answer: item.a,
    hint: item.hint
  }));
}

function errorsFor(skills) {
  return skills.flatMap((s) => {
    if (isPrimaryGrade(s.grade)) {
      if (s.litKind === "phonics") {
        return [{
          pattern: "sai am van",
          skill: s.id,
          errorType: "phonics_confusion",
          title: "Nhầm âm hoặc vần",
          message: `Hãy ôn lại ${s.litFocus || "âm/vần"} và đọc mẫu: ${s.litSample || "trong SGK"}.`,
          hint: "Đánh vần chậm: ghép âm → tiếng → từ.",
          recommendation: s.id
        }];
      }
      return [{
        pattern: "doc nham",
        skill: s.id,
        errorType: "reading_detail",
        title: "Đọc chưa kỹ chi tiết",
        message: "Đọc lại bài trong SGK và tìm câu chứa thông tin cần trả lời.",
        hint: "Gạch chân từ khóa trong câu hỏi.",
        recommendation: s.id
      }];
    }
    return [
      {
        pattern: "khong biet",
        skill: s.id,
        errorType: "reading_skim",
        title: "Đọc lướt qua chi tiết quan trọng",
        message: "Cần đọc lại đoạn chứa thông tin then chốt trước khi trả lời.",
        hint: "Gạch chân từ khóa trong câu hỏi, tìm đoạn tương ứng.",
        recommendation: s.id
      },
      {
        pattern: "sai ngu phap",
        skill: s.id,
        errorType: "grammar_confusion",
        title: "Nhầm thành phần câu",
        message: "Hãy xác định chủ ngữ (Ai? Cái gì?) và vị ngữ (Làm gì? Thế nào?) trước.",
        hint: "Đặt câu hỏi cho từng bộ phận.",
        recommendation: s.id
      }
    ];
  });
}

function exercisesFor(skills) {
  return skills.flatMap((s) => {
    if (isPrimaryGrade(s.grade)) {
      const sgkQ = s.litKind === "phonics"
        ? `[SGK] ${s.title}: Viết 3 tiếng có ${s.litFocus || "âm/vần"} đã học.`
        : s.litKind === "review"
          ? `[SGK] ${s.title}: Ôn lại các bài đã học trong học kì.`
          : `[SGK] ${s.title}: Đọc kỹ và trả lời câu hỏi cuối bài.`;
      return [
        {
          id: `ex_${s.id}_sgk_1`,
          skill: s.id,
          source: "sgk",
          type: "input",
          section: "B. Luyện tập",
          question: sgkQ,
          answer: "tu do",
          hint: "Làm theo hướng dẫn trong SGK/VBT.",
          solution: "Giáo viên hướng dẫn chấm theo mẫu."
        },
        {
          id: `ex_${s.id}_vbt_1`,
          skill: s.id,
          source: "vbt",
          type: "multiple_choice",
          section: "C. Vận dụng",
          question: `[VBT] ${s.title}: Trước khi làm bài em nên?`,
          choices: ["Đọc kỹ yêu cầu", "Làm ngay không đọc", "Nhìn bạn", "Bỏ qua"],
          answer: "Đọc kỹ yêu cầu",
          hint: "Hiểu đề trước khi trả lời.",
          solution: "Đọc kỹ yêu cầu và gạch chân từ khóa."
        }
      ];
    }
    return [
    {
      id: `ex_${s.id}_sgk_1`,
      skill: s.id,
      source: "sgk",
      type: "input",
      section: "B. Luyện tập",
      question: `[SGK] ${s.title}: Viết 2–3 câu nêu ý chính bài vừa học.`,
      answer: "tu do",
      hint: "Nêu rõ kiến thức trọng tâm.",
      solution: "Đáp án mẫu tùy nội dung bài; giáo viên hướng dẫn chấm."
    },
    {
      id: `ex_${s.id}_sbt_1`,
      skill: s.id,
      source: "sbt",
      type: "multiple_choice",
      section: "C. Vận dụng",
      question: `[SBT] ${s.title}: Khi làm bài đọc hiểu, bước đầu tiên nên?`,
      choices: ["Trả lời ngay", "Đọc kỹ câu hỏi", "Chép nguyên văn bản", "Bỏ qua đoạn khó"],
      answer: "Đọc kỹ câu hỏi",
      hint: "Hiểu yêu cầu trước khi tìm thông tin.",
      solution: "Đọc kỹ câu hỏi và gạch chân từ khóa."
    }
    ];
  });
}

function buildSummerG6G7() {
  const topics = [
    { id: "sr6_read", order: 1, title: "Đọc hiểu cơ bản", emoji: "📖", desc: "Đọc truyện ngắn, tìm chi tiết, ý chính.", prereq: [] },
    { id: "sr6_grammar", order: 2, title: "Tiếng Việt lớp 6", emoji: "✏️", desc: "Danh từ, động từ, thành phần câu.", prereq: ["sr6_read"] },
    { id: "sr6_write", order: 3, title: "Viết đoạn văn", emoji: "📝", desc: "Miêu tả, kể chuyện ngắn.", prereq: ["sr6_grammar"] },
    { id: "sr6_poetry", order: 4, title: "Thơ và vần điệu", emoji: "🎵", desc: "Vần, nhịp, hình ảnh thơ.", prereq: ["sr6_write"] },
    { id: "sr7_literary", order: 5, title: "Văn bản văn học", emoji: "📚", desc: "Chủ đề, nhân vật, biện pháp tu từ.", prereq: ["sr6_poetry"] },
    { id: "sr7_essay", order: 6, title: "Nghị luận cơ bản", emoji: "💬", desc: "Mở–thân–kết; luận điểm và dẫn chứng.", prereq: ["sr7_literary"] }
  ];

  const topicQuestions = {
    sr6_read: [
      ["multiple_choice", "Đọc lướt giúp?", ["Ghi từng chữ", "Nắm ý chính", "Phân tích ngữ pháp", "Học thuộc"], "Nắm ý chính", "Cốt truyện/luận điểm chung."],
      ["input", "Truyện dân gian thường có yếu tố?", "kỳ ảo", "Thần thoại, phép lạ."],
      ["multiple_choice", "Chi tiết tiêu biểu là?", ["Chi tiết phụ", "Chi tiết nổi bật ý nghĩa", "Chi tiết ngẫu nhiên", "Chi tiết dài"], "Chi tiết nổi bật ý nghĩa", "Góp phần thể hiện chủ đề."],
      ["true_false", "Nhân vật chính là người có vai trò trung tâm.", "Đúng", "Xuyên suốt cốt truyện."],
      ["input", "Cốt truyện gồm mấy phần? (số)", "3", "Mở — thân — kết."]
    ],
    sr6_grammar: [
      ["input", "Chủ ngữ trả lời câu hỏi? (Ai hoac Cai gi)", "Ai hoặc Cái gì", "CN."],
      ["multiple_choice", "«Hoa hồng nở» — VN là?", ["Hoa hồng", "nở", "Hoa hồng nở", "Không có"], "nở", "Làm gì?"],
      ["true_false", "Tính từ miêu tả tính chất sự vật.", "Đúng", "Đỏ, xanh, chăm chỉ..."],
      ["input", "«Rất» trong «rất đẹp» là?", "trạng từ", "Bổ nghĩa cho tính từ."],
      ["multiple_choice", "Danh từ chỉ?", ["Hành động", "Sự vật, hiện tượng", "Mức độ", "Liên từ"], "Sự vật, hiện tượng", "Người, vật, khái niệm."]
    ],
    sr6_write: [
      ["input", "Đoạn văn miêu tả thường bắt đầu bằng?", "câu mở", "Giới thiệu đối tượng."],
      ["multiple_choice", "Câu kết đoạn văn nên?", ["Mở rộng chủ đề mới", "Khép lại ý", "Lặp y chang mở", "Không cần"], "Khép lại ý", "Tóm tắt cảm nghĩ."],
      ["true_false", "Từ gợi tả giúp người đọc hình dung.", "Đúng", "Sáng, tươi, xanh..."],
      ["input", "Kể chuyện cần sắp xếp theo?", "thời gian", "Trình tự hợp lý."],
      ["multiple_choice", "Đoạn văn ngắn thường?", ["5–10 câu", "50 câu", "1 từ", "Không giới hạn"], "5–10 câu", "Đủ ý, gọn."]
    ],
    sr6_poetry: [
      ["multiple_choice", "Thơ lục bát mỗi khổ?", ["4 câu", "6 câu 8 câu xen kẽ", "10 câu", "2 câu"], "6 câu 8 câu xen kẽ", "6 chữ rồi 8 chữ."],
      ["input", "Vần lưng nối câu 6 và?", "8", "Cuối câu 8."],
      ["true_false", "Nhân hóa gán tính người cho sự vật.", "Đúng", "Tu từ cơ bản."],
      ["multiple_choice", "So sánh dùng từ?", ["như, tựa, là", "và, hoặc", "vì, nên", "đã, đang"], "như, tựa, là", "So sánh."],
      ["input", "Đọc thuộc lòng giúp cảm nhận?", "nhịp điệu", "Vần luật thơ."]
    ],
    sr7_literary: [
      ["input", "Chủ đề văn bản là?", "y chinh", "Ý chính tác giả muốn nói."],
      ["multiple_choice", "Xung đột trong truyện?", ["Không cần", "Mâu thuẫn thúc đẩy tình tiết", "Chỉ ở mở bài", "Chỉ ở kết"], "Mâu thuẫn thúc đẩy tình tiết", "Tạo hấp dẫn."],
      ["true_false", "Tả cảnh có thể gợi tình.", "Đúng", "Cảnh vật phục vụ nội tâm."],
      ["input", "Tác giả thể hiện thái độ qua?", "lời kể và chi tiết", "Ngôn ngữ, chi tiết chọn lọc."],
      ["multiple_choice", "Biện pháp điệp ngữ?", ["Lặp từ/cấu trúc", "So sánh", "Nhân hóa", "Ẩn dụ"], "Lặp từ/cấu trúc", "Nhấn mạnh."]
    ],
    sr7_essay: [
      ["input", "Nghị luận gồm mấy phần chính?", "3", "Mở — thân — kết."],
      ["multiple_choice", "Luận điểm là?", ["Câu hỏi", "Ý chính bảo vệ", "Trích dẫn", "Tựa đề"], "Ý chính bảo vệ", "Thân bài triển khai."],
      ["true_false", "Dẫn chứng minh họa luận điểm.", "Đúng", "Ví dụ, trích dẫn."],
      ["input", "Mở bài nghị luận thường?", "giới thiệu vấn đề", "Nêu vấn đề bàn."],
      ["multiple_choice", "Kết bài nên?", ["Mở chủ đề mới", "Khẳng định lại luận điểm", "Bỏ qua", "Chép mở bài"], "Khẳng định lại luận điểm", "Chốt ý."]
    ]
  };

  topicQuestions.sr7_literary[0][2] = "ý chính";
  topicQuestions.sr7_literary[0][3] = "Ý chính tác giả muốn nói.";

  const questions = [];
  for (const t of topics) {
    (topicQuestions[t.id] || []).forEach((q, i) => {
      const id = `${t.id}_q${i + 1}`;
      if (q[0] === "multiple_choice") {
        questions.push({ id, skill: t.id, topic: t.id, type: "multiple_choice", question: q[1], choices: q[2], answer: q[3], hint: q[4] });
      } else if (q[0] === "true_false") {
        questions.push({ id, skill: t.id, topic: t.id, type: "true_false", question: q[1], answer: q[2], hint: q[3] });
      } else {
        questions.push({ id, skill: t.id, topic: t.id, type: "input", question: q[1], answer: q[2], hint: q[3] });
      }
    });
  }

  const exams = Array.from({ length: 6 }, (_, i) => ({
    id: `exam6_${i + 1}`,
    order: i + 1,
    title: `Đề ôn số ${i + 1}`,
    questionCount: 5,
    xp: 60,
    passScore: 4,
    prerequisite: i === 0 ? ["sr6_read"] : [`exam6_${i}`]
  }));

  for (let e = 1; e <= 6; e++) {
    const topicIdx = Math.min(e - 1, topics.length - 1);
    const t = topics[topicIdx];
    const tqs = questions.filter((q) => q.topic === t.id).slice(0, 5);
    tqs.forEach((q, i) => {
      questions.push({
        ...q,
        id: `exam6_${e}_q${i + 1}`,
        skill: `exam6_${e}`,
        exam: `exam6_${e}`,
        question: `Đề ${e} — ${q.question}`
      });
    });
  }

  return {
    meta: {
      id: "summer_lit_g6_g7",
      packId: "g6-g7",
      title: "Ôn hè Ngữ văn lớp 6 → lớp 7",
      subtitle: "6 chủ đề tương tác + 6 đề tổng hợp",
      gradeFrom: 6,
      gradeTo: 7,
      source: "LiteratureFlow — ôn hè Ngữ văn THCS."
    },
    topics: topics.map(({ id, order, title, emoji, desc, prereq }) => ({
      id, order, title, emoji, description: desc, prerequisite: prereq, xp: 50
    })),
    lessons: topics.map((t) => ({
      id: t.id,
      title: t.title,
      topic: t.id,
      source: "LiteratureFlow",
      xp: 50,
      steps: [
        { type: "intro", title: "Mục tiêu", content: t.desc },
        { type: "keypoints", title: "Ghi nhớ", content: "Nắm vững:", points: ["Đọc kỹ văn bản mẫu.", "Gạch chân từ khóa.", "Trả lời đủ ý."] },
        { type: "summary", title: "Thử thách", content: `Luyện ${(topicQuestions[t.id] || []).length} câu để nhận sao!` }
      ]
    })),
    exams,
    questions
  };
}

async function main() {
  await mkdir("data", { recursive: true });
  const skills = buildSkills();
  const lessons = skills.map((s) => ({
    id: s.id,
    skill: s.id,
    xp: 50,
    steps: lessonSteps(s)
  }));
  const questions = skills.flatMap((s) => questionsFor(s));
  const errors = errorsFor(skills);
  const exercises = exercisesFor(skills);
  const summer = buildSummerG6G7();

  await Promise.all([
    writeFile("data/skills.json", JSON.stringify(skills, null, 2) + "\n"),
    writeFile("data/lessons.json", JSON.stringify(lessons, null, 2) + "\n"),
    writeFile("data/questions.json", JSON.stringify(questions, null, 2) + "\n"),
    writeFile("data/errors.json", JSON.stringify(errors, null, 2) + "\n"),
    writeFile("data/exercises.json", JSON.stringify(exercises, null, 2) + "\n"),
    writeFile("data/summer-review-g6-g7.json", JSON.stringify(summer, null, 2) + "\n")
  ]);

  const g1 = skills.filter((s) => s.grade === 1).length;
  const g2 = skills.filter((s) => s.grade === 2).length;
  const g3 = skills.filter((s) => s.grade === 3).length;
  const g4 = skills.filter((s) => s.grade === 4).length;
  const g5 = skills.filter((s) => s.grade === 5).length;
  console.log(`✓ Lớp 1 (KNT): ${g1} bài · Tập 1 ${GRADE1_META.tap1Lessons} bài + Tập 2 ${GRADE1_META.tap2Themes} chủ điểm`);
  console.log(`✓ Lớp 2 (KNT): ${g2} bài · Tập 1 ${GRADE2_META.tap1Lessons} + Tập 2 ${GRADE2_META.tap2Lessons} + ${GRADE2_META.reviewBlocks} ôn tập`);
  console.log(`✓ Lớp 3 (KNT): ${g3} bài · Tập 1 ${GRADE3_META.tap1Lessons} + Tập 2 ${GRADE3_META.tap2Lessons} + ${GRADE3_META.reviewBlocks} ôn tập`);
  console.log(`✓ Lớp 4 (KNT): ${g4} bài · Tập 1 ${GRADE4_META.tap1Lessons} + Tập 2 ${GRADE4_META.tap2Lessons} + ${GRADE4_META.reviewBlocks} ôn tập`);
  console.log(`✓ Lớp 5 (KNT): ${g5} bài · Tập 1 ${GRADE5_META.tap1Lessons} + Tập 2 ${GRADE5_META.tap2Lessons} + ${GRADE5_META.reviewBlocks} ôn tập`);
  console.log(`✓ ${skills.length} skills, ${lessons.length} lessons, ${questions.length} questions`);
  console.log(`✓ ${errors.length} errors, ${exercises.length} exercises`);
  console.log(`✓ summer g6-g7: ${summer.topics.length} topics, ${summer.exams.length} exams, ${summer.questions.length} câu`);
}

main();
