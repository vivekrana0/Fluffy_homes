import NavbarComponent from "../../components/Navbar/Navbar"
import AllListingComponent from '../../components/AllListing/AllListing'
import { useEffect, useState } from "react"


export default function Home({user, setUser}) {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                let propertyData = await fetch("/api/property/index")
                let propertiesObjects = await propertyData.json()
                console.log("Inside Home > useEffect : ", propertiesObjects)
                setProperties(propertiesObjects)
            } catch(error) {
                setProperties(null)
                console.log("Error: ", error)
            }
        }

        fetchData().catch(console.error);
    }, [])

    return (
        <div>
            <NavbarComponent user={user} setUser={setUser}/>
            <br></br>
            <AllListingComponent properties={properties}/>
        </div>
    )
}
