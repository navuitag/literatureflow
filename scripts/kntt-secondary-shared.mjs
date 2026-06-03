/** Helpers curriculum Ngữ văn lớp 6–9 (SGK KNT). */

export function vizForKind(kind) {
  if (kind === "poetry") return "literaryDevices";
  if (kind === "grammar") return "sentenceParts";
  if (kind === "writing") return "writingSteps";
  if (kind === "speaking") return "readingSteps";
  if (kind === "drama") return "characterMap";
  if (kind === "review") return "writingSteps";
  if (kind === "media") return "readingSteps";
  return "plotDiagram";
}

export function categoryForKind(kind) {
  if (kind === "review") return "Ôn tập";
  if (kind === "grammar") return "Tiếng Việt";
  if (kind === "writing") return "Nói và viết";
  if (kind === "speaking") return "Nói và viết";
  if (kind === "poetry") return "Văn học";
  if (kind === "drama") return "Văn học";
  if (kind === "media") return "Đọc hiểu";
  return "Đọc hiểu";
}

/**
 * @param {Array<object>} themes
 * @param {string} idPrefix e.g. lv6
 */
export function buildUnits(themes, idPrefix) {
  const units = [];
  for (const theme of themes) {
    for (const lesson of theme.lessons) {
      units.push({
        id: `${idPrefix}_${theme.id}_b${String(lesson.no).padStart(2, "0")}`,
        sgkNo: lesson.no,
        title: lesson.kind === "review" ? lesson.title : `Bài ${lesson.no}. ${lesson.title}`,
        chapter: theme.chapter,
        chapterIndex: theme.chapterIndex,
        lessonNo: lesson.no,
        book: theme.book,
        category: categoryForKind(lesson.kind),
        kind: lesson.kind,
        viz: lesson.viz || vizForKind(lesson.kind),
        desc: lesson.desc,
        focus: lesson.focus || lesson.sample || lesson.title,
        sample: lesson.sample || lesson.title,
        storyTitle: lesson.story || "",
        moral: lesson.moral || lesson.desc
      });
    }
  }
  return units;
}

/** @param {Array<[number, string, string, string?, string?, string?]>} rows [no, title, kind, sample?, moral?, desc?] */
export function mapLessons(rows) {
  return rows.map(([no, title, kind, sample, moral, desc]) => ({
    no,
    title,
    kind,
    sample: sample || title,
    story: kind === "unit" || kind === "read" ? (sample || title) : "",
    moral: moral || `Nắm vững chủ đề «${title}».`,
    desc: desc || defaultDesc(kind, title, sample)
  }));
}

function defaultDesc(kind, title, sample) {
  if (kind === "review") return `Ôn tập tổng hợp kiến thức và kỹ năng: ${title}.`;
  if (kind === "poetry") return `Đọc – phân tích thơ; cảm nhận hình ảnh, nhịp điệu trong chủ đề «${title}».`;
  if (kind === "drama") return `Đọc – phân tích kịch; nắm xung đột, nhân vật trong «${title}».`;
  const text = sample ? `Tác phẩm tiêu biểu: «${sample}».` : "";
  return `Chủ đề «${title}»: tri thức ngữ văn, đọc hiểu, thực hành tiếng Việt, viết và nói-nghe. ${text}`.trim();
}

export function theme(id, chapter, chapterIndex, book, lessonRows) {
  return { id, chapter, chapterIndex, book, lessons: mapLessons(lessonRows) };
}
