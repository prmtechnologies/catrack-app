import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

// import bgImage from "./assets/img/edgar-castrejon-459822-unsplash.jpg";
// import bgImage from "./assets/img/cherry.jpg";
// import bgImage from "./assets/img/oranges.jpg";

import Appbar from "./Components/LayoutComponents/Appbar";
import Sidemenu from "./Components/LayoutComponents/Sidemenu";

import Dashboard from "./Components/Dashboard";
import Menu from "./Components/Menu";
import MasterMenu from "./Components/Admin/MasterMenu";
import Dishes from "./Components/Admin/Dishes";

import SortableComponent from "./Components/Examples/SortableComponent";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFile,
  faFilePdf,
  faThumbtack,
  faEllipsisV,
  faAlignLeft
} from "@fortawesome/free-solid-svg-icons";
library.add(faFile);
library.add(faFilePdf);
library.add(faThumbtack);
library.add(faEllipsisV);
library.add(faAlignLeft);

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
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  appBarSpacer: theme.mixins.toolbar,
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

class Appy extends Component {
  checkRedirect = () => {
    if (this.props.redirectPath !== "") {
      return <Redirect to={this.props.redirectPath} />;
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div>
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "100%"
            }}
          >
            <div>
              <CssBaseline />

              <Appbar />
              <Sidemenu />
              <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Router>
                  <Fragment>
                    {this.checkRedirect()}

                    <Switch>
                      <Route
                        path="/admin/mastermenu/:menuname1?/:menuname2?"
                        render={({ match }) =>
                          this.props.loggedIn ? (
                            <MasterMenu
                              menuname={match.params.menuname1}
                              menuname2={match.params.menuname2}
                            />
                          ) : (
                            <Redirect to="/" />
                          )
                        }
                      />
                      <Route
                        path="/menu/:menu1?"
                        render={props =>
                          this.props.loggedIn ? (
                            <Menu menu1={props.match.params.menu1} {...props} />
                          ) : (
                            <Redirect to="/" />
                          )
                        }
                      />
                      <Route
                        path="/SortableComponent"
                        component={SortableComponent}
                      />
                      <Route path="/dashboard" component={Dashboard} />
                      <Route path="/admin/dishes" component={Dishes} />
                      <Route path="/" component={Dashboard} />
                    </Switch>
                  </Fragment>
                </Router>
              </main>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Appy.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    redirectPath: state.redirectPath,
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Appy));
