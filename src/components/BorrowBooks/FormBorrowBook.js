import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  TextField,
  DialogActions,
  withStyles,
  Checkbox,
  Select,
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  closeForm,
  submitBorrowBook,
} from "../../redux/actions/borrowBooksActions";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getBooks } from "../../redux/actions/booksActions";
import { getBorrowers } from "../../redux/actions/borrowersActions";
import SelectCustomizer from "../plus/SelectCustomizer";
// import PropTypes from "prop-types";

const styles = (theme) => ({
  ...theme.theme,
});

export class FormBorrowBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borrowBookId: "",
      borrower: { name: "" },
      book: { name: "" },
      amount: 0,
      returned: false,
      overdue: 0,
      amount: 0,
      returnDay: "",
      createdAt: "",
    };
  }

  componentDidMount() {
    this.props.getBorrowers();
    this.props.getBooks();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.data.borrowBook);
    if (nextProps && nextProps.data.borrowBook.borrowBookId) {
      const {
        borrowBook: {
          borrowBookId,
          book,
          borrower,
          overdue,
          amount,
          returnDay,
        },
      } = nextProps.data;
      this.setState({
        borrowBookId: borrowBookId,
        book: book,
        borrower: borrower,
        overdue: overdue,
        amount: amount,
        returnDay: returnDay,
      });
    } else {
      this.onClear();
    }
  }

  handleChange = (e) => {
    var value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.type === "number"
        ? parseFloat(e.target.value)
        : e.target.value;
    this.setState({
      [e.target.name]: value,
    });
    console.log(value);
  };

  handleChangeSelect = (id, value) => {
    console.log(value);
    this.setState({
      [id]: value,
    });
    console.log(this.state);
  };

  handleSubmit = () => {
    this.props.submitBorrowBook(this.state);
  };

  onClear = () => {
    this.setState({
      borrowBookId: "",
      borrower: { name: "" },
      book: { name: "" },
      amount: 0,
      returned: false,
      overdue: 0,
      amount: 0,
      returnDay: "",
      createdAt: "",
    });
  };

  onCloseForm = () => {
    this.props.closeForm();
    this.onClear();
  };

  render() {
    const {
      borrowBookId,
      book,
      borrower,
      overdue,
      amount,
      returnDay,
    } = this.state;
    const {
      data: { open, borrowBook },
      dataBooks: { books },
      dataBorrowers: { borrowers },
    } = this.props;
    console.log(book);
    return (
      <Dialog
        open={open}
        onClose={this.onCloseForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {borrowBookId ? "Edit Borrow Book" : "Add Borrow Book"}
        </DialogTitle>
        <DialogContent>
          <SelectCustomizer
            options={books}
            oldOption={book}
            id="book"
            handleChangeSelect={this.handleChangeSelect}
          />
          <SelectCustomizer
            options={borrowers}
            oldOption={borrower}
            id="borrower"
            handleChangeSelect={this.handleChangeSelect}
          />

          {/* <Select /> */}

          <TextField
            autoFocus
            margin="dense"
            id="overdue"
            name="overdue"
            label="Overdue"
            type="number"
            fullWidth
            value={overdue}
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="amount"
            name="amount"
            label="Amount"
            type="number"
            fullWidth
            value={amount}
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="returnDay"
            name="returnDay"
            label="Return Day"
            type="date"
            fullWidth
            value={returnDay}
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onCloseForm} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => this.handleSubmit()} color="primary">
            {borrowBookId ? "Edit Borrow Book" : "Add Borrow Book"}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

FormBorrowBook.propTypes = {};

const mapStateToProps = (state) => ({
  data: state.borrowBooks,
  dataBooks: state.books,
  dataBorrowers: state.borrowers,
});

const mapActionsToProps = {
  closeForm,
  submitBorrowBook,
  getBooks,
  getBorrowers,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(FormBorrowBook));
