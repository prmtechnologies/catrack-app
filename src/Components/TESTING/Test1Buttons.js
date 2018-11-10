import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export const Test1Buttons = props => {
  if (props.type === "file") {
    return <span>Dish buttons here...</span>;
  } else {
    return (
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Grid item>
          <Button onClick={() => props.handleOpen("folder")}>
            <i className="fa fa-folder" style={{ color: "orange" }} />
            &nbsp;Add&nbsp;
          </Button>
          <Button onClick={() => props.handleOpen("file")}>
            <i className="fa fa-file" style={{ color: "red" }} />
            &nbsp;Add&nbsp;
          </Button>
        </Grid>
      </Grid>
    );
  }
};
