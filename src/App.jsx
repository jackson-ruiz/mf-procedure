import React from "react";
import TabScreen from "./components/tabScreen/TabScreen";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";
import ListIcon from "@material-ui/icons/List";
import NewProcedure from "./pages/NewProcedure";
import DataGrid from "./pages/ProcedureList";

const tabData = [
  {
    tabLabel: "Nuevo Trámite",
    tabLabelIcon: <VerticalSplitIcon />,
    tabContent: <NewProcedure />,
  },
  {
    tabLabel: "Listá Trámites",
    tabLabelIcon: <ListIcon />,
    tabContent: <DataGrid />,
  },
];

export const App = () => <TabScreen data={tabData} />;
export default App;
