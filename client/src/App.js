import react, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/user/Home";
import SignupPage from "./pages/auth/SignupPage";
import Login from "./pages/auth/LoginPage";
import OtpPage from "./pages/auth/OtpPage";
import ChangePassword from "./pages/auth/ChangePassword";
import Products from "./pages/user/Products";
import { useSelector } from "react-redux";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const [ForgotPassword, setForgotPassword] = useState(false);

  //  const navigate = useNavigate()

  // const { user, isAuthenticated, loading, error } = useSelector(
  //   (state) => state.auth
  // );

  // useEffect(()=>{
  //   if(isAuthenticated) {
  //     navigate('/')
  //   }
  // },[])

  return (
    <div className="App">
      <Routes>
        {/* Authenication */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/login"
          element={
            <PrivateRoute>
              <Login
                forgotPassword={ForgotPassword}
                setForgotPassword={setForgotPassword}
              />
            </PrivateRoute>
          }
        />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
