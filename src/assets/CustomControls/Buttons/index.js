import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const MyButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #66bb6a 30%, #ffa726 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export const ButtonPrimary = withStyles({
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
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export const ButtonSecondary = withStyles({
  root: {
    // Some CSS
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    // background: "linear-gradient(90deg, green 30%, #FF8E53 90%)",
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"

    background: "linear-gradient(60deg, #ffa726, #fb8c00)",
    boxShadow:
      "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)",

    borderRadius: 3,
    border: 0,
    color: "white"
    // height: 48,
    // padding: "0 30px"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export const ButtonRed = withStyles({
  root: {
    background: "linear-gradient(60deg, #ef5350, #e53935)",
    boxShadow:
      "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)",
    borderRadius: 3,
    border: 0,
    color: "white"
    // height: 48,
    // padding: "0 30px"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);
