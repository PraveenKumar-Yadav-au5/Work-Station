import React, { Component } from 'react'
import CreateNoteCam from './CreateNoteCam'

class KeepCamp extends Component {

    state = {
        title: "",
        note: ""
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-3 ">
                        <div className="col-md-5 offset-md-3 pb-3 pt-3  border shadow rounded-lg">
                            < CreateNoteCam
                                getTitle={(title) => this.setState({ title })}
                                getNote={(note) => this.setState({ note })} />

                            <button className="btn btn-light pull-right " type="button" onClick={() => this.props.getNoteData(this.state)} > Close </button>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default KeepCamp;
