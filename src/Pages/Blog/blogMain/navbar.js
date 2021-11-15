import { border } from "@mui/system";
import React from "react";

function NavbarHeadBlog() {
  const groups = [
    {
      job: "همه",
      href: "#",
    },
    {
      job: "مصالح ساختمانی",
      href: "#",
    },
    {
      job: "محصولات کشاورزی",
      href: "#",
    },
    {
      job: "پتروشیمی",
      href: "#",
    },
    {
      job: "واردات",
      href: "#",
    },
    {
      job: "تازه نویس ها",
      href: "#",
    },
  ];
  return (
    <div className="blog-main-navbar" style={{display: 'flex', marginTop:"64px",borderBottom:" 2px solid #C4C4C4" ,marginRight:"0px"}}>
      {groups.map((group) => {
        return (
          <ul style={{padding:"10px 40px"}}>
            <li style={{listStyle:"none" }}>
              <a href= {group.href} style={{color:"black"}}>{group.job}</a>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default NavbarHeadBlog;
