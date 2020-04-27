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
} from "@material-ui/core";
import { connect } from "react-redux";
import { closeForm, submitBook } from "../../redux/actions/booksActions";
// import PropTypes from "prop-types";

const styles = (theme) => ({
  ...theme.theme,
});

export class FormBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: "",
      name: "",
      image: "",
      categories: "",
      description: "",
      newPer: 0,
      author: "",
      amount: 0,
      area: "",
      release: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.data.book.bookId) {
      const {
        book: {
          bookId,
          name,
          categories,
          description,
          newPer,
          author,
          amount,
          area,
          release,
        },
      } = nextProps.data;
      this.setState({
        bookId: bookId,
        name: name,
        image: "",
        categories: categories,
        description: description,
        newPer: newPer,
        author: author,
        amount: amount,
        area: area,
        release: release,
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
  };

  handleSubmit = () => {
    this.props.submitBook(this.state);
  };

  onClear = () => {
    this.setState({
      bookId: "",
      name: "",
      image: "",
      categories: "",
      description: "",
      newPer: 0,
      author: "",
      amount: 0,
      area: "",
      release: 0,
    });
  };

  onCloseForm = () => {
    this.props.closeForm();
    this.onClear();
  };

  render() {
    const {
      bookId,
      name,
      image,
      categories,
      description,
      newPer,
      author,
      amount,
      area,
      release,
    } = this.state;
    const {
      data: { open },
    } = this.props;

    return (
      <Dialog
        open={open}
        onClose={this.onCloseForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {bookId ? "Edit book" : "Add book"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="image"
            name="image"
            label="Image"
            type="text"
            fullWidth
            value={image}
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="categories"
            name="categories"
            label="Categories"
            type="text"
            fullWidth
            value={categories}
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            fullWidth
            value={description}
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="newPer"
            name="newPer"
            label="New Per"
            type="number"
            fullWidth
            value={newPer}
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="author"
            name="author"
            label="Author"
            type="text"
            fullWidth
            value={author}
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
            id="area"
            name="area"
            label="Area"
            type="text"
            fullWidth
            value={area}
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="release"
            name="release"
            label="Release"
            type="number"
            fullWidth
            value={release}
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onCloseForm} color="secondary">
            Cancel
          </Button>
          <Button onClick={() => this.handleSubmit()} color="primary">
            {bookId ? "Edit book" : "Add book"}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

FormBook.propTypes = {};

const mapStateToProps = (state) => ({
  data: state.books,
});

const mapActionsToProps = {
  closeForm,
  submitBook,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(FormBook));
