import { useState } from "react";
// import Card from "react-bootstrap/Card";
// import DetailComponent from "../Detail/Detail";
import DropdownComponent from "../DropDown/DropDown";
import ListingCardComponent from "../ListingCard/ListingCard";
import {Col, Row} from 'react-bootstrap'
import "./AllListing.css"

export default function AllListingComponent({properties}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <DropdownComponent />
      <Row style={{  width: '100%', marginLeft: 10}}>
        {properties.map(property => 
          <Col md={3} style={{ marginTop: 10 }}>
            <ListingCardComponent handleShow={handleShow} property={property} handleClose={handleClose} show={show}/>
          </Col>
        )}
      </Row>
      {/* <DetailComponent handleClose={handleClose} show={show} /> */}
    </div>
  );
}
