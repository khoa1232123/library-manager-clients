import React, { Component } from "react";
import { TableRow, TableCell, Button, withStyles } from "@material-ui/core";
import { DeleteOutline as DeleteOutlineIcon, Edit as EditIcon } from "@material-ui/icons";
import imgBorrower from "../../images/no-borrower.jpg";
import ShowBorrower from "./ShowBorrower";

const style = (theme) => ({
  ...theme.theme,
  img: {
    width: "200px"
  }
})

export class ItemBorrower extends Component {

  deleteBorrower(borrowerId) {
    if (window.confirm("Are you sure you want to delete this Borrower?")) {
      this.props.deleteBorrower(borrowerId);
    }
  }

  render() {
    const {
      classes,
      borrower: {
        borrowerId,
        name,
        image,
        classRoom,
        position,
        createdAt,
      },
      borrower,
      editBorrower
    } = this.props;
    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell align="center">
          <img src={image ? image : imgBorrower} alt="" className={classes.img} />
        </TableCell>
        <TableCell align="center">{classRoom}</TableCell>
        <TableCell align="center">{position}</TableCell>
        <TableCell align="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => editBorrower(borrowerId)}
          >
            <EditIcon />
          </Button>{" "}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => this.deleteBorrower(borrowerId)}
          >
            <DeleteOutlineIcon />
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(style)(ItemBorrower);
