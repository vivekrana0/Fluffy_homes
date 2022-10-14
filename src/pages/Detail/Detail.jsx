import ListingDetailComponent from "../../components/Detail/Detail";
import NavbarComponent from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";

export default function ListingDetail() {
  const location = useLocation()
  const id = location.state


  return (
    <div className="DetailPage">
      <NavbarComponent />
      <ListingDetailComponent id={id}/>
      <Footer/>
    </div>
  );
}
