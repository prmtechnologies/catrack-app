import React, { Fragment } from "react";
import { Component } from "react";
import uuidv1 from "uuid/v1";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Divider } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import Test1Dialog from "./Test1Dialog";
import { BreadCrump } from "./Test1Breadcrumb";
import { Test1Buttons } from "./Test1Buttons";
import { Test1FormattedDish } from "./Test1FormattedDish";

/**
 * headType: ["folder","file","item"]
 * itemType: ["title","desc","dish"]
 */
const menus = [
  { _id: "1", name: "Veg", type: "folder", parentId: "0" },
  { _id: "2", name: "Non Veg", type: "folder", parentId: "0" },
  { _id: "3", name: "Breakfast", type: "folder", parentId: "2" },
  { _id: "4", name: "Master sub file", type: "folder", parentId: "3" },
  { _id: "5", name: "Appams", type: "folder", parentId: "4" },
  {
    _id: "6",
    name: "Appams Non Veg",
    type: "file",
    parentId: "5",
    contents: [
      { text1: "APPAMS (RICE AND COCONUT HOPPERS)", text2: "", type: "title" },
      {
        text1:
          "A South- Indian speciality, Appams are essentially a fermented rice and coconut lace pancake (also referred to as hoppers) with a thicker spongey center. They are delicately sweet, light ‘n crispy along the edges and fluffy ‘n soft in the center. Perfect for mopping up traditional Kerela stews.",
        text2: "",
        type: "desc"
      },
      { text1: "Chili appams", text2: "", type: "dish" },
      { text1: "Egg appams", text2: "", type: "dish" },
      { text1: "Oatmeal appams", text2: "", type: "dish" },
      { text1: "Soya appams", text2: "", type: "dish" },
      { text1: "Served with:", text2: "", type: "desc" },
      {
        text1: "Chicken stew with vegetables & Vegetable stew",
        text2: "Desi ghee, gunpowder",
        type: "dish"
      }
    ]
  },
  { _id: "7", name: "Appams Veg", type: "file", parentId: "5", contents: [] }
];

export default class Test1 extends Component {
  state = {
    parentId: "0",
    menus: menus,
    open: false,
    type: "",
    name: ""
  };

  itemClick = (_id, type) => {
    console.log("TYPE: " + type);
    this.setState({ parentId: _id, type });
  };

  addFolderFile = (name, type) => {
    let newMenus = [...this.state.menus];
    const newObj = {
      _id: uuidv1(),
      name: name,
      type: type,
      parentId: this.state.parentId,
      contents: []
    };
    newMenus.push(newObj);
    this.setState({ menus: newMenus, open: false });
  };

  handleOpen = type => {
    this.setState({ open: true, type });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { parentId, menus, type } = this.state;

    return (
      <Fragment>
        {/* Header ________________________________________________________________________________*/}
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={9}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <BreadCrump
                menus={menus}
                _id={parentId}
                onClick={this.itemClick}
              />
            </Grid>
          </Grid>

          <Grid item xs={3}>
            <Test1Buttons handleOpen={this.handleOpen} type={type} />
          </Grid>
        </Grid>

        {/* Menu item______________________________________________________________________________*/}
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          {menus.filter(ele => ele.parentId === parentId).length > 0 ? (
            // Render File/folder options_________________________________
            menus.filter(ele => ele.parentId === parentId).map(item => (
              <Grid item xs={12}>
                <p key={item._id}>
                  {item.type === "folder" ? (
                    <i className="fa fa-folder" style={{ color: "orange" }} />
                  ) : (
                    <i className="fa fa-file" style={{ color: "red" }} />
                  )}
                  <span
                    style={{ paddingLeft: "15px", cursor: "pointer" }}
                    onClick={() => this.itemClick(item._id, item.type)}
                  >
                    {item.name}
                  </span>
                  <Divider />
                </p>
              </Grid>
            ))
          ) : (
            // Render dish details________________________________________
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >
              {/* Dish details editable __________________________________*/}
              <div
                style={{
                  maxWidth: "595px",
                  minHeight: "842px",
                  padding: "15px 10px"
                }}
              >
                <ul style={{ listStyleType: "none" }}>
                  {menus
                    .find(ele => ele._id === parentId)
                    .contents.map(dish => (
                      <li>
                        <Test1FormattedDish item={dish} />
                      </li>
                    ))}
                </ul>
              </div>
              {/* Dish details preview ___________________________________*/}
              <Paper
                style={{
                  maxWidth: "595px",
                  minHeight: "842px",
                  padding: "15px 10px"
                }}
              >
                <ul style={{ listStyleType: "none" }}>
                  {menus
                    .find(ele => ele._id === parentId)
                    .contents.map(dish => (
                      <li>
                        <Test1FormattedDish item={dish} />
                      </li>
                    ))}
                </ul>
              </Paper>
            </Grid>
          )}
        </Grid>

        {/* Dialog_________________________________________________________________________________*/}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <Test1Dialog
            type={this.state.type}
            handleClose={this.handleClose}
            addFolderFile={this.addFolderFile}
          />
        </Dialog>
      </Fragment>
    );
  }
}
