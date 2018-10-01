import React, { Fragment } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import SidemenuItems from "./SidemenuItems";
import sidebarImage from "../../assets/img/cherryBackground.jpg";

const styles = theme => ({
  root: {
    display: "flex"
  },
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
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "8px 8px",
    ...theme.mixins.toolbar
  },

  icon: {
    margin: theme.spacing.unit,
    fontSize: 25
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 8
  },

  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

class Sidemenu extends React.Component {
  render() {
    const { classes } = this.props;

    const sideList = (
      <div
        style={{
          width: 250,
          height: "100%"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundImage: "url(" + sidebarImage + ")"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",

            backgroundColor: "black",
            opacity: ".75"
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
          <div className={classes.toolbarIcon}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => this.props.toggleSidemenu(!this.props.sidemenu)}
            >
              <Avatar>PS</Avatar>
            </IconButton>
          </div>
          <Divider />
          <List>
            <SidemenuItems redirectTo={this.redirectTo} />
          </List>
        </div>
      </div>
    );

    return (
      <div>
        <SwipeableDrawer
          open={this.props.sidemenu}
          onClose={() => this.props.toggleSidemenu(false)}
          onOpen={() => this.props.toggleSidemenu(true)}
        >
          <div
            tabIndex={0}
            role="button"
            style={{
              backgroundImage: "url(" + sidebarImage + ")",
              backgroundColor: "green"
            }}
            // onClick={() => this.props.toggleSidemenu(false)}
            // onKeyDown={() => this.props.toggleSidemenu(false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

Sidemenu.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    sidemenu: state.sidemenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSidemenu: openState =>
      dispatch({ type: "TOGGLE_SIDEMENU", openState: openState })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Sidemenu));
