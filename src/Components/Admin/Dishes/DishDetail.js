import React, { Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Loader from "../../LayoutComponents/Loader";
import validateInput from "./DishDetailValidator";
import APIs from "../../../APIs/APIs";

class DishDetail extends React.Component {
  state = {
    imported: false,
    expense: false,
    _id: this.props._id,
    division: "",
    name: "",
    description: "",
    region: "",
    vnved: "",
    ingredients: "",
    meal: "",
    spice: "",
    flavour: "",
    hotCold: "",
    texture: "",
    color: "",
    errors: {},
    showWait: true
  };

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    this.isValid();
  };

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({
        errors: {}
      });
      this.props.handleHideDish();
    } else {
      //   const errors = { invalidData: "Invalid data..." };
      //   this.setState({
      //     errors: errors
      //   });
    }
  };

  componentDidMount() {
    this.bind();
  }

  bind = () => {
    if (this.props._id === "0") {
      this.setState({ showWait: false });
      return;
    }

    this.setState({ showWait: true });
    APIs.getDishById(this.state._id).then(res => {
      console.log(res.data);
      const {
        imported,
        expense,
        _id,
        division,
        name,
        description,
        region,
        vnved,
        ingredients,
        meal,
        spice,
        flavour,
        hotCold,
        texture,
        color
      } = res.data;
      this.setState({
        imported,
        expense,
        _id,
        division,
        name,
        description,
        region,
        vnved,
        ingredients,
        meal,
        spice,
        flavour,
        hotCold,
        texture,
        color,
        showWait: false
      });
    });
  };

  render() {
    const {
      imported,
      expense,
      _id,
      division,
      name,
      description,
      region,
      vnved,
      ingredients,
      meal,
      spice,
      flavour,
      hotCold,
      texture,
      color,
      errors,
      showWait
    } = this.state;

    return (
      <Fragment>
        {showWait ? <Loader /> : <span>{}</span>}

        <TextField
          id="_id"
          label="Id"
          value={_id}
          error={errors._id != null}
          onChange={this.onChange}
          style={{ width: "100%" }}
        />

        <TextField
          id="division"
          label="Division"
          value={division}
          error={errors.division != null}
          onChange={this.onChange}
          style={{ width: "100%" }}
        />

        <TextField
          id="name"
          label="Name"
          value={name}
          error={errors.name != null}
          onChange={this.onChange}
          style={{ width: "100%" }}
        />

        <TextField
          id="description"
          label="Description"
          value={description}
          error={errors.description != null}
          onChange={this.onChange}
          type="description"
          style={{ width: "100%" }}
        />

        <Button
          type="submit"
          //   disabled={isLoading}
          onClick={this.onSubmit}
          style={{
            width: "100%",
            height: "30px",
            backgroundColor: "#B60C00",
            color: "white"
          }}
        >
          Submit
        </Button>

        <div style={{ textAlign: "center", paddingTop: "5px", color: "red" }}>
          <span>{this.state.errors.invalidData}</span>
        </div>
      </Fragment>
    );
  }
}

export default DishDetail;
