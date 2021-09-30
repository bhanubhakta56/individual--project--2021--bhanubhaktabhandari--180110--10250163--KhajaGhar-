import { Component } from "react";
import r1 from "../images/restaurant/r1.jpg";
import pizza from '../images/pizza.jpg';
import pasta from '../images/pasta.jpg';
import momo from "../images/momo.jpeg";
import roast from '../images/roast.jpg';
import kattiRoll from '../images/katti roll.jpg';
import chhoyela from '../images/choyela.jpg';
import placeholder from '../images/restaurant/placeholder.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class menu extends Component{
    render(){
        return(
            <div>
                <div style={{height: "60vh", position:"relative", backgroundImage:"linear-gradient(to right, #4880EC, #019CAD)"}}>
                    <div style={{position:"absolute", top:"37%", left:"5%", width:"20%"}}>
                        <img class="m-1 avatar img-fluid" src={r1} alt="restaurant Image" style={{verticalAlign:"middle", borderRadius:"15%"}}/>
                    </div>
                    <div>
                        <div style={{position:"absolute", top:"55%", left:"30%"}}>
                            <h3>JILIMILI RESTAURANT AND BAR</h3>
                            <p class="text-white">OLANGCHUNGALA || 9876542347 || example@example.com</p>
                        </div>
                    </div>
                </div>

                <div class="p-3">
                    <h3 class="text-center p-3">YOUR MENU</h3>
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-md-2 col-s-5">
                                <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                    <img class="m-1 img-fluid" style={{height:"130px"}} src={pasta} alt="restaurant Image"/>
                                    <div class="container">
                                        <h4 class="card-title text-center">PASTA</h4>
                                        <h5 class="text-center text-info card-subtitle">NRs.250/-</h5>
                                        <hr/>
                                        <div>
                                            <a class="m-2 float-end text-danger"><FontAwesomeIcon icon="trash" size="2x"/></a>
                                            <a class="m-2 float-start text-dark"><FontAwesomeIcon icon="pencil-alt" size="2x"/></a>
                                        </div>                                   
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-s-5">
                                <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                    <img class="m-1 img-fluid" style={{height:"130px"}} src={pizza} alt="restaurant Image"/>
                                    <div class="container">
                                        <h4 class="card-title text-center">PIZZA</h4>
                                        <h5 class="text-center text-info card-subtitle">NRs.325/-</h5>
                                        <hr/>
                                        <div>
                                            <a class="m-2 float-end text-danger"><FontAwesomeIcon icon="trash" size="2x"/></a>
                                            <a class="m-2 float-start text-dark"><FontAwesomeIcon icon="pencil-alt" size="2x"/></a>
                                        </div>                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-s-5">
                                <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                    <img class="m-1 img-fluid" style={{height:"130px"}} src={momo} alt="restaurant Image"/>
                                    <div class="container">
                                        <h4 class="card-title text-center">Chicken momo</h4>
                                        <h5 class="text-center text-info card-subtitle">Nrs.125/-</h5>
                                        <hr/>
                                        <div>
                                            <a class="m-2 float-end text-danger"><FontAwesomeIcon icon="trash" size="2x"/></a>
                                            <a class="m-2 float-start text-dark"><FontAwesomeIcon icon="pencil-alt" size="2x"/></a>
                                        </div>                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-s-5">
                                <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                    <img class="m-1 img-fluid" style={{height:"130px"}} src={roast} alt="restaurant Image"/>
                                    <div class="container">
                                        <h4 class="card-title text-center">C. Roast</h4>
                                        <h5 class="text-center text-info card-subtitle">Nrs.225/-</h5>
                                        <hr/>
                                        <div>
                                            <a class="m-2 float-end text-danger"><FontAwesomeIcon icon="trash" size="2x"/></a>
                                            <a class="m-2 float-start text-dark"><FontAwesomeIcon icon="pencil-alt" size="2x"/></a>
                                        </div>                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-s-5">
                                <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                    <img class="m-1 img-fluid" style={{height:"130px"}} src={kattiRoll} alt="restaurant Image"/>
                                    <div class="container">
                                        <h4 class="card-title text-center">KATTI ROLL</h4>
                                        <h5 class="text-center text-info card-subtitle">Nrs.75/-</h5>
                                        <hr/>
                                        <div>
                                            <a class="m-2 float-end text-danger"><FontAwesomeIcon icon="trash" size="2x"/></a>
                                            <a class="m-2 float-start text-dark"><FontAwesomeIcon icon="pencil-alt" size="2x"/></a>
                                        </div>                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-s-5">
                                <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                    <img class="m-1 img-fluid" style={{height:"130px"}} src={chhoyela} alt="restaurant Image"/>
                                    <div class="container">
                                        <h4 class="card-title text-center">C. CHHOYELA</h4>
                                        <h5 class="text-center text-info card-subtitle">Nrs.250/-</h5>
                                        <hr/>
                                        <div>
                                            <a class="m-2 float-end text-danger"><FontAwesomeIcon icon="trash" size="2x"/></a>
                                            <a class="m-2 float-start text-dark"><FontAwesomeIcon icon="pencil-alt" size="2x"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-s-5">
                                <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                    <img class="m-1 img-fluid" style={{height:"150px"}} src={placeholder} alt="restaurant Image"/>
                                    <div class="container">
                                        <h4 class="card-title text-center"> ADD NEW ITEM</h4>
                                        <h5 class="text-center text-info card-subtitle">Nrs.###/-</h5>
                                        <hr/>
                                        <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>ADD ITEM</button></u></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default menu