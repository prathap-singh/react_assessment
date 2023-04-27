import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LocalStorage from "./storage";

const EditContact = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [contact, setContact] = useState({});

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    const storedContacts = LocalStorage.getContacts();
    const selectedContact = storedContacts.find(
      (contact) => contact.id === id
    );
    setContact(selectedContact);
  }, [location]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedContacts = LocalStorage.getContacts();
    const updatedContacts = storedContacts.map((c) =>
      c.id === contact.id ? contact : c
    );
    LocalStorage.setContacts(updatedContacts);
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" id="firstName" name="firstName" value={contact.firstName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="form-control"  id="lastName" name="lastName" value={contact.lastName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input  type="email" className="form-control" id="email" name="email" value={contact.email}  onChange={handleInputChange}  />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input  type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={contact.phoneNumber}  onChange={handleInputChange}  />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input  type="text" className="form-control" id="address" name="address" value={contact.address}  onChange={handleInputChange}  />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input  type="text" className="form-control" id="city" name="city" value={contact.city}  onChange={handleInputChange}  />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input  type="text" className="form-control" id="state" name="state" value={contact.state}  onChange={handleInputChange}  />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input  type="text" className="form-control" id="country" name="country" value={contact.country}  onChange={handleInputChange}  />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">PostalCode</label>
          <input  type="text" className="form-control" id="postalCode" name="postalCode" value={contact.postalCode}  onChange={handleInputChange}  />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
        </div>
  )
};


export default EditContact