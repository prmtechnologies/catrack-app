import React, { Component, Fragment } from "react";

import {
  SortableContainer,
  SortableElement,
  arrayMove,
  SortableHandle
} from "react-sortable-hoc";

const DragHandle = SortableHandle(() => (
  <span style={{ cursor: "pointer" }}>:: </span>
)); // This can be any component you want

const SortableItem = SortableElement(({ item }) => (
  <div>
    <div
      style={{
        padding: "20px",
        border: "solid 1px silver",
        backgroundColor: "white"
      }}
    >
      <DragHandle />
      {item.text1}
      <br />
      {item.text2}
    </div>
  </div>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <div style={{ listStyle: "none" }}>
      {items.map((item, index) => (
        <SortableItem key={`item-${index}`} index={index} item={item} />
      ))}
    </div>
  );
});

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

export default class SortableComponent extends Component {
  state = { items: items };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
  };

  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}
