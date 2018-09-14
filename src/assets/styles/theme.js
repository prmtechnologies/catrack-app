import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { red, green, blue, orange } from "@material-ui/core/colors";

export const themeGreen = createMuiTheme({
  overrides: {
    palette: {
      primary: blue,
      secondary: green
    },
    status: {
      danger: "orange"
    },
    MuiButton: {
      // Name of the component ⚛️ / style sheet
      // Name of the rule
      root: {
        // Some CSS
        // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        // background: "linear-gradient(90deg, green 30%, #FF8E53 90%)",
        // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"

        // background: "linear-gradient(60deg, #ffa726, #fb8c00)",
        // boxShadow:
        //   "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)",

        background: "linear-gradient(60deg, #66bb6a, #43a047)",
        boxShadow:
          "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)",
        borderRadius: 3,
        border: 0,
        color: "white"
        // height: 48,
        // padding: "0 30px"
      }
    }
  }
});

export const themeOrange = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        background: "linear-gradient(60deg, #ffa726, #fb8c00)",
        boxShadow:
          "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)",
        borderRadius: 3,
        border: 0,
        color: "white"
      }
    }
  }
});
