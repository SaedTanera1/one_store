import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

import React from "react";

export const menu = [
  {
    id: 1,
    title: "Homepage",
    Icon: <i className="fa-solid fa-house" style={{ color: "#1649a2" }}></i>,
    Link: "/",
  },
  {
    id: 2,
    title: "profile",
    Icon: (
      <i className="fa-solid fa-address-card" style={{ color: "#1649a2" }}></i>
    ),
    Link: "/",
  },
  {
    id: 3,
    title: "Users",
    Icon: <i className="fa-solid fa-users" style={{ color: "#1649a2" }}></i>,
    Link: "/Dashbord/Users",
  },

  {
    id: 4,
    title: "New User",
    Icon: (
      <i className="fa-solid fa-user-plus" style={{ color: "#1649a2" }}></i>
    ),
    Link: "User/create",
  },
  {
    id: 5,
    title: "Product",
    Icon: (
      <i className="fa-brands fa-product-hunt" style={{ color: "#1649a2" }}></i>
    ),
    Link: "/Dashbord/Products",
  },
  {
    id: 6,
    title: "New Product",
    Icon: (
      <i className="fa-solid fa-circle-plus" style={{ color: "#1649a2" }}></i>
    ),
    Link: "Product/create",
  },
  {
    id: 7,
    title: "Orders",
    Icon: (
      <i className="fa-brands fa-first-order" style={{ color: "#1649a2" }}></i>
    ),
    Link: "/",
  },
  {
    id: 8,
    title: "Posts",
    Icon: (
      <i className="fa-solid fa-signs-post" style={{ color: "#1649a2" }}></i>
    ),
    Link: "/",
  },
  {
    id: 9,
    title: "Charts",
    Icon: (
      <i className="fa-solid fa-chart-simple" style={{ color: "#1649a2" }}></i>
    ),
    Link: "/",
  },
  {
    id: 10,
    title: "Settings",
    Icon: <i className="fa-solid fa-gear" style={{ color: "#1649a2" }}></i>,
    Link: "/",
  },
  {
    id: 11,
    title: "Logs",
    Icon: <i className="fa-solid fa-right-to-bracket"></i>,
    Link: "/login",
  },
];
