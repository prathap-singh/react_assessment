import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, Table } from 'react-bootstrap'
import LocalStorage from './storage.js';
import contactsData from './contactsData.js';
import '../Style/Style_sheet.css'



const Home = () => {
    const history = useNavigate();
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const storedContacts = LocalStorage.getContacts();
        if (storedContacts.length === 0) {
            LocalStorage.setContacts(contactsData);
            setContacts(contactsData);
        } else {
            setContacts(storedContacts);
        }
    }, []);

    const handleEditClick = (id) => {
        history(`/edit-contact/${id}`);
    };

    const handleDeleteClick = (id) => {
        LocalStorage.deleteContact(id);
        setContacts(LocalStorage.getContacts());
    };


    return (
        <>

            <div className='mt-5 container'>
                <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Country</th>
                                <th>Postal Code</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, index) => (
                                <tr key={index}>
                                    <td>{contact.id}</td>
                                    <td>{contact.firstName}</td>
                                    <td>{contact.lastName}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phoneNumber}</td>
                                    <td>{contact.address}</td>
                                    <td>{contact.city}</td>
                                    <td>{contact.state}</td>
                                    <td>{contact.country}</td>
                                    <td>{contact.postalCode}</td>
                                    <td>
                                        <div className='d-flex'>
                                            <div className='col  '>
                                                <button className="btn btn-primary" onClick={() => handleEditClick(contact.id)}>Edit</button>
                                            </div>
                                            <div className='col '>
                                                <button className="btn btn-danger " style={{marginLeft: "5px"}} onClick={() => handleDeleteClick(contact.id)}>Delete</button>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};


function Navigation_bar() {
    return (
        <>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Contacts App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav " />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink to="/" className="nav-link" style={{ color: "black" }}>Home</NavLink>
                            <NavLink to="/add-contact" className="nav-link" style={{ color: "black" }}>Add Contact</NavLink>
                            <NavLink to="/map-view" className="nav-link" style={{ color: "black" }}>Map View</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


export { Navigation_bar }
export default Home;




