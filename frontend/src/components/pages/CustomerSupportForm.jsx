import React, { useState } from "react";
import axios from "axios";
import "../pages/customerSupportForm.css";
// import support from "../../../images/support.jpg";

function CustomerSupportForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/support", {
        name,
        email,
        message,
      });
      console.log("Message sent successfully");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="container-form">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="Name:"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder="Email:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message"></label>
            <textarea
              id="message"
              placeholder="How we can Help?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="image-container">
        <img src={"/Images/support.jpg"} alt="Support" />
      </div>
    </div>
  );
}

export default CustomerSupportForm;
