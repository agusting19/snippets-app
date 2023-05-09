import { useEffect } from "react";
import { desktopDir } from "@tauri-apps/api/path";
import { readDir } from "@tauri-apps/api/fs";
import { useSnippetsStore } from "../store/snippetsStore";
import SnippetItem from "./SnippetItem";

const SnippetList = () => {
  const setSnippetsNames = useSnippetsStore((state) => state.setSnippetsNames);
  const snippetsNames = useSnippetsStore((state) => state.snippetsNames);

  useEffect(() => {
    const getSnippets = async () => {
      const desktopPath = await desktopDir();
      const result = await readDir(`${desktopPath}/Agu/Snippets`);
      const fileNames = result.map((file) => file.name!.split(".")[0]);
      setSnippetsNames(fileNames);
    };
    getSnippets();
  }, []);

  return (
    <div>
      {snippetsNames.map((snippet) => (
        <SnippetItem key={snippet} snippetName={snippet} />
      ))}
    </div>
  );
};

export default SnippetList;
