import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Box,
  CircularProgress,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import googleImg from "../../public/images/google.png";
import { signUp } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupPage() {
  const userData = {
    userName: "",
    email: "",
    dob: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };
  const [data, setData] = useState(userData);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data.confirmPassword !== data.password) {
      toast.error(`Signup failed! Password and confirm password do not match`);
      return;
    }
    try {
      const res = await dispatch(signUp(data));
      if (res) {
        navigate("/otp", { state: { data } });
      }
    } catch (err) {
      toast.error(`Signup failed! ${err.message}`);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(`Signup failed! ${error}`);
    }
  }, [error]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        minHeight: "100vh",
        display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Grid container justifyContent="end">
        <Grid item xs={12} md={10} lg={10}>
          <Card sx={{height:'100vh'}}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <Typography variant="h3" align="center" gutterBottom>
                  BeikeShop
                </Typography>
                <Typography variant="h5" align="center" gutterBottom>
                  SIGN UP
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Box sx={{ display: "flex", width: "100%", marginBottom: 2 }}>
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Username"
                      name="userName"
                      value={data.userName}
                      onChange={handleChange}
                      required
                      sx={{ marginRight: 1 }}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      required
                      sx={{ marginLeft: 1 }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", width: "100%", marginBottom: 2 }}>
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Date of Birth"
                      type="date"
                      name="dob"
                      value={data.dob}
                      onChange={handleChange}
                      required
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{ marginRight: 1 }}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Phone Number"
                      name="phoneNumber"
                      value={data.phoneNumber}
                      onChange={handleChange}
                      required
                      sx={{ marginLeft: 1 }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", width: "100%", marginBottom: 4 }}>
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Password"
                      type="password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      required
                      sx={{ marginRight: 1 }}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      variant="outlined"
                      label="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      value={data.confirmPassword}
                      onChange={handleChange}
                      required
                      sx={{ marginLeft: 1 }}
                    />
                  </Box>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ marginBottom: 2 }}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <CircularProgress size={24} sx={{ marginRight: 2 }} />
                        Loading...
                      </>
                    ) : (
                      "SIGN UP"
                    )}
                  </Button>
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      marginTop: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    startIcon={<img src={googleImg} alt="Google" style={{ width: "24px" }} />}
                    type="button"
                  >
                    GOOGLE
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <ToastContainer />
    </Box>
  );
}

export default SignupPage;
