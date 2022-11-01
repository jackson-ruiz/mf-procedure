import React from "react";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";
import ListIcon from "@material-ui/icons/List";
import NewProcedure from "./NewProcedure";
import ProcedureList from "./ProcedureList";
import TabScreen from "../components/tabScreen/TabScreen";

const tabData = [
  {
    tabLabel: "Nuevo Trámite",
    tabLabelIcon: <VerticalSplitIcon />,
    tabContent: <NewProcedure />,
  },
  {
    tabLabel: "Lista Trámites",
    tabLabelIcon: <ListIcon />,
    tabContent: <ProcedureList />,
  },
];

const SamplePage = () => {
  return <TabScreen data={tabData} />;
};

export default SamplePage;
