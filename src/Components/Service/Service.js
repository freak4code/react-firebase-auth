import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, title, subtitle, image, b } = service;
  return (
    // <div className="container">
    //   <p className="col-12 col-lg-4 d-flex justify-content-center align-items-center">Service</p>
    //   <p className="col-12 col-lg-4 d-flex justify-content-center align-items-center">Image</p>
    // </div>

    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={image} width="170px" height="330px" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {subtitle}</Card.Text>
        <Link to={`/services/${id}`}>
                <button className="btn btn-warning">Detail</button>
            </Link>
      </Card.Body>
    </Card>
  );
};

export default Service;
