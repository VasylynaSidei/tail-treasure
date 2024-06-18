// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./terms.css";

const Terms = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleAcceptTerms = () => {
    setAcceptedTerms(true);
    alert("You have successfully registered!");
  };
  const handleDeclineTerms = () => {
    alert("You must accept the terms to continue.");
  };

  return (
    <div className="outside-container">
      <div className="container-terms">
        <h1>Terms and Conditions</h1>

        <h2>1. Introduction</h2>
        <p className="term-tags">
          Welcome to Tail-Treasure! By accessing or using our website, you agree
          to comply with and be bound by the following terms and conditions.
        </p>

        <h2>2. Acceptance of Terms</h2>
        <p className="term-tags">
          By registering an account or using our services, you agree to be bound
          by these terms and conditions. If you do not agree to these terms, you
          may not use our services.
        </p>

        <h2>3. Product Descriptions and Availability</h2>
        <p className="term-tags">
          We strive to accurately represent our products through descriptions
          and images. However, we do not guarantee the availability or accuracy
          of any product listed on our website.
        </p>

        <h2>4. Pricing and Payment</h2>
        <p className="term-tags">
          All prices are listed in Euros and are subject to change without
          notice. Payment must be made in full at the time of purchase. We
          accept Paypal,Visa Card , Master Card for online transactions
        </p>

        <h2>5. Shipping and Delivery</h2>
        <p className="term-tags">
          We aim to ship orders promptly, but delivery times may vary depending
          on the destination and product availability. We are not responsible
          for any delays caused by shipping carriers or unforeseen
          circumstances.
        </p>

        <h2>6. User Accounts and Security</h2>
        <p className="term-tags">
          Customers are responsible for maintaining the confidentiality of their
          account credentials and for any activity that occurs under their
          account. In the event of unauthorized access, customers should notify
          us immediately.
        </p>

        <h2>7. Privacy and Security</h2>
        <p className="term-tags">
          We respect the privacy of our customers and are committed to
          protecting their personal information. Any data collected during the
          ordering process will be used solely for fulfilling orders and will
          not be shared with third parties without consent.
        </p>

        <h2>8. Intellectual Property</h2>
        <p className="term-tags">
          All content on our website, including product images, logos, and text,
          is the property of Tail-Treasure and is protected by copyright law.
          Unauthorized use of our intellectual property is prohibited.
        </p>

        <h2>9. Disclaimer of Warranties</h2>
        <p className="term-tags">
          We expect all customers to engage in respectful and lawful behavior
          when using our website and interacting with our staff. Any abusive or
          inappropriate conduct may result in the termination of access to our
          services.
        </p>

        <h2>10. Governing Law and Jurisdiction</h2>
        <p className="term-tags">
          These terms and conditions are governed by the laws of Germany, and
          any disputes arising from them shall be resolved in the courts of
        </p>

        {/* <section className="terms-buttons">
          {acceptedTerms ? (
            <>
              <Link to="/dashboard" className="link">
                Go to Main Page
              </Link>
            </>
          ) : (
            <div className="button-container">
              <button onClick={handleAcceptTerms}>
                Accept Terms & Register
              </button>
            </div>
          )}

          <div className="button-container">
            <button onClick={handleDeclineTerms}>Decline</button>
          </div>
        </section> */}

        <section className="terms-buttons">
          {acceptedTerms ? (
            <>
              <Link to="/register" className="link">
                Go to Main Page
              </Link>
            </>
          ) : (
            <>
              <div className="button-container">
                <button onClick={handleAcceptTerms}>
                  Accept Terms & Register
                </button>
              </div>

              {!acceptedTerms && (
                <div className="button-container-decline">
                  <button onClick={handleDeclineTerms}>Decline</button>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Terms;
