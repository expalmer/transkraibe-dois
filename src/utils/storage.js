export const createStorage = (key) => ({
  async set(value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get() {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  },
});
