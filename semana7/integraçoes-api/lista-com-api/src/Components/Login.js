import axios from "axios";
import React from 'react';
import Styled from 'styled-components';

const Formuario = Styled.form`
border: 1px solid gray;
width: 40vw;
display: flex;
flex-direction: column;
padding: 20px;
margin: 20px;
`
const Container = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default class Login extends React.Component {
  




  render() {

    return (
      <Container>
        
        <Formuario>
          <label>Nome</label>
          <input 
        /*   value={this.state.nomeInput} */
          onchage={this.props.onChangeName}/>
       
          <label>Email</label>
          <input 
     /*      value={this.state.emailInput} */
          onchage={this.props.onChangeEmail}
          />
          
        </Formuario>
      </Container>

    );
  }
}


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