import React from "react";
import TabScreen from "./components/tabScreen/TabScreen";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";
import ListIcon from "@material-ui/icons/List";
import NewProcedure from "./pages/NewProcedure";
import TableGrid from "./components/tableGrid/TableGrid";
import { useProceduresManager } from "./hooks/useProceduresManager";

let tableData = {
  header: ["", "NRO.", "NOMBRE", "IDENTIFICACIÓN", "FECHA"],
  body: [],
};

export const App = () => {
  const { loadProcedures } = useProceduresManager();
  const procedure = loadProcedures();
  tableData = { ...tableData, body: procedure };

  const tabData = [
    {
      tabLabel: "Nuevo Trámite",
      tabLabelIcon: <VerticalSplitIcon />,
      tabContent: <NewProcedure />,
    },
    {
      tabLabel: "Listá Trámites",
      tabLabelIcon: <ListIcon />,
      tabContent: <TableGrid tableData={tableData} />,
    },
  ];

  return <TabScreen data={tabData} />;
};
export default App;
