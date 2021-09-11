import React from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Table,
    Row,
    Col,
    Button
  } from "reactstrap";
  import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
  import { Link } from 'react-router-dom'
  import PanelHeader from "components/PanelHeader/PanelHeader.js";
  import { connect } from 'react-redux'
  import {getProducts,delProduct}from "../store/actions/productaction"
  import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
const Products = () => {
    const state = useSelector((state) => state);
     //console.log(state.products.items)
     const dispatch = useDispatch();
     dispatch(getProducts())
     //const del= dispatch(delClient(id))
     const deleteProducts=(id)=>{   
         dispatch(delProduct(id)) 
     }
    return ( <>
    <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4"><Button href="/admin/addproduct">Add Product </Button></CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                  <tr>
                      <th className="border-0">Product</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Refrence</th>
                      <th className="border-0">Unit Price </th>
                    </tr>
                  </thead>
                  <tbody>
                  {state.products.items.map(product => (
                  <tr key={product._id}>
                    <td><img width="62px" hight="42px" src={product.image} alt="" /></td>
                    <td>{product.name}</td>
                    <td>{product.refrence}</td>
                    <td>{product.unitPrice}</td>
                    
                    <td>
                    <Link to={{     
         pathname: `${product._id}/product`,
         product:product
        }} ><CheckCircleOutlineIcon></CheckCircleOutlineIcon></Link>
                    </td>
                    <td>
                      <Button
                        className="btn btn-danger"
                        onClick={() => deleteProducts(product._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    
    </> );
}
 
export default Products;