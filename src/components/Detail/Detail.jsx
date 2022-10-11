import { Form } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function ListingDetailComponent() {
  return (
    <>
      <h1>Detail Page</h1>
      <Image src="https://media.istockphoto.com/photos/for-rent-sign-in-front-of-new-house-picture-id149060607?k=20&m=149060607&s=612x612&w=0&h=To8zlQbIQ66ep7g-C-19aAFi2CdK98sFnLdSWL8zrl4="></Image>
      <h3>$1000</h3>
      <p>10 McMaster Road, Winnipeg, MB</p>
      <h4>Amenities</h4>
      <label>Bedrooms: 3</label><br></br>
      <label>Bathrooms: 2</label><br></br>
      <label>Unitilies Included: Yes</label><br></br>
      <label>Furnished: Yes</label><br></br>
      <label>Parking: 2</label><br></br>
    </>
  );
}
