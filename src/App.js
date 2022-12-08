import { useState } from "react";

import "./App.css";
import MainNav from "./components/mainNav/MainNav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Prototypes from "./components/prototypes/Prototypes";

function App() {
  const [activeKey, setActiveKey] = useState("/about");

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);
  };

  return (
    <div className="App">
      <MainNav activeKey={activeKey} handleSelect={handleSelect} />
      <About isShown={activeKey === "/about"} />
      <Prototypes isShown={activeKey === "/prototypes"} />
      <Projects isShown={activeKey === "/projects"} />
    </div>
  );
}

export default App;
