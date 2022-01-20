import React from "react";
import "./Modal.css"
export const Modal=({ showModal,setShowModal}) =>{
    return(
        <>
        {showModal?(
            <div className="ModalBackground-container">
               
                    <div>سلام</div>
            
            </div>
        ):null}
        </>
        )
}