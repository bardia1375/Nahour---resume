import React from "react";
import LikeShareBlog from "./likeShareBlog/likeShareBlog";
import ShareBlogmain from "./main/ShareBlogmain";
import ShareBlogForm from "./shareBlogForm/shareBlogForm";
import ShareBlogHeader from "./ShareBlogHeader/ShareBlogHeader";
import { SubMain } from "./subMain/subMain";
import "./ShareBlog.css";
import ScrollElement from "./scrollElement/scrollElement";
import NavbarSmall from "../../components/Navbar/Navbar";
import Footer from "../Homepage/footer/footer";

function ShareBlog() {
  return (
    <>
      <NavbarSmall />
      <div className="shareBlog-container">
        <div className="shareBlog-container-icons">
          <div>
            <div className="shareBlog-container-icon" width="100%">
              <img
                src="/nahoor home page/Share Blogs page/Icons/Outline/Communication/Comment.svg"
                width="100%"
              />
            </div>
            <div className="shareBlog-container-icon" width="100%">
              <img
                src="/nahoor home page/Share Blogs page/Icons/Outline/Communication/like.svg"
                width="100%"
              />
            </div>
            <div className="shareBlog-container-icon" width="100%">
              <img
                src="/nahoor home page/Share Blogs page/Icons/Outline/Status/eye.svg"
                width="100%"
              />
            </div>
            <div className="shareBlog-container-icon" width="100%">
              <img src="/nahoor home page/Share Blogs page/Icons/Outline/Status/eye.svg" />
            </div>
          </div>
          <div className="shareBlog-line"></div>
        </div>

        {/* <div style={{ padding: "0 18vw" }}>
       
        <ScrollElement style={{ position: "sticky" }}/>
      </div> */}
        <div>
          <div className="ShareBlog-main" style={{ padding: "0 24vw" }}>
            <ShareBlogHeader />
          </div>
          <div
            className="ShareBlog-main1"
           
          >
            {" "}
            <ShareBlogmain />
          </div>
          <div className="ShareBlog-main" style={{ padding: "0 24vw" }}>
            <LikeShareBlog />
            <ShareBlogForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShareBlog;
