import Dropdown from "react-bootstrap/Dropdown";

export default function DropdownComponent() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Sort By
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1">Price low to High</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Price High to Low</Dropdown.Item>
          <Dropdown.Item href="#/action-3">sort</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br></br>
    </>
  );
}
