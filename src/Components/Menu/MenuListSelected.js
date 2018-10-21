import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";

class MenuListSelected extends Component {
  renderSelected = refKey => {
    return (
      <div>
        {this.props.MenuItems.filter(item => item.refKey === refKey).map(
          item => {
            let variant = "";
            let spaces;
            switch (item.level) {
              case 1:
                variant = "title";
                spaces = (
                  <div>
                    {/* <br />
                    <br />
                    <br /> */}
                  </div>
                );
                break;
              case 2:
                variant = "title";
                spaces = (
                  <div>
                    {/* <br />
                    <br />
                    <br /> */}
                  </div>
                );
                break;
              case 3:
                variant = "headline";
                spaces = (
                  <div>
                    {/* <br />
                    <br />
                    <Divider />
                    <br />
                    <br /> */}
                  </div>
                );
                break;
              case 4:
                variant = "subheading";
                spaces = <div>{/* <br />
                    <br /> */}</div>;
                break;
              default:
                variant = "body1";
            }
            return (
              <div style={{ padding: "5px" }}>
                {item.selected ? (
                  <div>
                    {/* {spaces} */}
                    <Grid container direction="row">
                      <Grid item xs={1}>
                        <ClearIcon
                          style={{
                            // float: "left",
                            height: "25px",
                            color: "silver",
                            cursor: "pointer"
                          }}
                          onClick={() => this.props.removeMenuItem(item.key)}
                        />
                      </Grid>
                      <Grid item xs={11}>
                        <Typography
                          variant={variant}
                          key={item.key}
                          style={{ cursor: "pointer" }}
                        >
                          {item.level === 3 && item.selected ? (
                            <center>{item.value}</center>
                          ) : (
                            item.value
                          )}
                        </Typography>

                        {item.level === 4 && item.selected ? (
                          <Fragment>
                            <Input
                              defaultValue={item.desc}
                              // className={classes.input}
                              // inputProps={{
                              //   "aria-label": "ItemDescription"
                              // }}
                              style={{
                                width: "100%",
                                fontStyle: "italic",
                                fontSize: "15px",
                                color: "gray"
                              }}
                            />
                            <br />
                            <br />
                            <br />
                          </Fragment>
                        ) : (
                          ""
                        )}
                      </Grid>
                    </Grid>
                  </div>
                ) : (
                  ""
                )}
                {this.renderSelected(item.key)}
              </div>
            );
          }
        )}
      </div>
    );
  };

  render() {
    return this.renderSelected(0);
  }
}

const mapStateToProps = state => {
  return {
    MenuItems: state.MenuItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeMenuItem: key => dispatch({ type: "TOGGLE_MENUITEM", menuKey: key })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuListSelected);
