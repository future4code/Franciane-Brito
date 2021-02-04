 import React from "react";
import SegundaEtapa from "./SegundaEtapa"
import TerceiraEtapa from "./TerceiraEtapa"
import Final from "./Final"


class PrimeiraEtapa extends React.Component {
  
  render() {
    return (
      <div>
        <h2>Etapa 1 - Dados Gerais</h2>

         <form>
          <label name={'nome'}>1. Qual é o seu nome?</label>
          <input name={'nome'} />

          <label name={'idade'}>2. Qual sua idade?</label>
          <input name={'idade'} />

          <label name={'email'}>3. Qual seu email?</label>
          <input name={'email'} />

          <label name={'escolaridade'}>4. Qual sua escolaridade?</label>
          <select>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior Incompleto</option>
          <option>Ensino Superior Completo</option>

          </select>
          <button>Próxima Etapa</button>
        </form> 









      </div>






     
     );
    }
  }
  
  export default PrimeiraEtapa; 
  

