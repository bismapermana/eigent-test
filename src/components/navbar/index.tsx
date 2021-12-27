import { Navbar, NavbarBrand } from "reactstrap";

const Navbars = () => {
  return (
    <div>
      <Navbar color="light" light={true} className="border">
        <NavbarBrand href="/">NEWS API</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Navbars;
