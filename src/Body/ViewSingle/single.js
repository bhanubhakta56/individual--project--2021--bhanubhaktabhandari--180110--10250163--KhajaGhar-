import { Component } from "react";
import logo from "../images/image.jpg";
import pizza from '../images/pizza.jpg';
import pasta from '../images/pasta.jpg';
import momo from "../images/momo.jpeg";
import roast from '../images/roast.jpg';
import kattiRoll from '../images/katti roll.jpg';
import chhoyela from '../images/choyela.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class single extends Component{
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
                        <button class="btn btn-lg btn-primary">RESERVE NOW</button>
                    </div>

                    <div class="bottom-right">
                        <span class="p-1 text-white ">Maitidevi, Kathmandu || 9868241083 || example@example.com</span>
                    </div>

                </div>
                    {/* body part */}
                <div class="p-3">
                    <div class="col-9 mx-auto">
                        <div>
                            {/* description */}
                            <h2 class="mt-2 ms-2">Description</h2>
                            <p class="ps-4 pe-4">description description description description description description description description description description description description description description 
                            description description description description description description description description description description description description description description 
                            description description description description description description description description description description description description description description description
                            </p>
                        </div>

                        {/* location */}
                        <div>
                            <h2 class="mt-2 ms-2">LOCATION</h2>
                            <div class="col-9 border border-dark mx-auto">
                                <div class="ratio ratio-21x9">
                                    <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7063.145517079043!2d85.31513050503719!3d27.730474700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1921938b3bd3%3A0xebf19ed9c02efb68!2sBid%20Cafe%20Family%20Restaurant!5e0!3m2!1sen!2snp!4v1631968579457!5m2!1sen!2snp" allowfullscreen loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MENU */}
                    <div>
                        <h2 class="mt-2 ms-2">MENU</h2>
                        <div className="row justify-content-center">
                            <div className="col-md-2 col-s-5">
                                <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                    <img class="m-1 img-fluid" style={{height:"130px"}} src={pasta} alt="restaurant Image"/>
                                    <div class="container">
                                        <h4 class="card-title text-center">PASTA</h4>
                                        <h5 class="text-center text-info card-subtitle">NRs.250/-</h5>
                                        <hr/>
                                        <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>ADD TO BILL</button></u></a>
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
                                        <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>ADD TO BILL</button></u></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-s-5">
                                <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                    <img class="m-1 img-fluid" style={{height:"130px"}} src={momo} alt="restaurant Image"/>
                                    <div class="container">
                                        <h4 class="card-title text-center">Chicken momo</h4>
                                        <h5 class="text-center text-info card-subtitle">Nrs.125/-</h5>
                                        <hr/>
                                        <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>ADD TO BILL</button></u></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-s-5">
                                <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                    <img class="m-1 img-fluid" style={{height:"130px"}} src={roast} alt="restaurant Image"/>
                                    <div class="container">
                                        <h4 class="card-title text-center">C. Roast</h4>
                                        <h5 class="text-center text-info card-subtitle">Nrs.225/-</h5>
                                        <hr/>
                                        <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>ADD TO BILL</button></u></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-s-5">
                                <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                    <img class="m-1 img-fluid" style={{height:"130px"}} src={kattiRoll} alt="restaurant Image"/>
                                    <div class="container">
                                        <h4 class="card-title text-center">KATTI ROLL</h4>
                                        <h5 class="text-center text-info card-subtitle">Nrs.75/-</h5>
                                        <hr/>
                                        <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>ADD TO BILL</button></u></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-s-5">
                                <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                    <img class="m-1 img-fluid" style={{height:"130px"}} src={chhoyela} alt="restaurant Image"/>
                                    <div class="container">
                                        <h4 class="card-title text-center">C. CHHOYELA</h4>
                                        <h5 class="text-center text-info card-subtitle">Nrs.250/-</h5>
                                        <hr/>
                                        <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>ADD TO BILL</button></u></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                {/* Reservation Form */}
                <h2 class="mt-2 ms-2 text-center">Check Availability</h2>
               <div class="col-6 mx-auto p-3 card shadow">
               <form>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group"> <p class="">Check in Date</p> <input class="form-control" type="Date" required/> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group"> <p class="">Check in Time</p> <input class="form-control" type="Time" required/> </div>
                            </div>
                        </div>
                </form>
                <a href="/reservation"><button class="btn mt-4 btn-primary float-end">Check Availability</button></a>
               </div>
            </div>
        )
    }
}
export default single