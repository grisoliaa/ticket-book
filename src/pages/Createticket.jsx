import "./Createticket.css"

import Header from "../components/Header.jsx"
import Input from "../components/Input.jsx"

import createticketIcon from "../assets/createticketIcon.svg"

const Createticket = () => {

    return (

        <>
        
            <Header/>

            <div className="container-all6">

                <h1 className="h1-createticket">Create a ticket</h1>

                <div className="container-input-createticket">

                    <h1 className="h1-input-createticket">Type and location</h1>

                    <div className="inputs1-createticket">

                        <Input placeholder="Ticket type"/>
                        <Input placeholder="00/00/0000"/>

                    </div>

                </div>

                <div className="container-input-createticket">

                    <h1 className="h1-input-createticket">Data and time</h1>
                    
                    <div className="inputs2-createticket">

                        

                        <Input placeholder="00:00"/>
                        <img src={createticketIcon}/>
                        <Input placeholder="00:00"/>

                    </div>

                </div>

                <div className="container-input-createticket">

                    <h1 className="h1-input-createticket">Event title</h1>
                    
                    <div className="inputs3-createticket">

                        <Input placeholder="Title"/>

                    </div>

                </div>

            </div>
        
        </>

    )

}

export default Createticket