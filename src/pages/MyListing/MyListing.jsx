import { useEffect, useState } from "react";
import DeleteListingCardComponent from "../../components/DeleteListingCard/DeleteListingCard";
import NavbarComponent from "../../components/Navbar/Navbar";

export default function MyListingComponent({ user, setUser }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let jwt = localStorage.getItem("token");
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer" + jwt,
          },
        };
        let propertyData = await fetch("/api/property/myListing", options);
        console.log(propertyData);
        let propertiesObjects = await propertyData.json();
        console.log("Inside UseEffect: ", propertiesObjects);
        setProperties(propertiesObjects);
      } catch (error) {
        setProperties(null);
        console.log("Error: ", error);
      }
    };
    fetchData().catch(console.error);
  }, []);

  async function handleDeleteListing(property, index) {
    console.log([...properties]);
    console.log(index);
    console.log("List of property", property);
    let jwt = localStorage.getItem("token");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + jwt,
      },
      body: JSON.stringify(property),
    };
    const fetchData = await fetch("/api/property/delete", options);
    const fetchDataObject = await fetchData.json();
    if (fetchDataObject === "remove") {
      const original = [...properties];
      const removed = original.splice(index, 1);
      setProperties(original);
    }
  }
  
  return (
    <>
      <NavbarComponent user={user} setUser={setUser} />
      {properties.map((property) => (
        <DeleteListingCardComponent
          property={property}
          handleDeleteListing={handleDeleteListing}
        />
      ))}
    </>
  );
}
