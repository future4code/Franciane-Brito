import React from 'react'
import axios from 'axios'
import './App.css';
import Pokemons from './Components/Pokemons'

export default class App extends React.Component {
  state = {
    pokemons: []
  }

  componentDidMount = () => {
    this.getLaunches()
  }

  getLaunches = () => {

  }

  render () {
  return (
    <div className="App">
<h1>Exposição de pokemons</h1>
  <Pokemons 
  />
    </div>
  )
  }
}





/* 
import React from "react";
import "./styles.css";
import axios from 'axios'

export default class App extends React.Component {
  state = {
    launches: []
  }

  componentDidMount = () => {
    this.getLaunches()
  }

  getLaunches = () => {
    axios.get('https://api.spacexdata.com/v4/launches/past')
    .then((res) => {
      this.setState({launches: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Lista de Lançamentos da SpaceX</h1>
        {this.state.launches.map((launch) => {
          return (
            <div key={launch.id}>
              <h2>{launch.name}</h2>
              <p>{launch.details}</p>
              <a href={launch.links.wikipedia} target="_blank">Saber mais</a>
              <hr />
            </div>
          )
        })}
      </div>
    );
  }
} */



/* import React from "react";
import "./styles.css";
import axios from 'axios'

export default class App extends React.Component {
  state = {
    pokemons: [],
    photo: ''
  }
  
  componentDidMount = () => {
    this.getPokemons()
  }

  getPokemons = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')

      this.setState({pokemons: response.data.results})
    } catch(err) {
      console.log(err)
    }
  }

  getPhoto = (event) => {
    const url = event.target.value
    axios.get(url)
    .then((res) => {
      this.setState({photo: res.data.sprites.front_default})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Pokemons</h1>
        <select onChange={this.getPhoto}>
          <option></option>
          {this.state.pokemons.map((pokemon) => {
            return (
              <option key={pokemon.url} value={pokemon.url}>{pokemon.name}</option>
            )
          })}
        </select>
        <div>
          <img src={this.state.photo} alt={"pokemon"} />
        </div>
      </div>
    );
  }
} */