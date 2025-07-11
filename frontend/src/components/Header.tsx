import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import Nav from "./shared/Nav";
const Header = () => {
  const auth = useAuth();
  return (
    <>
      <AppBar
        sx={{ bgcolor: "#05101c", position: "static", boxShadow: "None" }}
        position="static"
      >
        <Toolbar sx={{ display: "flex" }}>
          <Logo />
          <div>
            {auth?.isLoggedIn ? (
              <>
                <Nav
                  bg="#00fffc"
                  to="/chat"
                  text="Go To Chat"
                  textColor="black"
                />
                <Nav
                  bg="#51538f"
                  textColor="white"
                  to="/logout"
                  text="logout"
                  onClick={auth?.logout}
                />
              </>
            ) : (
              <>
                <Nav 
                  bg="#00fffc" 
                  to="/login" 
                  text="Login" 
                  textColor="black"  
                  onClick={auth?.login}
                />
                <Nav
                  bg="#51538f"
                  textColor="white"
                  to="/signup"
                  text="Sign up"
                  onClick={auth?.signup}
                />
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
