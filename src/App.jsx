import React from "react";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ChatBox />
    </div>
  );
};

export default App;
