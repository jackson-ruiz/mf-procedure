import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useProceduresManager } from "../hooks/useProceduresManager";

const NewProcedure = () => {
  const { formData, setFormData, saveProcedure } = useProceduresManager();

  const handleChangeName = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      Nombre: event.target.value,
    });
  };

  const handleChangeIdentification = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      Identificacion: event.target.value,
    });
  };

  const handleChangeDescription = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      Descripcion: event.target.value,
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
              <TextField
                id="newProcedureId"
                label="Nombre Trámite"
                variant="outlined"
                size="small"
                className="my-1"
                fullWidth
                value={formData.Nombre}
                onChange={handleChangeName}
              />
            </div>
            <div className="mb-2">
              <TextField
                id="IdNumber"
                label="Número Identificación"
                variant="outlined"
                size="small"
                type="number"
                className="wy-1"
                fullWidth
                value={formData.Identificacion}
                onChange={handleChangeIdentification}
              />
            </div>
            <div className="mb-2">
              <TextField
                id="descriptionID"
                label="Descripción"
                variant="outlined"
                size="small"
                className="mmy-1"
                multiline
                minRows={4}
                fullWidth
                value={formData.Descripcion}
                onChange={handleChangeDescription}
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
