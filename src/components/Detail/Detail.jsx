// import { Form } from "react-bootstrap";
import Image from "react-bootstrap/Image";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
import "./Detail.css";

export default function DetailComponent({property}) {
  return (
    <div className="DetailCard">
    <div class="d-flex justify-content-center">
      <h1>Detail Page</h1>
    </div>
<br></br>
    <div className="DetailImage" style={{  width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <Image src="https://media.istockphoto.com/photos/for-rent-sign-in-front-of-new-house-picture-id149060607?k=20&m=149060607&s=612x612&w=0&h=To8zlQbIQ66ep7g-C-19aAFi2CdK98sFnLdSWL8zrl4="></Image>
      </div>
    <div className="DetailInfo" >
      <h2>10 McMaster Road, Winnipeg, MB</h2>
    </div>
      <div style={{  width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <h4>Price: $1000</h4>
      </div>
      <h4>Amenities</h4>
      <div style={{  width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <ul>Bedrooms: 3</ul><br></br>
      <ul>Bathrooms: 2</ul><br></br>
      <ul>Unitilies Included: Yes</ul><br></br>
      <ul>Furnished: Yes</ul><br></br>
      <ul>Parking: 2</ul><br></br>
    </div>
    </div>
    // <>
    //   <Modal
    //     show={show}
    //     onHide={handleClose}
    //     size="xl"
    //     // dialogClassName="modal-100w"
    //     centered
    //     // aria-labelledby="example-custom-modal-styling-title"
    //   >
    //     <Modal.Header closeButton>
    //       <Modal.Title>Modal heading</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //     Woohoo, you're reading this text in a modal!</Modal.Body>
    //     <Modal.Footer>
    //       <Button variant="secondary" onClick={handleClose}>
    //         Close
    //       </Button>
    //       <Button variant="primary" onClick={handleClose}>
    //         Save Changes
    //       </Button>
    //     </Modal.Footer>
    //   </Modal>
    // </>
  );
}
