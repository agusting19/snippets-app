import { useState } from "react";
import { desktopDir } from "@tauri-apps/api/path";
import { writeTextFile } from "@tauri-apps/api/fs";
import { useSnippetsStore } from "../store/snippetsStore";

const SnippetForm = () => {
  const [snippetName, setSnippetName] = useState("");
  const addSnippetsName = useSnippetsStore((state) => state.addSnippetsName);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const desktopPath = await desktopDir();
    await writeTextFile(`${desktopPath}/Agu/Snippets/${snippetName}.js`, "");
    setSnippetName("");
    addSnippetsName(snippetName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a snippet"
        value={snippetName}
        className="bg-zinc-800 w-full border-none outline-none p-2"
        onChange={(e) => setSnippetName(e.target.value)}
      />
    </form>
  );
};

export default SnippetForm;
