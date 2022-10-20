import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useProceduresManager } from "../hooks/useProceduresManager";

const Row = (props) => {
  const [open, setOpen] = React.useState(false);
  const { row } = props;
  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.Nro}</TableCell>
        <TableCell>{row.Nombre}</TableCell>
        <TableCell>{row.Identificacion}</TableCell>
        <TableCell>{row.Fecha}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography gutterBottom component="div">
                <span className="font-bold">DESCRIPCIÓN: </span>
                <span className="italic">{row.Descripcion}</span>
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export const DataGrid = () => {
  const { loadDefaultProcedures } = useProceduresManager();
  const procedure = loadDefaultProcedures();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <span className="font-bold">NRO.</span>
            </TableCell>
            <TableCell>
              <span className="font-bold">NOMBRE</span>
            </TableCell>
            <TableCell>
              <span className="font-bold">IDENTIFICACIÓN</span>
            </TableCell>
            <TableCell>
              <span className="font-bold">FECHA</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {procedure.length > 0 &&
            procedure.map((rowData) => <Row key={rowData.Nro} row={rowData} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataGrid;
