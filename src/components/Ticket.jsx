import iconDate from "../assets/iconDate.svg"
import iconLocation from "../assets/iconLocation.svg"
import icon5 from "../assets/icon5.svg"
import "./Ticket.css"

const Ticket = (props) => {
    console.log(props)

    return (

        <div className="card-all">

              <header className="header-card"> {props.title} </header>

              <div className="card-info">

                  <div className="info-date-location">

                      <img src={iconDate}/>
                      <div className="card-content-h1">

                          <h1 className="info-date-h1"> {props.date} </h1>
                          <h1 className="info-time-h1"> {props.time} </h1>

                      </div>

                  </div>

                  <div className="info-date-location">

                          <img src={iconLocation} className="info-location"/>
                          <h1 className="info-location-h1"> {props.location} </h1>

                  </div>

              </div>

              <div className="info-content-bottom">

                      <h1 className="info-ticket-h1"> Ticket type </h1>
                      <img src={icon5}/>

              </div>

          </div>

    )
}

export default Ticket
