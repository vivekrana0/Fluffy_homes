import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./UpdateListing.css";


export default function UpdateListingComponent() {
    return (
  <div className="UpdateForm">
    <div class="d-flex justify-content-center">
      <h1>Update Rental Listing</h1>
    </div>
  <div class="col-xs-1" align="center">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label column="lg" lg={2}>Street Address</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Street Address"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label column="lg" lg={2}>Move-In-Date</Form.Label>
            <Form.Control size="lg" type="date"></Form.Control>
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label column="lg" lg={2}>Number of Bedrooms</Form.Label>
          <Form.Control size="lg" type="number" placeholder="Bedrooms"></Form.Control>
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label column="lg" lg={2}>Number of Bathrooms</Form.Label>
          <Form.Control size="lg" type="number" placeholder="Bathrooms"></Form.Control>
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label column="lg" lg={2}>Number of Parkings</Form.Label>
          <Form.Control size="lg" type="number" placeholder="Parkings"></Form.Control>
        </Form.Group>
      
      <div>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label column="lg" lg={2}>Utilities Included?</Form.Label>
              <Form.Select size="lg" aria-label="Default select example">
                <option>Yes or No?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label column="lg" lg={2}>Fully Furnished?</Form.Label>
              <Form.Select size="lg" aria-label="Default select example">
                <option>Yes or No?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </div>



        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      </div>
    </div>
    );
  }
