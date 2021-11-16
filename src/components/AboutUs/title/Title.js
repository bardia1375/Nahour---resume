import React from 'react'
import "./Title.css"
export const Title = (props) => {
    return (
        <div className="AboutUS-TitleContainer">
            <h2>{props.title}</h2>
        </div>
    )
}
