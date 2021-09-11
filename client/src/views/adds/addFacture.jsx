import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
// reactstrap components
import axios from "axios";
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
import { createFacture } from "../../store/actions/facturesAction";
import { getClient } from "../../store/actions/userAction";
import { getCharge } from "../../store/actions/chargeaction";
import { getChEmp } from "../../store/actions/charEmpAction";
import { getProducts } from "../../store/actions/productaction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { v4 as uuidv4 } from "uuid";
const AddFacture = () => {
  const state = useSelector((state) => state);
  //console.log(state)
  const dispatch = useDispatch();
  //dispatch(getClient());
  const getcharges = () => {
    axios
    .get("http://localhost:8000/charge")
    .then((res) => {
      //console.log(res.data)
      setCharges(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  };
  const getClients = () => {
    axios
    .get("http://localhost:8000/clients")
    .then((res) => {
      //console.log(res.data)
      setClients(res.data);
    })
    .catch((err) => {
      console.error(err);
    })
  };
  const getProduct = () => {
    axios
      .get("http://localhost:8000/products")
      .then((res) => {
        //console.log(res.data)
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const getChargeClients = () => {
    axios
      .get("http://localhost:8000/charge-client")
      .then((res) => {
        //console.log(res.data)
        setChargeClients(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  //   dispatch(getProducts());
  const [facturename, setFactureName] = useState("");
  const [clientname, setClientName] = useState("");
  const [charge, setCharge] = useState("");
  const [chargeEmployer, setChargeEmployer] = useState("");
  const [chargeClients, setChargeClients] = useState([]);
  const [Charges, setCharges] = useState([]);
  const [clients, setClients] = useState([{}]);
  const [products, setProducts] = useState([]);
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), name: "", Qts: "", unitPrice: "" },
  ]);
  const data = {
    facturename: facturename,
    clientname: clientname,
    charge: charge,
    chargeEmployer: chargeEmployer,
    inputFields: inputFields,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    e.preventDefault();
    //console.log("data", {});
    dispatch(createFacture(data));
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), name: "", Qts: "", unitPrice: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  const changeFactureName = (e) => {
    setFactureName(e.target.value);
  };
  const changeClientName = (e) => {
    setClientName(e.target.value);
  };

  const changeCharge = (e) => {
    setCharge(e.target.value);
  };
  const changeChargeEmployer = (e) => {
    setChargeEmployer(e.target.value);
  };

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label> Refrence </label>
                        <Input
                          onChange={changeFactureName}
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Client Name</label>
                        <Input
                          onClick={getProduct()}
                          type="select"
                          name="select"
                          id="exampleSelect"
                          onChange={changeClientName}
                        >
                          <option>--</option>
                          {clients.map((client, key) => (
                            <option key={client._id} value={client.name}>
                              {client.name}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  {inputFields.map((inputField) => (
                    <div key={inputField.id}>
                      <Row>
                        <Col className="pr-1" md="4">
                          <FormGroup>
                            <label>Product Name</label>
                            <Input
                            onClick={getClients()}
                              name="name"
                              type="select"
                              id="exampleSelect"
                              onChange={(event) =>
                                handleChangeInput(inputField.id, event)
                              }
                            >
                              <option>--</option>
                              {products.map((product, key) => (
                                <option
                                  key={product._id}
                                  value={inputField.name}
                                  value={product.name}
                                >
                                  {product.name}
                                </option>
                              ))}
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col className="px-1" md="4">
                          <FormGroup>
                            <label>QTS</label>
                            <Input
                              name="Qts"
                              label="Qts"
                              variant="filled"
                              value={inputField.Qts}
                              onChange={(event) =>
                                handleChangeInput(inputField.id, event)
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-1" md="4">
                          <FormGroup>
                            <label> price </label>
                            <Input
                              name="unitPrice"
                              label="unit Price"
                              variant="filled"
                              placeholder="ZIP Code"
                              type="number"
                              value={inputField.unitPrice}
                              onChange={(event) =>
                                handleChangeInput(inputField.id, event)
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col md>
                          <Button
                            disabled={inputFields.length === 1}
                            onClick={() => handleRemoveFields(inputField.id)}
                          >
                            Remove
                          </Button>
                          <Button onClick={handleAddFields}>Add</Button>
                        </Col>
                      </Row>
                    </div>
                  ))}
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Charge</label>
                        <Input
                          onClick={getcharges()}
                          type="select"
                          name="select"
                          id="exampleSelect"
                          onChange={changeCharge}
                        >
                          <option>--</option>
                          {Charges.map((charge, key) => (
                            <option key={charge._id} value={charge.total}>
                              {charge.chargeName}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Select</label>
                        <Input
                        onClick={getChargeClients()}
                          type="select"
                          id="exampleSelect"
                          onChange={changeChargeEmployer}
                        >
                          <option>--</option>
                          {chargeClients.map((chargeem, key) => (
                            <option key={chargeem._id} value={chargeem.price}>
                              {chargeem.name} {chargeem.employerName}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
                <br />
                <Button className="btn btn-success" onClick={handleSubmit}>
                  Add
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AddFacture;
