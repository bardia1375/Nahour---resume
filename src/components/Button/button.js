import React from 'react'
import "./button.css"
function ButtonComponent(props) {
    return (
        <div className="ButtonComponent">
            <button>{props.title}</button>   
        </div>
    )
}

export default ButtonComponent
