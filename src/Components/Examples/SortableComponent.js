import React, { Component } from "react";
import { render } from "react-dom";
// import { BarChartIcon } from "@material-ui/icons/BarChart";
import {
  SortableContainer,
  SortableElement,
  arrayMove,
  SortableHandle
} from "react-sortable-hoc";

const DragHandle = SortableHandle(() => (
  <span style={{ cursor: "pointer" }}>:: </span>
)); // This can be any component you want

const SortableItem = SortableElement(({ value }) => (
  <div>
    <div
      style={{
        padding: "20px",
        border: "solid 1px silver",
        backgroundColor: "white"
      }}
    >
      <DragHandle />
      {value}
    </div>
  </div>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <div style={{ listStyle: "none" }}>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

class SortableComponent extends Component {
  state = {
    items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"]
  };
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

export default SortableComponent;
