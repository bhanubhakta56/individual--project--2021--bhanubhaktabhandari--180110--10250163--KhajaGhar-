import { Component } from "react";
import logo from '../logo.PNG';
import login from './images/login.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Login extends Component{
    state={
        first_name:"",
        last_name:"",
        gender:"",
        email:"",  
        password:"",
        message:"",
     }
    render(){
        return(
            <div>
                <div class="mt-5 pt-5 hero-image-login">
                    <div>
                    <div style={{position:"absolute", top:"2%", width:"90%"}}>
                        <img class="m-1 avatar img-fluid" src={login} alt="restaurant Image" style={{verticalAlign:"middle", borderRadius:"15%"}}/>
                    </div>
                    </div>
                    <div action="/action_page.php" class=" card m-5 col-md-4 col-sm-12 float-end">
                        <div>
                            <div class="btn-login btn-lg p-0">
                            <h2 class="text-center avatar p-3">KhajaGhar</h2>
                            <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
                                {/* --Login-- */}
                                <li class="nav-item">
                                    <a class="nav-link text-dark active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" href="#login" role="tab" aria-controls="login" aria-selected="true">LOG IN</a>
                                </li>
                                {/* --Register-- */}
                                <li class="nav-item">
                                    <a class="nav-link text-dark" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" href="#register" role="tab" aria-controls="register" aria-selected="false">REGISTER</a>
                                </li>
                            </ul>
                            </div>
                            <div class="tab-content" id="myTabContent">
                                {/* -------------------------Login------------------------- */}
                            <div class="m-4 tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                    <form className="m-3 p-2">
                                        {/* <p className="text-center text-danger">{this.state.message}</p> */}
                                        <div class="p-2 form-group">
                                            <label for="inputProductName">Email or Phone Number</label>
                                            <input type="text" class="login-input" placeholder="email or phone number" value={this.state.email} onChange={(event)=>{this.setState({email: event.target.value})}}/>
                                        </div>
                                        <div class="p-2 form-group">
                                            <label for="inputProductName">Password</label>
                                            <input type="password" class="login-input mb-1" placeholder="Password" value={this.state.password} onChange={(event)=>{this.setState({password: event.target.value})}}/>
                                            <a href="#"><p class="text-primary float-end">Forgot Password?</p></a>
                                        </div>
                                        <button type="submit" className="btn-login">SIGN IN</button>
                                    </form>
                            </div>
                            {/* --------------------------REGIster-------------------------- */}
                            <div class="m-4 tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                <form className="m-3 p-2">
                                        {/* <h4 className="text-center m-3">REGISTER</h4> */}
                                        {/* <p className="text-center text-danger">{this.state.message}</p> */}
                                        <div class="form-group">
                                            <label for="inputProductName">Full Name</label>
                                            <input type="text" class="login-input" placeholder="First Name" value={this.state.first_name} onChange={(event)=>{this.setState({first_name: event.target.value})}}/>
                                        </div>
                                        {/* <label for="inputProductName">Gender</label>
                                        <div class="form-group">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" onChange={(event)=>{this.setState({gender: event.target.value})}}/>
                                                    <label class="form-check-label" for="inlineRadio1">Male</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" onChange={(event)=>{this.setState({gender: event.target.value})}}/>
                                                    <label class="form-check-label" for="inlineRadio2">Female</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Others" onChange={(event)=>{this.setState({gender: event.target.value})}}/>
                                                    <label class="form-check-label" for="inlineRadio3">Others</label>
                                                </div>
                                        </div> */}
                                        <div class="form-group">
                                            <label for="inputProductName">Mobile Number</label>
                                            <input type="number" class="login-input" placeholder="+977 9878675453" value={this.state.email} onChange={(event)=>{this.setState({email: event.target.value})}}/>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputProductName">Password</label>
                                            <input type="password" class="login-input" placeholder="Password" value={this.state.password} onChange={(event)=>{this.setState({password: event.target.value})}}/>
                                        </div>
                                        <button type="submit" className="btn-login">SIGN UP</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login