import React from "react";

function Footer() {
  return (
    <footer className="bg-primary ">
      <div className="footer d-md-flex text-light p-5 justify-content-evenly">
        <div className="footer-item col-12 col-md-2">
          <h3 className="fs-6 ">Beike Shop</h3>
          <ul className="row list-unstyled">
            <div className="col-6 col-md-12">
              <li>Who We Are</li>
              <li>Join Our Team</li>
              <li>Terms & Condition</li>
              <li>We Respect Your Privacy</li>
              <li>Fees & Payments</li>
              <li>Return & Refund</li>
              <li>Policy</li>
              <li>Promotion Terms & Conditions</li>
            </div>
          </ul>
        </div>
        <hr className="d-md-none" />
        <div className="footer-item col-12 col-md-2">
          <h3 className="fs-6">Follow Us</h3>
          <ul className="row list-unstyled">
          <div className="col-6 col-md-12">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Whatsapp</li>
            </div>
          </ul>
          <hr className="d-md-none" />
        </div>

        <div className="footer-item col-12 col-md-3 d-flex ">
          <div>
            <h2 className="mx-2 p-0 fw-bold text-align-end">Beike Shop</h2>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
