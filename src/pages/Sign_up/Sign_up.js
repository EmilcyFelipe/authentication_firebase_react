
import React from 'react'
import app from '../../Firebase'
import './Sign_up.css'
import { Switch, useHistory } from 'react-router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Sign_up  = ()=>{
    const history = useHistory();
    const[signUpError, setSignUpError] = React.useState(null)

    function handleHaveAccount(){
        history.push('/signin')
    }
    
    async function handleSignUp(e){
        e.preventDefault();
        const auth = getAuth(app);
        const {email,password} = e.target.elements
       try{
           await createUserWithEmailAndPassword(auth,email.value,password.value);
           history.push('/signin')
           
       }catch(error){
           if(error.message ==='Firebase: Error (auth/invalid-email).'){
                setSignUpError('Tente novamente, e-mail ou senha inválido') 
           }
           else if(error.message ==='Firebase: Error (auth/email-already-in-use).'){
            setSignUpError('Já existe uma conta com esse endereço de email')
       }
           console.log(error.message)
       }
    }
    return(
        <div className="signUpContainer">
            <div className="imgElementUp">
               
            </div>
            <div className="haveAccount">
                <p>Already have a account?</p>
                <button onClick={handleHaveAccount}>Sign in</button>
            </div>
            <div className="formWrapper">
                <h2 style={{color:"white"}}>Create account</h2>
                <form className="signUp-form"  onSubmit={handleSignUp}>
                    <input name="email" className="signUpInput" type="email" placeholder="Email"/>
                    <input name="password" className="signUpInput" type="password" placeholder="Password"/>
                    <input className="signUp-button" type="submit" />
                </form>
                {signUpError && <div className="errorSign">{signUpError}</div>}
            </div>
        </div>
    )
}
export default Sign_up;