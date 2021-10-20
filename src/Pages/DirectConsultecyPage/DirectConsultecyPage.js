import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./DirectConsultecyPage.css";

const DirectConsultecyPage = () => {
  // using auth c
  const { user } = useAuth();
  // for showing modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Form className="dc-form">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={user.displayName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" value={user.email} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Your problem">
          <Form.Control
            as="textarea"
            placeholder="Write your problem here"
            style={{ height: "160px" }}
          />
        </FloatingLabel>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Online Consultency" />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleShow}>
          Submit
        </Button>
      </Form>

      {/* Modal */}

      <Modal backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {user.displayName}, please wait for our response.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Thank you !
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DirectConsultecyPage;
