import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/actions/signinAction";
import { Redirect } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  Form,
  Input,
  FormGroup,
  Alert,
} from "reactstrap";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [routeRedirect, setRedirect] = useState("");
  const dispatch = useDispatch();
  const createUserAction = (email, password) =>
    dispatch(createUser(email, password));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await createUserAction(email, password);
      setRedirect(true);

    } catch (Error) {
      setError("Failed to create an account", Error, console.log(Error));
      console.log(email);
    }

    setLoading(false);
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
  }
  const redirectTo = routeRedirect;
  if(redirectTo){
      return <Redirect to="/admin/dashboard" />  
  }
  return (
    <>
      <div className="content">
        <Card>
          <CardBody>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <FormGroup id="email">
                <label>Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                  required
                />
              </FormGroup>
              <FormGroup id="password">
                <label>Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  
                  required
                />
              </FormGroup>
              <FormGroup id="password-confirm">
                <label>Password Confirmation</label>
                <Input
                  type="password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  
                  required
                />
              </FormGroup>
              <Button disabled={loading} className="w-100" type="submit">
                Sign Up
              </Button>
            </Form>
          </CardBody>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
