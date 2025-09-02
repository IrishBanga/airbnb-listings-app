import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function MainNav() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand>airbnb listings</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginRight: "10px",
                }}
              >
                Listings
              </Link>
              <Link
                href="/about"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  marginLeft: "0",
                }}
              >
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
