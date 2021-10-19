import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const AdviceHub = ({title}) => {
  return (
    <Card bg="danger" border="success" style={{ width: "100%" }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{title}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default AdviceHub;
