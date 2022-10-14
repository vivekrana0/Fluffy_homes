import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FcHome } from 'react-icons/fc';

// NavbarComponent
export default function NavbarComponent({ user, setUser }) {
  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
  }
  return (
    <Navbar key={false} expand={false} className="mb-3" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand href="/">
          <FcHome size={70} />
        </Navbar.Brand>
        <Navbar.Brand id="brand" href="/">
          RENTAL BRAVO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
             RENTAL BRAVO
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              {user && <Nav.Link href="/user/mylisting">My Listings</Nav.Link>}
              <Nav.Link href="/user/favorites">Favorites</Nav.Link>
              <Nav.Link href="/user/addlisting">List A Rental</Nav.Link>
              <Nav.Link href="/user/updatelisting">Update Rental</Nav.Link>
              <Nav.Link href="/user/listingdetail">Detail</Nav.Link>
              {user ? (
                <Nav.Link href="" onClick={handleLogout}>
                  Log Out
                </Nav.Link>
              ) : (
                <Nav.Link href="/user/register">Sign in</Nav.Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
