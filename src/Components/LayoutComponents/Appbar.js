import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import imageLogo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    marginLeft: 0,
    marginRight: 8
  },
  //   menuButtonHidden: {
  //     display: "none"
  //   },
  title: {
    flexGrow: 1
  }
  //   chartContainer: {
  //     marginLeft: -22
  //   },
  //   tableContainer: {
  //     height: 320
  //   },
  //   icon: {
  //     margin: theme.spacing.unit,
  //     fontSize: 25
  //   }
});

class Appbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          style={{
            background: "linear-gradient(to right,white 40%,#6e6e6e 100%)"
            // backgroundImage: "url(" + bgAppbar + ")",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "right",
            // backgroundBlendMode: "overlay"
          }}
        >
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => this.props.toggleSidemenu(!this.props.sidemenu)}
              style={{ zIndex: "999" }}
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
            <img
              src={imageLogo}
              style={{ height: "50px", paddingRight: "10px" }}
              alt="logo"
            />

            <Typography
              variant="headline"
              color="inherit"
              noWrap
              className={classes.title}
              style={{
                color: "white",
                fontWeight: "light",
                textShadow: "2px 2px gray"
              }}
            >
              The Kitchen Art Company
            </Typography>

            <IconButton color="default">
              {/* <Badge
                badgeContent={4}
                color="default"
                style={{ color: "silver" }}
              >
                <Avatar
                  style={{
                    background: "linear-gradient(to left,gray 33%, black 100%)",
                    color: "#929292"
                  }}
                >
                  PS
                </Avatar>
              </Badge> */}
              <FontAwesomeIcon icon="ellipsis-v" size="xs" color="silver" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Appbar.propTypes = {
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
)(withStyles(styles)(Appbar));
