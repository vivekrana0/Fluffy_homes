import { useState } from "react";
import { Row, Col } from "react-bootstrap";
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
      setProperties([...properties].push(property));
    } else {
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
            justifyContent: "space-between",
          }}
        >
          <Row style={{ width: "100%", marginLeft: 10 }}>
            {properties.map((property, index) => (
              <Col md={3} style={{ marginTop: 10 }}>
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
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
}
