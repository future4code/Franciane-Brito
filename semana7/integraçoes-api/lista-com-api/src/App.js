import axios from "axios";
import React from 'react';
import Login from './Components/Login';
import Lista from './Components/Lista';
import Styled from 'styled-components';

const Formulario = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const BotaoFormulario = Styled.button`
width: 20vw;
`

export default class App extends React.Component {
  state = {
    usuarios: [
    ],
    nomeInput: "",
    emailInput: "",
    telaRenderisada: ""
  }

  componentDidMount = () => {
    this.pegarUsuarios()
    
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
        this.setState({ usuarios: resposta.data })
        console.log(this.state.usuarios)
        alert('Usuario criado')
      })
      .catch((erro) => {
        console.log("Deu errooooo não foi possivel pegar usuarios", erro.mensage)
      })
  }



  //FIM FUNÇÕES LISTA

  //FUNÇÕES TELA cadastrar usuarios
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
          },
        }
      )
      .then((reposta) => {
        this.setState({ nomeInput: "" })
        this.setState({ emailInput: "" })
        this.pegarUsuarios()
        alert("Usuario criado com sucesso")
      })
      .catch((error) => {
       alert("Não foi possivel criar seu usuario")
      })
  }

  onChangeInputName = (event) => {
    this.setState({ nomeInput: event.target.value })
  }

  onChangeInputEmail = (event) => {
    this.setState({ emailInput: event.target.value })
  }
  //FIM FUNÇÕES TELA DE LOGIN


  botaoLista = () => {
    this.setState({ telaRenderisada: true })
  }

  botaoLogin = () => {
    this.setState({ telaRenderisada: false })
  }

  defineTela = () => {
    if (this.state.telaRenderisada) {
      const renderizaUsuarios = this.state.usuarios.map((usuario) => {
        return <p>{usuario.name}<button onClick={() => this.deletarUsario(usuario.id)}>x</button></p>
      })

      return (
        <div className="App">
          <button onClick={this.botaoLogin}>Ir para login</button>
          {renderizaUsuarios}
        </div>
      )
    } else {
      return (
        <div>
           <button onClick={this.botaoLista}>Ir para a lista</button>
           <Formulario>
          <Login
            onChangeName={this.onChangeInputName}
            onChangeEmail={this.onChangeInputEmail}
         
          />
          <BotaoFormulario onClick={this.criarUsuario}>Salvar</BotaoFormulario>
          </Formulario>
        </div>

      )
    }
  }
//função deletar usuario

deletarUsario = (id) => {

  axios
  .delete(
    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
    {
      headers: {
        Authorization: "franciane-brito-epps"
      },
    }
  ).then((resposta) => {
    alert("Usuario deletado")
  })
  .catch((erro) => {
    alert("Não foi possive deletar usuario")
  })

}






  render() {

    return (
      <div>
       
        {this.defineTela()}
      </div>

    );
  }
}

