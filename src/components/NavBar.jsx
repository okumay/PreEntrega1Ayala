import { CartWidget } from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => (
  <Navbar bg="dark" variant="dark" sticky="top">
    <Container>
      <Navbar.Brand href="#home">Emporio Retro</Navbar.Brand>
      <Nav>
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#products">Productos</Nav.Link>
        <Nav.Link href="#contact-us">Contacto</Nav.Link>
        <CartWidget />
      </Nav>
    </Container>
  </Navbar>
);

export { NavBar };
