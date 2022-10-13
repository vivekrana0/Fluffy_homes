import AddListingComponent from "../../components/AddListing/AddListing";
import NavbarComponent from "../../components/Navbar/Navbar";

export default function AddListing({ user, setUser }) {
  return (
    <>
      <NavbarComponent user={user} setUser={setUser} />
      <AddListingComponent />
    </>
  );
}
