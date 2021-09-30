import React, { Component } from "react";
class Footer extends Component{
    render(){
        return(
            <footer class="text-center text-lg-start" style={{backgroundColor: "#ED7D31"}}>
                <div class="text-center p-3">
                 &#169; 
                    <a class="text-dark" href="/"> KhajaGhar</a> {new Date().getFullYear()}
                </div>
            </footer>
        )
    }
}
//export body.
export default Footer