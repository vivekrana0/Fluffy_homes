import NavbarComponent from "../../components/Navbar/Navbar"

export default function Home({user, setUser}) {
    return (
        <>
            <NavbarComponent user={user} setUser={setUser}/>
        </>
    )
}