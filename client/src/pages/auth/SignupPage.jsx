import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import googleImg from "../../public/images/google.png";
import { signUp } from "../../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
  const { user, isAuthenticated, loading, error } = useSelector(
    (state) => state.auth
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(data.confirmPassword != data.password){
      toast.error(`Signup failed! ${'password not match confirm password'}`);
      return
    }
    try {
      const res = await dispatch(signUp(data));
      console.log(res);
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
    <div className="bg-secondary min-vh-100 d-flex align-items-center justify-content-end">
      <Row className="w-100 h-100 justify-content-end m-0">
        <Col xs={12} md={8} lg={10} className="h-100 p-0">
          <Card className="p-4 vh-100 w-100 overflow-hidden">
            <Card.Body className="d-flex flex-column justify-content-center">
              <Form onSubmit={handleSubmit}>
                <h1 className="text-center mb-4 fw-bold text-primary">
                  BeikeShop
                </h1>
                <h2 className="text-center mb-4 fw-bold">SIGN UP</h2>
                <div className="d-flex flex-column align-items-center">
                  <div className="d-flex w-100 mb-2">
                    <Form.Group
                      controlId="formBasicUsername"
                      className="w-100 me-2"
                    >
                      <Form.Control
                        className="p-2 border"
                        type="text"
                        name="userName"
                        placeholder="Username"
                        value={data.username}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="w-100">
                      <Form.Control
                        className="p-2 border"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="d-flex w-100 mb-2">
                    <Form.Group controlId="formBasicDOB" className="w-100 me-2">
                      <Form.Control
                        className="p-2 border"
                        type="date"
                        name="dob"
                        placeholder="DOB"
                        value={data.dob}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      controlId="formBasicPhoneNumber"
                      className="w-100"
                    >
                      <Form.Control
                        className="p-2 border"
                        type="number"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={data.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="d-flex w-100 mb-4">
                    <Form.Group
                      controlId="formBasicPassword"
                      className="w-100 me-2"
                    >
                      <Form.Control
                        className="p-2 border"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      controlId="formBasicConfirmPassword"
                      className="w-100"
                    >
                      <Form.Control
                        className="p-2 border"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={data.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </div>
                  <Button
                    className="w-100 rounded d-flex align-items-center text-light fw-bolder p-2 justify-content-center"
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
                        Loading...
                      </>
                    ) : (
                      "SIGN UP"
                    )}
                  </Button>
                  <Button
                    className="hover w-100 rounded text-secondary fw-bolder d-flex mt-2 m-auto align-items-center justify-content-center "
                    variant="light border border-secondary "
                    type="button" // Changed to "button" since it's not a form submit button
                  >
                    <img className="google_img" src={googleImg} alt="" />
                    GOOGLE
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}

export default SignupPage;
