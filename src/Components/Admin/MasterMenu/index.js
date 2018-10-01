import React, { Component } from "react";
import { Typography } from "@material-ui/core";

class MenuMaster extends Component {
  render() {
    return (
      <div>
        <Typography variant="headline">{this.props.menuname}</Typography>
        <Typography variant="subheading">{this.props.menuname2}</Typography>
      </div>
    );
  }
}

export default MenuMaster;
