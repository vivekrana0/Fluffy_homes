import { useEffect, useState } from "react";
import DeleteListingCardComponent from "../../components/DeleteListingCard/DeleteListingCard";
import NavbarComponent from "../../components/Navbar/Navbar";

// MyListing Page for the users who have listed their properties
export default function MyListingComponent({ user, setUser }) {
  const [properties, setProperties] = useState([]);

  //   useEffect() will loads the page when its rendered
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
        let propertiesObjects = await propertyData.json();
        setProperties(propertiesObjects);
      } catch (error) {
        setProperties(null);
        console.log("Error: ", error);
      }
    };
    fetchData().catch(console.error);
  }, []);

  //   Will handle the delete function of the property
  async function handleDeleteListing(property, index) {
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
