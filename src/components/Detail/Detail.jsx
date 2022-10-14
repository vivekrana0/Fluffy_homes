// import { Form } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";


import "./Detail.css";
import { CarouselItem } from "react-bootstrap";

export default function DetailComponent({ property }) {
  console.log("property", property);

  const [properties, setProperties] = useState([]);

  const [singleProperty, setSingleProperty] = useState({});

  const params = useParams();
  console.log("[THE PARAMS]", params.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let propertyData = await fetch("/api/property/index");
        let propertiesObjects = await propertyData.json();

        const theSingleProperty = propertiesObjects.filter((spec) => {
          return spec._id === params.id;
        });
        setSingleProperty(theSingleProperty[0]);
        console.log(theSingleProperty[0].image);
      } catch (error) {
        setProperties(null);
        console.log("Error: ", error);
      }
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="DetailCard">
      <div class="d-flex justify-content-center">
        <h1>Detail Page</h1>
      </div>
      <br></br>
      <Carousel >
        {singleProperty?.image?.map((singleImage) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={singleImage}
              alt="First slide"
              height="500px"
              width='200px' 
              margin= '100'
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="DetailInfo">
        <h2>{singleProperty?.address}</h2>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h4>Price: {singleProperty?.rent} </h4>
      </div>
      <h4>Amenities</h4>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <ul>Bedrooms: {singleProperty?.bedrooms}</ul>
        <br></br>
        <ul>Bathrooms: {singleProperty?.bathrooms}</ul>
        <br></br>
        <ul>
          Unitilies Included:{" "}
          {JSON.stringify(singleProperty?.utility) === "true" ? "Yes" : "No"}
        </ul>
        <br></br>
        <ul>
          Furnished:{" "}
          {JSON.stringify(singleProperty?.furnish) === "true" ? "Yes" : "No"}
        </ul>
        <br></br>
        <ul>Parking: {singleProperty?.parking}</ul>
        <br></br>
      </div>

    </div>
  );
}
