import "./Home.css"

import Header from "../components/Header.jsx"
import icon3 from "../assets/icon3.svg"
import iconDate from "../assets/iconDate.svg"
import iconLocation from "../assets/iconLocation.svg"
import Button from "../components/Button.jsx"
import IconHome from "../assets/iconHome.svg"
import IconHome2 from "../assets/iconHome2.svg"
import Footer from "../components/Footer.jsx"

const Home = () => {

    return (

        <>
        
            <Header/>

            <div className="container-all7">

                <div className="container-esquerda-home">

                    <h1 className="h1-title-home">Book tickets <br/> anywhere, all in <span>one place</span></h1>

                    <div className="container-content-home">

                        <h1 className="h1-minitext-home">What, when, where?</h1>

                        <div className="container-button-home">

                            <div className="button-content-home">

                                <h1 className="h1-button-home">Movies</h1>
                                <img src={icon3}/>

                            </div>

                            <div className="button-content-home">

                                <h1 className="h1-button-home">23/12/2022</h1>
                                <img src={iconDate}/>

                            </div>

                            <div className="button-content-home">

                                <h1 className="h1-button-home">Prishtina</h1>
                                <img src={iconLocation}/>

                            </div>

                        </div>

                    </div>

                    <div className="last-button-home">

                        <Button>

                            Find Tickets
                            <img src={IconHome}/>

                        </Button>

                    </div>

                </div>

                <div className="container-direita-home">

                    <img src={IconHome2}/>

                </div>

            </div>

            <Footer/>

        </>

    )

}

export default Home