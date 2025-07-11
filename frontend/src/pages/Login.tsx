import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import  {toast} from 'react-hot-toast'
import { useAuth } from "../context/AuthContext";


const Login = () => {
  const auth = useAuth();
  const handleSubmit =  async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing in", {id: 'login'});
      await auth?.login(email,password);
      toast.success("Successfully Signed In", {id: 'login'});
    }
    catch (error) {
      console.log(error);
      toast.error("Sign In Failed", {id: "login"});
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

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
          mt={12}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              margin: "auto",
              padding: "30px",
              boxShadow: "10px 10px 20px rgba(0, 0, 0)",
              borderRadius: "10px",
              border: "1px solid #ccc",
              backgroundColor: "rgba(243, 243, 243, 0.8)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                textAlign="center"
                padding={2}
                fontWeight={600}
                font="Roboto"
                color="#05101c"
              >
                Login to Project GPT
              </Typography>

              <TextField
                focused={true}
                name="email"
                label="Email"
                placeholder="Enter your email"
                required
                variant="standard"
                type="email"
                fullWidth
                margin="normal"
                helperText="We'll never share your email with anyone else."
              ></TextField>

              <TextField
                name="password"
                focused={true}
                label="Password"
                placeholder="Enter your password"
                required
                variant="standard"
                type="password"
                fullWidth
                margin="normal"
                helperText="Your password must be at least 6 characters long."
              ></TextField>
              <Button
                variant="outlined"
                type="submit"
                fullWidth
                size="large"
                sx={{
                  width: "80%",
                  height: "40px",
                  marginTop: "20px",
                  backgroundColor: "#05101c",
                  color: "white",
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
