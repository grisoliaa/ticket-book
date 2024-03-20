import "./Input.css"

const Input = (props) => {

    return (

        <input placeholder={props.placeholder} className="form-top-inputs" {...props}></input>

    )

}

export default Input