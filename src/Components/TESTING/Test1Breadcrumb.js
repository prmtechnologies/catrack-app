import React from "react";
import "./breadCrumb.css";

export const BreadCrump = props => {
  let links = [];
  let _id = props._id;
  let menus = props.menus;

  while (_id !== "0") {
    let ele = menus.find(ele => ele._id === _id);
    links.splice(
      0,
      0,
      <li>
        <a
          href="#"
          key={ele._id}
          onClick={() => props.onClick(ele._id, ele.type)}
        >
          {ele.name}
        </a>
      </li>
    );
    _id = ele.parentId;
  }

  links.splice(
    0,
    0,
    <li>
      <a href="#" key={0} onClick={() => props.onClick("0")}>
        Menus
      </a>
    </li>
  );

  return <ul className="breadcrumb">{links}</ul>;
};
