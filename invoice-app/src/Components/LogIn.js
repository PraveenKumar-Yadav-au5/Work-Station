import React, { Component } from 'react'

class LogIn extends Component {
    state = {
        email: "",
        password: ""
    }


    render() {
        return (
            <div>
                <form className="col-md-10 offset-md-1 form-group" >
                    <input className="loginInp from-control mt-2" type="text" placeholder="Enter Email" />
                    <input className="loginInp from-control mt-2" type="password" placeholder="Enter Password" />
                    <button className="Btn py-2 px-3 mt-2" >Sign in</button>
                </form>
                <div className="font-weight-lighter text-white text center mt-3">
                    Don't have an Account? Register
                </div>
            </div>
        )
    }
}

export default LogIn;
