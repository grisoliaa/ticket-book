import vector from "../assets/vector.svg"
import "./Button.css"

const Button = (props) => {

    return (

        <button className={"button-form" + " " + props.className} onClick={props.onClick}>

            {props.children}


        </button>

    )

}

export default Button