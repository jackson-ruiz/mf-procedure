import { useState } from "react";
import axios from "axios";
import { useAcl } from "./useAcl";

export const useProceduresManager = () => {
  const { TransformProcedureData } = useAcl();
  const baseURL = `${process.env.BACKEND_API_BASE_URL}/procedure`;
  const [formData, setFormData] = useState({
    Nombre: "",
    Identificacion: "",
    Descripcion: "",
  });

  const loadProcedures = () => {
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

  const saveProcedure = async () => {
    const { Nombre, Identificacion, Descripcion } = formData;
    const apiUrl = `${process.env.BACKEND_API_BASE_URL}/procedure?Nombre=${Nombre}&Identificacion=${Identificacion}&Descripcion=${Descripcion}`;
    axios
      .post(apiUrl)
      .then((response) => {
        console.info(`ESTADO DE TRANSACCION: ${response.status}`);
        console.info(
          `RESULTADO DE TRANSACCION: ${JSON.stringify(response.data)}`
        );
      })
      .catch((err) => console.warn(err));
  };

  return {
    loadProcedures,
    formData,
    setFormData,
    saveProcedure,
  };
};
