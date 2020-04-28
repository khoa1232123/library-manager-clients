import React, { Component } from "react";
import TableBorrowers from "../../components/Borrowers/TableBorrowers";
import {
  Grid,
  Typography,
  Box,
  Button,
  CircularProgress,
  withStyles,
} from "@material-ui/core";
import FormBorrower from "../../components/Borrowers/FormBorrower";
import { connect } from "react-redux";
import {createBorrower} from "../../redux/actions/borrowersActions";
import SearchBorrowers from "../../components/Borrowers/SearchBorrowers";


const styles = (theme) => ({
  ...theme.theme,
});

export class Borrowers extends Component {
  render() {
    const { classes, data: {open, loading}, createBorrower } = this.props;
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            <Box fontWeight="fontWeightBold">Borrowers</Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={createBorrower} >
            Add Borrower
          </Button>
          <FormBorrower open={open} />
          {loading && (
            <div className={classes.bgLoading}>
              <CircularProgress size={100} className={classes.progress} />
            </div>
          )}
        </Grid>
        <Grid item xs={12}>
          <SearchBorrowers />
        </Grid>
        <Grid item xs={12}>
          <TableBorrowers />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  data: state.borrowers
});

const mapActionsToProps = {
  createBorrower
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Borrowers));
