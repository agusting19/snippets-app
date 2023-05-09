import { twMerge } from "tailwind-merge";
import { useSnippetsStore } from "../store/snippetsStore";

interface Props {
  snippetName: string;
}

const SnippetItem = ({ snippetName }: Props) => {
  const selectedSnippet = useSnippetsStore((state) => state.selectedSnippet);
  const setSelectedSnippet = useSnippetsStore(
    (state) => state.setSelectedSnippet
  );
  return (
    <div
      className={twMerge("py-2 px-4 hover:cursor-pointer", selectedSnippet === snippetName ? "bg-sky-800" : "hover:bg-neutral-800")}
      onClick={() => setSelectedSnippet(snippetName)}
    >
      <h1>{snippetName}</h1>
    </div>
  );
};

export default SnippetItem;
