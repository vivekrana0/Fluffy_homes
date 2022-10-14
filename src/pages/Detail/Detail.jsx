import ListingDetailComponent from "../../components/Detail/Detail";
import NavbarComponent from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function ListingDetail() {
  return (
    <div className="DetailPage">
      <NavbarComponent />
      <ListingDetailComponent />
      <Footer/>
    </div>
  );
}
