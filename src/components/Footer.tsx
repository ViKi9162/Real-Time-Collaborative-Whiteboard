import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => (
  <footer className="bg-dark text-white mt-4 p-3">
    <Container>
      <Row>
        <Col className="text-center">
          &copy; 2024 Whiteboard App. All Rights Reserved.
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
