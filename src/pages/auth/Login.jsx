import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/user/userAction";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const form = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(loginUser(form.values, navigate));
  };

  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <Container className="justify-content-md-center">
      <h3 className="my-3">Login Form</h3>
      <Form onSubmit={handleLogin}>
        <Row className="mb-3">
          <Form.Group as={Col} md={6}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              {...form.getInputProps("email")}
              placeholder="Enter email"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md={6}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...form.getInputProps("password")}
              placeholder="Password"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md={4}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
