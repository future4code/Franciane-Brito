import React from 'react'
import axios from 'axios'
import { baseUrl, axiosConfig } from '../Parametros'

export default class CriaPlaylist extends React.Component {
  state = {
    inputPlaylist: ''
  }

  handleInputPlaylist = (e) => {
    this.setState({ inputPlaylist: e.target.value })
  }

  criarPlaylist = () => {
    const body = {
      name: this.state.inputPlaylist
    }

    axios.post(baseUrl, body, axiosConfig)
      .then((resposta) => {
        alert("Playlist criada com sucesso!!")
        this.setState({ inputPlaylist: '' })
      })
      .catch((erro) => {
        console.log(erro)
        alert('Não foi possivel criar playlist :(')
      })
  }

  render() {
    console.log(this.state.inputPlaylist)
    return (
      <div>
        <h2>Crie sua nova Playlist</h2>
        <input placeholder='Nome nova playlist' value={this.state.inputPlaylist} onChange={this.handleInputPlaylist} />
        <button onClick={this.criarPlaylist}>Cadastrar</button>
      </div>
    )
  }



}


