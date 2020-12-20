import React, { Component } from 'react'
import DiaryInput from './DiaryInput'

class InputCom extends Component {
    state = {
        title: "",
        note: "",
        day: new Date().getDay(),
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    }

    //  sorting func start here
    Sort = () => {
        this.props.filterFunc(this.props.preData.reverse())
    }

    //  filter func start here
    weekFilter = () => {
        let i = 0
        let filter_arr = []
        while (i <= 6) {
            let temp = []
            temp = this.props.preData.filter(val => val.day == i)
            ++i
            filter_arr = [...filter_arr, ...temp]
        }
        this.props.filterFunc(filter_arr)
    }

    monthFilter = () => {
        let i = 0
        let filter_arr = []
        while (i <= 11) {
            let temp = []
            temp = this.props.preData.filter(val => val.month == i)
            ++i
            filter_arr = [...filter_arr, ...temp]
        }
        this.props.filterFunc(filter_arr)
    }

    yearFilter = () => {
        let i = new Date().getFullYear() - 10
        let filter_arr = []
        while (i <= new Date().getFullYear()) {
            let temp = []
            temp = this.props.preData.filter(val => val.year == i)
            ++i
            filter_arr = [...filter_arr, ...temp]
        }
        this.props.filterFunc(filter_arr)
    }

    // comp operation
    addToNotes() {
        this.props.sentToList(this.state)
        this.setState({
            title: "",
            note: "",
            day: new Date().getDay(),
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState(this.props.editDiary)
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-3 ">
                        <div className="col-md-5 offset-md-3 pb-3 pt-3  border shadow rounded-lg">
                            < DiaryInput getTitle={(title) => this.setState({ title })} getNote={(note) => this.setState({ note })} />

                            <button className="btn btn-light pull-right " type="button" onClick={() => this.addToNotes()}>{this.props.editDiary ? "Save" : "Add Notes"}</button>
                        </div>

                        {/* Sort Section start here */}
                        <div className="col-md-5 offset-md-3 pb-3 pt-3 ">
                            <span>
                                {/* <i class="fa fa-arrow-up" onClick={this.Sort} aria-hidden="true">Newest/Oldest</i> */}
                                <button className="btn btn-dark"><i class="fa fa-sort" onClick={this.Sort} aria-hidden="true">Newest/Oldest</i></button>
                            </span>

                            {/* Filter Section start here*/}
                            <span>
                                <button className="btn btn-dark "><i class="fa fa-calendar" onClick={this.weekFilter} aria-hidden="true">Week</i></button>
                            </span>

                            <span>
                                <button className="btn btn-dark"><i class="fa fa-calendar" onClick={this.monthFilter} aria-hidden="true">Month</i></button>
                            </span>

                            <span>
                                <button className="btn btn-dark"><i class="fa fa-calendar" onClick={this.yearFilter} aria-hidden="true">Year</i></button>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputCom;
