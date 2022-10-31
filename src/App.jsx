import React from "react";
import { createRoot } from "react-dom/client";
import TopMenu from "./components/TopMenu";
import "./index.scss";

const App = () => (
  <>
    <TopMenu />
  </>
);

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
