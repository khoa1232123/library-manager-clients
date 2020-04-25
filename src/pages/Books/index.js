import React, { Component } from "react";
import TableBooks from "../../components/Books/TableBooks";
import { Container } from "@material-ui/core";

export class Books extends Component {
  render() {
    return (
      <Container>
        <TableBooks />
      </Container>
    );
  }
}

export default Books;
