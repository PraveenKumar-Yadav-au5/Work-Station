import React, { Component } from 'react'
import KeepCamp from './Components/KeepCamp'
import KeepListCamp from './Components/KeepListCom'
import './App.css';


class App extends React.Component {

  state = {
    keeplist: []
  }

  addDataToList = (keep) => {
    let keeps = this.state.keeplist.slice();
    keeps.push(keep);
    this.setState({
      keeplist: keeps
    });
  }

  removeItem(keep) {
    this.setState({
      keeplist: this.state.keeplist.filter((el, i) => i !== this.state.keeplist.indexOf(keep))
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar  text-warning border-bottom">
          <a  style={{}} className=" text font-weight-bold ml-5">
            <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" /><span>keep note </span> </a>
            </nav>

        < KeepCamp getNoteData={(keep) => this.addDataToList(keep)} />

        < KeepListCamp KeepData={this.state.keeplist} remove={(index) => this.removeItem(index)} />


      </div>
    )
  }
}

export default App;
