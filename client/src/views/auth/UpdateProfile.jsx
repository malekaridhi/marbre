import React ,{ useRef, useState } from 'react'
import { Link, useHistory } from "react-router-dom"

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
  const UpdateProfile = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    function handleSubmit(e) {
      e.preventDefault()
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }
  
      const promises = []
      setLoading(true)
      setError("")
  
      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value))
      }
      if (passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value))
      }
  
      Promise.all(promises)
        .then(() => {
          history.push("/")
        })
        .catch(() => {
          setError("Failed to update account")
        })
        .finally(() => {
          setLoading(false)
        })
    }
      return ( <>
      <Card>
        <CardBody>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <FormGroup id="email">
              <label>Email</label>
              <Input
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </FormGroup>
            <FormGroup id="password">
              <label>Password</label>
              <Input
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </FormGroup>
            <FormGroup id="password-confirm">
              <label>Password Confirmation</label>
              <Input
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </FormGroup>
            <Button disabled={loading} className="w-100" type="submit">
              Update
            </Button>
          </Form>
        </CardBody>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div> 
      </> );
  }
   
  export default UpdateProfile;