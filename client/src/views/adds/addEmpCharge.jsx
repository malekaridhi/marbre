import React , { useState} from 'react'
import SendIcon from '@material-ui/icons/Send';
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
  } from "reactstrap";
  import {createEmpCharge}from "../../store/actions/charEmpAction"
  import { useSelector } from "react-redux"
  import { useDispatch } from "react-redux";
  // core components
  import PanelHeader from "components/PanelHeader/PanelHeader.js";
const AddEmpCharge = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const [employerName, setEmployerName] = useState("");  
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [bankAccountName, setBankAccountName] = useState("")
    const changeName = (e) => {
        setName(e.target.value);
      };
      const changePrice = (e) => {
        setPrice(e.target.value);
      };
      const changeBankAN = (e) => {
        setBankAccountName(e.target.value);
      };
      const changeEmployerName = (e) => {
        setEmployerName(e.target.value);
      };
      const data={name:name,
        employerName:employerName,
        price:price,
        bankAccountName:bankAccountName,}
      const addhargeClient = async (e) => {
        e.preventDefault();
       // console.log("data", { });
        dispatch(createEmpCharge(data)) 
      }
    return ( <>
     <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col >
            <Card>
              <CardHeader>
                <h5 className="title">Add Employer loads </h5>
              </CardHeader>
              <CardBody>
                <Form>
                  
                  <Row>
                    <Col  md="12">
                      <FormGroup>
                        <label>Load Name</label>
                        <Input
                          placeholder="Company"
                          type="text"
                          onChange={changeName }
                        />
                      </FormGroup>
                    </Col>
                    
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Price</label>
                        <Input
                           onChange={changePrice }
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <FormGroup>
                        <label>Bank Account </label>
                        <Input
                          onChange={changeBankAN }
                          placeholder="Name"
                          type="text"
                        />
                      </FormGroup>
                      <FormGroup>
        <label for="exampleSelect">Employer</label>
        <Input type="select" name="select" id="exampleSelect"
         onChange={changeEmployerName }>
          <option>--</option>
          <option>omar</option>
          <option>walid</option>
          <option>hana</option>
          
        </Input>
      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  size="lg"
                  onClick={addhargeClient}
                >
                  <SendIcon></SendIcon>
                </Button>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div></> );
}
 
export default AddEmpCharge;