// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStarred} = props
  const {title, date, isStarred, id} = appointmentDetails

  const changeStar = () => {
    toggleStarred(id)
  }
  const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="li-container">
      <div className="fixed-appointment">
        <p className="title">{title} </p>
        <button
          className="star-btn"
          onClick={changeStar}
          data-testid="star"
          type="button"
        >
          <img src={starImgUrl} alt="star" />
        </button>
      </div>
      <p className="date">Date: {formattedDate} </p>
    </li>
  )
}

export default AppointmentItem
