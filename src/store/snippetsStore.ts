import { create } from "zustand";

interface SnippetsStore {
  snippetsNames: string[];
  addSnippetsName: (name: string) => void;
  setSnippetsNames: (names: string[]) => void;
}

export const useSnippetsStore = create<SnippetsStore>((set) => ({
  snippetsNames: [],
  addSnippetsName: (name) =>
    set((state) => ({ snippetsNames: [...state.snippetsNames, name] })),
  setSnippetsNames: (names) => set({ snippetsNames: names }),
}));
