import React from 'react'
import axios from 'axios'
import { baseUrl, axiosConfig } from '../Parametros'


export class RegisterPage extends React.Component {
    state = {
        inputName: '',
        inputEmail: ''
    }

    handleInputName = (event) => {
        this.setState({ inputName: event.target.value })
    }

    handleInputEmail = (event) => {
        this.setState({ inputEmail: event.target.value })
    }

    createUser = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }
        axios.post(baseUrl, body, axiosConfig)
            .then((reposta) => {
                alert("Usuário criado com sucesso")
                this.setState({ inputName: '', inputEmail: '' })
            })
            .catch((erro) => {
                alert("Erro: usuário não pode ser criado :(")
            })
    }

    render() {
        return (
            <div>
                <h2>Cadastro</h2>
                <input placeholder="Nome" value={this.state.inputName} onChange={this.handleInputName} />
                <input placeholder="E-mail" value={this.state.inputEmail} onChange={this.handleInputEmail} />
                <button onClick={this.createUser}>Cadastrar</button>
            </div>
        )
    }
}