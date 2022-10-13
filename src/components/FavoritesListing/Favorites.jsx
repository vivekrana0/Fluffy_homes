import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import DropdownComponent from "../DropDown/DropDown";
import ListingCardComponent from "../ListingCard/ListingCard";

// FavoriteListings() to add listing in favorite
export default function FavoriteListings({ properties, setProperties }) {
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
  
  return (
    <>
      {properties.length ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Row style={{ width: "100%", marginLeft: 10 }}>
            {properties.map((property, index) => (
              <Col md={3} style={{ marginTop: 10 }}>
                <ListingCardComponent
                  handleClick={handleClick}
                  index={index}
                  property={property}
                  setProperties={setProperties}
                />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <h4>No favorite listings</h4>
      )}
    </>
  );
}
