import { useState } from "react";
import axios from "axios";
import { useAcl } from "./useAcl";

export const useProceduresManager = () => {
  const { TransformProcedureData } = useAcl();
  const baseURL = `http://localhost:3002/procedure`;
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
    const params = new URLSearchParams();
    params.append("Nombre", formData.Nombre);
    params.append("Identificacion", formData.Identificacion);
    params.append("Descripcion", formData.Descripcion);
    // const result = await axios.post("http://localhost:3002/procedure", params);
    // console.info(`RESULTADO GUARDAR DATOS: ${JSON.stringify(result.data)}`);
    axios
      .post("http://localhost:3002/procedure", params)
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
