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
  import {createclient}from "../../store/actions/userAction"
  import { useSelector } from "react-redux"
  import { useDispatch } from "react-redux";
  // core components
  import PanelHeader from "components/PanelHeader/PanelHeader.js";
const AddClient = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
    const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const data ={ name:name,
    lastname:lastname,
    adress:adress,
    companyName:companyName}
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeLastName = (e) => {
    setLastName(e.target.value);
  };
  const changeAdress = (e) => {
    setAdress(e.target.value);
  };
  const changeCompanyName = (e) => {
    setCompanyName(e.target.value);
  };
  const addClient = async (e) => {
    e.preventDefault();
    //console.log("data", { });
    dispatch(createclient(data)) 
  
  }
    return ( <>
    
     <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col >
            <Card>
              <CardHeader>
                <h5 className="title">Add Client </h5>
              </CardHeader>
              <CardBody>
                <Form>
                  
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          placeholder="Company"
                          type="text"
                          onChange={changeName }
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          onChange={changeLastName }
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                           onChange={changeAdress }
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <FormGroup>
                        <label>Company Name</label>
                        <Input
                          onChange={changeCompanyName }
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Button
                  className="btn-neutral btn-icon btn-round"
                  color="default"
                  href="#pablo"
                  size="lg"
                  onClick={addClient}
                >
                  <SendIcon></SendIcon>
                </Button>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    </> );
}
 
export default AddClient;