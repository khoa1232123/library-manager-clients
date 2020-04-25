import React, { Component } from "react";
import {
  withStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import { connect } from "react-redux";
import {getBooks} from "../../redux/actions/booksActions"

const styles = (theme) => ({
  ...theme.theme,
});

export class Books extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { classes, data: {books} } = this.props;
    console.log(books);
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Instock</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {products.map(product => (
              <TableRow key={product.productId}>
                <TableCell component="th" scope="row">
                  <ShowProduct product={product}>{product.name}</ShowProduct>
                </TableCell>
                <TableCell align="center">
                  <img
                    src={product.image !== "" ? product.image : imgProduct}
                    className={classes.img}
                    alt=""
                  />
                </TableCell>
                <TableCell align="center">{product.price}</TableCell>
                <TableCell align="center">{product.instock}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color={product.status === true ? "primary" : "secondary"}
                    onClick={() => updateStatus(product)}
                  >
                    {product.status === true ? "Show" : "Hidden"}
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => updateProduct(product.productId)}
                  >
                    <EditIcon />
                  </Button>{" "}
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteProduct(product.productId)}
                  >
                    <DeleteOutlineIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.books
});

const mapActionsToProps = {
  getBooks
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Books));
