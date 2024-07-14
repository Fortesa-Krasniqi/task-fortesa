// store.js
import create from "zustand";

const useStore = create((set) => ({
  tags: [],
  addTag: (tag) => set((state) => ({ tags: [...state.tags, tag] })),
  removeTag: (index) =>
    set((state) => ({ tags: state.tags.filter((_, i) => i !== index) })),
  currentInput: "",
  setCurrentInput: (input) => set(() => ({ currentInput: input })),
}));

export default useStore;
