import React, { Component } from "react";
import TableBorrowBooks from "../../components/BorrowBooks/TableBorrowBooks";
import {
  Grid,
  Typography,
  Box,
  Button,
  CircularProgress,
  withStyles,
} from "@material-ui/core";
import FormBorrowBook from "../../components/BorrowBooks/FormBorrowBook";
import { connect } from "react-redux";
import { createBorrowBook } from "../../redux/actions/borrowBooksActions";
import SearchBorrowBooks from "../../components/BorrowBooks/SearchBorrowBooks";


const styles = (theme) => ({
  ...theme.theme,
});

export class BorrowBooks extends Component {
  render() {
    const { classes, data: {open, loading}, createBorrowBook } = this.props;
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            <Box fontWeight="fontWeightBold">BorrowBooks</Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={createBorrowBook} >
            Add BorrowBook
          </Button>
          <FormBorrowBook open={open} />
          {loading && (
            <div className={classes.bgLoading}>
              <CircularProgress size={100} className={classes.progress} />
            </div>
          )}
        </Grid>
        <Grid item xs={12}>
          <SearchBorrowBooks />
        </Grid>
        <Grid item xs={12}>
          <TableBorrowBooks />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  data: state.borrowBooks
});

const mapActionsToProps = {
  createBorrowBook
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(BorrowBooks));
