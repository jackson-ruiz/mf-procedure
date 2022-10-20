import React from "react";
import ReactDOM from "react-dom";
import TopMenu from "./components/TopMenu";
import "./index.scss";

const App = () => (
  <>
    <TopMenu />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
