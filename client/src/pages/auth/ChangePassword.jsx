import React from "react";
import InputBox from "../../components/InputBox";
import logo from "../../public/images/1661417516766.webp";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
function ChangePassword() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/login");
  };

  return (
    <div className="bg-custom d-flex justify-content-center  vh-100">
      <Form
        className="form-container bg-light text-center rounded"
        onSubmit={handleSubmit}
      >
        <div className="text-center img-container mb-4">
          <img src={logo} alt="Logo" className="img-fluid rounded-top" />{" "}
        </div>
        <h2 className="text-center mb-3  fw-bold">Confirm Password</h2>
        <div className="p-3">
          <>
            <InputBox type={"password"} placeholder={"Password"} />
            <InputBox type={"password"} placeholder={"ConfirmPassword"} />
          </>
          <div className="my-3 d-flex ">
            <Button
              className="w-100 rounded text-light fw-bolder d-flex justify-content-center"
              variant="secondary"
              type="submit"
            >
              confirm
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default ChangePassword;
