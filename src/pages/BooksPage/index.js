import React, { Component } from "react";
import Books from "../../components/Books";
import { Container } from "@material-ui/core";

export class BooksPage extends Component {
  render() {
    return (
      <Container>
        <Books />
      </Container>
    );
  }
}

export default BooksPage;
