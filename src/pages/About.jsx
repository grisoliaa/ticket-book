import "./About.css"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

import vector2 from "../assets/vector2.svg"
import iconAbout from "../assets/iconAbout.svg"
import iconAbout2 from "../assets/iconAbout2.svg"
import iconAbout3 from "../assets/iconAbout3.svg"

const About = () => {

    return (

        <>
    
        <Header/>

        <div className="container-all2">

            <div className="container-title">

                <h1 className="h1-title">
                    So <span className="span-title">who</span> are we exactly?
                </h1>
                <img src={vector2}/>

            </div>

            <div className="bottom-content">

                <div className="content1">

                    <h1 className="h1-bottom-content"> TicketBooker is an online platform for <span className="span-bottom-content">purchasing tickets</span> to concerts, movies or flights internationally. Our services make it easy to book tickets from several booking websites and make them available in one place, in a <span className="span-bottom-content">single transaction</span>, whether you are in the UK, the USA or Europe. <span className="span-bottom-content">No fees</span> are charged at the point of purchase or after your event has ended. </h1>
                    <img src={iconAbout} className="icon-content"/>

                </div>

                <div className="content2">

                    <img src={iconAbout2} className="icon-content"/>
                    <h1 className="h1-bottom-content"> TicketBooker operates in all <span className="span-bottom-content">EU countries, Iceland, Norway and Switzerland.</span> The founding team of TicketBooker was made up of entrepreneurs from London, Oslo and Paris. The company now employs <span className="span-bottom-content">120 people.</span> The service’s technical platform has a back-end computer server with support of Citrix/Dell shared network servers and database. </h1>

                </div>

                <div className="content3">

                    <h1 className="h1-bottom-content">In September 2015, TicketBooker partnered with <span className="span-bottom-content">Worldline</span>, one of Europe’s leading provider of payment services, for TicketBooker’s European ticket booking services, allowing the company to <span className="span-bottom-content">expand its presence</span> to 2,500+ Live Nation & AXS corporate clients as well as 20,000+ independent music venues and promoters. TicketBooker has recieved <span className="span-bottom-content">$1.3m</span> in funding from City Index Ventures in May 2014.</h1>
                    <img src={iconAbout3} className="icon-content"/>

                </div>

            </div>

            <Footer/>

        </div>
    
    </>

    )

}

export default About