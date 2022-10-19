import React from "react";
import ReactDOM from "react-dom";
import TopMenu from "./components/TopMenu";
import "./index.scss";
import NewProcedure from "./pages/NewProcedure";

const App = () => (
  <>
    <TopMenu />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
