import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function UpdateListingComponent() {
    return (
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
              <Form.Label column="lg" lg={2}>Furnished?</Form.Label>
              <Form.Select size="lg" aria-label="Default select example">
                <option>Yes or No?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
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
