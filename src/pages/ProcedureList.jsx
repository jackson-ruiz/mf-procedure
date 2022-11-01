import React from "react";
import TableGrid from "../components/tableGrid/TableGrid";
import { useProceduresManager } from "../hooks/useProceduresManager";

let tableData = {
  header: ["", "NRO.", "NOMBRE", "IDENTIFICACIÓN", "FECHA"],
  body: [],
};

const ProcedureList = () => {
  const { loadProcedures } = useProceduresManager();
  const procedure = loadProcedures();
  tableData = { ...tableData, body: procedure };

  return <TableGrid tableData={tableData} />;
};

export default ProcedureList;
