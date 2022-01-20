import React, { useState } from 'react';
import { Modal } from '../modal/Modal';
function DropdownMenu() {
    const[showModal,setShowModal]=useState(false)

    const openModal=()=>{
      setShowModal(prev=>!prev)
    }

  return(   
      <>
          <div onClick={openModal} href="" style={{cursor:"pointer"}}className="navbarStorePopup">
                <img src="/nahoor home page/store page/icons/Icon/24×24/Color/Interface/Menu Burger Horizontal.svg" />
                دسته بندی
              </div>
  <div  className="dropdown-content">
  <div id="myDropdown" className="dropdown-content-item">
    <p>صنایع غذایی</p>
    <a href="#home">لبنیات</a>
    <a href="#about">ماکارونی</a>
    <a href="#contact">سس های خوراکی</a>
    <a href="#contact">رب گوجه فرنگی</a>
  </div>
  <div class="vl"></div>
  <div id="myDropdown" className="dropdown-content-item">
    <p>صنایع غذایی</p>
    <a href="#home">لبنیات</a>
    <a href="#about">ماکارونی</a>
    <a href="#contact">سس های خوراکی</a>
    <a href="#contact">رب گوجه فرنگی</a>
  </div>
  <div class="vl"></div>
  <div id="myDropdown" className="dropdown-content-item">
    <p>صنایع غذایی</p>
    <a href="#home">لبنیات</a>
    <a href="#about">ماکارونی</a>
    <a href="#contact">سس های خوراکی</a>
    <a href="#contact">رب گوجه فرنگی</a>
  </div>
  <div class="vl"></div>
  <div id="myDropdown" className="dropdown-content-item1">
    <p>صنایع غذایی</p>
    <a href="#home">لبنیات</a>
    <a href="#about">ماکارونی</a>
    <a href="#contact">سس های خوراکی</a>
    <a href="#contact">رب گوجه فرنگی</a>
  </div>
  </div>
  <Modal showModal={showModal} setShowModal={setShowModal}/>
</>
) }

export default DropdownMenu;
