import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuList from "./MenuList";
import MenuListSelected from "./MenuListSelected";

import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// import { SaveIcon, LockIcon } from "../../assets/CustomControls/Icons";
import SaveIcon from "@material-ui/icons/Save";
import LockIcon from "@material-ui/icons/Lock";

import "../../App.css";

import { Tooltip } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   ListItemSecondaryAction,
//   Button
// } from "@material-ui/core";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    // background: "linear-gradient(60deg, #ffa726, #fb8c00)",
    // boxShadow:
    //   "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)",
    // borderRadius: 3,
    // border: 0,
    // color: "white",

    backgroundColor: theme.palette.background.paper,
    width: "100%"
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

class Menu extends Component {
  state = { value: 0 };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  UpdateMenu = MenuItems => {
    this.setState({ MenuItems });
  };

  previewMenu = () => {
    alert("Preview menu - option under development");
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <Fragment>
        {/* <div style={{ height: "20px", width: "auto" }}>&nbsp;</div> */}

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          spacing={8}
        >
          <Grid item xs={12} md={6} style={{ padding: "8px" }}>
            <table cellSpacing="10">
              <tr>
                <td>
                  <Typography variant="headline">Menu -</Typography>
                </td>
                <td>
                  <Typography
                    variant="subheading"
                    style={{ position: "inline !important" }}
                  >
                    Neha Jain Gupta (05-Sep-2018)
                  </Typography>
                </td>
              </tr>
            </table>
          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            item
            xs={12}
            md={6}
            style={{ padding: "8px" }}
          >
            <div style={{ padding: "10px" }}>
              <Button variant="contained">
                <SaveIcon
                  className={classNames(classes.leftIcon, classes.iconSmall)}
                />
                Save
              </Button>
              &nbsp; &nbsp;
              <Tooltip title="Save & Lock">
                <Button variant="contained">
                  <LockIcon
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  />
                  Lock
                </Button>
              </Tooltip>
              &nbsp; &nbsp;
              <Button variant="outlined">Cancel</Button>
            </div>
          </Grid>
        </Grid>

        <div style={{ height: "30px", width: "auto" }}>&nbsp;</div>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          spacing={32}
        >
          {/* <Grid item xs={12}>
            <Typography variant="headline">Menu</Typography>
          </Grid> */}

          <Grid item xs={12} md={4} style={{ padding: "8px" }}>
            <Paper style={{ padding: "0px", minHeight: "525px" }}>
              <div
                style={{
                  position: "relative",
                  left: "8px",
                  top: "-15px",
                  width: "150px",
                  height: "auto",
                  padding: "10px",
                  // // background: "linear-gradient(60deg, #66bb6a, #43a047)",
                  // background: "linear-gradient(60deg, #222222, #777777)",

                  // boxShadow:
                  //   "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)",
                  // // "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)",
                  backgroundColor: "rgb(245, 247, 248)",
                  borderRadius: 3,
                  border: "1px solid silver",
                  color: "white"
                }}
              >
                <Typography variant="subheading" style={{ color: "black" }}>
                  &nbsp;Select Items
                </Typography>
              </div>

              <div className={classes.root}>
                <AppBar position="static" color="default">
                  <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    // fullWidth
                    scrollable
                    scrollButtons="auto"
                  >
                    <Tab label="Set Menus" />
                    <Tab label="Recent Menus" />
                    <Tab label="Master Menus" />
                  </Tabs>
                </AppBar>
                {/* <Paper> */}
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={this.state.value}
                  onChangeIndex={this.handleChangeIndex}
                >
                  <TabContainer dir={theme.direction}>
                    <MenuList UpdateMenu={this.UpdateMenu} />
                  </TabContainer>
                  <TabContainer dir={theme.direction}>
                    <MenuList UpdateMenu={this.UpdateMenu} />
                  </TabContainer>
                  <TabContainer dir={theme.direction}>
                    <MenuList UpdateMenu={this.UpdateMenu} />
                  </TabContainer>
                </SwipeableViews>
                {/* </Paper> */}
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8} style={{ padding: "8px" }}>
            <div>
              <Paper style={{ padding: "8px", minHeight: "525px" }}>
                <Grid
                  container
                  // style={{
                  //   backgroundImage: "url(" + sideImage + ")",
                  //   backgroundRepeat: "no-repeat",
                  //   backgroundSize: "auto"
                  // }}
                >
                  <Grid item xs={6}>
                    <div
                      style={{
                        position: "relative",
                        top: "-15px",
                        width: "150px",
                        height: "auto",
                        padding: "10px",
                        // // background: "linear-gradient(60deg, #66bb6a, #43a047)",
                        // background: "linear-gradient(60deg, #222222, #777777)",

                        // boxShadow:
                        //   "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)",
                        // // "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)",
                        backgroundColor: "rgb(245, 247, 248)",
                        borderRadius: 3,
                        border: "1px solid silver",
                        color: "white"
                      }}
                    >
                      <Typography
                        variant="subheading"
                        style={{ color: "black" }}
                      >
                        <FontAwesomeIcon icon="thumbtack" />
                        {/* <img src={pinIcon} style={{ height: "20px" }} /> */}
                        &nbsp;Selected Items
                      </Typography>
                    </div>
                  </Grid>
                  <Grid container direction="row" xs={6} justify="flex-end">
                    <Tooltip title="Export to PDF">
                      <FontAwesomeIcon
                        icon="file-pdf"
                        style={{
                          fontSize: "30px",
                          color: "red",
                          boxShadow:
                            "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)",
                          cursor: "pointer",
                          padding: "2px"
                        }}
                        onClick={this.previewMenu}
                      />
                    </Tooltip>
                  </Grid>
                </Grid>
                <MenuListSelected />
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    MenuItems: state.MenuItems
  };
};

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(Menu)
);
