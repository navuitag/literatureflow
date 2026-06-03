import { escapeHtml } from "./utils.js";

/** Định dạng văn bản văn học: trích dẫn, in nghiêng, gạch đầu dòng. */
export function formatTextHtml(text = "") {
  if (!text) return "";
  let html = escapeHtml(String(text));
  html = html.replace(/«([^»]+)»/g, "<em class=\"lit-quote\">«$1»</em>");
  html = html.replace(/\n/g, "<br>");
  return html;
}
