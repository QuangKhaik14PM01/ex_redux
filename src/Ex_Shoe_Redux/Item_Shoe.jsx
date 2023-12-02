import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD } from "./redux/constant";

class Item_Shoe extends Component {
  render() {
    return (
      <div className="col-4">
        <img className="w-100 " src={this.props.data.image} alt="" />
        <h4>{this.props.data.name}</h4>
        <button
          onClick={() => {
            this.props.handleAddToCard(this.props.data);
          }}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
    );
  }
}
//đẩy lên
let mapDispatchToProps = (dispatch) => {
  return {
  handleAddToCard:(shoe)=>{
  let action={
  type:ADD,
  payload:shoe,
  }
  dispatch(action);
  }
  };
};
export default connect(null,mapDispatchToProps)(Item_Shoe);
