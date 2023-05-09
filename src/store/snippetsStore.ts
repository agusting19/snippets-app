import { create } from "zustand";

interface SnippetsStore {
  snippetsNames: string[];
  selectedSnippet: string | null;
  addSnippetsName: (name: string) => void;
  setSnippetsNames: (names: string[]) => void;
  setSelectedSnippet: (name: string) => void;
}

export const useSnippetsStore = create<SnippetsStore>((set) => ({
  snippetsNames: [],
  selectedSnippet: null,
  addSnippetsName: (name) =>
    set((state) => ({ snippetsNames: [...state.snippetsNames, name] })),
  setSnippetsNames: (names) => set({ snippetsNames: names }),
  setSelectedSnippet: (name) => set({ selectedSnippet: name }),
}));
