import { Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
// import DetailComponent from "../Detail/Detail";
import "./ListingCard.css";

export default function ListingCardComponent({handleShow, property}) {
  return (
    <div className="container">
       {/* <Container className='p-4'> 
        <Row className='row-cols-1 row-cols-md-3 g-4'> */}

          <Card 
          style={{ height: "30rem", width: "18rem" }} 
          onClick={handleShow} 
          className="box"
          >
            {/* <a href="/user/listingdetail"> */}
            <Link href="/user/listingdetail" params={property._id}>
            <Card.Img variant="top" src={property.image} height="255px" />
            <Card.Body>
              <Card.Title>{property.address}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Price:$ {property.rentprice}</Card.Subtitle>
              <Card.Text>Bedroom {property.bedrooms} Bathroom {property.bathrooms}</Card.Text>
            </Card.Body>
            </Link>
            {/* </a> */}
            <button type="button" class="btn btn-default btn-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-bookmark-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
                />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              </svg>
            </button>
          </Card>
 
      {/* <DetailComponent property={property}/> */}
      {/* </Row>
      </Container> */}
    </div>
    
  );
}
