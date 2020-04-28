import React, { Component } from "react";
import { withStyles, InputBase } from "@material-ui/core";
import { connect } from "react-redux";
import { searchBorrowers } from "../../redux/actions/borrowersActions";

const styles = (theme) => ({
  ...theme.theme,
});

export class SearchBorrowers extends Component {

  onChange = (e) => {
    console.log(e.target.value);
    this.props.searchBorrowers(e.target.value);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <InputBase
          placeholder="Search Borrowers..."
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
  searchBorrowers,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(SearchBorrowers));
