import NavbarComponent from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { useEffect, useState } from "react"
import AllListingComponent from "../../components/AllListing/AllListing";

export default function Favorite() {

    const [properties, setProperties] = useState([])

    useEffect(()=>{
        async function fetchData(){
        try{
            let jwt = localStorage.getItem('token')
            const options = {
                method: "GET",
                headers: { "Content-Type": 'application/json','Authorization': 'Bearer' + jwt },
              }
            const result = await fetch('/api/property/favorites', options)
            const fav = await result.json()
            setProperties(fav)
            
        } catch(err) {
            console.log("Error: ", err)
        }
    }
    fetchData()
    }, [])


    return (
        <>
            <NavbarComponent/>
            <AllListingComponent properties={properties} setProperties={setProperties}/>
            <Footer/>
        </>
    )
}