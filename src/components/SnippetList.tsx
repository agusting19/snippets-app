import { useEffect } from "react";
import { desktopDir } from "@tauri-apps/api/path";
import { readDir } from "@tauri-apps/api/fs";
import { useSnippetsStore } from "../store/snippetsStore";

const SnippetList = () => {
  const setSnippetsNames = useSnippetsStore((state) => state.setSnippetsNames);
  const snippetsNames = useSnippetsStore((state) => state.snippetsNames);

  useEffect(() => {
    const getSnippets = async () => {
      const desktopPath = await desktopDir();
      const result = await readDir(`${desktopPath}/Agu/Snippets`);
      const fileNames = result.map((file) => file.name!);
      setSnippetsNames(fileNames);
    };
    getSnippets();
  }, []);

  return (
    <div>
      {snippetsNames.map((snippet) => (
        <div key={snippet}>
          <h1>{snippet}</h1>
        </div>
      ))}
    </div>
  );
};

export default SnippetList;
