import React from 'react'
import "./titleStore.css"
function TitleStore(props) {
    return (
        <div className="titleStore-container" >
            {props.title}
        </div>
    )
}

export default TitleStore