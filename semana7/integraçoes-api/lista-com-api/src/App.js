import axios from "axios";
import React from 'react';
import Login from './Components/Login';
import Lista from './Components/Lista';

export default class App extends React.Component {
  state = {
    usuarios: [],
    nomeInput: "",
    emailInput: ""
  }

  componentDidMount = () => {

  }

//FUNÇÕES LISTA 

pegarUsuarios = () => {
  axios
  .get(
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    {
      headers: {
        Authorization: "franciane-brito-epps"
      }
    }
  )
  .then((resposta) => {
    this.setState({ usuarios: resposta.data.result.list })
  })
  .catch((erro) => {
  console.log(erro.mensage)
  })
}



//FIM FUNÇÕES LISTA

//FUNÇÕES TELA DE LOGIN
  criarUsuario = () => {
    const body = {
      name: this.state.nomeInput,
      email: this.state.emailInput
    }

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "franciane-brito-epps"
          }
        }
      )
      .then((reposta) => {
        this.setState({ nomeInput: "" })
        this.setState({ emailInput: "" })
      })
      .catch((error) => {
        console.log(error.message)
      })

  }

  onChangeInputName = (event) => {
    this.setState({ nomeInput: event.target.value })
  }

  onChangeInputEmail = (event) => {
    this.setState({ emailInput: event.target.value })
  }
  //FIM FUNÇÕES TELA DE LOGIN
  render() {

    return (
      <div className="App">
        <button>Ir para pagina de lista</button>
        <div>
          <Login
            onChangeName={this.onChangeInputName}
            onChangeEmail={this.onChangeInputEmail}
          />
          <button onClick={this.criarUsuario}>Salvar</button>
        </div>
        <Lista />
      </div>

    );
  }
}


/*
state = {
  ,
}

componentDidMount = () => {

}

todosOsUsuarios = () => {
  axios
  .get(
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    {
      headers: {
        Authorization: "franciane-brito-epps"
      }
    }
  )
  .then((resposta) => {
    this.setState({listaUsuarios: })
  })
}

*/






























/*
class App extends React.Component {
  state = {
    playlists: [],
    playlistValue: ""
  };

  componentDidMount = () => {
    this.pegarPlaylists();
  };

  pegarPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "severo-dumont"
          }
        }
      )
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.playlistValue
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "severo-dumont"
          }
        }
      )
      .then((res) => {
        this.setState({ playlistValue: "" });
        this.pegarPlaylists();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangePlaylistValue = (event) => {
    this.setState({ playlistValue: event.target.value });
  };

  render() {
    const renderedPlaylists = this.state.playlists.map((playlist) => {
      return <p key={playlist.id}>{playlist.name}</p>;
    });

    return (
      <div className="App">
        <div>
          <input
            placeholder="Nome da Playlist"
            value={this.state.playlistValue}
            onChange={this.onChangePlaylistValue}
          />
          <button onClick={this.criarPlaylist}>Criar Playlist</button>
        </div>
        {renderedPlaylists}
      </div>
    );
  }
}

 */
