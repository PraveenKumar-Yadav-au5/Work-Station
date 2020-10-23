import React, { Component } from 'react'
import KeepCamp from './Components/KeepCamp'
import KeepListCamp from './Components/KeepListCom'
import './App.css';


class App extends React.Component {

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
          <a  className=" text font-weight-bold ml-5">
            <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" /><span>keep note </span> </a>
            </nav>

        < KeepCamp  />

        < KeepListCamp />


      </div>
    )
  }
}

export default App;
