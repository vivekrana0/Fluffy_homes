
import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Authpage from "../AuthPage/AuthPage";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import AddListing from "../AddListing/AddListing";
import UpdateListing from "../UpdateListing/UpdateListing";
import Footer from "../../components/Footer/Footer";
import Detail from "../Detail/Detail";
import Favorite from "../Favorites/Favorites";
import MyListingComponent from "../MyListing/MyListing";
import FooterComponent from "../../components/Footer/Footer";


export default function App() {
  const [user, setUser] = useState(null);

  // useEffect() to mount all the data when app loads
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        return setUser(null);
      } else {
        let user = payload.user;
        setUser(user);
      }
    }
  }, []);


  return (

        
      <main className="App">
       <Routes>
            <Route path='/user/addlisting' element={<AddListing user={user} setUser={setUser} />} />
            <Route path='/user/updatelisting' element={<UpdateListing />} />
            <Route path='/user/mylisting' element={<MyListingComponent user={user} setUser={setUser} />} />
            <Route path='/user/favorites' element={<Favorite user={user} setUser={setUser} />} />
            <Route path='' element={<Home user={user} setUser={setUser} />} />
            <Route path='/user/register' element={<Authpage setUser={setUser} />} />
            <Route path='/user/listingdetail/' element={<Detail user={user}/>} />
            <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      


      
      </main>
    )

}
