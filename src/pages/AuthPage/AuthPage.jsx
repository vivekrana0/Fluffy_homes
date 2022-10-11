import SignUpForm from "../../components/SignUpForm/SignUpForm";
import NavbarComponent from "../../components/Navbar/Navbar";
import "./AuthPage.css"
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";


export default function Authpage({setUser}) {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <div>
            
            <NavbarComponent/>
            <h4 className="welcome">Welcome to Rental Bravo</h4>
            <div className="btn-div" >
            <button onClick={() => (setShowLogin(true))} >LogIn</button>
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
            </div>
            {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        </div>
    )
}