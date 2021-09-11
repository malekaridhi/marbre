import React from 'react'
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
  import "./invoice.css"
  import Pdf from "react-to-pdf";
  const ref = React.createRef();
  import SendIcon from "@material-ui/icons/Send";
  import PanelHeader from "components/PanelHeader/PanelHeader.js";
  import { getOneFacture } from "../../store/actions/facturesAction";
  import { useSelector } from "react-redux";
  import { useDispatch } from "react-redux";
const FactureDetail = ({ match }) => {
    const state = useSelector((state) => state);
     //console.log(state);
      // console.log(match.params.id)
      const faId = match.params.id;
      const dispatch = useDispatch();
      dispatch(getOneFacture(faId));
    return ( <>
    <PanelHeader size="sm" />
      <div className="content">
      <br />
      <br />
        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <a className="btn bg-white btn-light mx-1px text-95"  data-title="PDF" onClick={toPdf}><i className="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>Generate Pdf</a>}
      </Pdf>
      {state.facture.item.map((facture,key)=>( 
<div key={facture._id} ref={ref} className="page-content container">

    <div key={facture._id}>
    
    <div key={facture._id}>
        
        <h1 className="page-title text-secondary-d1">
            Invoice
            <small className="page-info">
                <i className="fa fa-angle-double-right text-80"></i>
                REF: #{facture.facturename}
            </small>
        </h1>

        <div className="page-tools">
            <div className="action-buttons">
                {/* <a className="btn bg-white btn-light mx-1px text-95" href="#" data-title="Print">
                    <i className="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                    Print
                </a>
                <a className="btn bg-white btn-light mx-1px text-95" href="#" data-title="PDF">
                    <i className="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                    Export
                </a> */}
            </div>
        </div>
    </div>

    <div className="container px-0">
        <div className="row mt-4">
            <div className="col-12 col-lg-10 offset-lg-1">
                <div className="row">
                    <div className="col-12">
                        <div className="text-center text-150">
                            
                            <span className="text-default-d3"></span>
                        </div>
                    </div>
                </div>
                

                <hr className="row brc-default-l1 mx-n1 mb-4" />

                <div className="row">
                    <div className="col-sm-6">
                        <div>
                            <span className="text-sm text-grey-m2 align-middle">To:</span>
                            <span className="text-600 text-110 text-blue align-middle">{facture.clientname}</span>
                        </div>
                        <div className="text-grey-m2">
                            <div className="my-1">
                               
                            </div>
                            <div className="my-1">
                               
                            </div>
                            <div className="my-1"><b className="text-600"></b></div>
                        </div>
                    </div>
                   

                    <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                        <hr className="d-sm-none" />
                        <div className="text-grey-m2">
                            <div className="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                Invoice
                            </div>

                            <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span className="text-600 text-90">REF:</span> {facture.facturename}</div>

                            <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span className="text-600 text-90">Issue Date:{facture.date}</span> </div>

                            <div className="my-2"><span className="text-600 text-90"></span> <span className="badge badge-warning badge-pill px-25">Unpaid</span></div>
                        </div>
                    </div>
                   
                </div>

                <div className="mt-4">
                    <div className="row text-600 text-white bgc-default-tp1 py-25">
                        <div className="d-none d-sm-block col-1"></div>
                        <div className="col-9 col-sm-5">Description</div>
                        <div className="d-none d-sm-block col-4 col-sm-2">Qty</div>
                        <div className="d-none d-sm-block col-sm-2">Unit Price</div>
                        <div className="col-2">Amount</div>
                    </div>
                    {facture.inputFields.map((item)=>(
<div>
                    
                    <div className="text-95 text-secondary-d3">
                        <div className="row mb-2 mb-sm-0 py-25">
                            <div className="d-none d-sm-block col-1"></div>
                            <div className="col-9 col-sm-5">{item.name}</div>
                            <div className="d-none d-sm-block col-2">{item.Qts}</div>
                            <div className="d-none d-sm-block col-2 text-95">{item.unitPrice}DT</div>
                            <div className="col-2 text-secondary-d2">{item.price}DT</div>
                        </div>
                    </div>
                    </div>
                    ))}
                    {/* <div className="row mb-2 mb-sm-0 py-25 bgc-default-l4">
                            <div className="d-none d-sm-block col-1"></div>
                            <div className="col-9 col-sm-5">{facture.productName2}</div>
                            <div className="d-none d-sm-block col-2">{facture.Qts1}</div>
                            <div className="d-none d-sm-block col-2 text-95">{facture.unitPrice2}DT</div>
                            <div className="col-2 text-secondary-d2">{facture.productPrice2}DT</div>
                        </div>
                        <div className="row mb-2 mb-sm-0 py-25">
                            <div className="d-none d-sm-block col-1"></div>
                            <div className="col-9 col-sm-5">{facture.productName2}</div>
                            <div className="d-none d-sm-block col-2">{facture.Qts1}</div>
                            <div className="d-none d-sm-block col-2 text-95">{facture.unitPrice2}DT</div>
                            <div className="col-2 text-secondary-d2">{facture.productPrice3}DT</div>
                        </div> */}
                    <div className="row border-b-2 brc-default-l2"></div>

                    
            {/* <div className="table-responsive">
                <table className="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                    <thead className="bg-none bgc-default-tp1">
                        <tr className="text-white">
                            <th className="opacity-2">#</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th width="140">Amount</th>
                        </tr>
                    </thead>

                    <tbody className="text-95 text-secondary-d3">
                        <tr></tr>
                        <tr>
                            
                            <td>{facture.productName1}</td>
                            <td>{facture.Qts}</td>
                            <td className="text-95">{facture.unitPrice1}</td>
                            <td className="text-secondary-d2">{facture.productPrice1}</td>
                        </tr> 
                    </tbody>
                </table>
            </div>
            */}

                    <div className="row mt-3">
                        <div className="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                            Extra note such as company or payment information...
                        </div>

                        <div className="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                            <div className="row my-2">
                                <div className="col-7 text-right">
                                    Total
                                </div>
                                <div className="col-5">
                                    <span className="text-120 text-secondary-d1">{facture.totalPrice}</span>
                                </div>
                            </div>
                          
                           
                            <div className="row my-2">
                                <div className="col-7 text-right">
                                overall load
                                </div>
                                <div className="col-5">
                                    <span className="text-110 text-secondary-d1">{facture.charge}</span>
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-7 text-right">
                                employer load
                                </div>
                                <div className="col-5">
                                    <span className="text-110 text-secondary-d1">{facture.chargeEmployer}</span>
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-7 text-right">
                                total load
                                </div>
                                <div className="col-5">
                                    <span className="text-110 text-secondary-d1">{facture.totCharge}</span>
                                </div>
                            </div>
                            <div className="row my-2 align-items-center bgc-primary-l3 p-2">
                                <div className="col-7 text-right">
                                    Total Amount
                                </div>
                                <div className="col-5">
                                    <span className="text-150 text-success-d3 opacity-2">{facture.total}</span>
                                </div>
                            </div>
                            <div className="row my-2 align-items-center bgc-primary-l3 p-2">
                                <div className="col-7 text-right">
                                     
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <span className="text-secondary-d1 text-105">Thank you for your business</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    </div>
     
</div>
))}
      </div>
    </> );
}
 
export default FactureDetail;