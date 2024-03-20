import "./Notfound.css"

import Header from "../components/Header.jsx"
import Button from "../components/Button.jsx"

import notfoundIcon from "../assets/notfoundIcon.svg"
import notfoundIcon2 from "../assets/notfoundIcon2.svg"
import notfoundIcon3 from "../assets/notfoundIcon3.svg"

import { useNavigate } from "react-router-dom"


const Notfound = () => {

    const navigate = useNavigate()


    return (

        <>
        
            <Header/>

            <div className="container-all4">

                <img src={notfoundIcon}/>

                <div className="container-title-notfound">

                    <h1 className="h1-notfound">Opps! Page not found.</h1>
                    <p className="p-notfound">The page you are looking for doesn’t exist or might’ve been removed</p>

                </div>

                <div className="all-buttons-notfound">

                    <div className="container-buttons-notfound">

                        <Button className="button1-notfound" onClick={() => navigate(-1)}>

                            <img src={notfoundIcon2}/>
                            Go back

                        </Button>

                    </div>

                    <div className="container-buttons2-notfound">

                        <Button onClick={() => navigate("/profile")}>

                            <img src={notfoundIcon3}/>
                            Jump to the home page

                        </Button>

                    </div>

                </div>

            </div>
        
        </>

    )

}

export default Notfound