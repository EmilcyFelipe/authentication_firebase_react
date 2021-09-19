import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const auth = getAuth();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setUserEmail(user.email);
      } else {
        history.push("/signin");
      }
    });
  }, [auth, history]);

  function logout() {
    auth.signOut();
  }

  return (
    <>
      <div>
        <h2>Bem vindo</h2>
        {auth.currentUser === false ? (
          <div>Verifique seu email</div>
        ) : (
          <div>E-mail verificado</div>
        )}
        <div>Olá, seja bem vindo. Você está logado</div>
        <div>
          User email: <span>{userEmail}</span>
        </div>
        <button onClick={logout}>Sair</button>
      </div>
    </>
  );
};
export default Home;
