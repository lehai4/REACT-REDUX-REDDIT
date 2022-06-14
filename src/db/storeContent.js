const TODOS_STORAGE_KEY = "Content Reddit";
export default {
  get() {
    return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
  },
  set(content) {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(content));
  },
};
