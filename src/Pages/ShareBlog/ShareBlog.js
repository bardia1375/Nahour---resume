import React from 'react'
import LikeShareBlog from './likeShareBlog/likeShareBlog'
import ShareBlogmain from './main/ShareBlogmain'
import ShareBlogForm from './shareBlogForm/shareBlogForm'
import ShareBlogHeader from './ShareBlogHeader/ShareBlogHeader'

function ShareBlog() {
    return (
        <div className="ShareBlog-container" style={{padding:"0 24vw"}}>
            <ShareBlogHeader/>
            <ShareBlogmain/>
           <LikeShareBlog/>
           <ShareBlogForm/>
        </div>
    )
}

export default ShareBlog
