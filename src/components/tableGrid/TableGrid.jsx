import React from "react";
import PropTypes from "prop-types";
import TableData from "./TableData";
import TableHeader from "./TableHeader";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";

const TableGrid = (props) => {
  const { tableData } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHeader headerRow={tableData.header} />
        <TableData rows={tableData.body} />
      </Table>
    </TableContainer>
  );
};

TableGrid.propTypes = {
  tableData: PropTypes.shape({
    header: PropTypes.arrayOf(PropTypes.string),
    body: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        procedureType: PropTypes.string,
        applicantId: PropTypes.string,
        dataDate: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }),
};

export default TableGrid;
