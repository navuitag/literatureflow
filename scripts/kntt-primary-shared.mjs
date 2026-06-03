/** Helpers dùng chung cho curriculum Tiếng Việt lớp 1–5 (SGK KNT). */

export function vizForKind(kind) {
  if (kind === "poetry") return "literaryDevices";
  if (kind === "info") return "readingSteps";
  if (kind === "grammar") return "sentenceParts";
  if (kind === "writing") return "writingSteps";
  if (kind === "review") return "writingSteps";
  return "plotDiagram";
}

export function categoryForKind(kind) {
  if (kind === "review") return "Ôn tập";
  if (kind === "info") return "Đọc hiểu";
  if (kind === "grammar") return "Tiếng Việt";
  if (kind === "writing") return "Nói và viết";
  if (kind === "poetry") return "Văn học";
  return "Đọc hiểu";
}

/**
 * @param {Array<object>} themes
 * @param {string} idPrefix e.g. lv3
 */
export function buildUnits(themes, idPrefix) {
  const units = [];
  for (const theme of themes) {
    for (const lesson of theme.lessons) {
      const sgkLabel = theme.chapter.includes("Ôn tập") || lesson.no === 0
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
        storyTitle: (lesson.kind === "read" || lesson.kind === "story") ? lesson.title : "",
        moral: lesson.moral || lesson.desc
      });
    }
  }
  return units;
}

/** @param {Array<[number, string, string, string?, string?]>} rows [no, title, kind, moral?, desc?] */
export function mapLessons(rows) {
  return rows.map(([no, title, kind, moral, desc]) => ({
    no,
    title,
    kind,
    moral: moral || `Rút ra bài học từ «${title}».`,
    desc: desc || defaultDesc(kind, title)
  }));
}

function defaultDesc(kind, title) {
  if (kind === "poetry") return `Đọc thơ «${title}»; cảm nhận hình ảnh, nhịp điệu và nội dung.`;
  if (kind === "info") return `Đọc hiểu văn bản thông tin «${title}».`;
  if (kind === "grammar") return `Luyện từ và câu — «${title}».`;
  if (kind === "writing") return `Luyện viết — «${title}».`;
  if (kind === "review") return `Ôn tập tổng hợp: ${title}.`;
  return `Đọc hiểu «${title}»; nắm nội dung, nhân vật và thông điệp.`;
}

export function theme(id, chapter, chapterIndex, book, lessonRows) {
  return { id, chapter, chapterIndex, book, lessons: mapLessons(lessonRows) };
}
