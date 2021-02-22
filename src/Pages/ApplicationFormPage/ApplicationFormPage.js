// Para o usuário se candidatar à viagem, página com o form de inscrição

import React from 'react';
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../../Routes/Coordinator";

function ApplicationFormPage() {
  const history = useHistory()

  return (
    <div>
      <h1>Formulário de cadastro</h1>
      <button onClick={() => goToHomePage(history)}>
        Voltar
      </button>
    </div>
  );
}

export default ApplicationFormPage;