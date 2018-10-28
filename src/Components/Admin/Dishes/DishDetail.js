import React, { Fragment } from "react";
import PropTypes, { string } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

import Loader from "../../LayoutComponents/Loader";
import validateInput from "./DishDetailValidator";
import APIs from "../../../APIs/APIs";

const vnveds = ["V", "NV", "E", "D"];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },

  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class DishDetail extends React.Component {
  state = {
    imported: false,
    expense: false,
    _id: this.props._id,
    division: "",
    name: "",
    description: "",
    region: "",
    vnved: [],
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

  onTextChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSelectChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onCheckChange = event => {
    this.setState({
      [event.target.id]: event.target.checked
    });
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

      let dishObj = { ...this.state };
      const _id = dishObj._id;
      delete dishObj["_id"];
      delete dishObj["errors"];
      delete dishObj["showWait"];
      dishObj.vnved = dishObj.vnved.toString();

      console.log("DISH OBJECT PASSED FROM DISH DETAIL");
      console.log(dishObj);

      if (_id == 0) {
        APIs.postDish(dishObj).then(res =>
          this.props.updateDishListItem(res.data)
        );
      } else {
        APIs.putDish(_id, dishObj);
        this.props.updateDishListItem({ ...dishObj, _id });
      }

      this.props.hideDishDetail();
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
    APIs.getDish(this.state._id).then(res => {
      res.data.vnved = res.data.vnved.split(",");
      console.log(res.data.vnved);

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
    const { classes } = this.props;
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

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={24}
        >
          <Grid item xs={4}>
            <TextField
              id="division"
              label="Division"
              value={division}
              error={errors.division != null}
              onChange={this.onTextChange}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="name"
              label="Name"
              value={name}
              error={errors.name != null}
              onChange={this.onTextChange}
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="description"
              label="Description"
              value={description}
              error={errors.description != null}
              onChange={this.onTextChange}
              multiline={true}
              rows={1}
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="region"
              label="Region"
              value={region}
              error={errors.region != null}
              onChange={this.onTextChange}
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="meal"
              label="Meal"
              value={meal}
              error={errors.meal != null}
              onChange={this.onTextChange}
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="ingredients"
              label="Ingredients"
              value={ingredients}
              error={errors.ingredients != null}
              onChange={this.onTextChange}
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="spice"
              label="Spice"
              value={spice}
              error={errors.spice != null}
              onChange={this.onTextChange}
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="flavour"
              label="Flavour"
              value={flavour}
              error={errors.flavour != null}
              onChange={this.onTextChange}
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="texture"
              label="Texture"
              value={texture}
              error={errors.texture != null}
              onChange={this.onTextChange}
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id="color"
              label="Color"
              value={color}
              error={errors.color != null}
              onChange={this.onTextChange}
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={4}>
            <FormControl className={classes.formControl}>
              <InputLabel>Hot/Cold</InputLabel>
              <Select
                value={hotCold}
                onChange={this.onSelectChange}
                inputProps={{
                  name: "hotCold",
                  id: "hotCold"
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Hot"}>Hot</MenuItem>
                <MenuItem value={"Cold"}>Cold</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="select-multiple-checkbox">VNVED</InputLabel>
              <Select
                name="vnved"
                multiple
                value={vnved}
                onChange={this.onSelectChange}
                input={<Input id="vnved" />}
                renderValue={selected => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {vnveds.map(vnved => (
                  <MenuItem key={vnved} value={vnved}>
                    <Checkbox checked={this.state.vnved.indexOf(vnved) > -1} />
                    <ListItemText primary={vnved} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  id="imported"
                  checked={imported}
                  onChange={this.onCheckChange}
                />
              }
              label="Imported"
            />
          </Grid>

          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  id="expense"
                  checked={expense}
                  onChange={this.onCheckChange}
                />
              }
              label="Expense"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
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
          </Grid>
        </Grid>

        <div style={{ textAlign: "center", paddingTop: "5px", color: "red" }}>
          <span>{this.state.errors.invalidData}</span>
        </div>
      </Fragment>
    );
  }
}

DishDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DishDetail);
