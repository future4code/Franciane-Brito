import React from "react";

class TerceiraEtapa extends React.Component {
  render() {
    return (
        <div key="Etapa 3">
        <h2>Etapa 3 - Informações gerais de ensino</h2>
        <form>
          <label for={'curso'}>5. Por que você não terminou o curso de graduação?</label>
          <input name={'curso'} />

          <label for={'unidade-de-ensino'}>6. Você fez algum curso complementar?</label>
          <select name="curso-complementar">
            <option value="nenhum">Nenhum</option>
            <option value="curso-tecnico">Curso Técnico</option>
            <option value="curso-de-ingles">Curso de inglês</option>
          </select>
          <button>Próxima Etapa</button>
          </form>
      </div>
     
    );
  }
}

export default TerceiraEtapa;