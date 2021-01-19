import React from 'react'
import './App.css';
import  CriaPlaylist  from './Components/CriaPlaylist'
import PegaPlaylists from "./Components/PegaPlaylists";
import Styled from 'styled-components'

const Header = Styled.header`
display: flex;
justify-content: space-between;
background-color: #333;
color: #EEE;
font-family: arial;
`
const IconesHeader = Styled.header`
display: flex;
justify-content: center;
align-items: center;
margin-right: 15px;
`

export default class App extends React.Component {
  state = {
    pagina: ""
  }

  renderizaCadastro = () => {
    this.setState({ page: true})
  }

  renderizaPlaylists = () => {
    this.setState({ page: false})
  }
  
  render() {
    return (
      <div className="App">
          <Header>
            <h1>Labefy</h1>
            <IconesHeader>
              <h4 onClick={this.renderizaCadastro}>Cadastrar Playlist</h4>
              <h4 onClick={this.renderizaPlaylists}>Gerenciar Playlists</h4>
              <h4>Outra funcionalidade</h4>
            </IconesHeader>
          </Header>
          {this.state.page ? <CriaPlaylist /> : <PegaPlaylists />}
          
        

      </div>
    )
  }
}

/*  */