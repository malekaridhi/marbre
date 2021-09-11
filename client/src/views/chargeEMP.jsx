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
  import {getChEmp,delChEmp}from "../store/actions/charEmpAction"
  import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
const CHaEmployer = () => {
    const state = useSelector((state) => state);
    // console.log(state.chargeEmp.items)
     const dispatch = useDispatch();
     dispatch(getChEmp())
     //const del= dispatch(delClient(id))
     const deleteChargeClient=(id)=>{   
         dispatch(delChEmp(id)) 
     }
    return (<>
    <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4"><Button href="/admin/addempchar">Add Employer Load</Button></CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                  <tr>
                  <th className="border-0">Name</th>
                  <th className="border-0">Price</th>
                  </tr>
                  </thead>
                  <tbody>
                  {state.chargeEmp.items.map(clientch => (
                  <tr key={clientch._id}>
                    <td>{clientch.name}</td>
                    <td>{clientch.price}</td>
                    
                    
                    <td>
                   
                    </td>
                    <td>
                      <Button
                        className="btn btn-danger"
                        onClick={() => deleteChargeClient(clientch._id)}
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
    
         </>  );
}
 
export default CHaEmployer;