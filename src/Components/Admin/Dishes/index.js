import React, { Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { Typography, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Pagination from "../../LayoutComponents/Pagination";
import APIs from "../../../APIs/APIs";
import Loader from "../../LayoutComponents/Loader";
import { DialogActions } from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import DishDetail from "./DishDetail";
import DishDelete from "./DishDelete";

class Dishes extends React.Component {
  state = {
    dishes: [],
    showDialog: false,
    dialogContent: "",
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

  showDialog = (_id, dialogContent) => {
    this.setState({ showDialog: true, _id, dialogContent });
  };

  hideDialog = () => {
    this.setState({ showDialog: false });
  };

  //After updating db document from popup window
  //Update the list item document in the list page
  updateDishListItem = dishObj => {
    let dishes = this.state.dishes;
    let index = -1;
    dishes.map((dish, idx) => {
      if (dish._id === this.state._id) {
        index = idx;
      }
    });
    if (index === -1) dishes.splice(0, 0, dishObj);
    else dishes.splice(index, 1, dishObj);
    this.setState({ dishes });
  };

  deleteDishListItem = _id => {
    let dishes = this.state.dishes;
    let index = dishes.findIndex(i => i._id === _id);
    if (index !== -1) dishes.splice(index, 1);
    this.setState({ dishes });
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
              <Button onClick={() => this.showDialog("0", "DishDetail")}>
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
                  <Fragment>
                    <ListItem key={dish._id} divider={true} /*button={true}*/>
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            <td>{dish.name}</td>
                            <td
                              style={{
                                alignContent: "right",
                                textAlign: "right"
                              }}
                            >
                              <i
                                class="fa fa-pencil-square-o"
                                aria-hidden="true"
                                onClick={() =>
                                  this.showDialog(dish._id, "DishDetail")
                                }
                                style={{ cursor: "pointer" }}
                              />
                              &nbsp;&nbsp;&nbsp;
                              <i
                                class="fa fa-times"
                                aria-hidden="true"
                                onClick={() =>
                                  this.showDialog(dish._id, "DishDelete")
                                }
                                style={{ cursor: "pointer" }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="2">{dish.description}</td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                    </ListItem>
                  </Fragment>
                );
              })}
            </List>
            {/* </Paper> */}
          </Grid>
        </Grid>

        <Dialog
          open={this.state.showDialog}
          onClose={this.hideDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            {this.state.dialogContent === "DishDetail" ? (
              <DishDetail
                _id={this.state._id}
                hideDishDetail={this.hideDialog}
                updateDishListItem={this.updateDishListItem}
              />
            ) : (
              <DishDelete
                _id={this.state._id}
                hideDialog={this.hideDialog}
                deleteDishListItem={this.deleteDishListItem}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default Dishes;
