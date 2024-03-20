import img1 from "../assets/img1.svg"
import img2 from "../assets/img2.jpeg"

import "./Header.css"

import { Link } from "react-router-dom"

const Header = () => {

    return (
        <header className="header-top">
          <img src={img1}/>

          <div className="header-textContent">

              <Link className="h1-header" to="/profile">
                  Home
              </Link>

              <Link className="h1-header" to="/about">
                  About
              </Link>

              <Link className="h1-header" to="/contact">
                  Contact
              </Link>

              <Link className="h1-header" to="/faq">
                  FAQ
              </Link>

          </div>

          <img src={img2} className="img2-header"/>

      </header>
    )
}

export default Header