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
import ProductDetails from "./pages/user/ProductDetails";
import { createMuiTheme, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/admin/Dashbord";
import AdminSidebar from "./components/admin/constant/sidebar/AdminSidebar";
import "./index.css";
import ProductList from "./pages/admin/ProductList";
import ProductManagement from "./pages/admin/ProductManagement";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#461246",
    },
    secondary: {
      main: "#D4499F",
    },
    third: {
      main: "#FDF2FC",
    },
  },
});
function App() {
  const [ForgotPassword, setForgotPassword] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {/* classname app for admin */}
      <div className="app">
        <AdminSidebar />
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
          <Route path="/productDetails" element={<ProductDetails />} />

          {/* admin */}

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/productlist" element={<ProductList />} />
          <Route
            path="/admin/product_management"
            element={<ProductManagement />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
