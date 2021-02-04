import React from 'react'
import PegaPlaylists from "./PegaPlaylists";




export default class App extends React.Component {
    state = {
      pagina: ""
    }
  
    renderizaDetalhes = () => {
      this.setState({ pagina: false})
    }
  
    voltarPlaylists = () => {
      this.setState({ pagina: true})
    }
    
    render() {
      return (
        <div className="App">
            <Header>
              <h1>Labefy</h1>
              <div>
                <button onClick={this.renderizaDetalhes}>Cadastrar Playlist</button>
                <button onClick={this.voltarPlaylists}>Gerenciar Playlists</button>
              </div>
            </Header>
            {this.state.page ? <PegaPlaylists /> : <h2>Detalhes</h2>}
            
          
  
        </div>
      )
    }
  }



