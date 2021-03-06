import React, { Component } from "react";
import { TableRow, TableCell, Button, withStyles } from "@material-ui/core";
import {
  DeleteOutline as DeleteOutlineIcon,
  Edit as EditIcon,
} from "@material-ui/icons";
import ShowBorrowBook from "./ShowBorrowBook";
import { connect } from "react-redux";

const styles = (theme) => ({
  ...theme.theme,
  img: {
    width: "200px",
  },
});

export class ItemBorrowBook extends Component {

  deleteBorrowBook(borrowBookId) {
    if (window.confirm("Are you sure you want to delete this Borrow Book?")) {
      this.props.deleteBorrowBook(borrowBookId);
    }
  }

  render() {
    const {
      classes,
      borrowBook: { borrowBookId, book, borrower, overdue, returnDay, returned },
      borrowBook,
      editBorrowBook,
    } = this.props;
    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {book.name}
        </TableCell>
        <TableCell>{borrower.name}</TableCell>
        <TableCell align="center">{overdue}</TableCell>
        <TableCell align="center">{returnDay}</TableCell>
        <TableCell align="center">{(returned) ? "Đã trả" : "Chưa trả"}</TableCell>
        <TableCell align="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => editBorrowBook(borrowBookId)}
          >
            <EditIcon />
          </Button>{" "}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => this.deleteBorrowBook(borrowBookId)}
          >
            <DeleteOutlineIcon />
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

const mapStateToProps = (state) => ({
  dataBorrowers: state.borrowers,
  dataBooks: state.books,
});

const mapActionsToProps = {
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(ItemBorrowBook));
