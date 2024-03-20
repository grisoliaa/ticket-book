import Header from "../components/Header.jsx"
import "./Login.css"
import Input from "../components/Input.jsx"
import Button from "../components/Button.jsx"
import Footer from "../components/Footer.jsx"

const Login = () => {

    return (

        <>
        
            <Header/>

            <div className="container-all5">

                <form className="form-login">

                    <div className="title-login">

                        <h1 className="h1-login">Welcome back!</h1>
                        <p className="p-login">Don’t have an account? <span>Sign up.</span></p>

                    </div>

                    <div className="container-inputs-login">

                        <Input placeholder="Email address"/>
                        <Input placeholder="Password"/>

                    </div>

                    <div className="container-button-login">

                        <Button>

                            Log in

                        </Button>

                    </div>

                </form>

            </div>

            <Footer/>
        
        </>

    )

}

export default Login