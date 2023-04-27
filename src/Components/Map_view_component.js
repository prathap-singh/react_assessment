import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LocalStorage from './storage.js';
import '../Style/Style_sheet.css';

const MapView = () => {
  const [selectedContact, setSelectedContact] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');


  const handleContactChange = (event) => {
    const selectedContact = event.target.value;
    event.preventDefault();
    const contacts = LocalStorage.getContacts();
    const selected = contacts.find((contact) => contact.firstName === selectedContact);
    if (selected) {
      console.log(selected.email)
      console.log(selected.firstName)
      setFirstName(selected.firstName)
      setLastName(selected.lastName)
      setEmail(selected.email)
      setPhonenumber(selected.phoneNumber)
      setAddress(selected.address)
    }
    setSelectedContact(selectedContact);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const contacts = LocalStorage.getContacts();
    const selected = contacts.find((contact) => contact.firstName === selectedContact);
    if (selected) {
      const url = `https://www.google.com/maps?q=${selected.postalCode}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="contactSelect">Select a contact:</label>
          <select
            className="form-control"
            id="contactSelect"
            value={selectedContact}
            onChange={handleContactChange}
          >
            <option value="">Select a contact</option>
            {LocalStorage.getContacts().map((contact) => (
              <option key={contact.id} value={contact.firstName}>{contact.firstName} {contact.lastName}</option>
            ))}
          </select>
        </div>
        <div className='mt-5'>
          <h1>Contact Details</h1>
          <h4><b>Name:</b> {firstName} {lastName}</h4>
          <h4><b>Email:</b> {email}</h4>
          <h4><b>Phone Number:</b> {phoneNumber}</h4>
          <h4><b>Address:</b> {address}</h4>
        </div>
        <button type="submit" className="btn btn-primary mt-3">View Map</button>
      </form>
    </div>
  );
};

export default MapView;
