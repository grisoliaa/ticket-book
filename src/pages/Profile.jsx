import Header from "../components/Header.jsx"
import Ticket from "../components/Ticket.jsx"
import Footer from "../components/Footer.jsx"

import "./Profile.css"

import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon3.svg"
import icon4 from "../assets/icon4.svg"


const Profile = () => {
    return (
        <> 
    
    <Header/>

      <div className="container-title">

          <h1 className="h1-title">
              Welcome back, Gjon Hajdari
          </h1>

          <h1 className="h1-title2">
              Take a look at all of your tickets.
          </h1>

      </div>

      <div className="container-buttons">

          <button className="button-icon-red">

                <div className="button-content">

                    <img src={icon1}/>
                    <h1 className="h1-button-red">All Tickets</h1>

                </div>

                <h1 className="h1-button-red">6</h1>

          </button>

          <button className="button-icon-grey">

                <div className="button-content">

                    <img src={icon2}/>
                    <h1 className="h1-button-grey">Travels</h1>

                </div>

                <h1 className="h1-button-grey">2</h1>

          </button>

          <button className="button-icon-grey">

                <div className="button-content">

                    <img src={icon3}/>
                    <h1 className="h1-button-grey">Movies</h1>

                </div>

                <h1 className="h1-button-grey">1</h1>

          </button>

          <button className="button-icon-grey">

                <div className="button-content">

                    <img src={icon4}/>
                    <h1 className="h1-button-grey">Concerts</h1>

                </div>

                <h1 className="h1-button-grey">3</h1>

          </button>

      </div>

      <div className="container-cards">

          <Ticket title="Show" date="25/07/2007" time="13:00AM" location="Campinas"/>
          <Ticket title="Cinema" date="25/07/2007" time="13:00AM" location="Campinas"/>
          <Ticket title="Teatro" date="25/07/2007" time="13:00AM" location="Campinas"/>
          <Ticket title="Palestra" date="25/07/2007" time="13:00AM" location="Campinas"/>
          <Ticket title="Jogo Futebol" date="25/07/2007" time="13:00AM" location="Campinas"/>
          <Ticket title="Show" date="25/07/2007" time="13:00AM" location="Campinas"/>

      </div>

      <Footer/>
    
    </>

    )
}

export default Profile