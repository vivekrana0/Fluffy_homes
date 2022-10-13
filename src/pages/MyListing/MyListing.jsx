import { useEffect, useState } from "react"
import AllListingComponent from "../../components/AllListing/AllListing";
import NavbarComponent from "../../components/Navbar/Navbar";

export default function MyListingComponent({user, setUser}) {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            try {
                let jwt = localStorage.getItem('token')
                const options = {
                    method: "POST",
                    headers: { "Content-Type": 'application/json', 'Authorization': 'Bearer' + jwt },
                }
                let propertyData = await fetch("/api/property/myListing", options)
                console.log(propertyData)
                let propertiesObjects = await propertyData.json()
                console.log("Inside UseEffect: ", propertiesObjects)
                setProperties(propertiesObjects)
                
            } catch(error) {
                setProperties(null)
                console.log("Error: ", error)
            }
        }
        fetchData().catch(console.error)
    }, [])

    return(
        <>
            <NavbarComponent user={user} setUser={setUser}/>
            <AllListingComponent properties={properties} />
        </>
    )
}