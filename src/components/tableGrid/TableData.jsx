import React from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

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

const TableData = (props) => {
  const { rows } = props;

  return (
    <TableBody>
      {rows.length > 0 &&
        rows.map((row, index) => <Row key={index} row={row} />)}
    </TableBody>
  );
};
TableData.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default TableData;
