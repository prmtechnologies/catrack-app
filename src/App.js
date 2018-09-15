import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
// import DeleteIcon from "@material-ui/icons/Delete";

import MainListItems from "./Components/Header";

// import { MuiThemeProvider } from "@material-ui/core/styles";
// import { themeGreen, themeOrange } from "./assets/styles/theme";

import { Button } from "@material-ui/core";

import "./App.css";
import image from "../src/assets/img/sidebar-4.jpg";
import sidebarImage from "../src/assets/img/brooke-lark-230140-unsplash.jpg";
import imageLogo from "../src/assets/img/logo.png";
import Dashboard from "./Components/Dashboard";
import Menu from "./Components/Menu";
import MasterMenu from "./Components/Admin/MasterMenu";

// import bgImage from "./assets/img/edgar-castrejon-459822-unsplash.jpg";
// import bgImage from "./assets/img/cherry.jpg";
import bgImage from "./assets/img/oranges.jpg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFile, faFilePdf } from "@fortawesome/free-solid-svg-icons";

library.add(faFile);
library.add(faFilePdf);

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 25
  }
});

class App extends Component {
  state = {
    open: false,
    redirectPath: ""
  };

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  redirectTo = redirectPath => {
    this.setState({ redirectPath });
  };

  checkRedirect = () => {
    if (this.state.redirectPath !== "") {
      return <Redirect to={this.state.redirectPath} />;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",

            backgroundImage: "url(" + bgImage + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%"
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%",
            backgroundColor: "white",
            opacity: ".9"
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "100%",
            width: "100%"
          }}
        >
          <React.Fragment>
            <CssBaseline />
            <div className={classes.root}>
              <AppBar
                position="absolute"
                color="inherit"
                className={classNames(
                  classes.appBar,
                  this.state.open && classes.appBarShift
                )}
              >
                <Toolbar
                  disableGutters={!this.state.open}
                  className={classes.toolbar}
                >
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(
                      classes.menuButton
                      // this.state.open && classes.menuButtonHidden
                    )}
                  >
                    <MenuIcon />
                  </IconButton>
                  <img
                    src={imageLogo}
                    style={{ height: "50px", paddingRight: "10px" }}
                  />

                  <Typography
                    variant="headline"
                    color="inherit"
                    noWrap
                    className={classes.title}
                    style={{
                      color: "white",
                      fontWeight: "light",
                      textShadow: "2px 2px silver"
                    }}
                  >
                    The Kitchen Art Company
                  </Typography>
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </Toolbar>
              </AppBar>
              <Drawer
                variant="permanent"
                classes={{
                  paper: classNames(
                    classes.drawerPaper,
                    !this.state.open && classes.drawerPaperClose
                  )
                }}
                style={{ overflow: "hidden" }}
                open={this.state.open}
              >
                <div
                  style={{
                    width: drawerWidth - 2,
                    height: "100%",
                    backgroundImage: "url(" + sidebarImage + ")"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "black",
                      opacity: ".65"
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%"
                    }}
                  >
                    <div
                      className={classes.toolbarIcon}
                      // style={{ textAlign: "center", alignContent: "center" }}
                    >
                      {/* <IconButton onClick={this.handleDrawerClose}>
                      <ChevronLeftIcon />
                    </IconButton> */}
                      {/* <img src={imageLogo} style={{ height: "50px" }} /> */}
                      <Typography
                        variant="title"
                        color="inherit"
                        noWrap
                        className={classes.title}
                        style={{ fontWeight: "lighter" }}
                      />
                    </div>
                    <Divider />
                    <List>
                      <MainListItems redirectTo={this.redirectTo} />
                    </List>
                    {/* <Divider />
                  <List>
                    <MainListItems redirect={path => this.redirect} />
                  </List> */}
                  </div>
                </div>
              </Drawer>

              <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Router>
                  <div>
                    {this.checkRedirect()}

                    <Switch>
                      <Route exact path="/dashboard" component={Dashboard} />
                      <Route exact path="/menu" component={Menu} />
                      <Route
                        exact
                        path="/admin/mastermenu"
                        component={MasterMenu}
                      />
                    </Switch>
                  </div>
                </Router>
                {/* <Typography variant="display1" gutterBottom>
                Orders
              </Typography>
              <Typography component="div" className={classes.chartContainer}>
                <SimpleLineChart />
              </Typography>
              <Typography variant="display1" gutterBottom>
                Products
              </Typography>
              <div className={classes.tableContainer}>
                <SimpleTable />
              </div> */}
              </main>
            </div>
          </React.Fragment>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
