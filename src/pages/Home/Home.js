import React, { useEffect, useState } from "react";
import {getAuth, onAuthStateChanged } from "firebase/auth"
import app from '../../Firebase'
import { useHistory } from "react-router";


const Home = ()=>{
    const history = useHistory();
    const auth = getAuth();
    const [cUser,setCUser] = useState(auth.currentUser);

    useEffect(()=>{
        onAuthStateChanged(auth,(user) =>{
            if(!user){
                history.push('/signin')
                
            }else{
               
                setCUser(user.email)
            }
        } 
    )
    },[auth,history])


    function logout(){
        auth.signOut();
    }

    
    return(
        <>
        <div>
            <h2>Bem vindo</h2>
            {auth.currentUser===false?<div>Verifique seu email</div>:<div>E-mail verificado</div>}
          <div>
              Olá, seja bem vindo. Você está logado
          </div>
          <div>User email: {cUser}</div>
          <button onClick={logout}>Sair</button>
        </div>
        </>         
    )
        
}     
export default Home;