import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import DropdownComponent from "../DropDown/DropDown";
import ListingCardComponent from "../ListingCard/ListingCard";

// AllListingComponent to display all listings on home page with favorite button
export default function AllListingComponent({ properties, setProperties }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handleClick() is used to add listings to favorite list
  async function handleClick(property, index) {
    console.log([...properties], index);
    let jwt = localStorage.getItem("token");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + jwt,
      },
      body: JSON.stringify(property),
    };

    const fetchResponse = await fetch("/api/property/liked", options);
    const response = await fetchResponse.json();

    if (response === "add") {
      alert('Added to Favorites')
      setProperties([...properties].push(property));
    } else {
      alert('Removed from Favorites')
      const original = [...properties];
      const removed = original.splice(index, 1);
      setProperties(original);
    }
  }

  // Display home page
  return (
    <div>
      <DropdownComponent />
      {properties.length ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "10px",
          }}
        >
          {/* <Container className="my-auto"> */}
          <Row style={{ width: "100%", marginLeft: 8 }}>
            {properties.map((property, index) => (
              <Col md="auto" style={{ marginTop: 5 }}>
                <ListingCardComponent
                  handleClick={handleClick}
                  index={index}
                  handleShow={handleShow}
                  property={property}
                  setProperties={setProperties}
                  handleClose={handleClose}
                  show={show}
                />
              </Col>
            ))}
          </Row>
          {/* </Container> */}
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
}
