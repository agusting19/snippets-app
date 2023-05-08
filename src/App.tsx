import { SnippetEditor, SnippetForm, SnippetList } from "./components";

const App = () => {
  return (
    <div className="h-screen text-white grid grid-cols-12">
      <div className="col-span-3 bg-zinc-900">
        <SnippetForm />
        <SnippetList />
      </div>
      <div className="col-span-9 bg-neutral-950 flex justify-center items-center">
        <SnippetEditor />
      </div>
    </div>
  );
};

export default App;
