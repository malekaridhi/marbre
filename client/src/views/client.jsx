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
  import SendIcon from '@material-ui/icons/Send';
  import PanelHeader from "components/PanelHeader/PanelHeader.js";
  import { connect } from 'react-redux'
  import {getClient,delClient}from "../store/actions/userAction"
  import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { thead, tbody } from "variables/general";
const Clients = () => {
  const state = useSelector((state) => state);
   //console.log(state)
    const dispatch = useDispatch();
    dispatch(getClient())
    //const del= dispatch(delClient(id))
    const deleteClient=(id)=>{   
        dispatch(delClient(id)) 
    }
    return ( <>
     <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4"><Button href="/admin/addclient">Add Client </Button></CardTitle>
               
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                  <tr>
                    
                    <th className="border-0">Name</th>
                    <th className="border-0">Last Name</th>
                    <th className="border-0">Adress</th>
                    <th className="border-0">Company Name</th>
                  </tr>
                  </thead>
                  <tbody>
                  {state.clients.items.map(client => (
                  <tr key={client._id}>
                    <td>{client.name}</td>
                    <td>{client.lastname}</td>
                    <td>{client.adress}</td>
                    <td>{client.companyName}</td>
                    
                    <td>
                    
                    </td>
                    <td>
                      <div
                       
                        onClick={() => deleteClient(client._id)}
                      >
                       <i className={"now-ui-icons ui-1_simple-remove "} />
                      </div>
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

  
 
export default Clients ;