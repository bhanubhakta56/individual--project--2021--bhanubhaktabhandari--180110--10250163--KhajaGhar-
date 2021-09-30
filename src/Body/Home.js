import React, { Component } from "react";
import logo from '../logo.PNG';
import r1 from './images/restaurant/r1.jpg';
import r2 from './images/restaurant/r2.jpg';
import r3 from './images/restaurant/r3.jpg';
import r4 from './images/restaurant/r4.jpg';
import r5 from './images/restaurant/r5.jpg';
import r6 from './images/restaurant/r6.jpg';
import r7 from './images/restaurant/r6.jpeg';
import r8 from './images/restaurant/r7.jpg';
import r9 from './images/restaurant/r8.jpg';
import r10 from './images/restaurant/r9.jpg';
import r11 from './images/restaurant/r10.jpg';
import r12 from './images/restaurant/r11.jpg';
import r13 from './images/restaurant/r12.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component{
    render(){
        return(
            <div className="mt-5">
                <div class="hero-image-home">
                <div class="hero-text">
                    <h1>FIND YOUR RESTAURANT</h1>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-primary" type="submit"><FontAwesomeIcon icon="search" /></button>
                    </form>
                </div>
                    
                </div>

                <div class="p-3">
                    {/* restaurant neary you */}
                    <h2 class="mt-3">Restaurant Near You</h2>
                    <div className="row justify-content-center overflow-hidden">
                    <div className="col-md-2 col-s-5">
                            <div class="card shadow mt-3 p-2" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r1} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Unique Chamenagriha</h4>
                                    <h5 class="text-center text-info card-subtitle">0.15km away</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r2} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Shreshaa KhajaGhar</h4>
                                    <h5 class="text-center text-info card-subtitle">0.5km away</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r3} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">BigByte Cafe and Restaurant</h4>
                                    <h5 class="text-center text-info card-subtitle">0.2km away</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r8} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">TIRIMIRI Restaurant</h4>
                                    <h5 class="text-center text-info card-subtitle">0.3km away</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r9} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">MIRMIRE Restaurant</h4>
                                    <h5 class="text-center text-info card-subtitle">0.4km away</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r13} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Lumbini Tandoori</h4>
                                    <h5 class="text-center text-info card-subtitle">0.1km away</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        {/* <a href="#" class="m-2"><u><button className="btn float-end btn-primary">MORE</button></u></a> */}
                    </div>
                    <hr/>

                    {/* recomded restaurant to you */}
                    <h2>Recomended</h2>
                    <div className="row justify-content-center overflow-hidden">
                    <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r13} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Grandy Restaurant</h4>
                                    <p class="mx-auto text-center">
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                    </p>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r12} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Naya Nasta Pasal</h4>
                                    <p class="mx-auto text-center">
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-dark"><FontAwesomeIcon icon="star"/></span>
                                    </p>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r7} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Bajeko Bhansa Ghar</h4>
                                    <p class="mx-auto text-center">
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-dark"><FontAwesomeIcon icon="star"/></span>
                                    </p>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r11} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Chimekiko Restaurant</h4>
                                    <p class="mx-auto text-center">
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-dark"><FontAwesomeIcon icon="star"/></span>
                                    </p>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r1} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Kale Daiko Restaurant</h4>
                                    <p class="mx-auto text-center">
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                    </p>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r2} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Gore Daiko Restaurant</h4>
                                    <p class="mx-auto text-center">
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-warning"><FontAwesomeIcon icon="star" spin/></span>
                                        <span class="p-1 text-dark"><FontAwesomeIcon icon="star"/></span>
                                    </p>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        {/* <a href="#" class="m-2"><u><button className="btn float-end btn-primary">MORE</button></u></a> */}
                    </div>
                    <hr/>

                    {/* Cheaper Restaurant */}
                    <h2>Cheaper Restaurant Near You</h2>
                    <div className="row justify-content-center overflow-hidden">
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r12} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Sasto Restaurant</h4>
                                    <h5 class="text-center text-info card-subtitle">$$</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r11} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Aamako Chulo and Cafe</h4>
                                    <h5 class="text-center text-info card-subtitle">$$$</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r10} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Daju Bhai Restaurant</h4>
                                    <h5 class="text-center text-info card-subtitle">$</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r9} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Hamro Restaurant</h4>
                                    <h5 class="text-center text-info card-subtitle">$$</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r8} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Newari Bhanchha Ghar</h4>
                                    <h5 class="text-center text-info card-subtitle">$$</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r7} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Bahun Bajeko Chulo</h4>
                                    <h5 class="text-center text-info card-subtitle">$</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        {/* <a href="#" class="m-2"><u><button className="btn float-end btn-primary">MORE</button></u></a> */}
                    </div>
                    <hr/>

                    {/* Expensive restaurant near you */}
                    <h2>Expensive Restaurant Near You</h2>
                    <div className="row justify-content-center overflow-hidden">
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r6} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Jire Khursani Restaurant</h4>
                                    <h5 class="text-center text-info card-subtitle">$$$$</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r5} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Ratamakai Restaurant</h4>
                                    <h5 class="text-center text-info card-subtitle">$$$$</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-s-5">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r4} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Sisno Cafe and Restaurant</h4>
                                    <h5 class="text-center text-info card-subtitle">$$$$</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-xs-6">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r3} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">Thakali Bhachha Ghar</h4>
                                    <h5 class="text-center text-info card-subtitle">$$$$</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-xs-6">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r2} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">American Restaurant</h4>
                                    <h5 class="text-center text-info card-subtitle">$$$$$</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-xs-6">
                            <div class="card shadow p-2 mt-3" style={{backgroundColor: "#a66dd1"}}>
                                <img class="m-1 img-fluid" src={r1} style={{height:"130px"}} alt="restaurant Image"/>
                                <div class="container">
                                    <h4 class="card-title text-center">FOUR STAR Restaurant</h4>
                                    <h5 class="text-center text-info card-subtitle">$$$$</h5>
                                    <hr/>
                                    <a href="/single"><u><button class="btn btn-primary bg-gradient" style={{width:"100%"}}>VISIT</button></u></a>
                                </div>
                            </div>
                        </div>
                        {/* <a href="#" class="m-2"><u><button className="btn float-end btn-primary">MORE</button></u></a> */}
                    </div>
                    <hr/>
                </div>

            </div>
        )
    }
}
//export body.
export default Home