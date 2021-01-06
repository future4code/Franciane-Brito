import React from 'react'
import styled from 'styled-components'
import './App.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
class App extends React.Component {
  state = {
    tarefas: [],

    inputValue: '',
    filtro: ''
  }

  componentDidUpdate() {

    const tarefas = {
      id: this.state.id,
      texto: this.state.texto,
      completa: this.state.completa
    };

    console.log("Tarefas", tarefas);

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  };

  componentDidMount() {
    const tarefasString = localStorage.getItem("tarefas")
    const tarefasObjeto = JSON.parse(tarefasString)

    if (tarefasObjeto) {
      this.setState({
        id: tarefasObjeto.id,
        texto: tarefasObjeto.texto,
        completa: tarefasObjeto.completa
      })
    }

  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
    this.setState({ id: event.target.value });
    this.setState({ texto: event.target.value });
    this.setState({ completa: event.target.value });
  }

  criaTarefa = () => {
    console.log("Vou criar uma tarefa", this.state.tarefas)
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const novaListaDeTarefas = [... this.state.tarefas, novaTarefa]

    this.setState({ tarefas: novaListaDeTarefas })

    this.state.inputValue = ''
  }

  selectTarefa = (id) => {
    console.log('Entrei na função select tarefa')
    const tarefasSelecionadas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        console.log('Tarefa', tarefa)
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        console.log('Tarefa', novaTarefa)
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: tarefasSelecionadas })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  apagaTodasAsTarefas = () => {
    const apagado = {
    }
    const apagarTarefas = [apagado]
    this.setState({ tarefas: apagarTarefas })
  }

  removerTarefa = (id) => {
    console.log("Removendo mensagem")

    const tarefasAtuais = this.state.tarefas
    if (window.confirm("Tem certeza que quer apagar essa tarefa?")) {

      const novaLista = tarefasAtuais.filter((tarefa) => {
        return tarefa.id !== id;

      })
      this.setState({ tarefas: novaLista });
    }
  }




  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa} >Adicionar</button>
          <button onClick={this.apagaTodasAsTarefas}>Apagar Tudo</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList >
          {listaFiltrada.map((tarefa) => {
            return (
              <p onDoubleClick={this.removerTarefa}>
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}

              </Tarefa>
              </p>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App


/*  import React from "react";

class Formulario extends React.Component {
  state = {
    nome: "",
    email: "",
    idade: ""
  };

  componentDidMount() {
    const usuarioString = localStorage.getItem("usuario");
    const usuarioObjeto = JSON.parse(usuarioString);

    if(usuarioObjeto) {
      this.setState({
        nome: usuarioObjeto.nome,
        email: usuarioObjeto.email,
        idade: usuarioObjeto.idade
      })
    }

  }

  //onChangeName
  aoMudarNome = (e) => {
    this.setState({
      nome: e.target.value
    });
  };

  //onChangeEmail
  aoMudarEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  //onChangeAge
  aoMudarIdade = (e) => {
    this.setState({
      idade: e.target.value
    });
  };

  componentDidUpdate() {
    const usuario = {
      nome: this.state.nome,
      email: this.state.email,
      idade: this.state.idade
    };

    console.log("USUÁRIO", usuario);

    localStorage.setItem("usuario", JSON.stringify(usuario));
  }

  render() {
    return (
      <div>
        <p>Nome:</p>
        <input value={this.state.nome} onChange={this.aoMudarNome} />
        <p>Email: </p>
        <input value={this.state.email} onChange={this.aoMudarEmail} />
        <p>Idade: </p>
        <input value={this.state.idade} onChange={this.aoMudarIdade} />
      </div>
    );
  }
}

export default Formulario;
*/

/* removerMensagem = (nome) => {
  console.log("Removendo mensagem")

  const mensagensAtuais = this.state.mensagens
  if(window.confirm("Tem certeza que quer apagar essa mensagem") === true){
  const novaLista = mensagensAtuais.filter((mensagem) => {
    return mensagem.nomeUsuario !== nome;

})
this.setState({ mensagens: novaLista });
}
} */
