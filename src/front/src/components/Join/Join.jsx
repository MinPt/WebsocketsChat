import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Container className="w-50">
      <h1>Join</h1>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name"
        />
      </Form.Group>
      {/* <Form.Group
        onChange={(event) => setRoom(event.target.value)}
        className="mb-3"
        controlId="formBasicPassword"
      >
        <Form.Label>Room</Form.Label>
        <Form.Control type="text" placeholder="Room" />
      </Form.Group> */}
      <Link
        onClick={(e) => (!name ? e.preventDefault() : null)}
        to={`/rooms?name=${name}`}
      >
        <button className="btn btn-success">Sign In</button>
      </Link>
    </Container>
  );
};

export default Join;
