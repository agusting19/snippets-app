import { twMerge } from "tailwind-merge";
import { useSnippetsStore } from "../store/snippetsStore";
import { desktopDir, join } from "@tauri-apps/api/path";
import { readTextFile, removeFile } from "@tauri-apps/api/fs";
import { toast } from "react-hot-toast";
import { FiTrash, FiX } from "react-icons/fi";

interface Props {
  snippetName: string;
}

const SnippetItem = ({ snippetName }: Props) => {
  const selectedSnippet = useSnippetsStore((state) => state.selectedSnippet);
  const setSelectedSnippet = useSnippetsStore(
    (state) => state.setSelectedSnippet
  );
  const removeSnippet = useSnippetsStore((state) => state.removeSnippetsName);

  const handleClick = async () => {
    const desktopPath = await desktopDir();
    const filePath = await join(
      desktopPath,
      "Agu",
      "Snippets",
      `${snippetName}.js`
    );
    const snippet = await readTextFile(filePath);
    setSelectedSnippet({ name: snippetName, code: snippet });
  };

  const handleDelete = async (snippetName: string) => {
    const accept = await window.confirm(
      `Are you sure you want to delete ${snippetName}?`
    );

    if (!accept) return;

    const desktopPath = await desktopDir();
    const filePath = await join(
      desktopPath,
      "Agu",
      "Snippets",
      `${snippetName}.js`
    );
    await removeFile(filePath);
    removeSnippet(snippetName);

    toast.success("Snippet deleted!", {
      duration: 1500,
      position: "bottom-right",
      style: {
        background: "#202020",
        color: "#fff",
      },
    });
  };

  return (
    <div
      className={twMerge(
        "flex justify-between py-2 px-4 hover:cursor-pointer",
        selectedSnippet?.name === snippetName
          ? "bg-sky-800"
          : "hover:bg-neutral-800"
      )}
      onClick={handleClick}
    >
      <h1>{snippetName}</h1>
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(snippetName);
          }}
        >
          <FiTrash className="text-neutral-500 hover:text-neutral-200" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedSnippet(null);
          }}
        >
          <FiX className="text-neutral-500 hover:text-neutral-200" />
        </button>
      </div>
    </div>
  );
};

export default SnippetItem;
