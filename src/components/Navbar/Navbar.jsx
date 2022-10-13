
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Form from 'react-bootstrap/Form';

export default function NavbarComponent({user, setUser}) {
    function handleLogout() {
      localStorage.removeItem('token')
      setUser(null)
    }
    return (
        <Navbar key={false}  expand={false} className="mb-3">
          <Container fluid>
          <Link to="/">
            <img
              src="https://i.imgur.com/fXygila.png"
              width="80"
              height="80"
              className="d-inline-block align-top"
            />
          </Link>
            <Link id='brand' to="/">Rental Bravo</Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  Rental Bravo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/">Home</Link>
                {user &&
                <Link to="/user/mylisting">My Listings</Link>
                }
                {/* <Nav.Link href="/user/favorites">Favorites</Nav.Link> */}
                <Link className='link' to="/user/favorites">Favorites</Link>
                <Link to="/user/addlisting">List A Rental</Link>
                <Link to="/user/updatelisting">Update Rental</Link>
                <Link to="/user/listingdetail">Detail</Link>
                {user ? 
                <Link to="" onClick={handleLogout}>Log Out</Link>
                :
                <Link to="/user/register">Sign in</Link>
                }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

      );
}
