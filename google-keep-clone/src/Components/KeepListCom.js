import React, { Component } from 'react'

class KeepListCamp extends Component {
    render() {
        return (
            <div >
                <div className=" ">
                    <div className=" container text-secondary ">
                        <div className="row mt-5">
                            {this.props.KeepData.map((keep, index) => {
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

export default KeepListCamp;
