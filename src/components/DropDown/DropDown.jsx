import Dropdown from "react-bootstrap/Dropdown";

// DropdownComponent for the Sort By Filters
export default function DropdownComponent() {
  return (
    <>
      <Dropdown style={{ width: "100%", margin: 10 }}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1">Price low to High</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Price High to Low</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br></br>
    </>
  );
}
