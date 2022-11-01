import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useProceduresManager } from "../hooks/useProceduresManager";
import TextBox from "../components/form/TextBox";

const NewProcedure = () => {
  const { formData, setFormData, saveProcedure } = useProceduresManager();

  const handleChangeName = (value) => {
    setFormData({
      ...formData,
      Nombre: value,
    });
  };

  const handleChangeIdentification = (value) => {
    setFormData({
      ...formData,
      Identificacion: value,
    });
  };

  const handleChangeDescription = (value) => {
    setFormData({
      ...formData,
      Descripcion: value,
    });
  };

  const handleSubmit = () => {
    saveProcedure();
  };
  return (
    <>
      <Card className="ml-2 w-full">
        <form className="m-auto" noValidate autoComplete="off">
          <CardContent>
            <div className="mb-2">
              <TextBox
                id="newProcedureId"
                label="Nombre Trámite"
                type="text"
                defaultValue={formData.Nombre}
                changeAction={handleChangeName}
              />
            </div>
            <div className="mb-2">
              <TextBox
                id="IdNumber"
                label="Número Identificación"
                type="number"
                defaultValue={formData.Identificacion}
                changeAction={handleChangeIdentification}
              />
            </div>
            <div className="mb-2">
              <TextBox
                id="IdDescription"
                label="Descripción"
                type="text"
                defaultValue={formData.Descripcion}
                changeAction={handleChangeDescription}
              />
            </div>
          </CardContent>
          <CardActions className="text-center">
            <Button
              onClick={handleSubmit}
              size="small"
              variant="contained"
              color="primary"
            >
              REGISTRAR
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default NewProcedure;
