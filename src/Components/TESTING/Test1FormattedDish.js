import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";

export const Test1FormattedDish = ({ item }) => {
  if (item.type === "title") {
    return (
      <Fragment>
        <center>
          <span style={{ fontSize: "20px", paddingBottom: "25px" }}>
            {item.text1}
          </span>
        </center>
      </Fragment>
    );
  } else if (item.type === "desc") {
    return (
      <Fragment>
        <span
          style={{
            fontSize: "13px",
            fontStyle: "italic",
            paddingBottom: "20px"
          }}
        >
          {item.text1}
        </span>
      </Fragment>
    );
  } else if (item.type === "dish") {
    return (
      <Fragment>
        <Grid container>
          <Grid item xs={12}>
            <span style={{ fontSize: "15px", paddingBottom: "17px" }}>
              {item.text1}
            </span>
          </Grid>
          <Grid item xs={12}>
            <span
              style={{
                fontSize: "13px",
                fontStyle: "italic",
                paddingBottom: "20px"
              }}
            >
              {item.text2}
            </span>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
};
