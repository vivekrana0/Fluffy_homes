import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddressField from "./Address";

export default function AddListingComponent() {

  const [propertyData, setPropertyData] = useState({
    address : '',
    moveInDate: '',
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    utility: false,
    furnish: false
  })

  function handleChange(e) {
    console.log(e.target.name)
    console.log(e.target.value)
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value});
  };

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let jwt = localStorage.getItem('token')
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json", 'Authorization': 'Bearer' + jwt },
        body: JSON.stringify({
            address : propertyData.address,
            moveInDate: propertyData.moveInDate,
            bedrooms: propertyData.bedrooms,
            bathrooms: propertyData.bathrooms,
            parking: propertyData.parking,
            utility: propertyData.utility,
            furnish: propertyData.furnish
        })
      }
      const fetchResponse = await fetch('/api/property/create', options)

      let response = await fetchResponse.json()

      console.log('Success: ' , response)

    } catch(err) {
      console.log('error', err)
    }
  }


  return (
    <Form>
      {/* <Form.Group className="mb-3">
        <Form.Label column="lg" lg={2}>Street Address</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Street Address"></Form.Control>
      </Form.Group> */}
      <AddressField />

      <Form.Group className="mb-3">
        <Form.Label column="lg" lg={2}>Move-In-Date</Form.Label>
        <Form.Control size="lg" name='moveInDate' value={propertyData.moveInDate} type="date" onChange={handleChange} ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label column="lg" lg={2}>Number of Bedrooms</Form.Label>
        <Form.Control size="lg" name="bedrooms" value={propertyData.bedrooms} type="number" placeholder="Bedrooms" onChange={handleChange}></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label column="lg" lg={2}>Number of Bathrooms</Form.Label>
        <Form.Control size="lg" name="bathrooms" value={propertyData.bathrooms} type="number" placeholder="Bathrooms" onChange={handleChange}></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label column="lg" lg={2}>Number of Parkings</Form.Label>
        <Form.Control size="lg" name="parking" value={propertyData.parking} type="number" placeholder="Parkings" onChange={handleChange} ></Form.Control>
      </Form.Group>

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label column="lg" lg={2}>Utilities Included?</Form.Label>
            <Form.Select name='utility' onChange={handleChange} size="lg" aria-label="Default select example">
              <option  >Yes or No?</option>
              <option  value={true}>Yes</option>
              <option  value={false}>No</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label column="lg" lg={2}>Furnished?</Form.Label>
            <Form.Select name='furnish'  onChange={handleChange} size="lg" aria-label="Default select example">
              <option>Yes or No?</option>
              <option value={true} >Yes</option>
              <option  value={false} >No</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
