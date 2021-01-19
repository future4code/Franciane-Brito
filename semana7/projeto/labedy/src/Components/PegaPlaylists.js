import React from 'react'
import axios from 'axios'
import { baseUrl, axiosConfig } from '../Parametros'

export default class PegaPlaylists extends React.Component {
  state = {
    playlists: [],
    musicas: [],
    inputMusica: '',
    inputArtist: '',
    inputUrl: '',
    pagina: true
  }

  //INPUT ADICIONAR MUSICA
  handleInputMusica = (e) => {
    this.setState({ inputMusica: e.target.value })
  }

  handleInputArtista = (e) => {
    this.setState({ inputArtista: e.target.value })
  }

  handleInputUrl = (e) => {
    this.setState({ inputUrl: e.target.value })
  }


  adicionaMusica = (id) => {
    const body = {
      name: this.state.inputNome,
      artist: this.state.inputArtista,
      url: this.state.inputUrl
    }

    axios.post(`${baseUrl}/${id}`, body, axiosConfig)
      .then((resposta) => {
        alert("Musica adicionada")
      })
      .catch((erro) => {
        console.log(erro)
      })
  }


  componentDidMount = () => {
    this.listaNomePlaylists()
  }

  listaNomePlaylists = () => {
    axios.get(baseUrl, axiosConfig)
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list })
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  apagaPlaylist = (id) => {
    axios.delete(`${baseUrl}/${id}`, axiosConfig)
      .then((res) => {
        this.listaNomePlaylists()
      })
      .catch((erro) => {
        alert('A playlist não pode ser deletada')
      })
  }



  // DETALHES mostra MUSICAS EM UMA PLAYLIST 

  listaMusicas = (id) => {
    axios.get(`${baseUrl}/${id}`, axiosConfig)
      .then((resposta) => {
        this.setState({ musicas: resposta.data })
        console.log("Renderizou as musicas")
      })
      .catch((erro) => {
        console.log('erro', erro)
      })
  }



  // ADICIONAR MUSICAS A UMA PLAYLIST
  verDetalhes = (id) => {
    this.setState({ pagina: false })
    this.listaMusicas(id)
  }


  // DETALHES QUE MOSTRA MUSICAS EM UMA PLAYLIST
  render() {
    console.log(this.state.musicas)
    const renderizaMusicas = this.state.musicas.map((musica) => {
      return (
        <div>
          <p>{musica.nome}</p>
        </div>
      )
    })

    const renderizaPlaylist = this.state.playlists.map((playlist) => {
      return (
        <div>
          <p>
            {playlist.name}
            <button onClick={() => { this.adicionaMusica(playlist.id) }}>Adicionar Musica</button>
            <button onClick={() => { this.verDetalhes(playlist.id) }}>Detalhes</button>
            <button onClick={() => { this.apagaPlaylist(playlist.id) }}>Remover</button>
          </p>
        </div>
      )
    })
    return (
      <div>
        <h2>Suas playlists</h2>
        <input placeholder='Musica' value={this.state.inputMusica} onChange={this.handleInputMusica} />
        <input placeholder='Artista' value={this.state.inputArtista} onChange={this.handleInputArtista} />
        <input placeholder='URL' value={this.state.inputUrl} onChange={this.handleInputUrl} />
        {this.state.pagina ? <p>{renderizaPlaylist}</p> : <h2>{renderizaMusicas}</h2>}
      </div>
    )
  }

}



