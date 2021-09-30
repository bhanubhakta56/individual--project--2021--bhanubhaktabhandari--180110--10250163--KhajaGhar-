import { Component } from "react";
import logo from "../images/image.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class profile extends Component{
    render(){
        return(
            <div>
                <div style={{height: "60vh", position:"relative", backgroundImage:"linear-gradient(to right, #4880EC, #019CAD)"}}>
                    <div style={{position:"absolute", top:"37%", left:"5%", width:"20%"}}>
                        <img class="m-1 avatar img-fluid" src={logo} alt="restaurant Image" style={{verticalAlign:"middle", borderRadius:"15%"}}/>
                    </div>
                    <div>
                        <div style={{position:"absolute", top:"55%", left:"30%"}}>
                            <h3>BHANUBHAKTA BHANDARI </h3>
                            <p class="text-white">THAPATHALI, KATHMANDU || 9876542347 || BHANDARI@BHANDARI.com</p>
                        </div>
                    </div>
                 </div>
                <div class="card shadow p-2 mt-4 col-md-8 mx-auto">
                    <div>
                        <a class="me-3 ms-3 float-end text-dark"><FontAwesomeIcon icon="bell" size="2x"/></a>
                        <p class="float-end">Set Reminder</p>
                    </div>
                    <h3 class="text-center p-3">Reserved Restaurant For You</h3>
                    <div class="p-3 ms-4 me-4">
                        <h4 class="ps-3">JHILIMILI RESTAURANT</h4>
                        <p class="ps-3">2021/02/23 at 2:00 PM</p>
                        <p class="ps-3">Number of Chair Reserved: 6</p>
                        <h5 class="text-center text-info">YOUR ORDER</h5>
                        <table class="table table-condensed">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Momo</td>
                                    <td>3</td>
                                    <td>100/-</td>
                                    <td>300/-</td>
                                    <td>
                                        <div>
                                            <a class="me-3 ms-3 text-dark"><FontAwesomeIcon icon="pencil-alt" size="2x"/></a>
                                            <a class="ms-3 me-3 text-danger"><FontAwesomeIcon icon="trash" size="2x"/></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Momo</td>
                                    <td>3</td>
                                    <td>100/-</td>
                                    <td>300/-</td>
                                    <td>
                                        <div>
                                            <a class="me-3 ms-3 text-dark"><FontAwesomeIcon icon="pencil-alt" size="2x"/></a>
                                            <a class="ms-3 me-3 text-danger"><FontAwesomeIcon icon="trash" size="2x"/></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Momo</td>
                                    <td>3</td>
                                    <td>100/-</td>
                                    <td>300/-</td>
                                    <td >
                                        <div>
                                            <a class="me-3 ms-3 text-dark"><FontAwesomeIcon icon="pencil-alt" size="2x"/></a>
                                            <a class="ms-3 me-3 text-danger"><FontAwesomeIcon icon="trash" size="2x"/></a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>TOTAL:</th>
                                    <th></th>
                                    <th></th>
                                    <th>123/-</th>
                                    <th></th>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <button class="btn btn-danger btn-gradient float-end">CANCEL RESERVATION</button>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default profile