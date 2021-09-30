import React, {Component} from 'react';
import logo from '../logo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg shadow fixed-top" style={{backgroundColor: "#ED7D31"}}>
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="/"><img class="navbar-brand" alt="KhajaGhar" src={logo} style={{ width: '6rem' }}/></a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav ms-auto float-end">
                            {/* <li class="nav-item">
                                <a class="nav-link" href="/login">
                                    <button className="btn shadow btn-primary"> LOGIN/REGISTER </button>
                                </a>
                            </li> */}
                            {/* <li class="nav-item">
                                <a class="nav-link avatar text-dark" href="/logout">
                                    <FontAwesomeIcon icon="bell" size="2x"/>
                                </a>
                            </li> */}
                            <li class="nav-item">
                                <a class="nav-link text-secondary" href="/profile">
                                    <FontAwesomeIcon icon="user" size="2x"/>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link avatar text-danger" href="/logout">
                                    <FontAwesomeIcon icon="sign-out-alt" size="2x"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

//export body.
export default Navbar