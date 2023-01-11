import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid={true}>
          <Navbar.Brand href="#home">
            <img
              width="161"
              height="37"
              src="https://linkgraph.io/wp-content/themes/linkgraph-new/img/header/logo.svg"
              alt="LinkGraph Logo"
              itemProp="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                Grow your Revenue through Transparent & Results-Driven SEO
              </Nav.Link>
            </Nav>
            <Nav>
              <NavLink as={Link} to="/categories">
                Categories
              </NavLink>
              <NavLink as={Link} to="/home">
                Posts
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">LinkGraph</Navbar.Brand>
          <Nav className="me-auto">
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "20px",
              }}
            >
              Home
            </Link>
            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "20px",
              }}
            >
              Login
            </Link>
            <Link
              to="/dashboard"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "20px",
              }}
            >
              Dashboard
            </Link>
            <Link
              to="/add"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "20px",
              }}
            >
              Add Categories
            </Link>
            <Link
              to="/addposts"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "20px",
              }}
            >
              Add Posts Categories
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
