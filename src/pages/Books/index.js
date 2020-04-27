import React, { Component } from "react";
import TableBooks from "../../components/Books/TableBooks";
import {
  Grid,
  Typography,
  Box,
  Button,
  CircularProgress,
  withStyles,
} from "@material-ui/core";
import FormBook from "../../components/Books/FormBook";
import { connect } from "react-redux";
import {createBook} from "../../redux/actions/booksActions";
import SearchBooks from "../../components/Books/SearchBooks";


const styles = (theme) => ({
  ...theme.theme,
});

export class Books extends Component {
  render() {
    const { classes, data: {open, loading}, createBook } = this.props;
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center">
            <Box fontWeight="fontWeightBold">Books</Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={createBook} >
            Add Book
          </Button>
          <FormBook open={open} />
          {loading && (
            <div className={classes.bgLoading}>
              <CircularProgress size={100} className={classes.progress} />
            </div>
          )}
        </Grid>
        <Grid item xs={12}>
          <SearchBooks />
        </Grid>
        <Grid item xs={12}>
          <TableBooks />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  data: state.books
});

const mapActionsToProps = {
  createBook
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Books));
