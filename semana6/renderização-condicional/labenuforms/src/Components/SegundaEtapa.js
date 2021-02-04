import React from "react";

class SegundaEtapa extends React.Component {
  render() {
    return (
        <div key="Etapa 2">
        <h2>Etapa 2 - Informações do Ensino Superior</h2>
        <form>
          <label for={'curso'}>5. Qual curso?</label>
          <input name={'curso'} />

          <label for={'unidade-de-ensino'}>6. Qual unidade de ensino?</label>
          <input name={'unidade-de-ensino'} />

          <button>Próxima Etapa</button>
          </form>
      </div>
     
    );
  }
}

export default SegundaEtapa;