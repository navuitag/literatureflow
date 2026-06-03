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
import { getGrade6Units, GRADE6_META } from "./grade6-kntt-curriculum.mjs";
import { getGrade7Units, GRADE7_META } from "./grade7-kntt-curriculum.mjs";
import { getGrade8Units, GRADE8_META } from "./grade8-kntt-curriculum.mjs";
import { getGrade9Units, GRADE9_META } from "./grade9-kntt-curriculum.mjs";

function isPrimaryGrade(grade) {
  return grade >= 1 && grade <= 5;
}

function isSecondaryGrade(grade) {
  return grade >= 6 && grade <= 9;
}

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
    litStory: u.storyTitle || ((u.kind === "read" || u.kind === "story" || u.kind === "unit") ? u.title.replace(/^Bài \d+\. /, "") : ""),
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
  appendGradeSkills(skills, getGrade6Units(), 6);
  appendGradeSkills(skills, getGrade7Units(), 7);
  appendGradeSkills(skills, getGrade8Units(), 8);
  appendGradeSkills(skills, getGrade9Units(), 9);
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
  if (isSecondaryGrade(skill.grade)) {
    if (skill.litKind === "review") {
      return ["Ôn tri thức ngữ văn và thực hành tiếng Việt.", "Luyện đọc hiểu, viết, nói-nghe.", "Chuẩn bị kiểm tra học kì."];
    }
    if (skill.litKind === "poetry") {
      return [`Tác phẩm: «${skill.litSample}».`, "Phân tích hình ảnh, nhịp điệu, biện pháp tu từ.", `Chủ đề: ${skill.litMoral}`];
    }
    if (skill.litKind === "drama") {
      return [`Kịch: «${skill.litSample}».`, "Nắm xung đột, cao trào, nhân vật.", `Thông điệp: ${skill.litMoral}`];
    }
    if (skill.litKind === "media") {
      return ["Đọc văn bản đa phương tiện.", "Kết hợp chữ, hình ảnh, sơ đồ.", "Tìm thông tin chính và liên hệ thực tế."];
    }
    return [
      `Chủ đề: ${skill.title.replace(/^Bài \d+\. /, "")}.`,
      skill.litSample ? `Văn bản tiêu biểu: «${skill.litSample}».` : "Đọc hiểu, THVN, viết và nói-nghe.",
      skill.litMoral
    ];
  }
  return [
    "Đọc kỹ yêu cầu đề bài.",
    "Gạch chân từ khóa quan trọng.",
    "Trả lời đủ ý, rõ ràng, mạch lạc."
  ];
}

function exampleFor(skill) {
  if (isPrimaryGrade(skill.grade)) {
    if (skill.litKind === "phonics") {
      return `Tiếng mẫu: ${skill.litSample}. Ghép âm thành tiếng rồi đọc trơn.`;
    }
    if (skill.litKind === "story" || skill.litKind === "read") {
      return `Đọc/kể lại «${skill.litStory}»; nêu điều em học được.`;
    }
    return `Đọc lại bài «${skill.title.replace(/^Bài \d+\. /, "")}» trong SGK và trả lời 1–2 câu hỏi cuối bài.`;
  }
  if (isSecondaryGrade(skill.grade)) {
    if (skill.litSample) {
      return `Phân tích «${skill.litSample}» trong chủ đề «${skill.title.replace(/^Bài \d+\. /, "")}»; nêu ý nghĩa và bài học.`;
    }
    return `Hoàn thành các hoạt động đọc – viết – nói nghe trong ${skill.title}.`;
  }
  return "Hãy đọc lại văn bản trong SGK và tìm một chi tiết tiêu biểu minh họa cho kiến thức vừa học.";
}

function secondaryLitQuestions(skill) {
  const short = skill.title.replace(/^Bài \d+\. /, "").replace(/^Ôn tập[^:]*:?\s*/, "");
  const sample = skill.litSample || short;
  if (skill.litKind === "review") {
    return [
      { type: "multiple_choice", q: `${short}: Ôn tập gồm?`, choices: ["Đọc, viết, THVN, nói-nghe", "Chỉ toán", "Chỉ thể dục", "Chỉ hát"], a: "Đọc, viết, THVN, nói-nghe", hint: "Tổng hợp kiến thức học kì." },
      { type: "true_false", q: `${short}: Cần ôn tri thức ngữ văn và thực hành tiếng Việt.`, a: "Đúng", hint: "Hai phần cốt lõi SGK Ngữ văn." },
      { type: "input", q: `${short}: Bài văn nghị luận gồm mấy phần chính? (số)`, a: "3", hint: "Mở — thân — kết." },
      { type: "multiple_choice", q: `${short}: Trước kiểm tra em nên?`, choices: ["Ôn theo chủ đề SGK", "Không ôn", "Chỉ xem phim", "Bỏ qua SGK"], a: "Ôn theo chủ đề SGK", hint: "Bám 10 bài/chủ đề." },
      { type: "true_false", q: `${short}: Luyện tập giúp củng cố kỹ năng.`, a: "Đúng", hint: "Luyện nhiều lần nhớ lâu." }
    ];
  }
  if (skill.litKind === "poetry") {
    return [
      { type: "multiple_choice", q: `«${sample}»: Phân tích thơ cần chú ý?`, choices: ["Hình ảnh, nhịp điệu, biện pháp tu từ", "Chỉ đếm chữ", "Chỉ học thuộc", "Không cần hiểu"], a: "Hình ảnh, nhịp điệu, biện pháp tu từ", hint: skill.litMoral },
      { type: "true_false", q: `«${sample}»: Thơ có thể gợi cảm xúc qua hình ảnh.`, a: "Đúng", hint: "Từ ngữ gợi tả, gợi cảm." },
      { type: "multiple_choice", q: `${short}: Chủ đề chính?`, choices: [skill.litMoral.split(/[.;]/)[0], "Không có", "Chỉ vui", "Bỏ qua"], a: skill.litMoral.split(/[.;]/)[0], hint: skill.litMoral },
      { type: "input", q: `${short}: Biện pháp so sánh thường dùng từ? (như hoặc tựa)`, a: "như", hint: "So sánh: A như/tựa B." },
      { type: "true_false", q: `${short}: Có thể viết đoạn cảm nhận về bài thơ.`, a: "Đúng", hint: "Bày tỏ cảm xúc cá nhân." }
    ];
  }
  if (skill.litKind === "drama") {
    return [
      { type: "multiple_choice", q: `«${sample}»: Kịch có đặc điểm?`, choices: ["Nhân vật, đối thoại, xung đột", "Chỉ có mô tả", "Không có cốt truyện", "Chỉ là thơ"], a: "Nhân vật, đối thoại, xung đột", hint: "Thể loại sân khấu." },
      { type: "true_false", q: `«${sample}»: Xung đột thúc đẩy diễn biến kịch.`, a: "Đúng", hint: "Mâu thuẫn tạo cao trào." },
      { type: "multiple_choice", q: `${short}: Thông điệp?`, choices: [skill.litMoral.split(/[.;]/)[0], "Không có", "Chỉ vui", "Bỏ qua"], a: skill.litMoral.split(/[.;]/)[0], hint: skill.litMoral },
      { type: "input", q: `${short}: Phân tích nhân vật cần nêu? (2 từ: tính cách)`, a: "tính cách", hint: "Tính cách, hành động, vai trò." },
      { type: "true_false", q: `${short}: Có thể bình luận về bi kịch trong kịch.`, a: "Đúng", hint: "Bi kịch gắn với số phận nhân vật." }
    ];
  }
  if (skill.litKind === "media") {
    return [
      { type: "multiple_choice", q: `${short}: Văn bản đa phương tiện kết hợp?`, choices: ["Chữ, hình ảnh, sơ đồ", "Chỉ chữ", "Chỉ nhạc", "Chỉ video"], a: "Chữ, hình ảnh, sơ đồ", hint: "Đọc đa kênh thông tin." },
      { type: "true_false", q: `${short}: Cần đọc cả chữ và hình minh họa.`, a: "Đúng", hint: "Thông tin phân tán trên nhiều yếu tố." },
      { type: "multiple_choice", q: `${short}: Chủ đề?`, choices: [skill.litMoral.split(/[.;]/)[0], "Không có", "Chỉ vui", "Bỏ qua"], a: skill.litMoral.split(/[.;]/)[0], hint: skill.litMoral },
      { type: "input", q: `${short}: Tóm tắt văn bản cần nêu? (2 từ: ý chính)`, a: "ý chính", hint: "Thông tin trọng tâm." },
      { type: "true_false", q: `${short}: Có thể liên hệ vấn đề môi trường thực tế.`, a: "Đúng", hint: "Gắn bài học với đời sống." }
    ];
  }
  return [
    { type: "multiple_choice", q: `${short}: Chủ đề SGK tập trung vào?`, choices: [skill.litMoral.split(/[.;]/)[0], "Không có bài học", "Chỉ giải trí", "Không cần đọc"], a: skill.litMoral.split(/[.;]/)[0], hint: skill.litMoral },
    { type: "true_false", q: `«${sample}»: Đọc hiểu cần nắm ý chính và chi tiết tiêu biểu.`, a: "Đúng", hint: "Chi tiết minh họa chủ đề." },
    { type: "multiple_choice", q: `${short}: Một bài học SGK Ngữ văn THCS gồm?`, choices: ["Tri thức NV, đọc, THVN, viết, nói-nghe", "Chỉ đọc", "Chỉ viết", "Chỉ nghe"], a: "Tri thức NV, đọc, THVN, viết, nói-nghe", hint: "Cấu trúc bài học KNT." },
    { type: "input", q: `${short}: Cốt truyện thường gồm mấy phần? (số)`, a: "3", hint: "Mở — thân — kết." },
    { type: "true_false", q: `${short}: Thực hành tiếng Việt giúp viết câu đúng, hay.`, a: "Đúng", hint: "LTVC nền tảng cho viết văn." }
  ];
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
  if (isSecondaryGrade(skill.grade)) {
    return secondaryLitQuestions(skill).map((item, i) => ({
      id: `q_${id}_${i + 1}`,
      skill: id,
      type: item.type,
      question: item.q,
      ...(item.choices ? { choices: item.choices } : {}),
      answer: item.a,
      hint: item.hint
    }));
  }
  return [];
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
    if (isSecondaryGrade(s.grade)) {
      return [{
        pattern: "doc nham",
        skill: s.id,
        errorType: "reading_detail",
        title: "Đọc chưa kỹ chi tiết",
        message: `Đọc lại ${s.title} trong SGK; tìm thông tin then chốt trước khi trả lời.`,
        hint: "Gạch chân từ khóa; nắm ý chính và chi tiết tiêu biểu.",
        recommendation: s.id
      }];
    }
    return [];
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
    if (isSecondaryGrade(s.grade)) {
      const sgkQ = s.litKind === "review"
        ? `[SGK] ${s.title}: Ôn tập kiến thức và kỹ năng học kì.`
        : `[SGK] ${s.title}: Hoàn thành hoạt động đọc – THVN – viết – nói nghe trong SGK.`;
      return [
        {
          id: `ex_${s.id}_sgk_1`,
          skill: s.id,
          source: "sgk",
          type: "input",
          section: "B. Luyện tập",
          question: sgkQ,
          answer: "tu do",
          hint: "Làm theo hướng dẫn trong SGK.",
          solution: "Giáo viên hướng dẫn chấm theo rubric SGK."
        },
        {
          id: `ex_${s.id}_sbt_1`,
          skill: s.id,
          source: "sbt",
          type: "multiple_choice",
          section: "C. Vận dụng",
          question: `[SBT] ${s.title}: Phân tích văn bản cần?`,
          choices: ["Nắm ý chính và chi tiết tiêu biểu", "Chỉ đọc lướt", "Chép nguyên văn", "Bỏ qua"],
          answer: "Nắm ý chính và chi tiết tiêu biểu",
          hint: "Đọc hiểu có hệ thống.",
          solution: "Gạch chân từ khóa; liên hệ chủ đề bài học."
        }
      ];
    }
    return [];
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
    title: s.title,
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
  for (const [g, meta] of [[6, GRADE6_META], [7, GRADE7_META], [8, GRADE8_META], [9, GRADE9_META]]) {
    const n = skills.filter((s) => s.grade === g).length;
    console.log(`✓ Lớp ${g} (KNT): ${n} bài · ${meta.lessons} chủ đề + ${meta.reviewBlocks} ôn tập`);
  }
  console.log(`✓ ${skills.length} skills, ${lessons.length} lessons, ${questions.length} questions`);
  console.log(`✓ ${errors.length} errors, ${exercises.length} exercises`);
  console.log(`✓ summer g6-g7: ${summer.topics.length} topics, ${summer.exams.length} exams, ${summer.questions.length} câu`);
}

main();
