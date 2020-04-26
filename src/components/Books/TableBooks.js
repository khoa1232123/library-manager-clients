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
import { getBooks, editBook, deleteBook } from "../../redux/actions/booksActions";
import ItemBook from "./ItemBook";

const styles = (theme) => ({
  ...theme.theme,
});

export class Books extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const {
      classes,
      data: { books },
      editBook,
      deleteBook
    } = this.props;
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">New Per</TableCell>
              <TableCell align="center">Author</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <ItemBook key={book.bookId} book={book} editBook={editBook} deleteBook={deleteBook} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.books,
});

const mapActionsToProps = {
  getBooks,
  editBook,
  deleteBook
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Books));
