import {
  Typography,
  Box,
  TextField,
  Button,
  Container,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../layouts/nav";
import Loading from "../layouts/loading";

import {
  signup,
  inprogress,
  clearalert,
} from "../../redux/actions/authactions";
import GoogleIcon from "@mui/icons-material/Google";
import SendIcon from "@mui/icons-material/Send";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state) => state.auth.inprogress);
  const auth = useSelector((state) => state.auth.isAuthenticated);

  const submitform = async (event) => {
    event.preventDefault();

    let formData = {
      email: email,
      username: name,
      password: password,
    };
    dispatch(inprogress(true));
    dispatch(signup(formData, navigate));
  };
  if (auth) {
    return navigate("/");
  }
  return (
    <>
      <Nav />
      <Container maxWidth="md">
        <Box sx={{ mt: 3, p: 2 }}>
          <Typography
            variant="h4"
            sx={{ mb: 2, fontWeight: "bold", color: "#333" }}
          >
            Create Your Account
          </Typography>
          <Box component="form" method="post" onSubmit={submitform}>
            <InputLabel sx={{ color: "#333", fontWeight: "bold" }}>
              User Name
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              size="small"
              sx={{ mt: 1, mb: 1 }}
              type="text"
              placeholder="Jon Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            <InputLabel sx={{ color: "#333", fontWeight: "bold" }}>
              Email
            </InputLabel>

            <TextField
              variant="outlined"
              fullWidth
              size="small"
              sx={{ mt: 1, mb: 1 }}
              type="email"
              placeholder="myemail@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <InputLabel sx={{ color: "#333", fontWeight: "bold" }}>
              Password
            </InputLabel>

            <TextField
              variant="outlined"
              fullWidth
              size="small"
              sx={{ mt: 1, mb: 1 }}
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
            <InputLabel sx={{ color: "#333", fontWeight: "bold" }}>
              Confirm Password
            </InputLabel>

            <TextField
              variant="outlined"
              fullWidth
              size="small"
              sx={{ mt: 1, mb: 1 }}
              type="password"
              placeholder="*******"
              value={confirmpassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              name="confirmpassword"
            />
            <Button
              size="medium"
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              endIcon={<SendIcon />}
            >
              Register
            </Button>
            <Button
              sx={{ mt: 2 }}
              color="success"
              variant="contained"
              startIcon={<GoogleIcon />}
              fullWidth
            >
              Continue With Google
            </Button>
          </Box>
        </Box>
        <Box sx={{ pl: 2, pr: 2, pb: 2 }}>
          <Typography align="center">
            Already have an Account <Link to="/login">Login</Link>
          </Typography>
        </Box>
      </Container>{" "}
      <Loading isloading={loading} />
    </>
  );
}
