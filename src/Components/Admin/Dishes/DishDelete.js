import React, { Fragment } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import APIs from "../../../APIs/APIs";

class DishDelete extends React.Component {
  state = {
    _id: this.props._id
  };

  onSubmit = e => {
    const _id = this.props._id;
    e.preventDefault();
    APIs.deleteDish(_id);
    this.props.deleteDishListItem(_id);
    this.props.hideDialog();
  };

  onCancel = e => {
    this.props.hideDialog();
  };

  render() {
    return (
      <Dialog
        open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete dish item"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure, you want to delete the dish item from master data !!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.onCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.onSubmit} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default DishDelete;
