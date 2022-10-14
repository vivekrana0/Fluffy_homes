import AddListingComponent from "../../components/AddListing/AddListing";
import NavbarComponent from "../../components/Navbar/Navbar";
import { Navigate } from "react-router-dom";

export default function AddListing({user, setUser}) {
    if(!user){
        return <Navigate to='/user/register' />
    }
    return(
        <>
            <NavbarComponent user={user} setUser={setUser}/>
            <AddListingComponent />
        </>
    )
}
