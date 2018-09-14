import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";

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
                variant = "headline";
                spaces = <span />;
                break;
              case 2:
                variant = "title";
                spaces = (
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                );
                break;
              case 3:
                variant = "subheading";
                spaces = (
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                );
                break;
              case 4:
                variant = "body1";
                spaces = (
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                );

                break;
              default:
                variant = "body2";
            }
            return (
              <Fragment>
                {item.selected ? (
                  <Typography
                    variant={variant}
                    key={item.key}
                    onClick={() => this.props.removeMenuItem(item.key)}
                  >
                    {spaces}
                    {item.value}
                  </Typography>
                ) : (
                  ""
                )}
                {this.renderSelected(item.key)}
              </Fragment>
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
