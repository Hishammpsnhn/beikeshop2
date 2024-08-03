import React, { useEffect, useState } from "react";
import InputBox from "../../components/InputBox";
import logo from "../../public/images/1661417516766.webp";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { verifyOtp, resendOtp, signUp } from "../../actions/authActions";
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";

function OtpPage() {
  const location = useLocation();
  const { data } = location.state || {};

  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  const [otp, setOtp] = useState("");
  const [resendTimeout, setResendTimeout] = useState(null); // State to manage resend timing
  const [canResend, setCanResend] = useState(false); // State to manage resend button visibility
  const [timeRemaining, setTimeRemaining] = useState(60); // State to manage countdown timer

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error}`);
    }
  }, [error]);

  useEffect(() => {
    if (!canResend) {
      const interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setCanResend(true);
            return 60; // Reset the timer
          }
          return prev - 1;
        });
      }, 1000); // Update every second

      return () => clearInterval(interval);
    }
  }, [canResend]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length === 4) {
      dispatch(verifyOtp(parseInt(otp), data));
    }
  };

  const handleResendOtp = async () => {
    if (canResend) {
      dispatch(signUp(data)); // Ensure signUp handles OTP resend
      setCanResend(false);
      setTimeRemaining(60); // Reset the timer
      toast.success("OTP has been resent. Please check.");
    } else {
      toast.info("Please wait before resending the OTP.");
    }
  };

  return (
    <div className="bg-custom d-flex justify-content-center vh-100">
      <Form
        className="form-container bg-light text-center rounded"
        onSubmit={handleSubmit}
      >
        <div className="text-center img-container mb-4">
          <img src={logo} alt="Logo" className="img-fluid rounded-top" />
        </div>
        <h2 className="text-center mb-3 fw-bold">Enter OTP</h2>
        <div className="p-3">
          <InputBox
            type={"text"}
            placeholder={"OTP"}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <div className="my-3 d-flex">
            <Button
              className="w-100 rounded text-light fw-bolder d-flex justify-content-center"
              variant="secondary"
              type="submit"
              
            >
              Verify
            </Button>
          </div>
          <div className="my-3 d-flex justify-content-center">
            <Button
              className="w-100 rounded text-light fw-bolder d-flex justify-content-center"
              variant="secondary"
              onClick={handleResendOtp}
              disabled={!canResend || loading}
            >
              {canResend ? "Resend OTP" : `Resend OTP in ${timeRemaining}s`}
            </Button>
          </div>
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default OtpPage;
