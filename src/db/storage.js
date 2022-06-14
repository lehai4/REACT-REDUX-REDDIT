const TODOS_STORAGE_KEY = "REDDIT";
export default {
  get() {
    return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
  },
  set(redditNew) {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(redditNew));
  },
};
