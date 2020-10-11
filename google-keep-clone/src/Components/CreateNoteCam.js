import React, { Component } from 'react'

class CreateNoteCam extends React.Component {
    render() {
        return (
            <div>
                <div>

                    <input type="text" placeholder="Title"
                        onChange={(e) => this.props.getTitle(e.target.value)}
                        className="form-control mb-2 border-0" autoComplete="off" />

                    <textarea type="text" placeholder="Take a note..."
                        onChange={(e) => this.props.getNote(e.target.value)}
                        className="form-control mb-3 border-0" />
                </div>

            </div>
        )
    }
}

export default CreateNoteCam;
