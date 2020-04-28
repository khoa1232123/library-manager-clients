import React, { Component } from "react";
import {
  withStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import { connect } from "react-redux";
import { getBorrowers, editBorrower, deleteBorrower } from "../../redux/actions/borrowersActions";
import ItemBorrower from "./ItemBorrower";

const styles = (theme) => ({
  ...theme.theme,
});

export class Borrowers extends Component {
  componentDidMount() {
    this.props.getBorrowers();
  }

  render() {
    const {
      classes,
      data: { borrowers },
      editBorrower,
      deleteBorrower
    } = this.props;
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Class Room</TableCell>
              <TableCell align="center">Position</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {borrowers.map((borrower) => (
              <ItemBorrower key={borrower.borrowerId} borrower={borrower} editBorrower={editBorrower} deleteBorrower={deleteBorrower} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.borrowers,
});

const mapActionsToProps = {
  getBorrowers,
  editBorrower,
  deleteBorrower
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Borrowers));
