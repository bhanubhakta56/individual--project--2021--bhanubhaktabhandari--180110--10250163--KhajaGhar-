import { Component } from "react";
import logo from "../images/image.jpg";
import r1 from "../images/restaurant/r1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class notification extends Component{
    render(){
        return(
           <div>
                <div style={{height: "60vh", position:"relative", backgroundImage:"linear-gradient(to right, #4880EC, #019CAD)"}}>
                    <div style={{position:"absolute", top:"37%", left:"5%", width:"20%"}}>
                        <img class="m-1 avatar img-fluid" src={r1} alt="restaurant Image" style={{verticalAlign:"middle", borderRadius:"15%"}}/>
                    </div>
                    <div>
                        <div style={{position:"absolute", top:"55%", left:"30%"}}>
                            <h3 class="text-dark">BULBUL RESTAURANT AND CAFE <a class="ms-4 text-white"><FontAwesomeIcon icon="pencil-alt"/></a></h3>
                            <p class="text-white"> BULBUL CHOWK, GHATTEKULO-09 || 9876542347 || bulbul@bulbul.com</p>
                        </div>
                    </div>
                </div>

                <h3 class="text-center p-3">Reservation Request</h3>

                <div class="card shadow p-2 mt-4 col-md-8 mx-auto">
                    {/* <h3 class="text-center p-3">Reservation Request</h3> */}
                    <div class="p-3">
                        <a class="me-3 ms-3 float-end text-dark"><FontAwesomeIcon icon="bell" size="2x"/></a>
                        <p class="float-end">Set Reminder</p>
                    </div>
                    <div class="p-3 ms-4 me-4">
                        <h4 class="ps-3">Customer Name</h4>
                        <p class="ps-3">2021/02/23 at 2:00 PM</p>
                        <p class="ps-3">Number of Chair Reserved: 6</p>
                        <h5 class="text-center text-info">ORDERED MEAL</h5>
                        <table class="table table-condensed">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PIZZA</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>PASTA</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>PIZZA</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>This is remarks place. Customer's remarks will appear here.</p>
                        <div>
                            <button class="btn btn-danger btn-gradient float-end">DECLINE RESERVATION</button>
                            
                            <p class="float-end mt-2 me-2 text-danger">RESERVATION CAN BE DECLINED ONLY BEFORE 1 HOUR</p>
                        </div>
                    </div>
                </div>

                <div class="card shadow p-2 mt-4 col-md-8 mx-auto">
                    {/* <h3 class="text-center p-3">Reservation Request</h3> */}
                    <div class="p-3">
                        <a class="me-3 ms-3 float-end text-dark"><FontAwesomeIcon icon="bell" size="2x"/></a>
                        <p class="float-end">Set Reminder</p>
                    </div>
                    <div class="p-3 ms-4 me-4">
                        <h4 class="ps-3">Customer Name</h4>
                        <p class="ps-3">2021/02/23 at 2:00 PM</p>
                        <p class="ps-3">Number of Chair Reserved: 6</p>
                        <h5 class="text-center text-info">ORDERED MEAL</h5>
                        <table class="table table-condensed">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PIZZA</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>CHICKEN ROAST</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>CHHOYELA</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>This is remarks place. Customer's remarks will appear here</p>
                        <div>
                            <button class="btn btn-danger btn-gradient float-end">DECLINE RESERVATION</button>
                            <p class="float-end mt-2 me-2 text-danger">RESERVATION CAN BE DECLINED ONLY BEFORE 1 HOUR</p>
                        </div>
                    </div>
                </div>
            
            
           </div>
        )
    }
}

export default notification