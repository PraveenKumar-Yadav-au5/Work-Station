import React, { Component } from 'react'

class DiarylistCom extends Component {
    render() {
        return (
            <div >
                <div>
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
                                                    <i class="fa fa-pencil-square-o" onClick={() => this.props.editItem(keep)} aria-hidden="true"></i> --- 
                                                    <i class="fa fa-trash" onClick={() => this.props.removeItem(keep)} aria-hidden="true"></i>
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

export default DiarylistCom
