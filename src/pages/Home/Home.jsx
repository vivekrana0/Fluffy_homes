// import { Component } from "react";
import NavbarComponent from "../../components/Navbar/Navbar"
import Card from 'react-bootstrap/Card';

export default function Home({user, setUser}) {
    return (
        <div>
            <NavbarComponent user={user} setUser={setUser}/>
            <br></br>
            <div class="dropdown">
                <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                     Sort
                    <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="/user/listingdetail">sort</a></li>
                    <li><a href="/user/listingdetail">sort</a></li>
                    <li><a href="/user/listingdetail">Sort</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="/user/listingdetail">Separated link</a></li>
                </ul>
            </div>
        <br></br>
        <div style={{  width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>

            <Card style={{ height:'30rem', width: '18rem' }}>
                <a href="/user/listingdetail">
                <Card.Img variant="top" src="https://img.freepik.com/free-vector/house-rent-sale-cartoon-illustration_138676-2057.jpg?w=2000" height="255px"/>
                <Card.Body>
                        <Card.Title>10 McMaster Road, Winnipeg, MB</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Price:$1000</Card.Subtitle>
                        <Card.Text>
                        Bedroom 3  Bathroom 2
                        </Card.Text>
                </Card.Body>
                </a>
                <button type="button" class="btn btn-default btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                     <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                </svg>
                </button>
            </Card>
            

            <Card style={{ height:'30rem', width: '18rem' }}>
                <a href="/user/listingdetail">
                <Card.Img variant="top" src="https://img.freepik.com/free-vector/house-rent-sale-cartoon-illustration_138676-2057.jpg?w=2000" height="255px"/>
                <Card.Body>
                        <Card.Title>10 McMaster Road, Winnipeg, MB</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Price:$1000</Card.Subtitle>
                        <Card.Text>
                        Bedroom 3  Bathroom 2
                        </Card.Text>
                </Card.Body>
                </a>
                <button type="button" class="btn btn-default btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                     <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                </svg>
                </button>
            </Card>

            <Card style={{ height:'30rem', width: '18rem' }}>
                <a href="/user/listingdetail">
                <Card.Img variant="top" src="https://img.freepik.com/free-vector/house-rent-sale-cartoon-illustration_138676-2057.jpg?w=2000" height="255px"/>
                <Card.Body>
                        <Card.Title>10 McMaster Road, Winnipeg, MB</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Price:$1000</Card.Subtitle>
                        <Card.Text>
                        Bedroom 3 Bathroom 2
                        </Card.Text>
                </Card.Body>
                </a>
                <button type="button" class="btn btn-default btn-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                     <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                </svg>
                </button>
            </Card>

        </div>
        </div>
    )
}
