import { Component } from "react";
import logo from "../images/image.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class reservation extends Component{
    render(){
        return(
            <div>
                <div class="hero-image">
                    <div class="hero-text">
                        <h1>Mamako KhajaGhar</h1>
                        {/* <p>maitidevi, kathmandu</p> */}
                        <p>
                            <span class="p-1 text-warning"><FontAwesomeIcon icon="star" size="2x" spin/></span>
                            <span class="p-1 text-warning"><FontAwesomeIcon icon="star" size="2x" spin/></span>
                            <span class="p-1 text-warning"><FontAwesomeIcon icon="star" size="2x" spin/></span>
                            <span class="p-1 text-dark"><FontAwesomeIcon icon="star" size="2x"/></span>
                            <span class="p-1 text-dark"><FontAwesomeIcon icon="star" size="2x"/></span>
                        </p>
                    </div>
                    <div class="bottom-right">
                        <span class="p-1 text-white ">Maitidevi, Kathmandu || 9868241083 || example@example.com</span>
                    </div>
                </div>
                <h2 class="mt-3 text-center">Please Fill Up form below</h2>
                <div>
                    <div class="col-md-6 card shadow mt-3 mx-auto">
                        <form>
                            {/* <p className="text-center text-danger">{this.state.message}</p> */}
                            <div class="p-3 m-2">
                            <h4 class="text-center pb-2">Your Order From Cart</h4>
                                <table class="mx-auto col-12 text-center" style={{maxWidth:"90vh"}}>
                                    <tr class="bg-dark bg-gradient text-white text-center">
                                        <th>Item</th>
                                        <th>Rate(Rs.)</th>
                                        <th>Quantity</th>
                                        <th>Total(Rs.)</th>
                                        <th>Action</th>
                                    </tr>
                                    <tr>
                                        <td>MoMO</td>
                                        <td>150/-</td>
                                        <td>2</td>
                                        <td>300/-</td>
                                        <td>
                                            <div>
                                                <a class="me-3 ms-3 text-dark"><FontAwesomeIcon icon="pencil-alt"/></a>
                                                <a class="ms-3 me-3 text-danger"><FontAwesomeIcon icon="trash"/></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pizza</td>
                                        <td>94/-</td>
                                        <td>2</td>
                                        <td>233/-</td>
                                        <td>
                                            <div>
                                                <a class="me-3 ms-3 text-dark"><FontAwesomeIcon icon="pencil-alt"/></a>
                                                <a class="ms-3 me-3 text-danger"><FontAwesomeIcon icon="trash"/></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Lassi</td>
                                        <td>67/-</td>
                                        <td>3</td>
                                        <td>130/-</td>
                                        <td>
                                            <div>
                                                <a class="me-3 ms-3 text-dark"><FontAwesomeIcon icon="pencil-alt"/></a>
                                                <a class="ms-3 me-3 text-danger"><FontAwesomeIcon icon="trash"/></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Lassi</td>
                                        <td>67/-</td>
                                        <td>3</td>
                                        <td>2324/-</td>
                                        <td>
                                            <div>
                                                <a class="me-3 ms-3 text-dark"><FontAwesomeIcon icon="pencil-alt"/></a>
                                                <a class="ms-3 me-3 text-danger"><FontAwesomeIcon icon="trash"/></a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg-info bg-gradient">
                                        <th>TOTAL</th>
                                        <td></td>
                                        <td></td>
                                        <th>12/-</th>
                                        <td>
                                            <button class="btn btn-sm m-1 mx-auto btn-primary">Add More</button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="row ms-4 me-4">
                            <div class="col-md-4 float-start p-2">
                                <label for="inputProductName">No of People</label>
                                <input type="number" class="login-input" placeholder="Number of Chair needed to reserve"/>
                            </div>
                            <div class="col-md-8 p-2 float-end">
                                <label for="inputProductName">Remarks</label>
                                <input type="password" class="login-input mb-1" placeholder="Remarks"/>
                            </div>
                            </div>
                            <button type="submit" className="btn-login">RESERVE</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default reservation