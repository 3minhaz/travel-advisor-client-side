import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    </Navbar.Collapse>

                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        {user?.email && <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>}
                        {user?.email && <Nav.Link as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link>}
                        {user?.email && <Nav.Link as={Link} to="/addNewService">Add a new service</Nav.Link>}


                    </Nav>
                    {!user?.email && < Link to='/login'><Button variant="outline-success">login</Button></Link>}
                    {user?.email && <span>{user?.displayName}</span>}
                    {user?.email && <Button onClick={logout} variant="outline-success">logout</Button>}


                </Container>
            </Navbar>
        </div >
    );
};

export default Header;