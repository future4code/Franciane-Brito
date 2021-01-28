import React, { useState } from 'react'
import Styled from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import axios from 'axios'
const Footer = Styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 25vw;
height: 15vh;
padding: 10px;
`

const Heart = Styled.div`
background-color:  #FFF;
width: 30px;
height: 30px;
padding: 10px;
border-radius: 80px;
display: flex;
justify-content: center;
align-items: center;
border: solid 1px green;
&:hover {
    background-color:  green;  
    transform: scale(1.1)
}
`

const Eliminar = Styled.div`
background-color:  #FFF;
width: 30px;
height: 30px;
padding: 10px;
border-radius: 80px;
display: flex;
justify-content: center;
align-items: center;
border: solid 1px red;
&:hover {
    background-color:  red;  
    transform: scale(1.1)
}
`

function FooterHome(props) {
const [match, setMatch] = useState('')

const mudaMatch = (id) => {
  setMatch(true)
  escolhePessoa(id)
}

const escolhePessoa = (id) => {
  const body = {
    id: id,
    choice: match
  }

  axios.
  post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person', body)
  .then((response) => {
    console.log(response)
    alert('Deu tudo certo')
    setMatch('')
  })
  .catch((erro) => {
    console.log(erro)
  })
}

    return (
        <Footer>
            <Eliminar>
                <CloseOutlinedIcon onClick={props.teste}/>
            </Eliminar>
            <Heart onClick={() => {mudaMatch(props.id)}}>
                <FavoriteIcon onClick={props.teste}/>
            </Heart>
        </Footer>
    )
}

export default FooterHome;


/* APP JS
import React from "react";
import "./styles.css";
import { RegisterPage } from "./pages/RegisterPage";
import { UsersListPage } from "./pages/UsersListPage";

export default class App extends React.Component {
  state = {
    page: true
  };

  changePage = () => {
    this.setState({ page: !this.state.page });
  };

  render() {
    return (
      <div className="App">
        <h1>Labenusers</h1>
        {this.state.page ? <RegisterPage /> : <UsersListPage />}
        <button onClick={this.changePage}>Troca de página</button>
      </div>
    );
  }
}

*/


/*
import React from "react";
import axios from 'axios'
import { baseUrl, axiosConfig } from '../parameters'

export class UsersListPage extends React.Component {
  state = {
    users: []
  }

  componentDidMount = () => {
    this.getAllUsers()
  }

  // getAllUsers = () => {
  //   axios.get(baseUrl, axiosConfig)
  //   .then((res) => {
  //     this.setState({users: res.data})
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  // SINTAXE DO ASYNC & AWAIT
  getAllUsers = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig)
      console.log(response.data)
      this.setState({users: response.data})
    } catch(error) {
      console.log(error)
    }
  }

  deleteUser = (id) => {
    axios.delete(`${baseUrl}/${id}`, axiosConfig)
    .then((res) => {
      this.getAllUsers()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <h2>Lista de usuários</h2>
        {this.state.users.map((user) => {
          return (
            <div>
              <p>{user.name}</p>
              <button onClick={() => {this.deleteUser(user.id)}}>X</button>
            </div>
          )
        })}
      </div>
    );
  }
}

*/