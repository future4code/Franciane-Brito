//Para o detalhe de uma viagem em específico

import React from 'react';
import { useHistory } from "react-router-dom";
import { goToListTripsPage } from "../../Routes/Coordinator";

function TripDetailsPage() {
  const history = useHistory()

  return (
    <div>
      Detalhes viagem
      <button onClick={() => goToListTripsPage(history)}>
        Voltar Viagens
      </button>
    </div>
  );
}

export default TripDetailsPage;