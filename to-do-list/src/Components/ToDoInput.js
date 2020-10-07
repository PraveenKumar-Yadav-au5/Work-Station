import React, { Component } from 'react';

class ToDoInput extends React.Component {
    render() {
        return (
            <div>
               <div className="mb-2 font-weight-bold text-secondary">Add To-do</div>
               <input onChange={(e) => this.props.getTitle(e.target.value)} type="text" className="form-control mb-3" placeholder="Add Title" />

               <input onChange={(e) => this.props.getDeadline(e.target.value)} type="date" className="form-control mb-3" placeholder="Deadline" />
                             
            </div>
        )
    }
}

export default ToDoInput;
