import React, { Component } from 'react'
import { connect } from "react-redux";


class KeepListCamp extends Component {
    render() {
        // console.log("Userdetails props", this.prop)
        return (
            <div >
                <div>
                    <div className=" container text-secondary ">
                        <div className="row mt-5">
                            {this.props.keeplist && this.props.keeplist.map((keep, index) => {
                                return (
                                    <div key={index} className="col-md-3">
                                        <div className="card mb-3 shadow">
                                            <div className="card-body note">
                                                <h5 className="card-title font-weight-bold"> {keep.title} </h5>
                                                <p className="card-text"> {keep.note} </p>
                                                <div className="text-right mb-2 mr-3">
                                                    <i class="fa fa-trash" onClick={() => this.props.remove(keep)} aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        keeplists: state.keeplist
    }
}


export default connect(mapStateToProps)(KeepListCamp) ;
