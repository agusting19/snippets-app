import { useEffect, useState } from "react";
import { useSnippetsStore } from "../store/snippetsStore";
import { desktopDir } from "@tauri-apps/api/path";
import { writeTextFile } from "@tauri-apps/api/fs";
import { Editor } from "@monaco-editor/react";
import { TfiPencil } from "react-icons/tfi";

const SnippetEditor = () => {
  const selectedSnippet = useSnippetsStore((state) => state.selectedSnippet);
  const [text, setText] = useState<string | undefined>("");

  useEffect(() => {
    if (!selectedSnippet) return;

    const saveText = setTimeout(async () => {
      const desktopPath = await desktopDir();
      await writeTextFile(
        `${desktopPath}/Agu/Snippets/${selectedSnippet.name}.js`,
        text ?? ""
      );
    }, 1000);

    return () => {
      clearTimeout(saveText);
    };
  }, [text]);

  return (
    <>
      {selectedSnippet ? (
        <Editor
          theme="vs-dark"
          defaultLanguage="javascript"
          options={{ fontSize: 20 }}
          onChange={(value) => setText(value)}
          value={selectedSnippet.code ?? ""}
        />
      ) : (
        <TfiPencil className="text-9xl text-neutral-500"/>
      )}
    </>
  );
};

export default SnippetEditor;
