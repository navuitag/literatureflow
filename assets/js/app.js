import { loadJson } from "./utils.js";
import { configureRouter, renderRoute } from "./router.js";

async function boot() {
  const [skills, lessons, questions, errors, exercises, summerG6G7] = await Promise.all([
    loadJson("data/skills.json"),
    loadJson("data/lessons.json"),
    loadJson("data/questions.json"),
    loadJson("data/errors.json"),
    loadJson("data/exercises.json"),
    loadJson("data/summer-review-g6-g7.json")
  ]);

  configureRouter({
    skills,
    lessons,
    questions,
    errors,
    exercises,
    summerPacks: {
      "g6-g7": summerG6G7
    }
  });

  if (!window.location.hash) {
    window.location.hash = "#/home";
  } else {
    renderRoute();
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  }
}

boot().catch((error) => {
  document.querySelector("#app").innerHTML = `
    <main class="app-shell">
      <section class="empty-state">
        Không khởi động được LiteratureFlow.<br>
        <small>${error.message}</small>
      </section>
    </main>
  `;
});
