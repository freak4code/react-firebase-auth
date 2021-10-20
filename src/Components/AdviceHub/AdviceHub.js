import React from "react";
import { Card, ListGroup } from "react-bootstrap";

// // destructuring in the parameeter field
const AdviceHub = ({title}) => {

  // render html
  return (
    <Card bg="danger" border="success" style={{ width: "100%" }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{title}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default AdviceHub;
