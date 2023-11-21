import React, { useState } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "./home/Toggler";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { info } from "../info/Info";

const links = [
  {
    name: "Home",
    to: "/react-portfolio-template/home",
    active: "home",
  },
  {
    name: "About Me",
    to: "/react-portfolio-template/about",
    active: "about",
  },
  {
    name: info.initials,
    type: "initials",
    to: "/react-portfolio-template/home",
    active: "home",
  },
  {
    name: "Resume",
    to: "",
    url: "https://drive.google.com/file/d/11a0sA6zs-TImGtt0wk6yCDMBQtll6JoQ/view?usp=sharing",
  },
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/react-portfolio-template/home"
      ? "home"
      : location.pathname.slice(1, location.pathname.length)
  );

  const openResumeInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box component={"nav"} width={"100%"}>
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
        textTransform={"lowercase"}
        fontSize={"1rem"}
      >
        {links.map((link, index) => (
          <Box
            key={index}
            component={"li"}
            className={link.active === active && !link.type && Style.active}
            sx={{ borderImageSource: info.gradient }}
          >
            <Link
              to={link.to}
              onClick={(e) => {
                if (link.name === "Resume") {
                  openResumeInNewTab(link.url);
                } else {
                  setActive(link.active);
                }
              }}
              className={Style.link}
            >
              {!link.type && <p style={{ padding: "0.5rem 0" }}>{link.name}</p>}
              {link.type && <h1>{link.name}</h1>}
            </Link>
          </Box>
        ))}
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
