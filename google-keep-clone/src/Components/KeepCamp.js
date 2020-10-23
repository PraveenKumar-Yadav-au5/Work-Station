import React, { Component } from 'react'
import CreateNoteCam from './CreateNoteCam'
import { connect } from "react-redux";


class KeepCamp extends Component {
    
    render() {
        // console.log("User Inout props", this.props);
        return (
            <div>
                <div className="container">
                    <div className="row mt-3 ">
                        <div className="col-md-5 offset-md-3 pb-3 pt-3  border shadow rounded-lg">
                            < CreateNoteCam />
                            <button className="btn btn-light pull-right " type="button" onClick={() => this.props.dispatch({type: "add_user_data"})} > Close </button>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}




export default connect()(KeepCamp);
