import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Typography from "@material-ui/core/Typography";

class MainListItems extends Component {
  render() {
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
          onClick={() => this.props.redirectTo("/Admin/MasterMenu")}
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
          </ListItemText>
        </ListItem>
      </div>
    );
  }
}
export default MainListItems;
