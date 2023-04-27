import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LocalStorage from './storage.js';
import contactsData from './contactsData.js';

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(LocalStorage.getContacts(id));

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedContact = {
      ...contact,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      phoneNumber: event.target.phoneNumber.value,
      address: event.target.address.value,
      city: event.target.city.value,
      state: event.target.state.value,
      country: event.target.country.value,
      postalCode: event.target.postalCode.value,
    };
    LocalStorage.updateContact(updatedContact);
    navigate('/');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  useEffect(() => {
    let storedContacts = LocalStorage.getContacts();
    if (storedContacts.length === 0) {
      LocalStorage.setContacts(contactsData);
      storedContacts = contactsData;
    }
    const contact = storedContacts.find(c => c.id === parseInt(id));
    if (contact) {
      setContact(contact);
    }
  }, [id]);




  return (
    <>
      <div className='container'>

        <div className='text-center'>
          <h1>Contact Edit Form</h1>
        </div>
        <div className='p-5'>

          <form onSubmit={handleSubmit}>
            <div >
              <label htmlFor="firstName">First Name:</label>
              <input className="form-control" type="text" id="firstName" name="firstName" defaultValue={contact.firstName} onChange={handleInputChange} />
            </div>
            <div className='form-group mt-2'>
              <label htmlFor="lastName">Last Name:</label>
              <input className="form-control" type="text" id="lastName" name="lastName" defaultValue={contact.lastName} onChange={handleInputChange} />
            </div>
            <div className='form-group mt-2'>
              <label htmlFor="email">Email:</label>
              <input className="form-control" type="email" id="email" name="email" defaultValue={contact.email} onChange={handleInputChange} />
            </div>
            <div className='form-group mt-2'>
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input className="form-control" type="tel" id="phoneNumber" name="phoneNumber" defaultValue={contact.phoneNumber} onChange={handleInputChange} />
            </div>
            <div className='form-group mt-2'>
              <label htmlFor="address">Address:</label>
              <input className="form-control" type="text" id="address" name="address" defaultValue={contact.address} onChange={handleInputChange} />
            </div>
            <div className='form-group mt-2'>
              <label htmlFor="address">City</label>
              <input className="form-control" type="text" id="city" name="city" defaultValue={contact.city} onChange={handleInputChange} />
            </div>
            <div className='form-group mt-2'>
              <label htmlFor="address">State</label>
              <input className="form-control" type="text" id="state" name="state" defaultValue={contact.state} onChange={handleInputChange} />
            </div>
            <div className='form-group mt-2'>
              <label htmlFor="address">Country</label>
              <input className="form-control" type="text" id="country" name="country" defaultValue={contact.country} onChange={handleInputChange} />
            </div>
            <div className='form-group mt-2'>
              <label htmlFor="address">Postal Code</label>
              <input className="form-control" type="text" id="postalCode" name="postalCode" defaultValue={contact.postalCode} onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditContact;
