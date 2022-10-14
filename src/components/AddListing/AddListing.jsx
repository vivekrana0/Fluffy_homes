import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useInput from "../services/Address";
import './AddListing.css';

export default function AddListingComponent() {

  const address = useInput("")

  const [propertyData, setPropertyData] = useState({
    address : '',
    moveInDate: '',
    rent: 0,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    utility: false,
    furnish: false,
  })

  const [file, setFile] = useState('')

  const navigate = useNavigate()

  function handleChange(e) {
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value});
  };

  function handleFileChange(e) {
    setFile(e.target.files)
    console.log(file)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let jwt = localStorage.getItem('token')
      const formData = new FormData()

      for (const key in Object.keys(file)){
        formData.append('image', file[key])
      }

      for (const name in propertyData){
        formData.append(name, propertyData[name])
      }
      const options = {
        method: "POST",
        headers: { 'Authorization': 'Bearer' + jwt },
        body: formData
      }
      const fetchResponse = await fetch('/api/property/create', options)

      let response = await fetchResponse.json()

      console.log('Success: ' , response)

      navigate('/')

    } catch(err) {
      console.log('error', err)
    }
  }


  return (
<div className="AddForm">
<div class="d-flex justify-content-center">
  <h1>Add Rental Listing</h1>
</div>
  <div class="col-xs-1" align="center">
    <Form onSubmit={handleSubmit} >
    <Form.Group className="mb-3">
      <Form.Label column="lg" lg={2}>
        Street Address
      </Form.Label>
      <Form.Control
        size="lg"
        type="text"
        {...address}
      ></Form.Control>
      {address.suggestions?.length > 0 && (
        <div>{address.suggestions.map((suggestion, index) => {
            return <p key={index} onClick={() => {
                address.setValue(suggestion.place_name)
                propertyData.address = suggestion.place_name
                address.setSuggestions([])
            }}>{suggestion.place_name}</p>
        })}
        </div>
      )}
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label column="lg" lg={2}>Rent Price?</Form.Label>
        <Form.Control size="lg" name='rent' value={propertyData.rent} type="number" placeholder="Rent" onChange={handleChange} ></Form.Control>
      </Form.Group>

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

      <div>
        <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label column="lg" lg={2}>Utilities Included?</Form.Label>
            <Form.Select name='utility' value={propertyData.utility} type='boolean' onChange={handleChange} size="lg" aria-label="Default select example">
              <option>Yes or No?</option>
              <option  value={true}>Yes</option>
              <option  value={false}>No</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label column="lg" lg={2}>Fully Furnished?</Form.Label>
            <Form.Select name='furnish' value={propertyData.furnish} onChange={handleChange} size="lg" aria-label="Default select example">
              <option>Yes or No?</option>
              <option value={true} >Yes</option>
              <option  value={false} >No</option>
            </Form.Select>
          </Form.Group>
        </Col>
        </Row>
      </div>

      
      <Form.Group controlId="formFile" className="mb-3" >
        <Form.Label>Upload Images</Form.Label>
        <Form.Control onChange={handleFileChange} name='file' type="file" multiple accept="image/*"/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
    </div>
    </div>
  );
  
}