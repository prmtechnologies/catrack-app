import React, { Component, Fragment } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class Test1Dialog extends Component {
  state = {
    name: "",
    type: this.props.type
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <DialogTitle id="form-dialog-title">{this.state.type} name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter name of the new {this.state.type}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={this.state.type}
            type="text"
            fullWidth
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() =>
              this.props.addFolderFile(this.state.name, this.state.type)
            }
            color="primary"
          >
            Create
          </Button>
        </DialogActions>
      </Fragment>
    );
  }
}
