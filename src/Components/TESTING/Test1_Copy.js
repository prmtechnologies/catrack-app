import React, { Component, Fragment } from "react";
import {
  SortableContainer,
  SortableElement,
  arrayMove,
  SortableHandle
} from "react-sortable-hoc";

import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import "./Test1.css";

const items = [
  { type: "Title", text1: "APPAMS (RICE AND COCONUT HOPPERS)", text2: "" },
  {
    type: "Description",
    text1:
      "A South- Indian speciality, Appams are essentially a fermented rice and coconut lace pancake (also referred to as hoppers) with a thicker spongey center. They are delicately sweet, light ‘n crispy along the edges and fluffy ‘n soft in the center. Perfect for mopping up traditional Kerela stews.",
    text2: ""
  },
  { type: "Dish", text1: "CHILI APPAMS", text2: "" },
  { type: "Dish", text1: "OATMEAL APPAMS", text2: "" },
  { type: "Dish", text1: "SOYA APPAMS", text2: "" },
  { type: "Description", text1: "Served with:", text2: "" },
  {
    type: "Dish",
    text1: "VEGETABLE STEW",
    text2: "Desi ghee, gunpowder & assorted Podi"
  }
];

const FormattedComponent = ({ item }) => {
  if (item.type === "Title") {
    return (
      <Fragment>
        <span style={{ fontSize: "20px" }}>{item.text1}</span>
      </Fragment>
    );
  } else if (item.type === "Description") {
    return (
      <Fragment>
        <span style={{ fontSize: "13px", fontStyle: "italic" }}>
          {item.text1}
        </span>
      </Fragment>
    );
  } else if (item.type === "Dish") {
    return (
      <Fragment>
        <Grid container>
          <Grid item xs={12}>
            <span style={{ fontSize: "15px" }}>{item.text1}</span>
          </Grid>
          <Grid item xs={12}>
            <span style={{ fontSize: "13px", fontStyle: "italic" }}>
              {item.text2}
            </span>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
};

const DragHandle = SortableHandle(() => (
  <i
    className="fa fa-bars"
    aria-hidden="true"
    style={{ cursor: "pointer", color: "silver", paddingRight: "13px" }}
  />
)); // This can be any component you want

const SortableItem = SortableElement(({ item }) => (
  <Fragment>
    <ListItem className="SortableItem">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={8}
      >
        <Grid item xs={1}>
          <DragHandle />
        </Grid>
        <Grid item xs={11}>
          <FormattedComponent item={item} />
        </Grid>
      </Grid>
    </ListItem>
    <Divider />
  </Fragment>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <List className={SortableList}>
      {items.map((item, index) => (
        <SortableItem key={`item-${index}`} index={index} item={item} />
      ))}
    </List>
  );
});

export default class Test2 extends Component {
  state = {
    items: items,
    itemType: "",
    itemIndex: 0
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
  };

  render() {
    return (
      <SortableList
        items={this.state.items}
        onSortEnd={this.onSortEnd}
        helperClass="SortableHelper"
      />
    );
  }
}
