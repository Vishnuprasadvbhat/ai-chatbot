import React from "react";
import { Link } from "react-router-dom";

type Props = {
  // Define any props if needed
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => void; // Optional onClick handler
};
const Nav = (props: Props) => {
  return (
    <Link
    className ='nav-link'
      to={props.to}
      style={{ background: props.bg, color: props.textColor }}
    >
      {" "}
      {props.text}{" "}
    </Link>
  );
};

export default Nav;
