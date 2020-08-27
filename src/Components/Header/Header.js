import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, Form, FormControl, Button, Carousel } from "react-bootstrap"

const Header = () => {
    return (
        <div>
            <div>
                <Navbar className="navbar-dark bg-dark" expand="lg">
                    <Navbar.Brand href="#home">XYZ-Online-Platform</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Courses</Nav.Link>
                            <NavDropdown title="Faculties" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Science</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Commerce</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Humanities</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
                            </NavDropdown>
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