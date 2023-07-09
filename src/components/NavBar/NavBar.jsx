import { NavDropdown } from "react-bootstrap";
import { CartWidget } from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Emporio Retro
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          <NavDropdown title="Productos">
            <NavDropdown.Item as={Link} to="/category/1">
              Remeras
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/2">
              Gorras
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/3">
              Accesorios
            </NavDropdown.Item>
          </NavDropdown>
          <CartWidget />
        </Nav>
      </Container>
    </Navbar>
  );
};

export { NavBar };
