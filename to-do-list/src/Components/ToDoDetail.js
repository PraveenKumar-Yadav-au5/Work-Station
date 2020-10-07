import React, { Component } from 'react'
import ToDoInput from './ToDoInput'


class ToDoDetail extends React.Component {
    state = {
        title: "",
        deadline: ""
    }
    render() {
        return (
            <div className="Container p-5 shadow">
                < ToDoInput
                getTitle = {(title) => this.setState({title})} 
                getDeadline ={(deadline) => this.setState({deadline})} />

                <button className= "btn btn-block btn-primary" type="button" onClick={()=> this.props.getUserData(this.state)} > Add To-Do</button>
            </div>
        )
    }
}

export default ToDoDetail;
