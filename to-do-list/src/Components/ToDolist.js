import React, { Component } from 'react';

class ToDolist extends React.Component {
    render() {
        return (
            <div className="container shadow">
                <div className="mr-4 p-5 ">
                    <div className="text-secondary font-weight-bold text-center">  To-Do List</div>
                <ul>
                    { this.props.todoData.map((todo, index) =>{
                        return (
                            <li key={index} className="text-secondary w3-animate-zoom alert list-unstyled alert-primary"> {todo.title} --- {todo.deadline} --- <i class="fa fa-trash" onClick = {() => this.props.remove(todo)} aria-hidden="true"></i> ---
                            <i class="fa fa-pencil-square-o" onClick={() => this.props.edit(todo)} aria-hidden="true" ></i> </li>
                        )
                    })}
                </ul>
                </div>
            </div>
        )
    }
}

export default ToDolist;
