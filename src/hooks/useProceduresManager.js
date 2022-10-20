import { useState } from "react";
import axios from "axios";
import { useAcl } from "./useAcl";

export const useProceduresManager = () => {
  const { TransformProcedureData } = useAcl();
  const baseURL = `http://localhost:3002/procedure`;

  const loadDefaultProcedures = () => {
    const [procedure, setProcedure] = useState([]);
    axios.get(baseURL).then((response) => {
      setProcedure(
        response.data.map((procedureItem) =>
          TransformProcedureData(procedureItem)
        )
      );
    });

    return procedure;
  };
  return {
    loadDefaultProcedures,
  };
};
