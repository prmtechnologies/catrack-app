import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import Typography from "@material-ui/core/Typography";

import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import StarBorder from "@material-ui/icons/StarBorder";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class SidemenuItems extends Component {
  state = {
    openAdmin: true
  };

  handleClick = () => {
    this.setState(state => ({ openAdmin: !state.openAdmin }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <ListItem button onClick={() => this.props.redirectTo("/Dashboard")}>
          <ListItemIcon>
            <DashboardIcon style={{ color: "silver" }} />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="button" style={{ color: "silver" }}>
              Dashboard
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem button onClick={() => this.props.redirectTo("/Menu")}>
          <ListItemIcon>
            <ShoppingCartIcon style={{ color: "silver" }} />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="button" style={{ color: "silver" }}>
              Menu
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem
          button
          onClick={() =>
            this.props.redirectTo("/Admin/MasterMenu/Master Menu1/Master Menu2")
          }
        >
          <ListItemIcon>
            <PeopleIcon style={{ color: "silver" }} />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="button" style={{ color: "silver" }}>
              Customers
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <BarChartIcon style={{ color: "silver" }} />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="button" style={{ color: "silver" }}>
              Reports
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <LayersIcon style={{ color: "silver" }} />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="button" style={{ color: "silver" }}>
              Integrations
            </Typography>
            <Divider style={{ color: "white" }} />
          </ListItemText>
        </ListItem>

        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon style={{ color: "silver" }} />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="button" style={{ color: "silver" }}>
              Admin
            </Typography>
          </ListItemText>
          {this.state.openAdmin ? (
            <ExpandLess style={{ color: "silver" }} />
          ) : (
            <ExpandMore style={{ color: "silver" }} />
          )}
        </ListItem>

        <Collapse in={this.state.openAdmin} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              onClick={() => this.props.redirectTo("/admin/dishes")}
              className={classes.nested}
            >
              <ListItemIcon>
                <StarBorder style={{ color: "silver" }} />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="button" style={{ color: "silver" }}>
                  Dish Master
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder style={{ color: "silver" }} />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="button" style={{ color: "silver" }}>
                  Set Menus
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Collapse>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    redirectTo: redirectPath =>
      dispatch({ type: "REDIRECT_TO", redirectPath: redirectPath })
  };
};

SidemenuItems.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(SidemenuItems));
