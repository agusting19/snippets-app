import { SnippetEditor, SnippetForm, SnippetList } from "./components";

const App = () => {
  return (
    <div>
      <SnippetForm />
      <SnippetList />
      <SnippetEditor />
    </div>
  );
};

export default App;
