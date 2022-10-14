import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// DeleteListingCardComponent
export default function DeleteListingCardComponent({
  property,
  index,
  handleDeleteListing,
}) {
  return (
    <>
      <div className="container">
        <Card style={{ height: "30rem", width: "18rem" }} className="box">
          <Link href="/user/listingdetail" params={property._id}>
            <Card.Img variant="top" src={property.image[0]} height="255px" />
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
          <div>
            <Button
              variant="outline-danger"
              size="lg"
              onClick={() => handleDeleteListing(property, index)}
            >
              Delete
            </Button>
            <Button variant="outline-warning" size="lg">
              Update
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
