import React from "react";
import axios from "axios";

class Dishes extends React.Component {
  state = {
    dishes: []
  };
  componentDidMount() {
    axios.get("https://catrack-api.herokuapp.com/dishes").then(res => {
      console.log(res);
      this.setState({ dishes: res.data });
    });
  }

  render() {
    const { dishes } = this.state;
    return (
      <ul>
        {dishes.map(dish => {
          <li>dish.name</li>;
        })}
      </ul>
    );
  }
}

export default Dishes;
