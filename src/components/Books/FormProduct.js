import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  TextField,
  DialogActions,
  withStyles,
  Checkbox
} from "@material-ui/core";
import { connect } from "react-redux";
import { closeForm, submitProduct } from "../../redux/actions/productActions";
// import PropTypes from "prop-types";

const styles = theme => ({
  ...theme.theme
});

export class FormProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
      name: "",
      image: "",
      price: 0,
      instock: 0,
      status: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.data.product.productId) {
      console.log(nextProps.data.product);
      const {
        product: { productId, name, image, price, instock, status }
      } = nextProps.data;
      this.setState({
        productId: productId,
        name: name,
        image: image,
        price: price,
        instock: instock,
        status: status
      });
    } else {
      this.onClear();
    }
  }

  handleChange = e => {
    var value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.type === "number"
        ? parseFloat(e.target.value)
        : e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  handleSubmit = () => {
    this.props.submitProduct(this.state);
  };

  onClear = () => {
    this.setState({
      productId: "",
      name: "",
      image: "",
      price: 0,
      instock: 0,
      status: false
    });
  };

  onCloseForm = () => {
    this.props.closeForm();
    this.onClear();
  };

  render() {
    const { name, image, price, instock, status } = this.state;
    console.log(this.state.status);

    const {
      data: { open }
    } = this.props;

    return (
      <>
        <Dialog
          open={open}
          onClose={this.onCloseForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add product</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={name}
              onChange={this.handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="image"
              name="image"
              label="Image"
              type="text"
              fullWidth
              value={image}
              onChange={this.handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="price"
              name="price"
              label="Price"
              type="number"
              fullWidth
              value={price}
              onChange={this.handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="instock"
              name="instock"
              label="Instock"
              type="number"
              fullWidth
              value={instock}
              onChange={this.handleChange}
            />
            <Checkbox
              checked={status}
              name="status"
              onChange={this.handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />{" "}
            show
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onCloseForm} color="secondary">
              Cancel
            </Button>
            <Button onClick={() => this.handleSubmit()} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

FormProduct.propTypes = {

}

const mapStateToProps = state => ({
  data: state.product
});

const mapActionsToProps = {
  closeForm,
  submitProduct
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(FormProduct));
