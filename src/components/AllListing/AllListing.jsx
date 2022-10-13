import { useState } from "react";
// import Card from "react-bootstrap/Card";
// import DetailComponent from "../Detail/Detail";
import DropdownComponent from "../DropDown/DropDown";
import ListingCardComponent from "../ListingCard/ListingCard";

export default function AllListingComponent({properties, setProperties}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  async function handleClick(property, index){
    console.log([...properties], index)
    let jwt = localStorage.getItem('token')
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json", 'Authorization': 'Bearer' + jwt },
      body: JSON.stringify(property)
    }
    const fetchResponse = await fetch('/api/property/liked', options)
    const response = await fetchResponse.json()
    if(response === 'add'){
      setProperties([...properties].push(property))
    }else{
      const original = [...properties]
      const removed = original.splice(index, 1)
      setProperties(original)
    }
   
 
    
  }

  return (
    <div>
      <DropdownComponent />
      {properties.length ?
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >

        {properties.map((property, index) => 
          <ListingCardComponent handleClick={handleClick} index={index} handleShow={handleShow} property={property} setProperties={setProperties} handleClose={handleClose} show={show}/>
        )}
      </div>
      :
      <h4>No favorite listings</h4>
        }
      {/* <DetailComponent handleClose={handleClose} show={show} /> */}
    </div>
  );
}
