import React, { Component } from "react";
import { withStyles, InputBase } from "@material-ui/core";
import { connect } from "react-redux";
import { searchBooks } from "../../redux/actions/booksActions";

const styles = (theme) => ({
  ...theme.theme,
});

export class SearchBooks extends Component {

  onChange = (e) => {
    console.log(e.target.value);
    this.props.searchBooks(e.target.value);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <InputBase
          placeholder="Search Books..."
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
  searchBooks,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(SearchBooks));
