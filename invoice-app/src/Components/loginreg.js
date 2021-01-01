import React, { Component } from 'react'
import LogIn from './LogIn'
import Signup from './Signup'

class loginreg extends Component {
    render() {
        return (
            <div>
                <div id="loginregROW" className="row">
                    <div className="col-md-4 loginregCOL">
                        <br /><br />
                        <h4 className="mt-2 ml-5"><i className="fa fa-youtube-play fa-3x text-light"></i></h4>
                        <h3 className="ml-5 text-white font-weight-bold"> The InVoice App is Coming soon.</h3>
                        <br /><br /><br /><br />
                        < LogIn />

                        <Signup />

                        <br /><br /><br /><br />

                        <footer className="text-center">
                            <small className="text-secondary"><strong> &copy; 2020 Invoice App. All Rights Reserved.</strong></small>
                            <div className="text-secondary "> Terms &nbsp;&nbsp; Privacy &nbsp;&nbsp; Policy</div>
                        </footer>
                    </div>
                    {/* <div className="col-md-6 p-0">
                        <img height="790px" src={require("./image-1.jpg")} alt="" />
                    </div> */}
                </div>
            </div>
        )
    }
}

export default loginreg;
