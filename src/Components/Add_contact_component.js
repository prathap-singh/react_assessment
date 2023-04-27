import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LocalStorage from './storage.js';
import contactsData from './contactsData.js';

const AddContact = () => {
  const history = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [contacts, setContactsData] = useState([]);

  const generateOrderId = () => {
    const timestamp = new Date().getTime(); // Get current timestamp
    const randomStr = Math.random().toString(36).substring(2, 8); // Generate random string of characters
    const orderId = `${timestamp}-${randomStr}`; // Combine timestamp and random string to create unique order ID
    return orderId;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: generateOrderId(), // generate unique ID for new contact
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      state,
      country,
      postalCode,
    };
    setContactsData([...contactsData, newContact]); // add new contact to the array
    LocalStorage.addContact(newContact); // save new contact to local storage
    history('/');
  };




  return (
    <>
      <div className='container'>
        <div className='text-center mt-5'>
          <h2>Add Contact Form</h2>
        </div>
        <div className='p-5'>
          <form onSubmit={handleSubmit}>
            <div className="form-group ">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" className="form-control" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="city">City</label>
              <input type="text" className="form-control" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="state">State</label>
              <input type="text" className="form-control" id="state" value={state} onChange={(e) => setState(e.target.value)} required />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="country">Country</label>
              <input type="text" className="form-control" id="country" value={country} onChange={(e) => setCountry(e.target.value)} required />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="postalCode">Postal Code</label>
              <input type="text" className="form-control" id="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};



export default AddContact;
