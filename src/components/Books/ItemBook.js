import React, { Component } from "react";
import { TableRow, TableCell, Button, withStyles } from "@material-ui/core";
import { DeleteOutline as DeleteOutlineIcon, Edit as EditIcon } from "@material-ui/icons";
import imgBook from "../../images/no-book.jpg";
import ShowBook from "./ShowBook";

const style = (theme) => ({
  ...theme.theme,
  img: {
    width: "200px"
  }
})

export class ItemBook extends Component {
  render() {
    const {
      classes,
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
        createdAt
      },
      book
    } = this.props;
    return (
      <TableRow>
        <TableCell component="th" scope="row">
          <ShowBook book={book}>{name}</ShowBook>
        </TableCell>
        <TableCell align="center">
          <img src={imgBook} alt="" className={classes.img} />
        </TableCell>
        <TableCell align="center">{categories}</TableCell>
        <TableCell align="center">{newPer}%</TableCell>
        <TableCell align="center">{author}</TableCell>
        <TableCell align="center">
          <Button
            variant="contained"
            color="primary"
            // onClick={() => updateProduct(product.productId)}
          >
            <EditIcon />
          </Button>{" "}
          <Button
            variant="contained"
            color="secondary"
            // onClick={() => deleteProduct(product.productId)}
          >
            <DeleteOutlineIcon />
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(style)(ItemBook);