import React from 'react'
import "./CartOfFeachers.css"
const CartOfFeachers=(props)=> {
    return (
      <div className="CartOfFeachers">
        <img className="icons" src="nahoor home page/pic3.png" width="100%" height="80%"/>
        <h2 className="cartTitle">{props.title}</h2>
        <p className="cartDescription">{props.Description}</p>
      </div>
    )
}
export default CartOfFeachers
