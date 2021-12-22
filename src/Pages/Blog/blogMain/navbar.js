import { border } from "@mui/system";
import React, { useState } from "react";

function NavbarHeadBlog() {
  const [groups, setGroups] = useState([
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
  ]);

  const changeGrope = (e) => {
    const bardia = groups.filter((group) => {
      return group.job === e;
    })
   return setGroups(bardia)
   

  };

  return (
    <div
      className="blog-main-navbar"
      style={{
        display: "flex",
        marginTop: "64px",
        borderBottom: " 2px solid #C4C4C4",
        marginRight: "0px",
      }}
    >
      {groups.map((group) => {
        return (
          <ul style={{ padding: "0px 40px" }}>
            <li style={{ listStyle: "none" ,border:"1px solid red"}}  onClick={() => changeGrope(group.job)}>
              <a
              
                href={group.href}
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontFamily: "iranSans",
                  fontWeight: "300",
                }}
              >
                <p style={{ margin: "0" }}>{group.job}</p>
              </a>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default NavbarHeadBlog;
