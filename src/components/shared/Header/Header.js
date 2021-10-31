import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect bg="light" expand="lg">
                <Container >
                    <Nav.Link className="text-dark" as={Link} to="/">BD TRAVELLERS</Nav.Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end ">

                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#offer">Offers</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#gallery">Gallery</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#features">Features</Nav.Link>
                        {user?.email && <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>}
                        {user?.email && <Nav.Link as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link>}
                        {user?.email && <Nav.Link as={Link} to="/addNewService">Add a new service</Nav.Link>}

                        {!user?.email && < Link to='/login'><Button variant="outline-success">login</Button></Link>}
                        {user?.email && <span>{user?.displayName}</span>}
                        {user?.email && <Button onClick={logout} variant="outline-success">logout</Button>}
                        {/* </Nav> */}
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div >
    );
};

export default Header;