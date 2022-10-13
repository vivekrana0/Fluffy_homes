import { useState } from "react";
// import Card from "react-bootstrap/Card";
// import DetailComponent from "../Detail/Detail";
import DropdownComponent from "../DropDown/DropDown";
import ListingCardComponent from "../ListingCard/ListingCard";

export default function AllListingComponent({properties}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <DropdownComponent />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {properties.map(property => 
          <ListingCardComponent handleShow={handleShow} property={property} handleClose={handleClose} show={show}/>
        )}
      </div>
      {/* <DetailComponent handleClose={handleClose} show={show} /> */}
    </div>
  );
}
