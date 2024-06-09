import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useKeycloak from '../hooks/useKeycloak';

const Header: React.FC = () => {
  const { keycloak } = useKeycloak();

  const handleLogout = () => {
    keycloak?.logout();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/whiteboard">Whiteboard App</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
