import React, { Component } from 'react'

import Cart_Shoe from './Cart_Shoe'


import List_Shoe from './List_Shoe'

export default class Ex_Shoe_Redux extends Component {

render() {
    return (
      <div className='row'>
        <Cart_Shoe   ></Cart_Shoe>
        <List_Shoe ></List_Shoe>
      </div>
    )
  }
}


