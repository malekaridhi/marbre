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
  Label,
} from "reactstrap";
import SendIcon from '@material-ui/icons/Send';
import axios from "axios";
import { createProduct } from "../../store/actions/productaction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
const AddProduct = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [refrence, setRefrence] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setPicture] = useState("");
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeRefrence = (e) => {
    setRefrence(e.target.value);
  };
  const changeUnitPrice = (e) => {
    setUnitPrice(e.target.value);
  };

  function onImageChange(e) {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "ktzq171m");
    formData.append("file", files);
    setLoading(true);
    axios
      .post("	https://api.cloudinary.com/v1_1/dvl9yijld/image/upload", formData)
      .then((res) => {
        setPicture(res.data.secure_url);
        console.log("image", image);
      })
      .then(setLoading(false))
      .catch((err) => console.log(err));
  }
  const data = {
    name: name,
    refrence: refrence,
    unitPrice: unitPrice,
    image: image,
  };
  const addProd = async (e) => {
    e.preventDefault();
    console.log("data", {});
    dispatch(createProduct(data));
  };

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h5 className="title">Add Product</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          placeholder="Product"
                          type="text"
                          onChange={changeName}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Refrence</label>
                        <Input
                          onChange={changeRefrence}
                          placeholder="#"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Unit Price</label>
                        <Input
                          onChange={changeUnitPrice}
                          placeholder="$"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    
                  </Row>
                  <FormGroup>
                      <label for="exampleFile">File</label>
                      <Input type="file" name="file" onChange={onImageChange} />
                      {loading ? (
              <h1>Loading</h1>
            ) : (
              <img
                alt=""
                className="w-100 text text-center mt-2"
                height="150"
                width="150"
                src={image}
              />
            )}
                    </FormGroup>
                  <Row>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="default"
                      href="#pablo"
                      size="lg"
                      onClick={addProd}
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

export default AddProduct;
