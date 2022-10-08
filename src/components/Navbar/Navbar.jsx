import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'



export default function NavbarComponent() {
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container >
              <Navbar.Brand href="#home">Rental Bravo</Navbar.Brand>
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#listings">My Listings</Nav.Link>
                <Nav.Link href="#add">List A Rental</Nav.Link>
                <Nav.Link href="#singin">Sign in</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}
