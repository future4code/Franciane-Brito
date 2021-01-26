import React, {useEffect, useState} from 'react'
import axios from "axios";
import PokeCard from "./Components/PokeCard";
import './App.css';

function App() {
  const [pokeName, setPokeName] = useState('')
  const [pokeList, setPokeList] = useState([])

 

  const handlePokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    handlePokemon()
  })


  const changePokeName = (event) => {
    setPokeName(event.target.value)
  };


    return (
      <div className="App">
       
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
}

export default App;


/* 

class App extends React.Component {
  state = {
    // lista de pokemons que está sendo guardada no estado
    pokeList: [],
    // nome do pokemon guardado no estado, assim que o usuário
    // escolhe um nome no dropdown
    pokeName: ""
  };

  // método que roda após a montagem do componente
  componentDidMount = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        this.setState({ pokeList: response.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

  changePokeName = event => {
    this.setState({ pokeName: event.target.value });
  };

  render() {
    return (
      <div className="App">
       
        <select onChange={this.changePokeName}>
          <option value={""}>Nenhum</option>
          {this.state.pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}
      </div>
    );
  }
}

export default App;
  */


  /* import React, { useState, useEffect } from 'react'
import "./styles.css";

export default function App() {
  const [password, setPassword] = useState('')
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState('Senha fraca')

  const handlePasswordInput = (event) => {
    setPassword(event.target.value)
  }

  const handleMessage = () => {
    if (score > 0 && score <= 3) {
      setMessage('Senha fraca')
    } else if (score >= 4 && score <= 6) {
      setMessage('Senha média')
    } else if (score > 6) {
      setMessage('Senha forte')
    }
  }

  useEffect(() => {
    handleMessage()
  })

  useEffect(() => {
    let newScore = 0

    if (password.length > 5) {
      newScore = newScore + 1
    }

    if (password.length > 10) {
      newScore += 2
    }

    if (/[A-Z]/.test(password)) {
      newScore += 1
    }

    if (/\d/.test(password)) {
      newScore += 1
    }

    if (
      password.includes("!") ||
      password.includes("@") ||
      password.includes("#")
    ) {
      newScore += 2
    }

    setScore(newScore)
  }, [password])

  return (
    <div className="App">
      <h1>Força de senha</h1>
      <input type="password" onChange={handlePasswordInput} value={password} />
      <p>{message}</p>
      <progress value={score} min={0} max={7} />
    </div>
  );
}
 */