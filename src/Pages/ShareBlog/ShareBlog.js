import React from "react";
import LikeShareBlog from "./likeShareBlog/likeShareBlog";
import ShareBlogmain from "./main/ShareBlogmain";
import ShareBlogForm from "./shareBlogForm/shareBlogForm";
import ShareBlogHeader from "./ShareBlogHeader/ShareBlogHeader";
import { SubMain } from "./subMain/subMain";
import "./ShareBlog.css";
import ScrollElement from "./scrollElement/scrollElement";
import NavbarSmall from "../../components/Navbar/Navbar";

function ShareBlog() {
  return (
    <div className="shareBlog-container">
      <div className="shareBlog-container-icons">
      <div className="shareBlog-container-icons" width="100%"><img src="./nahoor home page/Share Blogs page/Icons/Outline/Communication/Comment.svg" width="100%"/></div>
      <div className="shareBlog-container-icons" width="100%"><img src="./nahoor home page/Share Blogs page/Icons/Outline/Communication/like.svg" width="100%"/></div>
      <div className="shareBlog-container-icons" width="100%"><img src="./nahoor home page/Share Blogs page/Icons/Outline/Communication/save plus.svg" width="100%"/></div>
      <div className="shareBlog-container-icons" width="100%"><img src="./nahoor home page/Share Blogs page/Icons/Outline/Status/eye.svg" /></div>

      </div>
    
      {/* <div style={{ padding: "0 18vw" }}>
       
        <ScrollElement style={{ position: "sticky" }}/>
      </div> */}
      <div>
      <div className="ShareBlog-main" style={{ padding: "0 32vw" }}>
        <ShareBlogHeader />
      </div>
     <div className="ShareBlog-main" style={{ paddingRight: "32vw",paddingLeft: "26vw" }}> <ShareBlogmain /></div>
      <div className="ShareBlog-main" style={{ padding: "0 32vw" }}>
        <LikeShareBlog />
        <ShareBlogForm />
      </div></div>
    </div>
  );
}

export default ShareBlog;
