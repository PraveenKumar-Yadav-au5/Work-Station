import React, { Component } from 'react';
import ToDoDetail from './Components/ToDoDetail';
import ToDolist from './Components/ToDolist';

class App extends React.Component {
  state={
    todolist: [{
      title: "Praveen",
      deadline: "04-03-2020",
      isCompleted: false
    }],
    editEle:-1
  }

  addUserDataToList = (todo) => {
    let todos = this.state.todolist.slice();
    todos.push(todo);
    this.setState({
      todolist: todos
    });
  }

  removeItem(todo) {
    this.setState({
      todolist: this.state.todolist.filter((el, i) => i !== this.state.todolist.indexOf(todo))
    })
  }

  editItem(todo) {
    this.setState({
      editEle: this.state.todolist.indexOf(todo)
    })
  }

 
  render() {
    return (
      <div>
        <nav className="navbar bg-dark text-white"><a className="font-weight-bold"><i class="fa fa-list-ol" aria-hidden="true"></i> To-do App</a></nav>
        <div className="row">
          <div className="col-md-3 m-3">
          < ToDoDetail getUserData={(todo) => this.addUserDataToList(todo)}/>
          </div>
          <div className="col-md-7 m-5 ">
          < ToDolist todoData={this.state.todolist} remove={(index) => this.removeItem(index)} edit={(ed) => this.editItem(ed)} />
          </div>
        </div>
        

        
      </div>
    )
  }
}

export default App;
