import React, { useState } from "react";
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
import SendIcon from '@material-ui/icons/Send';
import { createCharge } from "../../store/actions/chargeaction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const AddCharge = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [chargeName, setChargeName] = useState("");
  const [freightForword, setReightForword] = useState("");
  const [landTransporter, setLandTransporter] = useState("");
  const [stam, setStam] = useState("");
  const [logistics, setLogistics] = useState("");
  const [ChamberOfCommerce, setChamberOfCommerce] = useState("");
  const [FactoryCutting, setFactoryCutting] = useState("");
  const [FactoryBuffing, setFactoryBuffing] = useState("");
  const [transporter, setTransporter] = useState("");
  const [otherCharge, setotherCharge] = useState("");
  const [achatDuProduit, setAchatProduit] = useState("");
  const changeChargeName = (e) => {
    setChargeName(e.target.value);
  };
  const changeReightForword = (e) => {
    setReightForword(e.target.value);
  };
  const changeLandTransporter = (e) => {
    setLandTransporter(e.target.value);
  };
  const changeStam = (e) => {
    setStam(e.target.value);
  };
  const changeLogistics = (e) => {
    setLogistics(e.target.value);
  };
  const changeChamberOfCommerce = (e) => {
    setChamberOfCommerce(e.target.value);
  };
  const changFactoryCutting = (e) => {
    setFactoryCutting(e.target.value);
  };
  const changeFactoryBuffing = (e) => {
    setFactoryBuffing(e.target.value);
  };
  const changeTransporte = (e) => {
    setTransporter(e.target.value);
  };
  const changeOtherCharge = (e) => {
    setotherCharge(e.target.value);
  };
  const changeAchatProduit = (e) => {
    setAchatProduit(e.target.value);
  };
 const data ={ chargeName:chargeName,
    freightForword:freightForword,
    landTransporter:landTransporter,
    stam:stam,
    logistics:logistics,
    ChamberOfCommerce:ChamberOfCommerce,
    FactoryCutting:FactoryCutting,
    FactoryBuffing:FactoryBuffing,
    transporter:transporter,
    otherCharge:otherCharge,
    achatDuProduit:achatDuProduit,}
    const addCharge = async (e) => {
        e.preventDefault();
        console.log("data", { });
        dispatch(createCharge(data)) 
      
      }
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h5 className="title">Add load </h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col  md="12">
                      <FormGroup>
                        <label> Name</label>
                        <Input
                          placeholder="Load"
                          type="text"
                          onChange={changeChargeName}
                        />
                      </FormGroup>
                    </Col>
                  
                  </Row>
                  <Row>
                    <Col  className="pr-1" md="4">
                      <FormGroup>
                        <label> Freight Forword</label>
                        <Input
                          placeholder="Freight Forword"
                          type="text"
                          onChange={changeReightForword}
                        />
                      </FormGroup>
                    </Col>
                    <Col  className="pr-1" md="4">
                      <FormGroup>
                        <label>  Land Transporter</label>
                        <Input
                          placeholder="land transport"
                          type="text"
                          onChange={changeLandTransporter}
                        />
                      </FormGroup>
                    </Col>
                    <Col  className="pr-1" md="4">
                      <FormGroup>
                        <label> STAM</label>
                        <Input
                          placeholder="stam"
                          type="text"
                          onChange={changeStam}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col  md="12">
                      <FormGroup>
                        <label> Logistic</label>
                        <Input
                          placeholder="logistic"
                          type="text"
                          onChange={changeLogistics}
                        />
                      </FormGroup>
                    </Col>
                  
                  </Row><Row>
                    <Col  md="12">
                      <FormGroup>
                        <label> Chamber Of Commerce</label>
                        <Input
                          placeholder="chamber of commerce"
                          type="text"
                          onChange={changeChamberOfCommerce}
                        />
                      </FormGroup>
                    </Col>
                  
                  </Row><Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label> Factory Cutting</label>
                        <Input
                          placeholder="factory cutting"
                          type="text"
                          onChange={changFactoryCutting}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label> Factory Buffing</label>
                        <Input
                          placeholder="factory buffing"
                          type="text"
                          onChange={changeFactoryBuffing}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label> Transport</label>
                        <Input
                          placeholder="transport"
                          type="text"
                          onChange={changeTransporte}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    
                  
                  </Row><Row>
                   
                  
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Other Loads</label>
                        <Input
                          onChange={changeOtherCharge}
                          placeholder="loads"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Product Price </label>
                        <Input
                          onChange={changeAchatProduit}
                          placeholder="$"
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
                      onClick={addCharge}
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
    </>
  );
};

export default AddCharge;
