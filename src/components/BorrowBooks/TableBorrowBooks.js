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
import { getBorrowBooks, editBorrowBook, deleteBorrowBook } from "../../redux/actions/borrowBooksActions";
import ItemBorrowBook from "./ItemBorrowBook";

const styles = (theme) => ({
  ...theme.theme,
});

export class TableBorrowBooks extends Component {

  componentDidMount() {
    this.props.getBorrowBooks();
  }

  render() {
    console.log(this.props);
    const {
      classes,
      data: {borrowBooks},
      editBorrowBook,
      deleteBorrowBook
    } = this.props;
    
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sách</TableCell>
              <TableCell>Người mượn</TableCell>
              <TableCell align="center">Quá hạn</TableCell>
              <TableCell align="center">Ngày trả</TableCell>
              <TableCell align="center">trả sách</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {borrowBooks.map((borrowBook) => (
              <ItemBorrowBook key={borrowBook.borrowBookId} borrowBook={borrowBook} editBorrowBook={editBorrowBook} deleteBorrowBook={deleteBorrowBook} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.borrowBooks,
});

const mapActionsToProps = {
  getBorrowBooks,
  editBorrowBook,
  deleteBorrowBook
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(TableBorrowBooks));
