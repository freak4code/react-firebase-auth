import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, displayName, logOut } = useAuth();

  return (
    <>
      <Navbar
        style={{ padding: "10px" }}
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand>Nowhere Health</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/advice-hub">
              Advice Hub
            </Nav.Link>
            <Nav.Link as={Link} to="/direct-consult">
              Direct Consultency
            </Nav.Link>
          </Nav>

          {user.email && <Navbar.Text>Signed in as: {displayName}</Navbar.Text>}
          <Navbar.Text>
            {user.email ? (
              <p className="loggedButton btn btn-danger" onClick={logOut}>
                Log Out
              </p>
            ) : (
              <Link to="/login">
                <p className="loggedButton btn btn-success">Log In</p>
              </Link>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
