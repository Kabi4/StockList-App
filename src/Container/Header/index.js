import React from "react";
import "./style.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { NavItems } from "../../Components";

const index = () => {
  const menuItems = [
    { Icon: <ReorderIcon className="header_item_icon" />, ele: "Categories" },
    { ele: "Home" },
    { ele: "Auction" },
    { ele: "Vendors" },
    { ele: "Shortcodes" },
    { ele: "Blog" },
    { ele: "Media" },
    { ele: "About" },
    { ele: "Content" },
    { ele: "Pages" },
    { ele: "Sign In" },
  ];
  return (
    <div className="header">
      <NavItems data={menuItems} />
    </div>
  );
};

export default index;
