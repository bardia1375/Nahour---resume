import React, { useEffect, useState } from "react";
import { Modal } from "../modal/Modal";
import axios from "axios";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [showModal, setShowModal] = useState(false);
  const [navBarItems, setNavBarItems] = useState();

  useEffect(() => {
    axios
      .get("http://nahoor.af:8080/nahoor/industry/")
      .then((response) => setNavBarItems(response.data));
  }, []);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={openModal}
        href=""
        style={{ cursor: "pointer" }}
        className="navbarStorePopup"
      >
        <img src="/nahoor home page/store page/icons/Icon/24×24/Color/Interface/Menu Burger Horizontal.svg" />
        دسته بندی
      </div>
      {showModal ? (
        <div className="dropdown-content" onClick={openModal}>
          {navBarItems.map((navBarItem) => {
            return (
              <>
                <div id="myDropdown" className="dropdown-content-item">
                  <p>{navBarItem.name}</p>
                  {navBarItem.category_set.map((item) => {
                    return (
                      <Link to={`listfactor/1`}>
                        <a href="#home" >{item.name}</a>
                      </Link>
                    );
                  })}
                </div>
                {/* <div class="vl"></div> */}
              </>
            );
          })}
        </div>
      ) : null}
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default DropdownMenu;
