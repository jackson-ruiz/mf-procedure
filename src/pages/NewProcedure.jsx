import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const NewProcedure = () => {
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
              />
            </div>
          </CardContent>
          <CardActions className="text-center">
            <Button size="small" variant="contained" color="primary">
              REGISTRAR
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default NewProcedure;
