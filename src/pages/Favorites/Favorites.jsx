import NavbarComponent from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { useEffect, useState } from "react";
import FavoriteListings from "../../components/FavoritesListing/Favorites";
import { Navigate } from "react-router-dom";


export default function Favorite({ user, setUser }) {
  const [properties, setProperties] = useState([]);


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
    fetchData();
  }, []);


    
    if(!user){
        return <Navigate to='/user/register' />
    }
    return (
        <>    
           <NavbarComponent user={user} setUser={setUser}/>
            <FavoriteListings properties={properties} setProperties={setProperties}/>
            <Footer/>
        </>
    )
}

