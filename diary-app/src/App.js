import React, { Component } from 'react'
import DiarylistCom from './Components/DiarylistCom';
import InputCom from './Components/InputCom';
import './App.css'


class App extends Component {
  state = {
    diary: [{
      title: "mask-clip",
      note: "The mask-clip CSS property is part of the CSS Masking Module Level 1 specification, and sets the mask painting area.",
      day: 4,
      month: 11,
      year: 2020
    },
    {
      title: "Slow Movement",
      note: "There was a time when I felt overwhelmed by how fast the web developed. ",
      day: 0,
      month: 10,
      year: 2018
    },
    {
      title: "Slow Movement1",
      note: "There was a time when I felt overwhelmed by how fast the web developed. ",
      day: 6,
      month: 0,
      year: 2011
    }],
    editIndex: -1
  }


  // edit and remove operation

  editItem(ele) {
    this.setState({
      editIndex: this.state.diary.indexOf(ele)
    })
  }

  removeItem(keep) {
    this.setState({
      diary: this.state.diary.filter((el, i) => i !== this.state.diary.indexOf(keep))
    })
  }

  sentToList(data) {
    let newdiarylist = this.state.diary.slice()
    if (this.state.editIndex < 0) {
      newdiarylist.unshift(data)
      this.setState({
        diary: newdiarylist,
      })
    }
    else {
      newdiarylist.splice(this.state.editIndex, 1, data)
      this.setState({
        diary: newdiarylist,
        editIndex: -1
      })
    }
  }

  //  Filter part
  filterData = (newData) => {
    this.setState({
      diary: newData
    })
  }



  render() {
    return (
      <div>
        <nav className="navbar  text-warning border-bottom">
          <a className=" text font-weight-bold ml-5">
            <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" /><span> Online Diary App </span> </a>
        </nav>
        < InputCom editDiary={this.state.diary[this.props.editIndex]} sentToList={(data) => this.sentToList(data)} filterFunc={(newData) => this.filterData(newData)} preData={this.state.diary} />

        <DiarylistCom KeepData={this.state.diary} editItem={(ele) => this.editItem(ele)} removeItem={(index) => this.removeItem(index)} />
      </div>
    )
  }
}

export default App;
