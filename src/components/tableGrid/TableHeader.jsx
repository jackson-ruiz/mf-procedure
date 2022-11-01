import React from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

const Columns = (props) => {
  const { row } = props;
  return (
    row.length > 0 &&
    row.map((data, index) => {
      return (
        <TableCell key={index}>
          <span className="font-bold">{data}</span>
        </TableCell>
      );
    })
  );
};
Columns.propTypes = {
  row: PropTypes.arrayOf(PropTypes.node),
};

const TableHeader = (props) => {
  const { headerRow } = props;
  return (
    <TableHead>
      <TableRow>
        <Columns row={headerRow} />
      </TableRow>
    </TableHead>
  );
};
TableHeader.propTypes = {
  headerRow: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHeader;
