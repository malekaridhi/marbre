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
  import { Link } from 'react-router-dom'
  import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
  import PanelHeader from "components/PanelHeader/PanelHeader.js";
  import {getFacture,delFacture}from "../store/actions/facturesAction"
  import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
const Facture = () => {
    const state = useSelector((state) => state);
     //console.log(state)
     const dispatch = useDispatch();
     dispatch(getFacture())
     //const del= dispatch(delClient(id))
     const deleteFacture=(id)=>{   
         dispatch(delFacture(id)) 
     }
    return ( <>
    <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4"><Button href="/admin/addfacture">Add Facture</Button> </CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                  <tr>
                     <th className="border-0">Facture</th>
                     <th className="border-0">Client</th>
                     <th className="border-0">Date</th>
                  </tr>
                  </thead>
                  <tbody>
                  {state.facture.items.map(facture => (
                     <tr key={facture._id}>
                       <td>#{facture.facturename}</td>
                       <td>{facture.clientname}</td>
                       <td>{facture.date}</td>
                       
                       <td>
                       <Link to={{     
         pathname: `${facture._id}/facture`,
         facture:facture
        }} ><CheckCircleOutlineIcon></CheckCircleOutlineIcon></Link>
                       </td>
                       <td>
                       
                       </td>
                       <td>
                         <Button
                           className="btn btn-danger"
                           onClick={() => deleteFacture(facture._id)}
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
 
export default Facture;