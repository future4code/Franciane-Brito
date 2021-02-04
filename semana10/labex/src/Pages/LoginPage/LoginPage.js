//Para fazermos login como administrador

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { goToHomePage, goToListTripsPage } from "../../Routes/Coordinator";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
   /*  if (token === null) {
      history.push("/list-trips")
    } */
  }, [history])

  


  const login = () => {
    const body = {
      email: email,
      password: password
    }
    axios
      .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/franciane-brito-epps/login',
        body
      )
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        history.push("/list-trips")
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <div>
      <h1>Pagina Login</h1>
      <button onClick={() => goToHomePage(history)}>
        Voltar
      </button>

      <div>
        Formulario
        <input value={email} onChange={handleEmail} placeholder='E-mail' />
        <input  value={password} onChange={handlePassword} placeholder='Senha' /* type='password' *//>

        <button onClick={login}>
          Entrar
        </button>
      </div>
    </div>
  );
}

export default LoginPage;

/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/getTripDetail");
    }
  }, [history]);

  const login = () => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/caio-teixeira-epps/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/getTripDetail");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <input value={email} onChange={handleEmail} placeholder="E-mail" />
      <input
        value={password}
        onChange={handlePassword}
        placeholder="Senha"
        type="password"
      />
      <button onClick={login}>Login</button>
    </div>
  );
};
*/




/*
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/");
    }
  }, [history]);
};

*/