import "./App.css";
import ModernButton from "./ModernButton";

function App() {
  return (
    <div>
      <div className="translate-y-full">
        <div className="grid justify-items-center grid-rows-2 mt-5">
          <h1 className="text-blue-500 text-2xl font-bold">
            Website Main Base
          </h1>
          <p className="text-blue-500">Description dummy text</p>
        </div>
        <div className="grid justify-items-center grid-rows-2">
          <ModernButton text="First Tutorial" url="#"></ModernButton>
          <ModernButton text="Second Tutorial" url="#"></ModernButton>
        </div>
      </div>

      <footer className="grid justify-between grid-cols-3 m-0 bg-indigo-500 fixed left-0 bottom-0 w-full p-3 text-center text-white">
        <p><a href="https://github.com/Aidanmanic?tab=repositories" target="_blank">Open Source Github Repos</a></p>
        <p><a href="https://github.com/Aidanmanic?tab=repositories" target="_blank">Open Source Github Repos</a></p>
        <p><a href="https://github.com/Aidanmanic?tab=repositories" target="_blank">Open Source Github Repos</a></p>
      </footer>
    </div>
  );
}

export default App;
