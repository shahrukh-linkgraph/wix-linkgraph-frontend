import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
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
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
              }}
            >
              Grow your Revenue through Transparent & Results-Driven SEO
            </Link>
          </Nav>
          <Nav>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
              }}
            >
              Home
            </Link>
            {/* <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
              }}
            >
              Login
            </Link> */}
            <Link
              to="/dashboard"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
              }}
            >
              Dashboard
            </Link>
            <Link
              to="/posts"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
              }}
            >
              Posts
            </Link>
            <Link
              to="/categories"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "10px",
              }}
            >
              Categories
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
