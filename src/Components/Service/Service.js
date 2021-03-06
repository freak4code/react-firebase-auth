import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  // destructuring object
  const { id, title, subtitle, image, b } = service;

  // render html
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={image} width="170px" height="330px" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {subtitle}</Card.Text>

         {/* Dynamic routing */}
        <Link to={`/services/${id}`}>
          <button className="btn btn-warning">Detail</button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Service;
