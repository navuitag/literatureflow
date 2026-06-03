import { normalizeMath as normalizeText } from "../assets/js/utils.js";

export function analyzeError(answer, question, errorPatterns) {
  const normalized = normalizeText(answer);
  const pattern = errorPatterns.find((item) => {
    const sameSkill = !item.skill || item.skill === question.skill;
    return sameSkill && normalized.includes(normalizeText(item.pattern));
  });

  if (pattern) {
    return pattern;
  }

  if (question.type === "true_false") {
    return {
      skill: question.skill,
      errorType: "tf_confusion",
      title: "Nhầm Đúng / Sai",
      message: "Hãy đọc lại mệnh đề và kiểm tra xem có khẳng định đúng sự thật trong văn bản không.",
      hint: question.hint,
      recommendation: question.skill
    };
  }

  return {
    skill: question.skill,
    errorType: "reading_logic",
    title: "Cần đọc lại văn bản",
    message: "Đáp án chưa khớp. Hãy tìm đoạn chứa thông tin then chốt và trả lời đủ ý.",
    hint: question.hint,
    recommendation: question.skill
  };
}
