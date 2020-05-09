import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  DialogContentText,
  DialogActions,
  withStyles,
} from "@material-ui/core";

const styles = (theme) => ({
  ...theme.theme,
  img: {
    width: "100%",
  },
});

export class ShowBorrowBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { open } = this.state;
    const {
      // classes,
      borrowBook: {
        name,
        categories,
        description,
        newPer,
        author,
        amount,
        area,
        release,
        // createdAt,
      },
    } = this.props;
    return (
      <>
        <Button variant="text" color="primary" onClick={this.handleClickOpen}>
          {this.props.children}
        </Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Borrow Book: {name}</DialogTitle>
          <DialogContent>
            <DialogContentText>Description: {description}</DialogContentText>
            <DialogContentText>Categories: {categories}</DialogContentText>
            <DialogContentText>Author: {author}</DialogContentText>
            <DialogContentText>Amount: {amount}</DialogContentText>
            <DialogContentText>Area: {area}</DialogContentText>
            <DialogContentText>newPer: {newPer}</DialogContentText>
            <DialogContentText>release: {release}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default withStyles(styles)(ShowBorrowBook);
