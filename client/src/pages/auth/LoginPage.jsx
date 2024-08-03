import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import "./auth.scss";
import logo from "../../public/images/1661417516766.webp";
import googleImg from "../../public/images/google.png";
import InputBox from "../../components/InputBox";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Login({ forgotPassword, setForgotPassword, otp, change }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );
console.log(error)
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
    <div className="bg-custom d-flex justify-content-center  vh-100">
      <Form
        className="form-container bg-light text-center rounded"
        onSubmit={handleSubmit}
      >
        <div className="text-center img-container mb-4">
          <img src={logo} alt="Logo" className="img-fluid rounded-top" />{" "}
        </div>
        <h2 className="text-center mb-3  fw-bold">
          {forgotPassword ? `Enter Number` : `Login`}
        </h2>
        <div className="p-3">
          {!forgotPassword ? (
            <>
              <InputBox
                type={"email"}
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputBox
                type={"password"}
                placeholder={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          ) : (
            <InputBox type={"number"} placeholder={"Phone Number"} />
          )}
          {!forgotPassword && (
            <p>
              <a
                href="#"
                onClick={() => setForgotPassword(true)}
                class="no-underline fw-bold text-center pe-auto"
              >
                Forgot Password
              </a>
            </p>
          )}
          {!forgotPassword && (
            <div className="my-3 d-flex justify-content-center">
              <Button
                className="hover w-100 rounded text-secondary fw-bolder d-flex m-auto align-items-center justify-content-center "
                variant="light border border-secondary "
                type="submit"
              >
                <img className="google_img" src={googleImg} alt="" />
                GOOGLE
              </Button>
            </div>
          )}
          <div className="my-3 d-flex ">
            <Button
              className="w-100 rounded text-light fw-bolder d-flex justify-content-center d-flex align-items-center "
              variant="secondary"
              type="submit"
            >
              {loading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="me-2 d-flex align-items-center" // Margin-end for spacing
                  />
                  {forgotPassword ? `Sending OTP...` : `Logging in...`}
                </>
              ) : forgotPassword ? (
                `Send OTP`
              ) : (
                `LOGIN`
              )}
            </Button>
          </div>
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default Login;
