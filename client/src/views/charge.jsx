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
  import PanelHeader from "components/PanelHeader/PanelHeader.js";
  import {getCharge,delCharge}from "../store/actions/chargeaction"
  import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
const Charge = () => {
    const state = useSelector((state) => state);
   // console.log(state.charge.items)
    const dispatch = useDispatch();
    dispatch(getCharge())
    //const del= dispatch(delClient(id))
    const deleteCharge=(id)=>{   
        dispatch(delCharge(id)) 
    }
    return ( <>
    <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4"><Button href="/admin/addcharge">Add Load</Button></CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                  <tr>
                    <th className="border-0">Load Name</th>
                    <th className="border-0">Date</th>
                    <th className="border-0">Total</th>
                  </tr>
                  </thead>
                  <tbody>
                  {state.charge.items.map(charge => (
                  <tr key={charge._id}>
                    <td>{charge.chargeName}</td>
                    <td>{charge.date}</td>
                    <td>{charge.total}</td>
                    
                    <td>
                    {/* <EditCharge charge={charge} /> */}
                    </td>
                    <td>
                      <Button
                        className="btn btn-danger"
                        onClick={() => deleteCharge(charge._id)}
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
 
export default Charge;