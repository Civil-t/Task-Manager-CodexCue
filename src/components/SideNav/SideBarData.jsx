import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/project",
    icon: <AiIcons.AiFillAndroid />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <CiSettings />,
    cName: "nav-text",
  },
];
