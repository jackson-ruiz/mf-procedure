import React, { useState } from "react";

export const useProceduresManager = () => {
  const { procedures, setProcedures } = useState();
  const loadDefaultProcedures = () => {
    for (let i = 0; i < 5; i++) {
      setProcedures([
        ...procedures,
        {
          Nro: i + 1,
          Nombre: `Trámite ${i + 1}`,
          Identificacion: 100000001 + i,
          Fecha: `2020-01-0${i + 1}`,
          Descripcion: `Descripción del trámite ${i + 1}`,
        },
      ]);
    }
  };
  return {
    procedures,
    setProcedures,
    loadDefaultProcedures,
  };
};
