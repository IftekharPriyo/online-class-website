import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap"

const Header = () => {
    const refreshPage = () => {
        window.location.reload(false);
    }
    return (
        <div>
            <div>
                <Navbar className="navbar-dark bg-dark" fixed='top' expand="lg">
                    <Navbar.Brand href="#top-view" onClick={refreshPage}>XYZ-Online-Platform</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#top-view">Home</Nav.Link>
                            <Nav.Link href="#top-view">Courses</Nav.Link>
                            <NavDropdown title="Faculties" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Science</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Commerce</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Humanities</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
                            </NavDropdown>
                            <Button variant="outline-primary" href="#top-view">Scroll to Cart</Button>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;