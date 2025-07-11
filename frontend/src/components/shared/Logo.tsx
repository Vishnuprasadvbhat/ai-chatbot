import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img
          src="instagram-logos.png"
          alt="openai"
          width={"40px"}
          height={"40px"}
          className="image-inverted"
        />
      </Link>
      <Typography
        sx={{
          display: { md: "inline", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "800",
          textShadow: "2px 2px 40px  rgb(0, 0, 0)",
        }}
      >
        <span style={{ fontSize: "20px", color: "white" }}>Project GPT</span>
      </Typography>
    </div>
  );
};

export default Logo;
