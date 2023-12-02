import React, { Component } from 'react'
import {connect} from 'react-redux'
import { DELETE } from './redux/constant';
class Cart_Shoe extends Component {
  render() {
let{list}=this.props;
// console.log(this.props)
    return (
      <div className='col-6'>

        <table className="table">
          <thead>
            <tr>
              <th >Id</th>
              <th >Name</th>
              <th>Price</th>
              <th>Img</th>
              <th>Quality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item)=>{
            return (
              <tr>
                <td >{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <img width={70} src={item.image} alt=''></img>
                </td>
                <td><strong>{item.soLuong}</strong></td>
                <td>
                  <button onClick={()=>{this.props.handleDelete(item.id)}} className='btn btn-danger'> Delete</button>
                </td>

              </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    )
  }
}

// lấy về
let mapStateToProps = (state) => {
  return {
    list: state.cart,
  };
};
//đẩy lên
let mapDispatchToProps = (dispatch) => {
  return {
    handleDelete:(idShoe)=>{
  let action={
  type:DELETE,
  payload:idShoe,
  }
  dispatch(action);
  }
  };
};



export default connect(mapStateToProps,mapDispatchToProps)(Cart_Shoe);
