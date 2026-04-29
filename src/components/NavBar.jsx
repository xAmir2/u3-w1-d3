import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar({ setGenre }) {
  return (
    <Navbar expand="lg" bg="black" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>The Library of Doom</Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link onClick={() => setGenre("fantasy")}>Fantasy</Nav.Link>
            <Nav.Link onClick={() => setGenre("history")}>History</Nav.Link>
            <Nav.Link onClick={() => setGenre("horror")}>Horror</Nav.Link>
            <Nav.Link onClick={() => setGenre("romance")}>Romance</Nav.Link>
            <Nav.Link onClick={() => setGenre("scifi")}>Scifi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;