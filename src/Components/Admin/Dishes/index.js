import React from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { orange } from "@material-ui/core/colors";
import { Typography, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class Dishes extends React.Component {
  state = {
    dishes: [],
    showDish: false
  };
  componentDidMount() {
    axios
      .get("https://catrack-api.herokuapp.com/dishes?pageNumber=1&pageSize=50")
      .then(res => {
        console.log(res);
        this.setState({ dishes: res.data });
      });
  }

  handleShowDish = () => {
    this.setState({ showDish: true });
  };

  handleHideDish = () => {
    this.setState({ showDish: false });
  };

  render() {
    const { dishes } = this.state;
    return (
      <div style={{ padding: "0" }}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={8}
        >
          <Grid item xs={12} md={2} sm={3}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={0}
            >
              <Typography variant="headline">Dish Master</Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} md={4} sm={3}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={0}
            >
              <Button>
                <Icon style={{ marginRight: "10px" }}>add_circle</Icon>
                Add dish
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              spacing={0}
            >
              <Button variant="outlined">
                Search
                <Icon style={{ marginLeft: "10px" }}>search_circle</Icon>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Divider />
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper>
              <List>
                {dishes.map(dish => {
                  return (
                    <ListItem
                      key={dish._id}
                      divider={true}
                      button={true}
                      onClick={this.handleShowDish}
                    >
                      {dish.name}
                      <br />
                      {dish.description}
                    </ListItem>
                  );
                })}
              </List>
            </Paper>
          </Grid>
        </Grid>

        <Dialog
          open={this.state.showDish}
          onClose={this.handleHideDish}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Update Dish</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Update existing dish details...
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleHideDish} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleHideDish} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Dishes;
