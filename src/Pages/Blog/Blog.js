import React from "react";
import NavbarSmall from "../../components/Navbar/Navbar";
import BlogMain from "./blogMain/blogMain";
import HeaderBlog from "./headerBlog/headerBlog";
import Headersecond from "./headersecond/headersecond";
import PaginatedItems from "./paggination/paggination";

const Blog = () => {
  return (
    <div>
        <NavbarSmall/>
      <div className="blog-container" style={{ padding: "3vw 20vw" }}>
        {/* <HeaderBlog /> */}
        <Headersecond/>
        <BlogMain />
        
        {/* <PaginatedItems itemsPerPage={4} /> */}
      </div>
    </div>
  );
};

export default Blog;
