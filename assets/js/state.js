import { createProfileStore } from "./profileStore.js";

function baseProgress() {
  return {
    selectedGrade: 6,
    onboarded: false,
    xp: 0,
    todayXp: 0,
    streak: 1,
    completedLessons: [],
    skillMastery: {},
    answers: [],
    errors: [],
    dailyQuest: {
      target: 5,
      progress: 0
    },
    summerReview: {
      packs: {}
    },
    lastStudiedDate: new Date().toISOString().slice(0, 10)
  };
}

const store = createProfileStore({
  legacyKey: "literatureflow_state",
  storageKey: "literatureflow_accounts",
  defaultProgress: baseProgress,
  defaultName: "Bạn đọc nhỏ",
  preserveOnReset: ["selectedGrade"],
  hydrateProgress: (raw, progress) => {
    if (raw.user?.grade) progress.selectedGrade = raw.user.grade;
  },
  buildUser: (progress, profile) => ({
    name: profile?.name || "Bạn đọc nhỏ",
    grade: progress.selectedGrade
  }),
  onCompleteOnboarding: (progress, grade) => {
    progress.selectedGrade = grade;
  }
});

export const {
  getState,
  subscribe,
  updateState,
  getProfiles,
  completeOnboarding,
  restartOnboarding,
  createProfile,
  switchProfile,
  renameProfile,
  deleteProfile,
  resetProgress,
  hasProfiles
} = store;

export function setSelectedGrade(grade) {
  store.updateState((next) => {
    next.selectedGrade = grade;
  });
}
