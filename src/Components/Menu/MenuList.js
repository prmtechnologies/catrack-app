import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Button
} from "@material-ui/core";
import Fastfood from "@material-ui/icons/Fastfood";
import Checkbox from "@material-ui/core/Checkbox";

class MenuList extends Component {
  state = {
    // menuItems: this.props.MenuItems,
    level: 1,
    refKey: 0,
    menuHeader: "",
    breadCrumbText: "Menu",
    breadCrumbValue: "0"
  };

  renderBreadCrumb = () => {
    let breadCrumbText = "Menu";
    let breadCrumbValue = "0";

    let breadCrumbTextArr = this.state.breadCrumbText.split("/");
    let breadCrumbValueArr = this.state.breadCrumbValue.split("/");

    return (
      <div>
        {breadCrumbTextArr.map((o, i) => (
          <Button
            key={i}
            onClick={() => {
              for (let x = 1; x <= i; x++) {
                breadCrumbText += "/" + breadCrumbTextArr[x];
                breadCrumbValue += "/" + breadCrumbValueArr[x];
              }
              this.setState({
                refKey: breadCrumbValueArr[i],
                breadCrumbText,
                breadCrumbValue
              });
            }}
          >
            {o}
          </Button>
        ))}
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        <Typography variant="subheading">{this.renderBreadCrumb()}</Typography>
        <List>
          {this.props.MenuItems.filter(
            item => item.refKey == this.state.refKey
          ).map((item, id) => (
            <Fragment>
              <ListItem
                key={id}
                button
                onClick={() =>
                  item.level === 4
                    ? ""
                    : this.setState({
                        menuHeader: item.value,
                        refKey: item.key,
                        breadCrumbText:
                          this.state.breadCrumbText + "/" + item.value,
                        breadCrumbValue:
                          this.state.breadCrumbValue + "/" + item.key
                      })
                }
              >
                <ListItemIcon>
                  <Fastfood />
                </ListItemIcon>
                <ListItemText primary={item.value} />
                <ListItemSecondaryAction>
                  {item.level !== 1 ? (
                    <Checkbox
                      checked={item.selected}
                      onChange={() => this.props.handleToggle(item.key)}
                    />
                  ) : (
                    ""
                  )}
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    MenuItems: state.MenuItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleToggle: key => dispatch({ type: "TOGGLE_MENUITEM", menuKey: key })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuList);
