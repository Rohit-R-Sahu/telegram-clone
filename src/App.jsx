import { useCallback, useState } from "react";
import "./App.css";
import Mainchat from "./components/Mainchat";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex h-[100vh]">
        <div className="flex-[0.25]  overflow-scroll">
          <Sidebar />
        </div>
        <div className="flex-[0.75]  bg-telegram">
          <Mainchat />
        </div>
      </div>
    </>
  );
}

export default App;
