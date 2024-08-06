import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  TextField,
  Box,
  Typography,
  Link,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./auth.scss";
import logo from "../../public/images/1661417516766.webp";
import googleImg from "../../public/images/google.png";

function Login({ forgotPassword, setForgotPassword, otp, change }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (forgotPassword) {
      navigate("/otp");
      setForgotPassword(false);
    } else {
      dispatch(login(email, password));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(`Login failed! ${error}`);
    }
  }, [error]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#E4D5E4"
      }}
    >
      <Paper elavation={6}>
      <Box
        component="form"
        sx={{
          backgroundColor: "#fff",
     
          borderRadius: 1,
          textAlign: "center",
          maxWidth: "400px",
          width: "100%",
        }}
        onSubmit={handleSubmit}
      >
        <Box sx={{ marginBottom: 2 }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100%"}}
          />
        </Box>
        <Typography
          variant="h4"
          component="h2"
          sx={{ marginBottom: 2, fontWeight: "bold" }}
        >
          {forgotPassword ? `Enter Number` : `Login`}
        </Typography>
        <Box sx={{ padding: 3 }}>
          {!forgotPassword ? (
            <>
              <TextField
                fullWidth
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
              />
              <TextField
                fullWidth
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
              />
            </>
          ) : (
            <TextField
              fullWidth
              type="number"
              label="Phone Number"
              margin="normal"
            />
          )}
          {!forgotPassword && (
            <Typography>
              <Link
                onClick={() => setForgotPassword(true)}
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Forgot Password
              </Link>
            </Typography>
          )}
          {!forgotPassword && (
            <Button
              fullWidth
              variant="outlined"
              sx={{
                marginTop: 2,
                marginBottom: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textTransform: "none",
                borderColor: "secondary.main",
                color: "secondary.main",
              }}
              startIcon={
                <img src={googleImg} alt="" style={{ width: "24px" }} />
              }
              type="button"
            >
              GOOGLE
            </Button>
          )}
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ marginTop: 2 }}
          >
            {loading ? (
              <>
                <CircularProgress
                  size={24}
                  color="inherit"
                  sx={{ marginRight: 2 }}
                />
                {forgotPassword ? `Sending OTP...` : `Logging in...`}
              </>
            ) : forgotPassword ? (
              `Send OTP`
            ) : (
              `LOGIN`
            )}
          </Button>
        </Box>
      </Box>
      </Paper>
      <ToastContainer />
    </Box>
  );
}

export default Login;
