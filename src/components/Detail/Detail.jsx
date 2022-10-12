import { Form } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import './Detail.css'

export default function ListingDetailComponent() {
  return (
    <div>
    <div style={{  width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <h1>Detail Page</h1>
    </div>

    <div className="DetailCard" style={{  width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <Image src="https://media.istockphoto.com/photos/for-rent-sign-in-front-of-new-house-picture-id149060607?k=20&m=149060607&s=612x612&w=0&h=To8zlQbIQ66ep7g-C-19aAFi2CdK98sFnLdSWL8zrl4="></Image>
      </div>
    <div className="DetailInfo" >
      <p>10 McMaster Road, Winnipeg, MB</p>
    </div>
      <div style={{  width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <h3>Price: $1000</h3>
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
  );
}
