import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Typography, Divider } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import ClearIcon from "@material-ui/icons/Clear";
import Grid from "@material-ui/core/Grid";

class MenuListSelected extends Component {
  renderSelected = refKey => {
    // return (
    //   <div>
    //     {this.props.MenuItems.filter(item => item.refKey === refKey).map(
    //       item => (
    //         <Fragment>
    //           {item.selected ? (
    //             <p
    //               key={item.key}
    //               onClick={() => this.props.removeMenuItem(item.key)}
    //             >
    //               {item.value}({item.key})
    //             </p>
    //           ) : (
    //             ""
    //           )}
    //           {this.renderSelected(item.key)}
    //         </Fragment>
    //       )
    //     )}
    //   </div>
    // );
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
                    {spaces}
                    <Grid container direction="row">
                      <Grid item xs={12}>
                        <ClearIcon
                          style={{
                            float: "right",
                            height: "25px",
                            color: "silver",
                            cursor: "pointer"
                          }}
                          onClick={() => this.props.removeMenuItem(item.key)}
                        />

                        <Typography variant={variant} key={item.key}>
                          {item.level === 3 && item.selected ? (
                            <center>{item.value}</center>
                          ) : (
                            item.value
                          )}
                        </Typography>

                        {item.level === 4 && item.selected ? (
                          <Typography
                            variant="body1"
                            style={{ color: "silver", fontStyle: "italic" }}
                          >
                            {item.desc}
                          </Typography>
                        ) : (
                          ""
                        )}
                      </Grid>
                    </Grid>
                    {/* <Divider /> */}
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
