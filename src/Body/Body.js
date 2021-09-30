import { Component } from "react";
import {Route} from 'react-router-dom'
import logo from '../logo.PNG';
import Home from "./Home";
import Login from "./Login";
import profile from "./profile/profile";
import reservation from "./reservation/reservation";
import menu from "./restaurant/menu";
import notification from "./restaurant/notification";
import single from "./ViewSingle/single";

class Body extends Component{
    render(){
        return(
            <div>
                <div className="pb-3" style={{backgroundColor: "#fff"}}>
                {/* <div style={{height:"1rem", backgroundColor: "#000"}}>
                    
                </div> */}
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login}/>
                <Route path="/single" exact component={single}/>
                <Route path="/reservation" exact component={reservation}/>
                <Route path="/profile" exact component={profile}/>
                <Route path="/notification" exact component={notification} />
                <Route path="/menu" exact component={menu}/>
            </div>
            </div>
        )
    }
}

export default Body