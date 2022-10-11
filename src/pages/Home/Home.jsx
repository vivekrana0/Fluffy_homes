import NavbarComponent from "../../components/Navbar/Navbar"
import Card from 'react-bootstrap/Card';



export default function Home({user, setUser}) {
    return (
        <div>
            <NavbarComponent user={user} setUser={setUser}/>
        <div style={{  width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>

            <Card style={{ height:'30rem', width: '18rem' }}>
                <Card.Img variant="top" src="https://img.freepik.com/free-vector/house-rent-sale-cartoon-illustration_138676-2057.jpg?w=2000" height="255px"/>
                <Card.Body>
                        <Card.Title>Find Your Home</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Browse Home Rentals</Card.Subtitle>
                        <Card.Text>
                        Discover a place that checks all of your boxes. Filter your rental search, and find exactly what you’re looking for.
                        </Card.Text>
                        <Card.Link href="/user/listingdetail">Rental Listing</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ height:'30rem', width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-wu5auEi7PY8Qlkq9LKzvj-vzMWc6G1miw&usqp=CAU" />
                <Card.Body>
                        <Card.Title>List a Rental</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Post your Property for Rent</Card.Subtitle>
                        <Card.Text>
                        Find the Perfect Tennat for Your Property.
                        </Card.Text>
                        <Card.Link href="/user/addlisting">List your Home Rental</Card.Link>
                </Card.Body>
            </Card>

            <Card style={{ height:'30rem', width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcKQKDvACpxqzRCtPm7uh4FJG7z9RMRioLg&usqp=CAU" height="255rem"/>
                <Card.Body>
                        <Card.Title>Manage Your Listings</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Rental Bravo Listing manager</Card.Subtitle>
                        <Card.Text>
                        Manage all your Rental Bravo Listings
                        </Card.Text>
                        <Card.Link href="#listings">Manage Listings</Card.Link>
                </Card.Body>
            </Card>
        </div>
        </div>
    )
}
