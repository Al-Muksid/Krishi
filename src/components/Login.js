import React from 'react';
import "./Login.css";
import{ Link, useHistory } from 'react-router-dom';
import logo from './logo.png'
import { auth } from 'firebase';




function Login(){

    /*const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    
    const login = (event) => {
        event.preventDefault();
        //Login Logic


        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                
                history.push("/")   
            })

            .catch((e) => alert(e.message));

    };

    const register = (event) => {
        event.preventDefault();
        //register Logic


        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
         
            history.push("/")   
  
        })

        .catch((e) => alert(e.message));
        
    };*/





    return(
        <div className="Login">
            <Link to="/">
                <img src={logo} className="logo_login"></img>
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email"></input>
                    <h5>Password</h5>
                    <input type="password"></input>
                    <button type="submit" className="login_signinbutton">Sign In</button>
                </form>

                <p>
                By continuing, you agree to Krishi's Conditions of Use and Privacy Notice.
                </p>

                <button className="login_registerbutton">Create your Krishi Account</button>

            </div>
        </div>


    )

}
export default Login;