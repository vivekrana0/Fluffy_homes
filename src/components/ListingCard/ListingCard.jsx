import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
import "./ListingCard.css";

// ListingCardComponent
export default function ListingCardComponent({
  handleClick,
  handleDetails,
  handleShow,
  property,
  index,
}) {
  console.log('[property]', property)
  return (
    <div className="container">
      <Card
        style={{ height: "32rem", width: "17rem" }}
        className="box"
      >
        <Link to="/user/listingdetail" state={property._id} >
          <Card.Img variant="top" src={property.image[0]} height="240px" />
          <Card.Body>
            <Card.Title>{property.address}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Price:$ {property.rent}
            </Card.Subtitle>
            <Card.Text>
              Bedroom {property.bedrooms} Bathroom {property.bathrooms}
            </Card.Text>
          </Card.Body>
          </Link>
        <button
          type="button"
          class="btn btn-default btn-lg"
          onClick={() => handleClick(property, index)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-bookmark-heart"
            viewBox="0 0 15 15"
          >
            <path
              fill-rule="evenodd"
              d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
            />
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
          </svg>
        </button>
      </Card>
    </div>
  );
}
