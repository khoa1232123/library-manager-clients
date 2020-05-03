import React, { Component } from "react";
import { withStyles, InputBase } from "@material-ui/core";
import { connect } from "react-redux";
import { searchBorrowBooks } from "../../redux/actions/borrowBooksActions";

const styles = (theme) => ({
  ...theme.theme,
});

export class SearchBorrowBooks extends Component {

  onChange = (e) => {
    console.log(e.target.value);
    this.props.searchBorrowBooks(e.target.value);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <InputBase
          placeholder="Search Borrow Books..."
          fullWidth
          className={classes.inputSearch}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapActionsToProps = {
  searchBorrowBooks,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(SearchBorrowBooks));
