import "./Faq.css"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

import faqIcon from "../assets/faqIcon.svg"
import faqIcon2 from "../assets/faqIcon2.svg"
import { useState } from "react"

const faq = [
    {id:1, isOpen:false, title:"What is TicketBooker?", description:"Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi."},
    {id:2, isOpen:false, title:"What kind of tickets can I buy?", description:"Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi."},
    {id:3, isOpen:false, title:"Is there a return policy", description:"Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi."},
    {id:4, isOpen:false, title:"Question #4", description:"Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi."},
    {id:5, isOpen:false, title:"Question #5", description:"Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi."},
    {id:6, isOpen:false, title:"Question #6", description:"Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi."}

]

const Faq = () => {
    
    const [questions,setQuestions] = useState(faq)
    
    const abrirQuestao = (id) => {
        
        const newQuestions = questions.map((question) => {
            if(question.id === id) {
                return {
                    ...question,
                    isOpen:!question.isOpen
                }
            } else {
                return question
            }
        }) 

        setQuestions(newQuestions)
    }
    
    return (

        <>
        
            <Header/>

            <div className="container-all3">

                <div className="container-title1">

                    <h1 className="h1-title">Frequently Asked Questions</h1>
                    <p className="phrase-title">Got another question for us? <span>Contact</span> us via email!</p>

                </div>

                <ul>

                    {questions.map((item) => (
                        <li className="li-container" key={item.id}> 
                        
                            <div className="container-li" onClick={()=>abrirQuestao(item.id)}>
                            
                                <h6> {item.title} </h6>
                                <img src={item.isOpen ? faqIcon2 : faqIcon}/>     
                        
                            </div>

                            {item.isOpen && (
                                <div className="phrase-li">
                                    {item.description}
                                </div>
                            )} 
                
                        </li>

                    )

                    )}

                    <li>What is TicketBooker? <img src={faqIcon}/> </li>
                    <li>What kind of tickets can I buy? <img src={faqIcon}/> </li>
                    <li className="li-container"> 
                        
                        <div className="container-li">
                            
                            <h6>Is there a return policy</h6>
                            <img src={faqIcon2}/>     
                        
                        </div>

                        <div className="phrase-li">
                            Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi.
                        </div>
                        
                    </li>
                    <li>Question #4 <img src={faqIcon}/></li>
                    <li>Question #5 <img src={faqIcon}/></li>
                    <li>Question #6 <img src={faqIcon}/></li>

                </ul>

                <Footer/>

            </div>

        </>

    )
}

export default Faq

