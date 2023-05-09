import { create } from "zustand";

interface Snippet {
  name: string;
  code: string;
}

interface SnippetsStore {
  snippetsNames: string[];
  selectedSnippet: Snippet | null;
  addSnippetsName: (name: string) => void;
  setSnippetsNames: (names: string[]) => void;
  setSelectedSnippet: (name: Snippet | null) => void;
}

export const useSnippetsStore = create<SnippetsStore>((set) => ({
  snippetsNames: [],
  selectedSnippet: null,
  addSnippetsName: (name) =>
    set((state) => ({ snippetsNames: [...state.snippetsNames, name] })),
  setSnippetsNames: (names) => set({ snippetsNames: names }),
  setSelectedSnippet: (name) => set({ selectedSnippet: name }),
}));
