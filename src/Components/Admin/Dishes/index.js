import React from "react";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Typography, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Pagination from "../../LayoutComponents/Pagination";

import APIs from "../../../APIs/APIs";
import Loader from "../../LayoutComponents/Loader";

import DishDetail from "./DishDetail";

class Dishes extends React.Component {
  state = {
    dishes: [],
    showDish: false,
    showWait: true,
    currentPage: 1,
    _id: 0
  };

  componentDidMount() {
    this.bindDishes();
  }

  bindDishes = () => {
    this.setState({ showWait: true });
    APIs.getDishes(this.state.currentPage, 20).then(res => {
      console.log(res.data);
      this.setState({ dishes: res.data, showWait: false });
    });
  };

  nextPage = () => {
    this.setState(
      { currentPage: this.state.currentPage + 1 /*RequestsList:[]*/ },
      () => {
        this.bindDishes();
      }
    );
  };

  prevPage = () => {
    let currentPage = this.state.currentPage;
    if (currentPage === 1) return;

    this.setState({ currentPage: currentPage - 1 /*RequestsList:[]*/ }, () => {
      this.bindDishes();
    });
  };

  handleShowDish = _id => {
    this.setState({ showDish: true, _id });
  };

  handleHideDish = () => {
    this.setState({ showDish: false });
  };

  render() {
    const { dishes, showWait } = this.state;
    return (
      <div style={{ padding: "0" }}>
        {showWait ? <Loader /> : <span>{}</span>}

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
              <Button onClick={() => this.handleShowDish("0")}>
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
              spacing={8}
            >
              <Button variant="outlined" size="small">
                Search
                <Icon style={{ marginLeft: "10px" }}>search_circle</Icon>
              </Button>
              &nbsp;&nbsp;
              <Pagination
                nextPage={this.nextPage}
                prevPage={this.prevPage}
                currentPage={this.state.currentPage}
                style={{ top: "5px" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Divider />
        <Grid container spacing={0}>
          <Grid item xs={12}>
            {/* <Paper> */}
            <List>
              {dishes.map(dish => {
                return (
                  <ListItem
                    key={dish._id}
                    divider={true}
                    button={true}
                    onClick={() => this.handleShowDish(dish._id)}
                  >
                    {dish.name}
                    <br />
                    {dish.description}
                  </ListItem>
                );
              })}
            </List>
            {/* </Paper> */}
          </Grid>
        </Grid>

        <Dialog
          open={this.state.showDish}
          onClose={this.handleHideDish}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <DishDetail
              _id={this.state._id}
              handleHideDish={this.handleHideDish}
            />
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={this.handleHideDish} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleHideDish} color="primary">
              Update
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
    );
  }
}

export default Dishes;
