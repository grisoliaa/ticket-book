import rodape1 from "../assets/rodape1.svg"
import rodape2 from "../assets/rodape2.svg"
import rodape3 from "../assets/rodape3.svg"

import "./Footer.css"

const Footer = () => {
    return (
        <footer>

        <div className="primeiro-rodape">

            <h1 className="h1-primeiro-rodape">
                Copyright © 2022 TicketBooker. All rights reserved.
            </h1>

        </div>

        <div className="primeiro-rodape">

            <img src={rodape1}></img>
            <img src={rodape2}></img>
            <img src={rodape3}></img>

        </div>

        <div className="terceiro-rodape">

            <h1 className="h1-terceiro-rodape">
                Privacy Policy
            </h1>

            <h1 className="h1-terceiro-rodape">
                Terms of Use
            </h1>

        </div>
                
      </footer>
    )
}

export default Footer