import React, { Component } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

export class Navbar extends Component {
  render() {
    return (
      <AppBar  position="static">
        <Toolbar className="nav-container">
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            // onClick={this.onOpen}
          >
            <MenuIcon />
          </IconButton>
            <Typography variant="h6" >
              Thư viện
            </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
