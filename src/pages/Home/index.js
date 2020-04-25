import React, { Component } from "react";
// import axios from "axios";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";


export class Home extends Component {
  state = {
    // screams: null
  };

  componentDidMount() {
    // this.props.getScreams();
  }

  render() {
    return (
      <Grid container>
        <Grid item sm={8} xs={12}>
        </Grid>
        <Grid item sm={4} xs={12}>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  // data: state.data
});

export default connect(mapStateToProps, null)(Home);
