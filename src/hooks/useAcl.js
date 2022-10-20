export const useAcl = () => {
  const TransformProcedureData = (procedureData) => {
    const { id, procedureType, applicantId, dataDate, description } =
      procedureData;
    const result = {
      Nro: id,
      Nombre: procedureType,
      Identificacion: applicantId,
      Fecha: dataDate,
      Descripcion: description,
    };
    return result;
  };

  return { TransformProcedureData };
};
