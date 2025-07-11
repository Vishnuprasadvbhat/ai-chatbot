import React from "react";
import { Box, Typography, TextField} from "@mui/material";

const Login = () => {
  return (
    <>
      <Box width={"100%"} height={"100%"} display={"flex"} flex={1}>
        <Box
          padding={8}
          mt={8}
          display={{ md: "flex", sm: "none", xs: "none" }}
        >
          <img
            src="airobot.png"
            alt="Login Illustration"
            style={{ width: "350px", height: "100%" }}
          ></img>
        </Box>
        <Box
          display={"flex"}
          flex={{ xs: 1, md: 0.5 }}
          justifyContent={"center"}
          alignItems={"center"}
          padding={2}
          ml={"auto"}
          mt={16}
        >
          <form
            style={{
              margin: "auto",
              padding: "30px",
              boxShadow: "10px 10px 20px rgba(0, 0, 0)",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          >
            <Box sx= {{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Typography
                  variant='h4'
                  textAlign='center'
                  padding={2}
                  fontWeight={600}
                  font='white'
                >
                  Login to Project GPT
                </Typography>
                <TextField
                  label="Email"
                  placeholder="Enter your email"
                  required
                  variant="outlined"
                  type="email"
                  fullWidth
                  margin="normal"
                  >

                </TextField>
                <TextField
                  label="Password"
                  placeholder="Enter your password"
                  required
                  variant="outlined"
                  type="password"
                  fullWidth
                  margin="normal"
                ></TextField>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
