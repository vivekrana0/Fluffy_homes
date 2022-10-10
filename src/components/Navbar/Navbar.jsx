import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'



export default function NavbarComponent({user, setUser}) {
    function handleLogout() {
      localStorage.removeItem('token')
      setUser(null)
    }
    return (
        <>
          <Navbar bg="light" variant="light">
            <Container >
              <Navbar.Brand id='brand' href="/">Rental Bravo</Navbar.Brand>
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#listings">My Listings</Nav.Link>
                <Nav.Link href="#add">List A Rental</Nav.Link>
                {user ? 
                <Nav.Link href="" onClick={handleLogout}>Log Out</Nav.Link>
                :
                <Nav.Link href="/user/register">Sign in</Nav.Link>
                }
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}
