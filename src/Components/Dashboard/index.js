import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

import {
  MyButton,
  ButtonPrimary,
  ButtonSecondary,
  ButtonRed
} from "../../assets/CustomControls/Buttons";

import { Delete as DeleteIcon } from "@material-ui/icons";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Typography variant="headline">Dashboard</Typography>

        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
        <Typography variant="button">button</Typography>
        <Typography variant="caption">caption</Typography>
        <Typography variant="display1">display1</Typography>
        <Typography variant="display2">display2</Typography>
        <Typography variant="display3">display3</Typography>
        <Typography variant="display4">display4</Typography>
        <Typography variant="headline">headline</Typography>
        <Typography variant="subheading">subheading</Typography>
        <Typography variant="title">title</Typography>

        {/* <MuiThemeProvider theme={themeGreen}> */}
        <ButtonPrimary>Hello Brother!!!</ButtonPrimary>
        {/* </MuiThemeProvider> */}
        <br />
        <br />
        {/* <MuiThemeProvider theme={themeOrange}> */}
        <ButtonSecondary>Hello Brother!!!</ButtonSecondary>
        {/* </MuiThemeProvider> */}

        <br />
        <br />
        <ButtonRed>
          <DeleteIcon />
          &nbsp; Delete
        </ButtonRed>

        <br />
        <br />
      </div>
    );
  }
}
