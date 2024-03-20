import "./Contact.css"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Input from "../components/Input.jsx"
import Button from "../components/Button.jsx"

import vector from "../assets/vector.svg"
import { useState } from "react"


const Contact = () => {

    const [inputName,setInputName] = useState("")
    const [inputEmail,setInputEmail] = useState("")
    const [inputMessage,setInputMessage] = useState("")

    
    const handleSubmit = (event) => {

        event.preventDefault()
        console.log(inputName)
        console.log(inputEmail)
        console.log(inputMessage)

    }
    
    return (
        <>

        <Header/>

        <div className="container-all">

            <form onSubmit={(event) => handleSubmit(event)}>

                <div className="form-title-content">

                    <h1 className="first-form-title">
                        Got anything for us? Leave a <span>message!</span>
                    </h1>

                    <h1 className="second-form-title">
                        Or contact us via Instagram, Linkedin or Customer Support.
                    </h1>

                </div>

                <div className="container-inputs">

                    <div className="top-input">

                        <Input placeholder="Full name" onChange={(event) => setInputName(event.target.value)}/>
                        <Input placeholder="Email address" onChange={(event) => setInputEmail(event.target.value)}/>

                    </div>

                    <textarea placeholder="Your message here" onChange={(event) => setInputMessage(event.target.value)}>

                    </textarea>

                    <Button>
                        
                        Send Message
                        <img src={vector}/>
            
                    </Button>

                </div>

            </form>

            <Footer/>

        </div>
        
        </>
    )
}

export default Contact