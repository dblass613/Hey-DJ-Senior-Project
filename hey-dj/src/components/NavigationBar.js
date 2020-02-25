import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";

class NavigationBar extends React.Component{


    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/register">Navbar</Navbar.Brand>
                <Nav className="m-r auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/features">Features</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                </Nav>

                <Nav className="m-r auto">
                    <NavLink  href="/login" className="m-r auto">
                        Login
                    </NavLink>
                </Nav>

            </Navbar>
        )
    }

}
export default NavigationBar;