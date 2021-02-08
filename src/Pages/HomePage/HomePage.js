// Para o usuário escolher entre login e formulário de inscrição

import React from 'react';
import { useHistory } from "react-router-dom";
import { goToAboutPage, goToLoginPage, goToApplicationForm } from "../../Routes/Coordinator";

const HomePage = () =>  {
  const history = useHistory()

  return (
    <div>
      <h1>Page home</h1>
      <button onClick={() => goToLoginPage(history)}>
        Login
      </button>
      
      <button onClick={() => goToApplicationForm(history)}>
        Cadastro
      </button>
 
    </div>
  );
}

export default HomePage;