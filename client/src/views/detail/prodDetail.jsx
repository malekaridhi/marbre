import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
  CardImg,
  CardText
} from "reactstrap";
import SendIcon from "@material-ui/icons/Send";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { getOneProducts } from "../../store/actions/productaction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./detail.css";
const Proddetail = ({ match }) => {
  const state = useSelector((state) => state);
console.log(state);
//   console.log(match.params.id)
  const prodId = match.params.id;
  const dispatch = useDispatch();
  dispatch(getOneProducts(prodId));
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4"></CardTitle>
              </CardHeader>
              {state.products.item.map((product,key)=>(
              <CardBody key="key">
              <Row >
                    <Col className="pr-1" md="6">
                     <CardImg src={product.image} />
                     <br />
                     <br />
                    </Col>
                    <Col className="px-1" md="4">
                <Card body outline color="success" >
                
                 <p ><b > Name : </b>   {product.name}
                    </p>
                    <hr />
                    <p > <b>Refrence : </b> # {product.refrence}</p>
                    <hr />
                    <p > <b>Price : </b>  {product.unitPrice} DT</p>
                    
                    </Card>
                    </Col>
                    <Col className="pr-1" md="2">
                    
                    </Col>
                  </Row>
              </CardBody>
               ))}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Proddetail;
