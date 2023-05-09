import { Editor } from "@monaco-editor/react";
import { useSnippetsStore } from "../store/snippetsStore";

const SnippetEditor = () => {
  const selectedSnippet = useSnippetsStore((state) => state.selectedSnippet);

  return (
    <>
      {selectedSnippet ? (
        <Editor
          theme="vs-dark"
          defaultLanguage="javascript"
          options={{ fontSize: 20 }}
        />
      ) : (
        <div>Nothing to show</div>
      )}
    </>
  );
};

export default SnippetEditor;
