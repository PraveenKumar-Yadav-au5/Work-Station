import React, { Component } from 'react';
import { connect } from 'react-redux';
class CreateNoteCam extends React.Component {


    // handleTitleChange
    handleTitleChange = (value) => {
        this.props.handleTitleChange({
            type: "user_title_change",
            payload: value
        })

        //handleTitleChange ==> dispatch(action)
        /*
        action => object{
            type: "user_title_change"
        }
        */
    }
   // handleNoteChange
    handleNoteChange = (value) => {
        this.props.handleNoteChange({
            type: "user_note_change",
            payload: value
        });
    }


    render() {
        // console.log("CreateNote", this.props)
        return (
            <div>
                <div>

                    <input type="text" placeholder="Title"
                    value={this.props.userTitle}
                    onChange={(e) => this.handleTitleChange(e.target.value)}
                    className="form-control mb-2 border-0" autoComplete="off" />

                    <textarea type="text" placeholder="Take a note..."
                    value={this.props.userNote}
                    onChange={(e) => this.handleNoteChange(e.target.value)}
                    className="form-control mb-3 border-0" />
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
   console.log("state", state);
   return{
       userTitle: state.title,
       userNote: state.note
   };
}

const mapDispatchToProps = (dispatch) =>{
    console.log("dispatch", dispatch);
    return{
        handleTitleChange: dispatch,
        handleNoteChange: dispatch
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(CreateNoteCam);
