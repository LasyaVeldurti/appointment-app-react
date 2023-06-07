// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {initialAppointmentList: [], title: '', date: '', starredList: false}

  submitFormDetails = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }

    this.setState(prevState => ({
      initialAppointmentList: [
        ...prevState.initialAppointmentList,
        newAppointment,
      ],
      title: '',
      date: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  toggleStarred = id => {
    this.setState(prevState => ({
      initialAppointmentList: prevState.initialAppointmentList.map(
        eachValue => {
          if (id === eachValue.id) {
            return {
              ...eachValue,
              isStarred: !eachValue.isStarred,
            }
          }
          return eachValue
        },
      ),
    }))
  }

  displayStarredList = () => {
    this.setState(prevState => ({starredList: !prevState.starredList}))
  }

  render() {
    const {initialAppointmentList, title, date, starredList} = this.state

    const filteredList = initialAppointmentList.filter(
      eachApp => eachApp.isStarred === true,
    )

    const mappingList = starredList ? filteredList : initialAppointmentList

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1>Add appointment</h1>
          <div className="form-container">
            <form onSubmit={this.submitFormDetails}>
              <label htmlFor="title">Title</label>
              <br />
              <br />

              <input
                className="input-title"
                id="title"
                onChange={this.onChangeTitle}
                value={title}
                placeholder="Title"
                type="text"
              />
              <br />
              <br />

              <label htmlFor="date">Date</label>
              <br />
              <br />

              <input
                className="input-date"
                id="date"
                onChange={this.onChangeDate}
                value={date}
                placeholder="ddd/mm/yyyy"
                type="date"
              />
              <br />
              <br />

              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <img
              className="home-img"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png "
              alt="appointments"
            />
          </div>

          <hr />
          <div className="output-container">
            <h1>Appointments</h1>
            <button
              onClick={this.displayStarredList}
              className="starred-btn"
              type="button"
            >
              Starred
            </button>
          </div>

          <ul className="appointment-ul-cont">
            {mappingList.map(eachItem => (
              <AppointmentItem
                appointmentDetails={eachItem}
                toggleStarred={this.toggleStarred}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
