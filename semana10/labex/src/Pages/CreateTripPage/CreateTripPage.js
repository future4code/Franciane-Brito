//Para criarmos uma viagem

import axios from 'axios'
import React from 'react'
import { useHistory } from "react-router-dom"
import { goToListTripsPage } from "../../Routes/Coordinator"
import { useProtectedPage } from "../../Hooks/useProtectedPage"
const CreateTripPage = () =>  {
  const history = useHistory()
  useProtectedPage()

/* 
const createTrip = () => {

  axios
  .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/franciane-brito-epps/trips")
} */
  return (
    <div>
      <button onClick={() => goToListTripsPage(history)}>
        Voltar Viagens
        </button>
        <hr />
      <input placeholder="nome"/>
      <input placeholder="planeta"/>
      <input placeholder="data"/>
      <input placeholder="descrição"/>
      <input placeholder="Duração em dias"/>
      <button>
        Criar Viagem
        </button>
    </div>
  );
}

export default CreateTripPage;

/* "name": "Ano novo em Mercúrio",
    "planet": "Mercúrio",
    "date": "31/12/2019",
    "description": "Venha passar a virada pertinho do Sol!",
    "durationInDays": 7 */