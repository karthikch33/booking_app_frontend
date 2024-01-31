import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function NotFound() {
  return (
    <div className="not-found-page">
      <Container>
        <Row>
          <Col>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NotFound;

