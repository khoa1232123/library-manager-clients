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
import { closeForm, submitBorrowBook } from "../../redux/actions/borrowBooksActions";
// import PropTypes from "prop-types";

const styles = (theme) => ({
  ...theme.theme,
});

export class FormBorrowBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borrowBookId: "",
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
    if (nextProps && nextProps.data.borrowBook.borrowBookId) {
      const {
        borrowBook: {
          borrowBookId,
          name,
          image,
          classRoom,
          position,
        },
      } = nextProps.data;
      this.setState({
        borrowBookId: borrowBookId,
        name: name,
        image: image,
        classRoom: classRoom,
        position: position,
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
    this.props.submitBorrowBook(this.state);
  };

  onClear = () => {
    this.setState({
      borrowBookId: "",
      name: "",
      image: "",
      classRoom: "",
      position: "",
    });
  };

  onCloseForm = () => {
    this.props.closeForm();
    this.onClear();
  };

  render() {
    const {
      borrowBookId,
      name,
      image,
      classRoom,
      position,
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
          {borrowBookId ? "Edit Borrow Book" : "Add Borrow Book"}
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
            id="classRoom"
            name="classRoom"
            label="Class Room"
            type="text"
            fullWidth
            value={classRoom}
            onChange={this.handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="position"
            name="position"
            label="Position"
            type="text"
            fullWidth
            value={position}
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
});

const mapActionsToProps = {
  closeForm,
  submitBorrowBook,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(FormBorrowBook));
