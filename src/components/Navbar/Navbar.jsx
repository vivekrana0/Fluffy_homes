// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Form from 'react-bootstrap/Form';

export default function NavbarComponent({user, setUser}) {
    function handleLogout() {
      localStorage.removeItem('token')
      setUser(null)
    }
    return (
        <Navbar key={false} bg="light" expand={false} className="mb-3">
          <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://i.imgur.com/fXygila.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
            <Navbar.Brand id='brand' href="/">Rental Bravo</Navbar.Brand>
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
                <Nav.Link href="/">Home</Nav.Link>
                 {user && 
                <Nav.Link href="#listings">My Listings</Nav.Link>
                }
                <Nav.Link href="/user/addlisting">List A Rental</Nav.Link>
                <Nav.Link href="/user/updatelisting">Update Rental</Nav.Link>
                <Nav.Link href="/user/listingdetail">Detail</Nav.Link>
                {user ? 
                <Nav.Link href="" onClick={handleLogout}>Log Out</Nav.Link>
                :
                <Nav.Link href="/user/register">Sign in</Nav.Link>
                }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  







        // <>
        //   <Navbar bg="light" variant="light">
        //     <Container >
        //       <Navbar.Brand id='brand' href="/">Rental Bravo</Navbar.Brand>
        //       <Nav>
        //         <Nav.Link href="/">Home</Nav.Link>
        //         {user && 
        //         <Nav.Link href="#listings">My Listings</Nav.Link>
        //         }
        //         <Nav.Link href="/user/addlisting">List A Rental</Nav.Link>
        //         <Nav.Link href="/user/updatelisting">Update Rental</Nav.Link>
        //         {user ? 
        //         <Nav.Link href="" onClick={handleLogout}>Log Out</Nav.Link>
        //         :
        //         <Nav.Link href="/user/register">Sign in</Nav.Link>
        //         }
        //       </Nav>
        //     </Container>
        //   </Navbar>
        // </>
      );
}
