import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";
import SvgIcon from "@material-ui/core/SvgIcon";
import Save_Icon from "@material-ui/icons/Save";
import Lock_Icon from "@material-ui/icons/Lock";
import Tooltip from "@material-ui/core/Tooltip";

export const SaveIcon = withStyles({
  root: {
    background: "linear-gradient(60deg, #66bb6a, #43a047)",
    boxShadow:
      "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 25,
    width: 25
    // padding: 10
  }
})(Save_Icon);

const LockIcon_Temp = withStyles({
  root: {
    background: "linear-gradient(60deg, #66bb6a, #43a047)",
    boxShadow:
      "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 25,
    width: 25,
    padding: 3,
    "&:hover": {
      backgroundColor: "white",
      //   color: green[800],
      padding: 1
    }
  }
})(Lock_Icon);

export const LockIcon = () => {
  return (
    <Tooltip title="Save & Lock" enterDelay={200} leaveDelay={200}>
      <LockIcon_Temp />
    </Tooltip>
  );
};
