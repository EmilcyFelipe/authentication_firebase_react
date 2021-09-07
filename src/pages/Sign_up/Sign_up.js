
import React from 'react'
import app from '../../Firebase'
import './Sign_up.css'
import { useHistory } from 'react-router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Sign_up  = ()=>{
    const history = useHistory();
    async function handleSignUp(e){
        e.preventDefault();
        const auth = getAuth(app);
        const {email,password} = e.target.elements
       try{
           await createUserWithEmailAndPassword(auth,email.value,password.value);
           history.push('/')
           
       }catch(error){
           alert(error)
       }
    }
    return(
        <div className="signUpContainer">
            <div className="imgElement">
               
            </div>
            <div className="haveAccount">
                <p>Already have a account?</p>
                <button>Sign in</button>
            </div>
            <div className="formWrapper">
                <form className="signUp-form"  onSubmit={handleSignUp}>
                    <input name="email" className="signUpInput" type="email" placeholder="Email"/>
                    <input name="password" className="signUpInput" type="password" placeholder="Password"/>
                    <input className="signUp-button" type="submit" />
                </form>
            </div>
        </div>
    )
}
export default Sign_up;