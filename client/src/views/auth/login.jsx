import React ,{ useRef, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
// import { useAuth } from "../../context/AuthContext"
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
    Alert
  } from "reactstrap";
  import { useDispatch } from "react-redux";
  import { useSelector } from "react-redux"
import { loginUser } from "../../store/actions/loginAction";
import {Redirect} from "react-router-dom";
  const LogIn = () => {
    const state = useSelector((state) => state);
    //console.log(state)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect,setRedirect] = useState(false);
    const dispatch = useDispatch();
    const logInUserAction = (email, password) => dispatch(loginUser(email, password));
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    async function handleSubmit(e) {
      e.preventDefault()
     
    
      try {
        setError("")
        setLoading(true)
        let user = await logInUserAction(email, password);
        if (user){
          setRedirect(true);
        }
      } catch {
        setError("Failed to log in")
      }
  
      setLoading(false)
    }
    const redirectTo = redirect;
    if(redirect){
        return <Redirect to="/admin/dashboard" />  
    }
      return ( <>
      <div className="content">
      <Card>
        <CardBody>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup id="email">
              <label>Email</label>
              <Input type="email" name="email" onChange={(e) => setEmail(e.target.value)}  required />
            </FormGroup>
            <FormGroup id="password">
              <label>Password</label>
              <Input type="password" onChange={(e) => setPassword(e.target.value)} required />
            </FormGroup>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </CardBody>
      </Card>
      <div className="w-100 text-center mt-2">
       
      </div>
      </div>
      </> );
  }
   
  export default LogIn;