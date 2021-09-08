import React from 'react'
import './Sign_in.css'
import app from '../../Firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useHistory} from 'react-router'

const Sign_in = ()=>{
    const history = useHistory();
    const[signUpError, setSignUpError] = React.useState(null);

    function handleSignUp(){
        history.push('/signup')
    }

    async function handleSignIn(e){
        e.preventDefault();
        const auth = getAuth(app);
        const {email,password} = e.target.elements
       try{
           await signInWithEmailAndPassword(auth,email.value,password.value);
           history.push('/home')
       }catch(error){
           if(error.message ==='Firebase: Error (auth/wrong-password).'){
                setSignUpError('Tente novamente, senha inválida') 
           }
           
           console.log(error.message)
       }
    }
    return(
        <div className="signInContainer">
            <div className="imgElement">
               
            </div>
            <div className="createAccount">
                <p>Don't have a account?</p>
                <button onClick={handleSignUp}>Sign up</button>
            </div>
            <div className="formWrapper">
            <h2 style={{color:"white"}}>Login Page</h2>
                <form className="signIn-form"  onSubmit={handleSignIn}>
                    <input name="email" className="signInInput" type="email" placeholder="Email"/>
                    <input name="password" className="signInInput" type="password" placeholder="Password"/>
                    <input className="signIn-button" type="submit" />
                </form>
                {signUpError && <div className="errorSign">{signUpError}</div>}
            </div>
        </div>
    );
}
export default Sign_in;