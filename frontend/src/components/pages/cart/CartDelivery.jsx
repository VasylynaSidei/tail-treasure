import React, { useEffect, useState } from "react";
// import CartPayment from "./CartPayment";
import "./CartDelivery.scss";
import { Steps } from "./constants";
import { useUserContext } from "../../contexts/UserContext";
function CartDelivery({ goTo, formData, setFormData }) {
  const { state } = useUserContext();
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   address: "",
  //   postcode: "",
  //   city: "",
  // });
  const [showForm, setShowForm] = useState(true);
  // const [showPayment, setShowPayment] = useState(false);
  useEffect(() => {
    if (state.user) {
      setFormData((prev) => ({
        ...prev,
        firstName: state.user.firstName || "",
        lastName: state.user.lastName || "",
      }));
    }
  }, [state.user]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
    // goTo(Steps.third);
    // setShowPayment(true);
  };

  const handleEdit = () => {
    setShowForm(true);
    // setShowPayment(false);
  };

  const onNextStep = () => {
    goTo(Steps.third);
  };
  const goBack = () => {
    goTo(Steps.first);
  };
  return (
    <>
      {showForm ? (
        <div className="card ">
          <div className="text-center fs-2">Delivery to</div>
          <form className="m-auto w-100 " onSubmit={handleSubmit}>
            <div className="deliv-cont w-75 ">
              <p>First name*</p>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <p>Last name*</p>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <p>Address line*</p>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <p>Postcode*</p>
              <input
                type="number"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                required
              />
              <p>Town / City*</p>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />{" "}
              <p>*mandatory field</p>
            </div>

            <button className="btn-save" type="submit">
              SAVE
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="card">
            <p className="text-center fs-2">Delivery to</p>
            <div className="deliv-info">
              <p className="info-field">First Name: {formData.firstName}</p>
              <p className="info-field">Last Name: {formData.lastName}</p>
              <p className="info-field">Address: {formData.address}</p>
              <p className="info-field">Postcode: {formData.postcode}</p>
              <p className="info-field">City: {formData.city}</p>
              <button className="btn-change" onClick={handleEdit}>
                Change Data
              </button>
            </div>{" "}
            <div className="d-flex">
              <button className="btn-action back-btn" onClick={goBack}>
                Back
              </button>
              <button className="btn-action next-btn" onClick={onNextStep}>
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CartDelivery;
